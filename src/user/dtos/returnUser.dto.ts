import { UserEntity } from "./interface/user.entity";

export class ReturnUserDto {
  id!: number;
  name!: string;
  phone?: string;
  email!: string;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.name = user.name;
    this.phone = user.phone;
    this.email = user.email;
  }
}