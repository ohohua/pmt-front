import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { User } from './login.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('注册')
@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @ApiOperation({ summary: '用户注册' })
  @ApiResponse({ status: 201, type: [User] })
  @Post('register')
  async createLogin(@Body() dto: User): Promise<any> {
    return this.loginService.register(dto);
  }
}
