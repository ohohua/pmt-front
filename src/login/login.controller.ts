import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { User } from './login.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @ApiOperation({ summary: '注册用户' })
  @ApiResponse({ status: 201, type: [User] })
  @Post('register')
  async createLogin(@Body() dto: User): Promise<any> {
    return this.loginService.register(dto);
  }

  @ApiOperation({ summary: '用户登录' })
  @ApiResponse({ status: 201, type: [User] })
  @Post('login')
  async checkLogin(@Body() dto: User): Promise<any> {
    return this.loginService.checkLogin(dto);
  }
}
