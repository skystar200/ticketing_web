import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  seq: number;

  @Column({ nullable: false })
  userName: string;

  @PrimaryColumn({ nullable: false })
  userId: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  email : string;

  @Column({ type: 'int', nullable: false })
  phone: number;


}