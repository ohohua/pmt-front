import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../login/login.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  // 生成token
  createToken(user: Partial<User>) {
    return this.jwtService.sign(user);
  }

  async login(user: Partial<User>) {
    const token = this.createToken({
      id: user.id,
      username: user.username,
      role: user.role,
    });

    return { token };
  }

  async getUser(user: Partial<User>) {
    console.log(user);

    return true;
  }
}
