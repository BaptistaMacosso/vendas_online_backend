import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({ message: "O campo name é obrigatório e deve ser uma string." })
    name!: string;

    @IsString()
    @IsOptional()
    @IsPhoneNumber("AO")
    phone?: string;

    @IsString()
    @IsNotEmpty({ message: "O campo email é obrigatório e deve ser uma string." })
    @IsEmail()
    email!: string;

    @IsString()
    @IsNotEmpty({ message: "O campo password é obrigatório e deve ser uma string." })
    password!: string;
    
    @IsNumber()
    @IsNotEmpty({ message: "O campo typeUser é obrigatório e deve ser um número." })
    typeUser!: number;
}