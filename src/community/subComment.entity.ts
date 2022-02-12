import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Community } from './community.entity';

// 子评论表
@Entity('SubComment')
export class SubComment {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  userId: string; // 用户id

  @Column({ length: 100, default: () => null })
  content: string; // 评论

  @ManyToOne(() => Community, (community) => community.subComments)
  community: Community;
}
