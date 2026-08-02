import { ProvinciaEntity } from "../interface/provincias.entity";

export class ReturnProvinciaDto{
    nomeProvincia!: string;

    constructor(provincia: ProvinciaEntity){
        this.nomeProvincia = provincia.nomeProvincia;
    }
}
