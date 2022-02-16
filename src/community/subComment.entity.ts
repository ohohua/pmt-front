import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Community } from './community.entity';

// 子评论表
@Entity('subComment')
export class SubComment {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  userId: string; // 用户id

  @Column('text' ,{ default: () => null })
  content: string; // 评论

  @Column({ length: 100, default: () => null })
  nickname: string; //昵称
  
  @Column({length: 100, default: () => null})
  avatar: string; 
  
  @ManyToOne(() => Community, community => community.subComments)
  community: Community;
}
