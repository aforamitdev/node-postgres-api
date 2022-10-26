import 'reflect-metadata';
import 'dotenv/config';
import { Application } from './app/inventory-api/';
const app = new Application();
console.log(app);
app.setup();
