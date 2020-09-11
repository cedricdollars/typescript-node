import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pictures } from "./Pictures";

export enum UserRoles {
  ADMIN = "admin",
  PUBLIC = "public",
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({
    type: "enum",
    enum: UserRoles,
    default: UserRoles.ADMIN,
  })
  role: UserRoles;

  @OneToMany((type) => Pictures, (picture) => picture.user)
  pictures: Pictures[];
}
