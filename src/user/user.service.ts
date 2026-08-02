import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from './dtos/interface/user.entity';
import { CreateUserDto } from './dtos/createUser.dto';
import * as bcrypt from "bcrypt";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    async createUser(createUserDto: CreateUserDto) : Promise<UserEntity>{

        const saltOrRounds = 10;
        const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);

        const userExists = await this.userRepository.findOne({
            where: { email: createUserDto.email }
        });

        if (userExists) {
            throw new BadRequestException(`User with email ${createUserDto.email} already exists.`);
        }

        const phoneExists = await this.userRepository.findOne({
            where: { phone: createUserDto.phone }
        });

        if (phoneExists) {
            throw new BadRequestException(`User with phone number ${createUserDto.phone} already exists.`);
        }

        return this.userRepository.save({
            ...createUserDto,
            password: hash
        });
    }

    async getAllUser() : Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    async findUserById(id: number) : Promise<UserEntity | null> {
        return this.userRepository.findOne({
            where: {
                userId: id
            }
        });
    }

    async updateUser(id: number, updateUserDto: Partial<CreateUserDto>) : Promise<UserEntity> {
        const user = await this.findUserById(id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found.`);
        }

        const updatedUser = { ...user, ...updateUserDto };
        return this.userRepository.save(updatedUser);
    }
}
