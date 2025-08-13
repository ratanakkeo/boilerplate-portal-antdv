import fs from 'node:fs'
import path from 'node:path'

import { MigrationInterface, QueryRunner } from 'typeorm'

const sql = fs.readFileSync(path.join(__dirname, '../../deploy/sql/nest_admin.sql'), 'utf8')

export class InitData1707996695540 implements MigrationInterface {
  name = 'InitData1707996695540'

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Drop tables in reverse dependency order with cascade to handle FKs
    await queryRunner.dropTable('user_refresh_tokens', true, true, true)
    await queryRunner.dropTable('user_access_tokens', true, true, true)
    await queryRunner.dropTable('todo', true, true, true)
    await queryRunner.dropTable('sys_user_roles', true, true, true)
    await queryRunner.dropTable('sys_task_log', true, true, true)
    await queryRunner.dropTable('tool_storage', true, true, true)
    await queryRunner.dropTable('sys_role_menus', true, true, true)
    await queryRunner.dropTable('sys_login_log', true, true, true)
    await queryRunner.dropTable('sys_dict_item', true, true, true)
    await queryRunner.dropTable('sys_captcha_log', true, true, true)
    await queryRunner.dropTable('sys_config', true, true, true)
    await queryRunner.dropTable('sys_dict', true, true, true)
    await queryRunner.dropTable('sys_dict_type', true, true, true)
    await queryRunner.dropTable('sys_menu', true, true, true)
    await queryRunner.dropTable('sys_role', true, true, true)
    await queryRunner.dropTable('sys_task', true, true, true)
    await queryRunner.dropTable('sys_user', true, true, true) // Drop before sys_dept
    await queryRunner.dropTable('sys_dept', true, true, true)

    // Execute the rest of the SQL (creates and inserts)
    await queryRunner.query(sql)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Optional: Add reversal logic if needed (e.g., drop tables again)
  }
}
