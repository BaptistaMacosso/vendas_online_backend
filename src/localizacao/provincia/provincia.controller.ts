import { Controller, Get } from '@nestjs/common';
import { Roles } from '../../decorators/user-roles.decorator';
import { UserType } from '../../user/enums/user-type.enum';
import { ProvinciaService } from './provincia.service';
import { ProvinciaEntity } from './interface/provincias.entity';

@Roles(UserType.User)
@Controller('provincia')
export class ProvinciaController {
    constructor(private readonly provinciaService: ProvinciaService) {}

    @Get()
    async getAllProvincias() : Promise<ProvinciaEntity[]> {
        return this.provinciaService.getAllProvincias();
    }
}
