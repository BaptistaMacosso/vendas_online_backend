import { IsNotEmpty, IsString } from "class-validator";

export class CreateMunicipioDto {
    @IsString()
    @IsNotEmpty()
    provincia_id!: number;

    @IsString()
    @IsNotEmpty()
    nome!: string;
}