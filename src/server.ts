import 'reflect-metadata';
import 'dotenv/config';
import { Application } from './app/inventory-api/index';
const app = new Application();

app.setup();
