import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Login {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  account: string;

  @Column({ length: 20 })
  password: string;
}
