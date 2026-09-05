import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateProvinciaDto {
    @IsString()
    @IsOptional()
    codigo!: string;
    
    @IsString()
    @IsNotEmpty()
    nome!: string;
}