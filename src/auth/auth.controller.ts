import {
  Controller,
  Post,
  Body,
  Req,
  Get,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { User } from '../login/login.entity';
import { AuthService } from './auth.service';

@ApiTags('验证')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ summary: '用户登录' })
  @Post('login')
  async login(@Body() user: User, @Req() req) {
    // return Object.assign(req.user, await this.authService.login(req.user));
    return await this.authService.login(req.user);
  }

  // 这是一个例子
  @ApiOperation({ summary: '获取用户信息' })
  @ApiBearerAuth() // swagger文档设置token
  @UseGuards(AuthGuard('jwt')) // 添加jwt认证守卫：
  @Get()
  getUserInfo(@Req() req) {
    return req.user;
  }
}
