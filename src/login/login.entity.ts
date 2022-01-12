import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('login')
export class superUser {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  @Column({ length: 50 })
  account: string;

  @Column({ length: 20 })
  password: string;

}
