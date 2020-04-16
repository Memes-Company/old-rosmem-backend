import {MigrationInterface, QueryRunner} from "typeorm";

export class addSourceTypeImage1586812258656 implements MigrationInterface {
    name = 'addSourceTypeImage1586812258656'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."meme_sourcetype_enum" RENAME TO "meme_sourcetype_enum_old"`, undefined);
        await queryRunner.query(`CREATE TYPE "meme_sourcetype_enum" AS ENUM('link', 'image')`, undefined);
        await queryRunner.query(`ALTER TABLE "meme" ALTER COLUMN "sourceType" TYPE "meme_sourcetype_enum" USING "sourceType"::"text"::"meme_sourcetype_enum"`, undefined);
        await queryRunner.query(`DROP TYPE "meme_sourcetype_enum_old"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "meme_sourcetype_enum_old" AS ENUM('link')`, undefined);
        await queryRunner.query(`ALTER TABLE "meme" ALTER COLUMN "sourceType" TYPE "meme_sourcetype_enum_old" USING "sourceType"::"text"::"meme_sourcetype_enum_old"`, undefined);
        await queryRunner.query(`DROP TYPE "meme_sourcetype_enum"`, undefined);
        await queryRunner.query(`ALTER TYPE "meme_sourcetype_enum_old" RENAME TO  "meme_sourcetype_enum"`, undefined);
    }

}
