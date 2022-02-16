import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { SubComment } from './subComment.entity';

@Entity('community')
export class Community {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  userId: string; // 用户id

  @Column('text', { default: () => null })
  content: string; // 评论

  @Column({ length: 100, default: () => null })
  nickname: string; //昵称
  
  @Column({length: 100, default: () => null})
  avatar: string; 

  @Column({ default: () => 0 })
  praiseQuantity: number; // 点赞数量

  @CreateDateColumn({})
  createTime: Date;

  @UpdateDateColumn({})
  updateTime: Date;

  @OneToMany( () => SubComment, subComment => subComment.community)
  subComments: SubComment[];
}


