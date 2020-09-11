import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Pictures {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @ManyToOne((type) => User, (user) => user.pictures)
  user: User;
}
