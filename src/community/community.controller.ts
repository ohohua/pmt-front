import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Req,
  Query,
  Put,
} from '@nestjs/common';
import { CommunityService } from './community.service';
// import { Community } from './community.entity';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { query } from 'express';

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
      nickname: dto.nickname,
      avatar: dto.avatar,
      praiseQuantity: dto.praiseQuantity,
    };
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
      nickname: dto.nickname,
      avatar: dto.avatar,
      community: dto.community,
    };
    return this.communityService.createSub(data);
  }

  @ApiOperation({ summary: '按照最新 | 最热加载评论信息' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async loadCommunity(@Query() type) {
    return this.communityService.loadCommunity(type.type);
  }

  @ApiOperation({ summary: '更新点赞信息' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Put()
  async updateThump(@Body() dto) {
    return this.communityService.updateThump(dto);
  }

  @ApiOperation({ summary: '根据昵称搜索评论' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('search')
  async searchCommit(@Req() req, @Query() { nickname }) {
    if (req.user.role !== 'root') {
      return '没有权限！';
    }
    return this.communityService.searchCommit(nickname);
  }

  @ApiOperation({ summary: '删除评论信息' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('del')
  async delComment(@Req() req, @Body() info) {
    if (req.user.role !== 'root') {
      return '没有权限！';
    }

    return this.communityService.delComment(info);
  }

  @ApiOperation({ summary: '更新评论信息' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('update')
  async updateComment(@Req() req, @Body() info) {
    if (req.user.role !== 'root') {
      return '没有权限！';
    }
    console.log(info);

    return this.communityService.updateComment(info);
  }
}
