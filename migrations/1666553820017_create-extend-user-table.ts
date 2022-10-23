/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.addColumn('user', {
    id: { type: 'uuid', primaryKey: true, unique: true, notNull: true },
    email: { type: 'varchar(300)', notNull: true, unique: true },
    last_name: { type: 'varchar(300)', notNull: true, unique: true },
    password: { type: 'varchar(300)', notNull: true },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {}
