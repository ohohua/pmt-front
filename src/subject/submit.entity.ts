// 保存用户提交的答案实体
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('submit')
export class Submit {
  @PrimaryGeneratedColumn()
  id: number;

  // 用户id
  @Column({ length: 100 })
  title: string;

  // 题目
  @Column('text', { default: () => null })
  userId: string;

  // 用户提交的答案
  @Column('simple-enum', { enum: ['A', 'B', 'C', 'D'] })
  ansFromUser: string;

  @CreateDateColumn({})
  createTime: Date;

  @UpdateDateColumn({})
  updateTime: Date;
}
