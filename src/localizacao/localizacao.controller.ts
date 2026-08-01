import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { LocalizacaoService } from './localizacao.service';
import { ProvinciaEntity } from './interface/provincias.entity';
import { MunicipioEntity } from './interface/municipios.entity';
import { EnderecoEntity } from './interface/enderecos.entity';

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
    async getAllEnderecos() : Promise<EnderecoEntity[]> {
        return this.localizacaoService.getAllEnderecos();
    }

    @Post('/enderecos/:userId')
    async createEndereco(@Body(new ValidationPipe()) endereco: EnderecoEntity, @Param('userId') userId: number,) : Promise<EnderecoEntity> {
        return this.localizacaoService.createEndereco(endereco, userId);
    }
}
