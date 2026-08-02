import { ProvinciaEntity } from "../interface/provincias.entity";

export class ReturnProvinciaDto{
    nomeProvincia!: string;
    codigo?: string;

    constructor(provincia: ProvinciaEntity){
        this.nomeProvincia = provincia.nomeProvincia;
        this.codigo = provincia.codigo;
    }
}
