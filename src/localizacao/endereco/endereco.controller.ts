import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { Roles } from '../../decorators/user-roles.decorator';
import { UserType } from '../../user/enums/user-type.enum';
import { CreateEnderecoDto } from './dtos/createEndereco.dto';
import { UserId } from '../../decorators/user-id.decorator';
import { ReturnEnderecoCriadoDto } from './dtos/returnEnderecoCriado.dto';
import { ReturnEnderecoDto } from './dtos/returnEndereco.dto';
import { EnderecoService } from './endereco.service';

@Roles(UserType.User)
@Controller('endereco')
export class EnderecoController {
    constructor(private readonly enderecoService: EnderecoService){}
    
        @Get()
        async getAllEnderecos() : Promise<ReturnEnderecoDto[]> {
            return (await this.enderecoService.getAllEnderecos()).map(endereco => new ReturnEnderecoDto(endereco));
        }
    
        @Post('/endereco/create')
        async createEndereco(@Body(new ValidationPipe()) endereco: CreateEnderecoDto, @UserId() userId: number) : Promise<ReturnEnderecoCriadoDto> {
            const enderecoCreate = {...endereco, userId:Number(userId)};
            const createdEndereco = await this.enderecoService.createEndereco(enderecoCreate);
            return new ReturnEnderecoCriadoDto(createdEndereco);
        }
}
