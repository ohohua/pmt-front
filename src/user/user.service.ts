import { Injectable } from '@nestjs/common';
import { User } from '../login/login.entity';
import { Repository } from 'typeorm';
import { Disease } from './disease.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Disease)
    private readonly diseaseRepository: Repository<Disease>,
  ) {}

  async getUser(user: Partial<User>): Promise<User> {
    // return true;
    return await this.userRepository.findOne({
      where: { username: user.username, role: user.role },
    });
  }

  async getParticularUser(role: string): Promise<User> {
    return await this.userRepository.query(
      `SELECT id,username,role,nickname,createTime,updateTime,praiseQuantity, answerNumber, isNew FROM USER WHERE role='${role}'`,
    );
  }

  async saveSymptom(disease: Disease): Promise<Disease> {
    return await this.diseaseRepository.save(disease);
  }

  async updateMessage(user: User) {
    if(!user.praiseQuantity && !user.answerNumber) {
      return '必要参数未传递';
    }
    if(user.praiseQuantity) {
      await this.userRepository.update({username: user.username}, {praiseQuantity: user.praiseQuantity});
    } else if(user.answerNumber) {
      await this.userRepository.update({username: user.username}, {answerNumber: user.answerNumber});
    }
    
    
    return '更新成功';
  }
}
