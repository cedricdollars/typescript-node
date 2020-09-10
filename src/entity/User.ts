import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
