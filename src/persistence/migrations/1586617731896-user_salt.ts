import {MigrationInterface, QueryRunner} from "typeorm";

export class userSalt1586617731896 implements MigrationInterface {
    name = 'userSalt1586617731896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "salt" character varying NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "salt"`, undefined);
    }

}
