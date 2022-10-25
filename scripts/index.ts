import migrate, { RunnerOption } from 'node-pg-migrate';
import 'dotenv/config';

const options: RunnerOption = {
  direction: 'up',
  dir: 'migrations',
  migrationsTable: 'pgmigrations',

  databaseUrl: process.env.DB_URL!,
};
console.log(process.env.DB_URL);

migrate(options)
  .then((res: any) => {
    console.log(res);
  })
  .then((err: any) => {
    console.log(err);
  });
