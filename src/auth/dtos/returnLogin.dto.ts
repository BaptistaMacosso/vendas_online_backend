import { ReturnUserDto } from "src/user/dtos/returnUser.dto";

export class ReturnLoginDto{
    acessToken!: string;
    user!: ReturnUserDto;
}