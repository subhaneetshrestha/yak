import compression from 'compression';
import cors, { CorsOptions } from 'cors';
import express, { Application } from 'express';
import config from '../config';

export default class App {
  init() {
    const app: Application = express();
    app.use(compression());
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
    app.use(cors(corsOptions));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static(__dirname + '/'));

    // app.use('/api/v1');
    app.use('/*', (_, res) => res.status(404).send('Route not found'));

    app.listen(config.PORT, () => console.log(`Listening at ${config.PORT}`));
  }
}
