import { UserEntity } from "../../user/dtos/interface/user.entity";

export class LoginPayloadDto{
    sub!: number;
    type!: number;

    constructor(user: UserEntity){
        this.sub = user.userId;
        this.type = user.typeUser;
    }
}