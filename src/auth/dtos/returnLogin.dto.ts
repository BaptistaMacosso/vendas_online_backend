import { ReturnUserDto } from "../../user/dtos/returnUser.dto";

export class ReturnLoginDto{
    acessToken!: string;
    user!: ReturnUserDto;
}