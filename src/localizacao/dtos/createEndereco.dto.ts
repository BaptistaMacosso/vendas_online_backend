export interface CreateEnderecoDto {
  provinciaId: number;
  municipioId: number;
  comuna: string;
  bairro: string;
  rua: string;
  numero: string;
  referencia: string;
  codigoPostal: string;
  latitude: number;
  longitude: number;
}