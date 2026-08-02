import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1785351505325 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE SEQUENCE IF NOT EXISTS public.user_id_seq
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;

        CREATE TABLE IF NOT EXISTS public."user"
        (
            user_id INTEGER NOT NULL DEFAULT nextval('public.user_id_seq'),
            name VARCHAR(150) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            email VARCHAR(255),
            password VARCHAR(255) NOT NULL,
            type_user INTEGER NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
            CONSTRAINT pk_user PRIMARY KEY (user_id),
            CONSTRAINT uq_user_email UNIQUE (email),
            CONSTRAINT uq_user_phone UNIQUE (phone)
        );

        ALTER SEQUENCE public.user_id_seq
            OWNED BY public."user".user_id;
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DROP TABLE IF EXISTS public."user";

            DROP SEQUENCE IF EXISTS public.user_id_seq;
        `)
    }

}
