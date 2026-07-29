import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertInMunicipios1785356376810 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            -- ==========================
            -- BENGO
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (1,'Ambriz'),
            (1,'Bula Atumba'),
            (1,'Dande'),
            (1,'Dembos'),
            (1,'Nambuangongo'),
            (1,'Pango Aluquém');

            -- ==========================
            -- BENGUELA
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (2,'Balombo'),
            (2,'Baía Farta'),
            (2,'Benguela'),
            (2,'Bocoio'),
            (2,'Caimbambo'),
            (2,'Catumbela'),
            (2,'Chongorói'),
            (2,'Cubal'),
            (2,'Ganda'),
            (2,'Lobito');

            -- ==========================
            -- BIÉ
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (3,'Andulo'),
            (3,'Camacupa'),
            (3,'Catabola'),
            (3,'Chinguar'),
            (3,'Chitembo'),
            (3,'Cuemba'),
            (3,'Cunhinga'),
            (3,'Kuito'),
            (3,'Nharea');

            -- ==========================
            -- CABINDA
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (4,'Belize'),
            (4,'Buco-Zau'),
            (4,'Cabinda'),
            (4,'Cacongo');

            -- ==========================
            -- CUANDO CUBANGO
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (5,'Calai'),
            (5,'Cuangar'),
            (5,'Cuchi'),
            (5,'Dirico'),
            (5,'Mavinga'),
            (5,'Menongue'),
            (5,'Nancova'),
            (5,'Rivungo');

            -- ==========================
            -- CUANZA NORTE
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (6,'Ambaca'),
            (6,'Banga'),
            (6,'Bolongongo'),
            (6,'Cambambe'),
            (6,'Cazengo'),
            (6,'Golungo Alto'),
            (6,'Lucala'),
            (6,'Ngonguembo'),
            (6,'Quiculungo'),
            (6,'Samba Caju');

            -- ==========================
            -- CUANZA SUL
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (7,'Amboim'),
            (7,'Cassongue'),
            (7,'Conda'),
            (7,'Ebo'),
            (7,'Libolo'),
            (7,'Mussende'),
            (7,'Porto Amboim'),
            (7,'Quibala'),
            (7,'Quilenda'),
            (7,'Seles'),
            (7,'Sumbe'),
            (7,'Waku Kungo');

            -- ==========================
            -- CUNENE
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (8,'Cahama'),
            (8,'Cuanhama'),
            (8,'Curoca'),
            (8,'Cuvelai'),
            (8,'Namacunde'),
            (8,'Ombadja');

            -- ==========================
            -- HUAMBO
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (9,'Bailundo'),
            (9,'Caála'),
            (9,'Catchiungo'),
            (9,'Chicala-Cholohanga'),
            (9,'Chinjenje'),
            (9,'Ecunha'),
            (9,'Huambo'),
            (9,'Longonjo'),
            (9,'Londuimbali'),
            (9,'Mungo'),
            (9,'Tchicala Tcholohanga'),
            (9,'Ucuma');

            -- ==========================
            -- HUÍLA
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (10,'Cacula'),
            (10,'Caconda'),
            (10,'Caluquembe'),
            (10,'Chiange'),
            (10,'Chibia'),
            (10,'Chicomba'),
            (10,'Chipindo'),
            (10,'Humpata'),
            (10,'Jamba'),
            (10,'Lubango'),
            (10,'Matala'),
            (10,'Quilengues'),
            (10,'Quipungo');

            -- ==========================
            -- LUANDA
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (11,'Belas'),
            (11,'Cacuaco'),
            (11,'Cazenga'),
            (11,'Kilamba Kiaxi'),
            (11,'Luanda'),
            (11,'Talatona'),
            (11,'Viana');

            -- ==========================
            -- LUNDA NORTE
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (12,'Cambulo'),
            (12,'Capenda Camulemba'),
            (12,'Caungula'),
            (12,'Chitato'),
            (12,'Cuango'),
            (12,'Cuilo'),
            (12,'Lubalo'),
            (12,'Lucapa'),
            (12,'Xá-Muteba');

            -- ==========================
            -- LUNDA SUL
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (13,'Cacolo'),
            (13,'Dala'),
            (13,'Muconda'),
            (13,'Saurimo');

            -- ==========================
            -- MALANJE
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (14,'Cacuso'),
            (14,'Calandula'),
            (14,'Cambundi-Catembo'),
            (14,'Cangandala'),
            (14,'Caombo'),
            (14,'Kiwaba Nzoji'),
            (14,'Luquembo'),
            (14,'Malanje'),
            (14,'Marimba'),
            (14,'Massango'),
            (14,'Mucari'),
            (14,'Quela');

            -- ==========================
            -- MOXICO
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (15,'Alto Zambeze'),
            (15,'Bundas'),
            (15,'Camanongue'),
            (15,'Léua'),
            (15,'Luacano'),
            (15,'Luau'),
            (15,'Luchazes'),
            (15,'Moxico');

            -- ==========================
            -- NAMIBE
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (16,'Bibala'),
            (16,'Camucuio'),
            (16,'Moçâmedes'),
            (16,'Tômbwa'),
            (16,'Virei');

            -- ==========================
            -- UÍGE
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (17,'Alto Cauale'),
            (17,'Ambuíla'),
            (17,'Bembe'),
            (17,'Buengas'),
            (17,'Bungo'),
            (17,'Damba'),
            (17,'Maquela do Zombo'),
            (17,'Mucaba'),
            (17,'Negage'),
            (17,'Puri'),
            (17,'Quimbele'),
            (17,'Sanza Pombo'),
            (17,'Songo'),
            (17,'Uíge'),
            (17,'Zombo');

            -- ==========================
            -- ZAIRE
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (18,'Cuimba'),
            (18,'Mbanza Kongo'),
            (18,'Nóqui'),
            (18,'Nzeto'),
            (18,'Soyo'),
            (18,'Tomboco');

            -- ==========================
            -- ICOLO E BENGO
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (19,'Catete'),
            (19,'Cabiri'),
            (19,'Bom Jesus'),
            (19,'Sequele');

            -- ==========================
            -- MOXICO LESTE
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (20,'Cazombo'),
            (20,'Cameia'),
            (20,'Lumeje'),
            (20,'Luena Leste');

            -- ==========================
            -- CUANDO
            -- ==========================
            INSERT INTO municipios (provincia_id,nome) VALUES
            (21,'Mavinga'),
            (21,'Dirico'),
            (21,'Rivungo'),
            (21,'Cuangar');
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM public.municipios;
        `)
    }

}
