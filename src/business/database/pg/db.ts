import { injectable } from 'inversify';
import { Pool, PoolClient } from 'pg';

@injectable()
export class DatabaseContext {
  public pgContext: PoolClient;
  public pool: Pool;
  constructor() {
    console.log('Database class, initialization');
    this.pool = new Pool({
      host: 'localhost',
      user: 'admin',
      password: 'admin',
      max: 20,
      connectionTimeoutMillis: 2000,
    });
  }

  async connect() {
    try {
      this.pgContext = await this.pool.connect();
      console.log(`connected to database`);
    } catch (error) {
      console.log(error, 'Error connecting to database');
    }
  }
}
