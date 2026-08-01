import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEnderecoDto {
  @IsString()
  @IsNotEmpty()
  provinciaId!: number;

  @IsString()
  @IsNotEmpty()
  municipioId!: number;

  @IsString()
  @IsOptional()
  comuna?: string;

  @IsString()
  @IsOptional()
  bairro?: string;

  @IsString()
  @IsOptional()
  rua?: string;

  @IsString()
  @IsOptional()
  numero?: string;

  @IsString()
  @IsOptional()
  referencia?: string;

  @IsString()
  @IsOptional()
  codigoPostal?: string;

  @IsNumber()
  @IsNotEmpty()
  latitude!: number;
  
  @IsNumber()
  @IsNotEmpty()
  longitude!: number;
}