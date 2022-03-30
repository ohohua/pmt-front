import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('题目')
@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

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
}
