import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEnderecoDto {
  @IsNumber()
  @IsNotEmpty({ message: 'User ID is required' })
  userId!: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Provincia ID is required' })
  provinciaId!: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Municipio ID is required' })
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
  @IsNotEmpty({ message: 'Latitude is required' })
  latitude!: number;
  
  @IsNumber()
  @IsNotEmpty({ message: 'Longitude is required' })
  longitude!: number;
}