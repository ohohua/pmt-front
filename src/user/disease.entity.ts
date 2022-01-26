import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export type Sex = "男" | "女";
type Blood = "A型" | "B型" | "O型" |  "AB型" | "不详";

@Entity('disease')
export class Disease {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ default: () => null }) 
  username: string;

  @Column({ default: () => null })
  name: string;

  @Column({ default: () => 0 })
  age: number;

  @Column({
    type: "enum",
    enum: [ "男", "女", "未知" ],
    default: "未知",
  })
  sex: Sex;

  @Column({
    type: "enum",
    enum: [ "A型", "B型","O型", "AB型", "不详" ],
    default: "不详",
  })
  bloodType: Blood;

  @Column({ default: () => null })
  phone: string;

  @Column('text', { default: () => null })
  symptom: string;

  @CreateDateColumn({})
  createTime: Date;

  @UpdateDateColumn({})
  updateDate: Date;
}