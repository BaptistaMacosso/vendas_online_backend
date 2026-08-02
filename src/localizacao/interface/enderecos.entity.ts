import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProvinciaEntity } from './provincias.entity';
import { MunicipioEntity } from './municipios.entity';
import { UserEntity } from 'src/user/dtos/interface/user.entity';

@Entity('enderecos')
export class EnderecoEntity {
  @PrimaryGeneratedColumn({ name: 'enderecos_id' })
  enderecoId!: number;

  @ManyToOne(() => UserEntity, user => user.enderecos)
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @ManyToOne(() => ProvinciaEntity, provincia => provincia.enderecos,
    { nullable: false, eager: true, },)
  @JoinColumn({ name: 'provincia_id', })
  provincia!: ProvinciaEntity;

  @ManyToOne(() => MunicipioEntity, municipio => municipio.enderecos,
    { nullable: false, eager: true,},)
  @JoinColumn({ name: 'municipio_id', })
  municipio!: MunicipioEntity;

  @Column({
    nullable: true,
    length: 120,
  })
  comuna?: string;

  @Column({
    nullable: true,
    length: 120,
  })
  bairro?: string;

  @Column({
    nullable: true,
    length: 200,
  })
  rua?: string;

  @Column({
    nullable: true,
    length: 20,
  })
  numero?: string;

  @Column({
    nullable: true,
    length: 255,
  })
  referencia?: string;

  @Column({
    nullable: true,
    name: 'codigo_postal',
    length: 20,
  })
  codigoPostal?: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 7,
    nullable: true,
  })
  latitude?: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 7,
    nullable: true,
  })
  longitude?: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt!: Date;
}