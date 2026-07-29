import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInProvincias1785356366027 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            INSERT INTO public.provincias (codigo, nome) VALUES
            ('BGO','Bengo'),
            ('BGU','Benguela'),
            ('BIE','Bié'),
            ('CAB','Cabinda'),
            ('CCA','Cuando Cubango'),
            ('CNO','Cuanza Norte'),
            ('CUS','Cuanza Sul'),
            ('CNN','Cunene'),
            ('HUA','Huambo'),
            ('HUI','Huíla'),
            ('LUA','Luanda'),
            ('LNO','Lunda Norte'),
            ('LSU','Lunda Sul'),
            ('MAL','Malanje'),
            ('MOX','Moxico'),
            ('NAM','Namibe'),
            ('UIG','Uíge'),
            ('ZAI','Zaire'),
            ('ICO','Icolo e Bengo'),
            ('MCU','Moxico Leste'),
            ('CSU','Cuando');
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM public.provincias;
        `)
    }

}
