import {MigrationInterface, QueryRunner} from "typeorm";

export class addMemesTable1586475146174 implements MigrationInterface {
    name = 'addMemesTable1586475146174'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "meme_sourcetype_enum" AS ENUM('link')`, undefined);
        await queryRunner.query(`CREATE TABLE "meme" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "sourceType" "meme_sourcetype_enum" NOT NULL, "sourceValue" character varying NOT NULL, CONSTRAINT "PK_4cc573bf48332f7f2a36db2ef1e" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tag_memes_meme" ("tagId" uuid NOT NULL, "memeId" uuid NOT NULL, CONSTRAINT "PK_5a0692807c1816e01aad1f2244e" PRIMARY KEY ("tagId", "memeId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_24fa0d745639534ee4689ac31e" ON "tag_memes_meme" ("tagId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_737a54b0dd9ec3e7c9bbda28f1" ON "tag_memes_meme" ("memeId") `, undefined);
        await queryRunner.query(`ALTER TABLE "tag_memes_meme" ADD CONSTRAINT "FK_24fa0d745639534ee4689ac31e1" FOREIGN KEY ("tagId") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tag_memes_meme" ADD CONSTRAINT "FK_737a54b0dd9ec3e7c9bbda28f1e" FOREIGN KEY ("memeId") REFERENCES "meme"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tag_memes_meme" DROP CONSTRAINT "FK_737a54b0dd9ec3e7c9bbda28f1e"`, undefined);
        await queryRunner.query(`ALTER TABLE "tag_memes_meme" DROP CONSTRAINT "FK_24fa0d745639534ee4689ac31e1"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_737a54b0dd9ec3e7c9bbda28f1"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_24fa0d745639534ee4689ac31e"`, undefined);
        await queryRunner.query(`DROP TABLE "tag_memes_meme"`, undefined);
        await queryRunner.query(`DROP TABLE "meme"`, undefined);
        await queryRunner.query(`DROP TYPE "meme_sourcetype_enum"`, undefined);
    }

}
