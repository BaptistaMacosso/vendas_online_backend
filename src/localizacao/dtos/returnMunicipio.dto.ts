import { MunicipioEntity } from "../interface/municipios.entity";

export class ReturnMunicipioDto {
    nomeMunicipio!: string;
    
    constructor(municipio: MunicipioEntity) {
        this.nomeMunicipio = municipio.nomeMunicipio;
    }
}