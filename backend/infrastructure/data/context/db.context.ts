import * as Mongoose from "mongoose";
import * as config from '../../../Presentation/config.json';

const _dbConfig = (config as any).Database.MongoDB;

export class DbContext {
  uri = `mongodb+srv://${_dbConfig.username}:${_dbConfig.password}@${_dbConfig.host}/<dbname>?retryWrites=true&w=majority`;
  database: Mongoose.Connection;

  connect(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.database) {
        resolve('Database already connected!');
      }

      Mongoose.connect(this.uri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });

      this.database = Mongoose.connection;
      this.database.once("open", async () => {
        resolve("Connected to database!");
      });
      this.database.on("error", () => {
        reject("Error connecting to database!");
      });
    })
  }

  disconnect(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.database) {
        return;
      }

      Mongoose.disconnect()
        .then(() => resolve('The database was disconnected'))
        .catch((error: any) => reject(error));
    });
  }
}