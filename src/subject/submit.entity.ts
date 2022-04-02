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
  @Column({ default: () => '' })
  userId: string;

  // 分数
  @Column({ default: () => 0 })
  grade: number;

  @CreateDateColumn({})
  createTime: Date;

  @UpdateDateColumn({})
  updateTime: Date;
}
