import { AwilixContainer } from 'awilix';
import compression from 'compression';
import cors, { CorsOptions } from 'cors';
import express, { Application } from 'express';
export default class App {
  constructor(private container: AwilixContainer) {}
  init() {
    const app: Application = express();
    const whitelist = ['localhost:4200', 'localhost:3000'];
    const corsOptions: CorsOptions = {
      origin: (origin, callback) => {
        if (origin && whitelist.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    };
    app.use(compression());
    app.use(cors(corsOptions));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static(__dirname + '/'));
    app.enable('trust proxy');

    const { appConfig } = this.container.cradle;

    // app.use('/api/v1');
    app.use('/*', (_, res) => res.status(404).send('Route not found'));

    app.listen(appConfig.PORT, () => console.log(`Listening at ${appConfig.port}`));
    return app;
  }
}
