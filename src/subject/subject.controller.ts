import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Req,
  Query,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('题目')
@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @ApiOperation({ summary: '获取心理测试成绩' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('loadGrade')
  async loadGrade(@Req() req) {
    console.log(req.user);

    return this.subjectService.loadGrade(req.user.id);
  }

  @ApiOperation({ summary: '获取题目' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async updateThump(@Body() dto) {
    return this.subjectService.allSubject();
  }

  @ApiOperation({ summary: '提交答案' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async submitAns(@Req() req, @Body() ans) {
    // req { user }
    /*
      user: {
          id: 'e068d36e-cc4c-4290-8e53-54f542e3f72d',
          username: 'lirui',
          role: 'patient',
          iat: 1648656877
          }
    */
    // ans
    /*
    [
      { titleId: '1', ansFromUser: 'A' },
      { titleId: '2', ansFromUser: 'C' }
    ]
    */
    return this.subjectService.computedGrade(req.user.id, ans);
  }

  @ApiOperation({ summary: '加载所有题目' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('loadAllSubject')
  async loadAllSubject(@Req() req, @Query() { title }) {
    if (req.user.role !== 'root') {
      return '没有权限！';
    }
    return this.subjectService.loadAllSubject(title);
  }

  @ApiOperation({ summary: '删除题目' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('delSubject')
  async delSubject(@Req() req, @Body() info) {
    if (req.user.role !== 'root') {
      return '没有权限！';
    }

    return this.subjectService.delSubject(info);
  }

  @ApiOperation({ summary: '添加题目' })
  @UseGuards(AuthGuard('jwt'))
  @Post('addSubject')
  async subject(@Body() sub, @Req() req) {
    if (req.user.role !== 'root') {
      return '没有权限！';
    }
    return this.subjectService.addSubject(sub);
  }

  /**
   * 更改题目信息
   * @param param0 题目信息
   * @param req token分析
   * @returns promise
   */
  @ApiOperation({ summary: '修改题目信息' })
  @UseGuards(AuthGuard('jwt'))
  @Post('updateSubject')
  async updateSubject(@Body() subject, @Req() req) {
    if (req.user.role !== 'root') {
      return '没有权限！';
    }
    return this.subjectService.updateSubject(subject);
  }
}
