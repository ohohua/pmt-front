import { Controller, Post, Body, UseGuards, Get, Req, Query, Put} from '@nestjs/common';
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
}
