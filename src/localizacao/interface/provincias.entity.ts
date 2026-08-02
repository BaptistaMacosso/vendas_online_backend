import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MunicipioEntity } from './municipios.entity';
import { EnderecoEntity } from './enderecos.entity';

@Entity('provincias')
export class ProvinciaEntity {
  @PrimaryGeneratedColumn({ name: 'provincia_id' })
  provinciaId!: number;

  @Column({ unique: true, length: 100, name: 'nome_provincia' })
  nomeProvincia!: string;

  @Column({ unique: true, length: 5, nullable: true })
  codigo!: string;

  @OneToMany(() => MunicipioEntity, municipio => municipio.provincia)
  municipios!: MunicipioEntity[];

  @OneToMany(() => EnderecoEntity, endereco => endereco.provincia)
  enderecos!: EnderecoEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}