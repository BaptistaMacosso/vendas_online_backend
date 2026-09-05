import { Controller, Get, Param } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { MunicipioEntity } from './interface/municipios.entity';
import { Roles } from '../../decorators/user-roles.decorator';
import { UserType } from '../../user/enums/user-type.enum';

@Roles(UserType.User)
@Controller('municipio')
export class MunicipioController {
    constructor(private readonly municipioService: MunicipioService){}

    @Get()
    async getAllMunicipios() : Promise<MunicipioEntity[]> {
        return this.municipioService.getAllMunicipios();
    }

    @Get('/:provinciaId')
    async getMunicipiosByPronviciaId(@Param('provinciaId') provinciaId: Number) : Promise<MunicipioEntity[]> {
        return this.municipioService.getMunicipiosByPronviciaId(Number(provinciaId));
    }
}
