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
      throw new HttpException('用户名或密码不能为空', 401);
    }

    const doc = await this.userRepository.findOne({ where: { username } });
    if (doc) {
      throw new HttpException('账号已存在！', 401);
    }
    // 解决@BeforeInsert不会触发的问题
    const entity = Object.assign(new User(), user);
    // 避免将password返回, 只有select设置了排除password字段
    await this.userRepository.save(entity);
    return await this.userRepository.findOne({ where: { username } });
  }
}
