import { MigrationInterface, QueryRunner } from 'typeorm'

export class UpdateTable2001717007831711 implements MigrationInterface {
  name = 'UpdateTable2001717007831711'

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Add new columns (nullable by default)
    await queryRunner.query(`ALTER TABLE "sys_dept" ADD "create_by" int NULL`)
    await queryRunner.query(`ALTER TABLE "sys_dept" ADD "update_by" int NULL`)
    await queryRunner.query(`ALTER TABLE "sys_menu" ADD "create_by" int NULL`)
    await queryRunner.query(`ALTER TABLE "sys_menu" ADD "update_by" int NULL`)
    await queryRunner.query(`ALTER TABLE "sys_role" ADD "create_by" int NULL`)
    await queryRunner.query(`ALTER TABLE "sys_role" ADD "update_by" int NULL`)

    // Add comments
    await queryRunner.query(`COMMENT ON COLUMN "sys_dept"."create_by" IS '创建者'`)
    await queryRunner.query(`COMMENT ON COLUMN "sys_dept"."update_by" IS '更新者'`)
    await queryRunner.query(`COMMENT ON COLUMN "sys_menu"."create_by" IS '创建者'`)
    await queryRunner.query(`COMMENT ON COLUMN "sys_menu"."update_by" IS '更新者'`)
    await queryRunner.query(`COMMENT ON COLUMN "sys_role"."create_by" IS '创建者'`)
    await queryRunner.query(`COMMENT ON COLUMN "sys_role"."update_by" IS '更新者'`)

    // Handle sys_role.value: Ensure NOT NULL and add comment (no type change needed)
    await queryRunner.query(`ALTER TABLE "sys_role" ALTER COLUMN "value" SET NOT NULL`)
    await queryRunner.query(`COMMENT ON COLUMN "sys_role"."value" IS '角色标识'`)

    // Make create_by and update_by nullable in sys_dict_type and sys_dict_item
    await queryRunner.query(`ALTER TABLE "sys_dict_type" ALTER COLUMN "create_by" DROP NOT NULL`)
    await queryRunner.query(`ALTER TABLE "sys_dict_type" ALTER COLUMN "update_by" DROP NOT NULL`)
    await queryRunner.query(`ALTER TABLE "sys_dict_item" ALTER COLUMN "create_by" DROP NOT NULL`)
    await queryRunner.query(`ALTER TABLE "sys_dict_item" ALTER COLUMN "update_by" DROP NOT NULL`)

    // Add comments for these as well (based on original intent)
    await queryRunner.query(`COMMENT ON COLUMN "sys_dict_type"."create_by" IS '创建者'`)
    await queryRunner.query(`COMMENT ON COLUMN "sys_dict_type"."update_by" IS '更新者'`)
    await queryRunner.query(`COMMENT ON COLUMN "sys_dict_item"."create_by" IS '创建者'`)
    await queryRunner.query(`COMMENT ON COLUMN "sys_dict_item"."update_by" IS '更新者'`)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverse nullability changes (make NOT NULL again)
    await queryRunner.query(`ALTER TABLE "sys_dict_item" ALTER COLUMN "update_by" SET NOT NULL`)
    await queryRunner.query(`ALTER TABLE "sys_dict_item" ALTER COLUMN "create_by" SET NOT NULL`)
    await queryRunner.query(`ALTER TABLE "sys_dict_type" ALTER COLUMN "update_by" SET NOT NULL`)
    await queryRunner.query(`ALTER TABLE "sys_dict_type" ALTER COLUMN "create_by" SET NOT NULL`)

    // Drop added columns
    await queryRunner.query(`ALTER TABLE "sys_role" DROP COLUMN "update_by"`)
    await queryRunner.query(`ALTER TABLE "sys_role" DROP COLUMN "create_by"`)
    await queryRunner.query(`ALTER TABLE "sys_menu" DROP COLUMN "update_by"`)
    await queryRunner.query(`ALTER TABLE "sys_menu" DROP COLUMN "create_by"`)
    await queryRunner.query(`ALTER TABLE "sys_dept" DROP COLUMN "update_by"`)
    await queryRunner.query(`ALTER TABLE "sys_dept" DROP COLUMN "create_by"`)
  }
}
