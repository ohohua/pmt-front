import { Injectable } from '@nestjs/common';
import { Community } from './community.entity';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/login/login.entity';
import { SubComment } from './subComment.entity';
import { Console } from 'console';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Community)
    private readonly cRepository: Repository<Community>,
    @InjectRepository(SubComment)
    private readonly subRepository: Repository<SubComment>,
  ) {}

  async createCommunity(data: Object) {
    return await this.cRepository.save(data);
  }

  async createSub(data) {
    // return await this.subRepository.query(`INSERT INTO subcomment values(${data.content, data.userId, data.community})`);
    return await this.subRepository.save(data);
  }

  async loadCommunity(type) {
    if (type === 'NEW') {
      return await this.cRepository
        .createQueryBuilder('community')
        .leftJoinAndSelect('community.subComments', 'subComment')
        .orderBy('createTime', 'DESC')
        .getMany();
    }
    if(type === 'HOT') {
      return await this.cRepository
      .createQueryBuilder('community')
      .leftJoinAndSelect('community.subComments', 'subComment')
      .orderBy('praiseQuantity', 'DESC')
      .getMany();
    }
  }
}
