import { ReturnUserDto } from "src/user/dtos/returnUser.dto";
import { EnderecoEntity } from "../interface/enderecos.entity";
import { ReturnMunicipioDto } from "./returnMunicipio.dto";
import { ReturnProvinciaDto } from "./returnProvincia.dto";

export class ReturnEnderecoDto {
    enderecoId!: number;
    user!: ReturnUserDto;
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

    constructor(endereco: EnderecoEntity) {
        this.enderecoId = endereco.enderecoId;
        this.user = new ReturnUserDto(endereco.user);
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