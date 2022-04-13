import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('subject')
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { default: () => null })
  title: string;

  @Column('text', { default: () => null })
  A: string;

  @Column('text', { default: () => null })
  B: string;

  @Column('text', { default: () => null })
  C: string;

  @Column('text', { default: () => null })
  D: string;

  @Column('text', { default: () => null })
  res: string;

  @Column('simple-enum', { enum: ['A', 'B', 'C', 'D'], select: false })
  ans: string; // 答案, 直接find会隐藏，使用addSelect可以查此列

  @CreateDateColumn({})
  createTime: Date;

  @UpdateDateColumn({})
  updateTime: Date;
}
