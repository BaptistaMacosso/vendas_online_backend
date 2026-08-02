import { EnderecoEntity } from "src/localizacao/interface/enderecos.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: 'user'})
export class UserEntity {
    @PrimaryGeneratedColumn({ name: 'user_id' })
    userId!: number;

    @Column({name: 'name', nullable: false})
    name!: string;

    @Column({name: 'phone', nullable: false, unique: true})
    phone?: string;

    @Column({name: 'email', nullable: true, unique: true})
    email!: string;

    @Column({name: 'password', nullable: false})
    password!: string;

    @Column({name: 'type_user', nullable: false})
    typeUser!: number;

    //Tenho que criar a relação entre o user e o endereco, para que quando eu criar um user, 
    //eu possa criar um endereco para ele.
    @OneToMany(() => EnderecoEntity, endereco => endereco.user)
    enderecos!: EnderecoEntity[];

    @CreateDateColumn({name: 'created_at'})
    created_at!: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updated_at!: Date;
}