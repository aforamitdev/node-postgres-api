import 'reflect-metadata';

import 'module-alias/register';
console.log('Application started');

import { InversifyExpressServer } from 'inversify-express-utils';
import express from 'express';
import { container } from '../../container';
import { DatabaseContext } from '../../business/database/pg/db';
import './routes/v1/company';

export class Application {
  private port = process.env.PORT || 8080;

  async setup() {
    const server = new InversifyExpressServer(container);

    server.setConfig((applications: express.Application) => {
      applications.use(express.json());
    });

    const app = server.build();

    console.log('database');
    try {
      const databaseContext = container.get(DatabaseContext);
      await databaseContext.connect();
    } catch (error) {
      console.log(error);
    }

    app.listen(this.port, () => {
      console.log(`server started at http://localhost:${this.port}`);
    });
  }
}
