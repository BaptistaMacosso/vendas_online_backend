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

import { ProvinciaEntity } from './provincias.entity';
import { EnderecoEntity } from './enderecos.entity';

@Entity('municipios')
export class MunicipioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  nome: string;

  @ManyToOne(() => ProvinciaEntity, provincia => provincia.municipios, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'provincia_id' })
  provincia: ProvinciaEntity;

  @OneToMany(() => EnderecoEntity, endereco => endereco.municipio )
  enderecos: EnderecoEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}