import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../user/dtos/interface/user.entity';
import { LoginDto } from './dtos/login.dto';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
import { ReturnLoginDto } from './dtos/returnLogin.dto';
import { ReturnUserDto } from '../user/dtos/returnUser.dto';
import { LoginPayloadDto } from './dtos/loginPayload.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}
    
    async login(loginDto: LoginDto) : Promise<ReturnLoginDto> {

        const user: UserEntity | undefined = await this.userService.findUserByEmail(loginDto.email).catch(() => undefined);

        if(!user){
            throw new NotFoundException(`Email or password invalid.`);
        }

        const isPasswordValid = await compare(loginDto.password, user.password);

        if(!isPasswordValid){
            throw new NotFoundException(`Email or password invalid.`);
        }

        return {
            acessToken: this.jwtService.sign({...new LoginPayloadDto(user)}),
            user: new ReturnUserDto(user)
        };
    }
}
