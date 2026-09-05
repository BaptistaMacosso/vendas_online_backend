import { MunicipioEntity } from "../interface/municipios.entity";
import { provinciaMock } from "../../../localizacao/provincia/__mocks__/provincia.mock";

export const municipioMock: MunicipioEntity = {
    municipioId: 1,
    nomeMunicipio: 'Viana',
    provincia: provinciaMock,
    enderecos: [],
    createdAt: new Date(),
    updatedAt: new Date(),
};