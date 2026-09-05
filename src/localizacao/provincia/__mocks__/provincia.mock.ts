import { ProvinciaEntity } from "../interface/provincias.entity";

export const provinciaMock: ProvinciaEntity = {
    provinciaId: 1,
    nomeProvincia: 'Luanda',
    codigo: "LD",
    createdAt: new Date(),
    updatedAt: new Date(),
    municipios: [],
    enderecos: []
};