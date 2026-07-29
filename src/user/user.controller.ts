import { Body, Controller, Get, Post } from '@nestjs/common';
import type { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './dtos/interface/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async create(@Body() createUser: CreateUserDto) : Promise<UserEntity> {
        return this.userService.createUser(createUser);
    }

    @Get()
    async getAllUser() : Promise<UserEntity[]>{
        return this.userService.getAllUser();
    }
}
