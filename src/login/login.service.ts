import { HttpException, Injectable } from '@nestjs/common';
import { User } from './login.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(user: User): Promise<User> {
    const { username, password } = user;
    if (!username || !password) {
      throw new HttpException('用户名和密码不能为空', 401);
    }

    const doc = await this.userRepository.findOne({ where: { username } });
    if (doc) {
      throw new HttpException('账号已存在！', 401);
    }

    // 避免将password返回
    await this.userRepository.save(user);
    return await this.userRepository.findOne({ where: { username } });
  }

  async checkLogin(user: User): Promise<any> {
    return this.userRepository
      .find({
        where: {
          account: user.role,
          password: user.password,
        },
      })
      .then((res) => {
        console.log(res);
      });
  }
}
