import { Container } from 'inversify';
import { DatabaseContext } from './business/database/pg/db';

export const container = new Container({});

container.bind<DatabaseContext>(DatabaseContext).to(DatabaseContext);
