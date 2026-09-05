import { ReturnMunicipioDto } from "../../../localizacao/municipio/dtos/returnMunicipio.dto";
import { ReturnProvinciaDto } from "../../../localizacao/provincia/dtos/returnProvincia.dto";
import { ReturnUserDto } from "../../../user/dtos/returnUser.dto";
import { EnderecoEntity } from "../interface/enderecos.entity";


export class ReturnEnderecoDto {
    user!: ReturnUserDto;
    enderecoId!: number;
    provincia!: ReturnProvinciaDto;
    municipio!: ReturnMunicipioDto;
    comuna?: string;
    bairro?: string;
    rua?: string;
    numero?: string;
    referencia?: string;
    codigoPostal?: string;
    latitude!: number;
    longitude!: number;

    constructor(endereco: EnderecoEntity, user?: ReturnUserDto) {
        this.enderecoId = endereco.enderecoId;
        this.user = user || new ReturnUserDto(endereco.user);
        this.provincia = new ReturnProvinciaDto(endereco.provincia);
        this.municipio = new ReturnMunicipioDto(endereco.municipio);
        this.comuna = endereco.comuna;
        this.bairro = endereco.bairro;
        this.rua = endereco.rua;
        this.numero = endereco.numero;
        this.referencia = endereco.referencia;
        this.codigoPostal = endereco.codigoPostal;
        this.latitude = Number(endereco.latitude);
        this.longitude = Number(endereco.longitude);
    }
}