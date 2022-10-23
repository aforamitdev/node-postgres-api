import 'module-alias/register';
console.log('Application started');
import { InversifyExpressServer } from 'inversify-express-utils';

import { container } from '../../container';

export class Application {
  private port = process.env.PORT || 8080;

  async setup() {
    const server = new InversifyExpressServer(container);

    const app = server.build();
    app.listen(this.port, () => {
      console.log(`server started at http://localhost:${this.port}`);
    });
  }
}
