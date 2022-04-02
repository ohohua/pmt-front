import { Injectable } from '@nestjs/common';
import { Subject } from './subject.entity';
import { Submit } from './submit.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
    @InjectRepository(Submit)
    private readonly submitRepository: Repository<Submit>,
  ) {}

  async allSubject() {
    return this.subjectRepository.find();
  }

  async computedGrade(userId, answer) {
    // 1.先根据ans的题目id找到题目，对比答案，正确分数+1
    // 2.根据useId找submit表有没有。 有更新成绩， 没有插入成绩
    return await this.subjectRepository
      .query(`select * from subject`)
      .then((res) => {
        const gradeArr = [];
        for (const a of answer) {
          const temp = res.find((r) => {
            return a.titleId == r.id && a.ansFromUser == r.ans;
          });
          if (temp) {
            gradeArr.push(temp);
          }
        }
        const lastGrade = Math.floor(gradeArr.length / res.length);
        // 将成绩保存到submit表
        this.submitRepository
          .find({ where: { userId: userId } })
          .then((result) => {
            if (!result.length) {
              // 没找到，说明没有，新建
              let data = this.submitRepository.create({
                userId: userId,
                grade: gradeArr.length,
              });

              this.submitRepository.save(data);
            } else {
              // 找到了，更新
              this.submitRepository.update(
                { userId: userId },
                { grade: gradeArr.length },
              );
            }
          });

        switch (Math.floor(lastGrade * 10)) {
          case 10:
          case 9:
            return '心理素质极佳'; // 一个题一分
          case 8:
          case 7:
          case 6:
            return '心理素质良好';
          case 5:
          case 4:
          case 3:
          case 2:
          case 1:
          case 0:
            return '心理素质较差';
        }
      });
  }

  async loadGrade(userId) {
    return await this.submitRepository.find({where: {userId: userId}});
  }
}
