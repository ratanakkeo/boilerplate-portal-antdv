import { MigrationInterface, QueryRunner } from 'typeorm'

export class FixDeptNameNullValues1754902900000 implements MigrationInterface {
  name = 'FixDeptNameNullValues1754902900000'

  public async up(queryRunner: QueryRunner): Promise<void> {
    // First, update any null values in the name column to a default value
    await queryRunner.query(`UPDATE "sys_dept" SET "name" = 'Default Department' WHERE "name" IS NULL`)

    // Now we can safely add the NOT NULL constraint
    await queryRunner.query(`ALTER TABLE "sys_dept" ALTER COLUMN "name" SET NOT NULL`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove the NOT NULL constraint
    await queryRunner.query(`ALTER TABLE "sys_dept" ALTER COLUMN "name" DROP NOT NULL`)
  }
}
