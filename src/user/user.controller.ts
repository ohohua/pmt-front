import {
  Controller,
  Put,
  Req,
  Get,
  Post,
  Body,
  UseGuards,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../login/login.entity';
import { Disease } from './disease.entity';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

const multer = require('multer');
const fs = require('fs');
const fsExtra = require('fs-extra');
const fileRootPath = './public';

@ApiTags('用户信息')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '根据token解析某个用户信息' })
  @ApiBearerAuth() // swagger文档设置token
  @UseGuards(AuthGuard('jwt')) // 添加jwt认证守卫：
  @Get()
  async getUserInfo(@Req() req) {
    // console.log(await this.userService.getUser(req.user))
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
    return this.userService.getParticularUser(user);
  }

  /**
   * 保存病例信息
   * @param disease Object
   */
  @ApiOperation({ summary: '保存病例信息' })
  @UseGuards(AuthGuard('jwt'))
  @Post('save-symptom')
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
  @Put('updateDetail')
  async updateMessage(@Body() user: User) {
    return this.userService.updateMessage(user);
  }

  @ApiOperation({ summary: '医生去获取名下的病人' })
  @UseGuards(AuthGuard('jwt'))
  @Get('underDoc')
  async loadAboutDocUnderPatient(@Req() req) {
    if (req.user.role !== 'doctor') {
      return '该用户不是医生';
    }
    const doc = req.user.username;
    return this.userService.loadAboutDocUnderPatient(doc);
  }
  /**
   * 获取病例信息
   * @param param0 
   * @returns 
   */
  @ApiOperation({ summary: '通过病人username获取病例信息' })
  @UseGuards(AuthGuard('jwt'))
  @Get('loadByName')
  async loaBbyName(@Query() { username }) {
    return this.userService.loaBbyName(username);
  }
  /**
   * 保存上传的头像
   * @param file 上传的图片信息
   * @param req 解析token中的个人信息
   * @returns null
   */
  @ApiOperation({ summary: '上传头像' })
  @UseGuards(AuthGuard('jwt'))
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: multer.diskStorage({
        destination: async (req, file, cb) => {
          const path = `${fileRootPath}/user`;
          // ensureDir 确保目录的存在。如果目录结构不存在,就创建一个
          await fsExtra.ensureDir(path);
          if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
          }
          cb(null, path);
        },
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  uploadAvatar(@UploadedFile() file: Express.Multer.File, @Req() req) {
    const { path } = file;
    const data = {
      id: req.user.id,
      avatar: `http://localhost:9088/user/${path.split('\\')[2]}`
    }
    return this.userService.uploadAvatar(data);
  }

  /**
   * 修改用户信息
   * @param user 新用户信息
   */
  @ApiOperation({ summary: '修改用户信息' })
  @UseGuards(AuthGuard('jwt'))
  @Put('updateUser')
  async uploadUser(@Body() user, @Req() req) {
    const data = {
      id: req.user.id,
      username: user.username,
      nickname: user.nickname
    }
    return this.userService.uploadUser(data);
  }
}
