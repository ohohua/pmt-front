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
    const data = await this.userRepository.findOne({
      where: { username: user.username, role: user.role },
    });
    return data;
  }

  async getParticularUser(user): Promise<User> {
    if (!user.sort) {
      user.sort = 'updateTime';
    }
    if (user.isNew) {
      return await this.userRepository.query(
        `SELECT id,username,role,nickname,avatar,createTime,updateTime, praiseQuantity, answerNumber, isNew FROM USER WHERE role='${user.role}' AND isNew=1 ORDER BY ${user.sort} DESC`,
      );
    }
    return await this.userRepository.query(
      `SELECT id,username,role,nickname,avatar,createTime,updateTime, praiseQuantity, answerNumber, isNew FROM USER WHERE role='${user.role}' ORDER BY ${user.sort} DESC`,
    );
  }

  async saveSymptom(disease: Disease): Promise<Disease> {
    return await this.diseaseRepository.save(disease);
  }

  async updateMessage(user: User) {
    if (!user.praiseQuantity && !user.answerNumber) {
      return '必要参数未传递';
    }
    if (user.praiseQuantity) {
      await this.userRepository.update(
        { username: user.username },
        { praiseQuantity: user.praiseQuantity },
      );
    } else if (user.answerNumber) {
      await this.userRepository.update(
        { username: user.username },
        { answerNumber: user.answerNumber },
      );
    }

    return '更新成功';
  }

  async loadAboutDocUnderPatient(doc: string): Promise<Disease> {
    return await this.userRepository.query(`
    SELECT username, name, age,sex, bloodType, phone, symptom, createTime, updateDate, doctorUsername FROM DISEASE WHERE doctorUsername='${doc}' AND response = ""`);
  }

  async loaBbyName(username: string): Promise<Disease> {
    return await this.userRepository.query(`
    SELECT username, name, age,sex, bloodType, phone, symptom, createTime, updateDate, doctorUsername FROM DISEASE WHERE username='${username}'`);
  }

  async saveResponse(user): Promise<void> {
    await this.diseaseRepository.update(
      { username: user.username },
      { response: user.response },
    );
  }

  async uploadAvatar(data): Promise<void> {
    await this.userRepository.update({ id: data.id }, { avatar: data.avatar });
  }

  async uploadUser(data): Promise<string> {
    await this.userRepository.update(
      { id: data.id },
      { username: data.username, nickname: data.nickname },
    );
    return '修改成功！';
  }

  async loadAllUser(username) {
    if (username) {
      return await this.userRepository.find({
        where: { username: `${username}` },
      });
    }
    return await this.userRepository.find();
  }

  async addUser(user) {
    return this.userRepository
      .find({ where: { username: `${user.username}` } })
      .then((res) => {
        if (res.length === 0) {
          // 解决@BeforeInsert不会触发的问题
          const entity = Object.assign(new User(), user);
          // 避免将password返回, 只有select设置了排除password字段
          this.userRepository.save(entity).then(() => {
            return this.userRepository.findOne({
              where: { username: user.username },
            });
          });
        } else {
          return '已存在！';
        }
      });
  }
  async updateUser(user) {
    return this.userRepository
      .find({ where: { username: `${user.username}` } })
      .then((res) => {
        if (res.length === 0) {
          return '没有该账户！';
        } else {
          delete user.key;
          delete user.password;
          const entity = Object.assign(new User(), user);
          this.userRepository.update({ username: `${user.username}` }, user);
          return '更改成功！';
        }
      });
  }

  async userDel(user) {
    const p = [];
    for (let i of user) {
      p.push(this.userRepository.delete({ username: `${i.username}` }));
    }
    return Promise.all(p).then((res) => {
      return '删除成功！';
    });
  }
}
