import { Controller, Post, Body, UseGuards, Get, Req, Query } from '@nestjs/common';
import { CommunityService } from './community.service';
// import { Community } from './community.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('评论')
@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @ApiOperation({ summary: '保存评论信息' })
  @ApiBearerAuth() 
  @UseGuards(AuthGuard('jwt'))
  @Post('save')
  async createCommunity(@Body() dto, @Req() req) {
    const data = {
      userId: req.user.id,
      content: dto.content,
      praiseQuantity: dto.praiseQuantity
    }
    console.log(data);
    return this.communityService.createCommunity(data);
  }

  @ApiOperation({ summary: '保存子评论' })
  @ApiBearerAuth() 
  @UseGuards(AuthGuard('jwt'))
  @Post('subSave')
  async createSub(@Body() dto, @Req() req) {
    const data = {
      userId: req.user.id,
      content: dto.content,
      community: dto.community
    }
    console.log(data)
    return this.communityService.createSub(data);
  }

  @ApiOperation({ summary: '按照最新 | 最热加载评论信息' })
  @ApiBearerAuth() 
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async loadCommunity(@Query() type) {
    return this.communityService.loadCommunity(type.type);
  }
}
