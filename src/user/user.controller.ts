import { Body, Controller, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import type { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './dtos/interface/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('create')
    async create(@Body(new ValidationPipe()) createUser: CreateUserDto) : Promise<ReturnUserDto> {
        return new ReturnUserDto(await this.userService.createUser(createUser));
    }

    @Put('update/:id')
    async updateUser(@Body(new ValidationPipe()) updateUserDto: Partial<CreateUserDto>, @Param('id') id: number): Promise<ReturnUserDto> {
        const updatedUser = await this.userService.updateUser(id, updateUserDto);
        return new ReturnUserDto(updatedUser);
    }

    //*
    // Vai retornar todos os usuários cadastrados no sistema, mas não vai retornar a senha do usuário,
    // apenas o id, nome, telefone e email.
    // Deixando de retornar os dados sensíveis do usuário, como a senha, para garantir a segurança e 
    // privacidade dos usuários cadastrados no sistema. 
    // Por isso, é utilizado o DTO #ReturnUserDto#, que é responsável por retornar apenas os dados necessários do usuário, 
    // sem expor informações sensíveis.
    // */
    @Get()
    async getAllUser() : Promise<ReturnUserDto[]> {
        return (await this.userService.getAllUser()).map((user: UserEntity) => new ReturnUserDto(user),);
    }
}
