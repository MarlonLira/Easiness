import 'reflect-metadata';
import '../Infrastructure/Crosscutting/IOC/metadata';
import '../Application/AutoMappers/configuration.mapper';

import * as helmet from 'helmet';
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from '../Infrastructure/Crosscutting/IOC/inversify.config';
import { Logger } from '../Application/Commons/core/logger';
import { DbContext } from '../Infrastructure/Data/Context/db.context';

class Server {

  public inversifyExpress: InversifyExpressServer;

  public express: express.Application;

  public constructor() {
    this.inversifyExpress = new InversifyExpressServer(container);
    this.configuration()
      .then(() => this.status()
        .then(() => this.database()));
  }

  private configuration() {
    return new Promise((resolve, reject) => {
      try {
        dotenv.config();
        const allowCors = require('./cors');

        this.inversifyExpress.setConfig((server) => {
          server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
          server.use(bodyParser.json({ limit: '50mb' }));
          server.use(allowCors);
          server.use(helmet());
        });

        this.express = this.inversifyExpress.build();
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  private database() {
    new DbContext().connect()
      .then((result: any) => Logger.Info(this, result))
      .catch((error: any) => Logger.Error(this, error));
  }

  public status() {
    const port = process.env.PORT || 4001;

    return new Promise((resolve) => {
      if (!process.env.SECRET) {
        Logger.Error(this, 'Did not find the environment variables!');
      } else {
        Logger.Info(this, 'Environment variables loaded!');
      }
      const server = this.express.listen(port, function () {
        Logger.Info(this, `Backend is running on port ${port}.`);
        resolve();
      });
    });
  }
}

export default new Server().express;