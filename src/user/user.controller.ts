import { Controller, Post, Req, Get, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../login/login.entity';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('用户信息')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '获取用户信息' })
  @ApiBearerAuth() // swagger文档设置token
  @UseGuards(AuthGuard('jwt')) // 添加jwt认证守卫：
  @Get()
  async getUserInfo(@Body() user: User, @Req() req) {
    // return req.user;
    return this.userService.getUser(req.user);
  }
}
