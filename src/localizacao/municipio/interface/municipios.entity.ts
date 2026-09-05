import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProvinciaEntity } from '../../provincia/interface/provincias.entity';
import { EnderecoEntity } from '../../endereco/interface/enderecos.entity';

@Entity('municipios')
export class MunicipioEntity {
  @PrimaryGeneratedColumn({ name: 'municipio_id' })
  municipioId!: number;

  @Column({ length: 120, name: 'nome_municipio' })
  nomeMunicipio!: string;

  @ManyToOne(() => ProvinciaEntity, provincia => provincia.municipios, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'provincia_id' })
  provincia!: ProvinciaEntity;

  @OneToMany(() => EnderecoEntity, endereco => endereco.municipio )
  enderecos!: EnderecoEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}