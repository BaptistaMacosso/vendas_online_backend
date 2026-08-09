import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { LocalizacaoService } from './localizacao.service';
import { ProvinciaEntity } from './interface/provincias.entity';
import { MunicipioEntity } from './interface/municipios.entity';
import { CreateEnderecoDto } from './dtos/createEndereco.dto';
import { ReturnEnderecoDto } from './dtos/returnEndereco.dto';
import { ReturnEnderecoCriadoDto } from './dtos/returnEnderecoCriado.dto';
import { Roles } from '../decorators/user-roles.decorator';
import { UserType } from '../user/enums/user-type.enum';
import { UserId } from '../decorators/user-id.decorator';

@Roles(UserType.User)
@Controller('localizacao')
export class LocalizacaoController {
    constructor(private readonly localizacaoService: LocalizacaoService){}

    @Get('/provincias')
    async getAllProvincias() : Promise<ProvinciaEntity[]> {
        return this.localizacaoService.getAllProvincias();
    }

    @Get('/municipios')
    async getAllMunicipios() : Promise<MunicipioEntity[]> {
        return this.localizacaoService.getAllMunicipios();
    }

    @Get('/municipios/:provinciaId')
    async getMunicipiosByPronviciaId(@Param('provinciaId') provinciaId: Number) : Promise<MunicipioEntity[]> {
        return this.localizacaoService.getMunicipiosByPronviciaId(Number(provinciaId));
    }

    @Get('/enderecos')
    async getAllEnderecos() : Promise<ReturnEnderecoDto[]> {
        return (await this.localizacaoService.getAllEnderecos()).map(endereco => new ReturnEnderecoDto(endereco));
    }

    @Post('/enderecos/create')
    async createEndereco(@Body(new ValidationPipe()) endereco: CreateEnderecoDto, @UserId() userId: number) : Promise<ReturnEnderecoCriadoDto> {
        const enderecoCreate = {...endereco, userId:Number(userId)};
        const createdEndereco = await this.localizacaoService.createEndereco(enderecoCreate);
        return new ReturnEnderecoCriadoDto(createdEndereco);
    }
}
