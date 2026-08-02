import { UserEntity } from "./interface/user.entity";

export class ReturnUserDto {
  userId!: number;
  name!: string;
  phone?: string;
  email!: string;

  constructor(user: UserEntity) {
    this.userId = user.userId;
    this.name = user.name;
    this.phone = user.phone;
    this.email = user.email;
  }
}