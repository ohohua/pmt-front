import { Injectable } from '@nestjs/common';
import { User } from '../login/login.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUser(user: Partial<User>): Promise<User> {
    // return true;
    return await this.userRepository.findOne({
      where: { username: user.username },
    });
  }
}
