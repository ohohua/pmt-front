import { Controller, Put, Req, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../login/login.entity';
import { Disease } from './disease.entity';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('用户信息')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '根据token解析某个用户信息' })
  @ApiBearerAuth() // swagger文档设置token
  @UseGuards(AuthGuard('jwt')) // 添加jwt认证守卫：
  @Get()
  async getUserInfo(@Body() user: User, @Req() req) {
    // return req.user;
    return this.userService.getUser(req.user);
  }

  /**
   * 根据用户类型返回所有的该类型的数据
   * @param role root | patient | doctor
   * @param req
   * @returns
   */
  @ApiOperation({ summary: '获取特定角色用户信息' })
  @UseGuards(AuthGuard('jwt'))
  @Post('role')
  async getParticularUserInfo(@Body() user: User, @Req() req) {
    return this.userService.getParticularUser(user.role);
  }

  /**
   * 保存病例信息
   * @param disease Object
   */
  @ApiOperation({ summary: '保存病例信息' })
  @UseGuards(AuthGuard('jwt'))
  @Post("save-symptom")
  async saveSymptom(@Body() disease: Disease) {
    return this.userService.saveSymptom(disease);
  }
  /**
   * 更新点赞量，回答人数
   * @param user {username必传}
   * @param req 
   * @returns 
   */
  @ApiOperation({ summary: '更新点赞量，回答人数' })
  @UseGuards(AuthGuard('jwt'))
  @Put("update")
  async updateMessage(@Body() user: User) {
    return this.userService.updateMessage(user);
  }
}
