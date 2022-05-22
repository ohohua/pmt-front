import { Injectable } from '@nestjs/common';
import { Community } from './community.entity';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/login/login.entity';
import { SubComment } from './subComment.entity';

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
      const sql = this.cRepository
        .createQueryBuilder('community')
        .leftJoinAndSelect('community.subComments', 'subComment')
        .orderBy('community.createTime', 'DESC');

      return await this.cRepository
        .createQueryBuilder('community')
        .leftJoinAndSelect('community.subComments', 'subComment')
        .orderBy('community.createTime', 'DESC')
        .getMany();
    }
    if (type === 'HOT') {
      return await this.cRepository
        .createQueryBuilder('community')
        .leftJoinAndSelect('community.subComments', 'subComment')
        .orderBy('praiseQuantity', 'DESC')
        .getMany();
    }
  }

  async updateThump(dto) {
    return await this.cRepository.update(
      { id: dto.id },
      { praiseQuantity: dto.praiseQuantity },
    );
  }

  async searchCommit(nickname) {
    if (!!nickname) {
      return await this.cRepository.find({ where: { nickname: nickname } });
    } else {
      return await this.cRepository.find();
    }
  }

  async delComment(info) {
    const p = [];
    for (const i of info) {
      p.push(this.cRepository.delete({ id: i.id }));
    }
    return Promise.all(p).then(() => {
      return '删除成功！';
    });
  }

  async updateComment(info) {
    return this.cRepository.find({ where: { id: info.id } }).then((res) => {
      if (res.length === 0) {
        return '没有该评论！';
      } else {
        delete info.key;
        // delete info.password;
        // const entity = Object.assign(new User(), Community);
        this.cRepository.update({ id: info.id }, info);
        return '更改成功！';
      }
    });
  }
}
