import { Container } from 'inversify';
import { DatabaseContext } from './business/database/pg/db';
import { TYPES } from './types/types';

export const container = new Container({});

container.bind<DatabaseContext>(DatabaseContext).to(DatabaseContext);
