import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
// import { Exclude } from 'class-transformer';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 20 })
  username: string; // 用户名

  // @Column({ length: 20, default: () => null })
  // nickname: string; //昵称

  @Column('simple-enum', { enum: ['root', 'doctor', 'patient'] })
  role: string; // 用户角色

  @Column({ length: 20, select: false })
  password: string;

  @CreateDateColumn({})
  createTime: Date;

  @UpdateDateColumn({})
  updateTime: Date;

  @BeforeInsert()
  async encryptPwd() {
    // this.password = await bcrypt.hashSync(this.password);
  }
}
