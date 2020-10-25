import { AutoMap } from '@nartc/automapper';
import { SchemaOptions } from 'mongoose';
import { prop } from '@typegoose/typegoose';

export class BaseEntity {
  @AutoMap()
  public id: string;

  @prop() @AutoMap()
  public createdAt: Date;

  @prop() @AutoMap()
  public updatedAt: Date;

  constructor(json?: any) {
    if (json) {
      this.id = String(json._id);
      this.createdAt = json.createdAt;
      this.updatedAt = json.updatedAt;
    }
  }

}

export const schemaOptions: SchemaOptions = {
  autoCreate: true, timestamps: true, toJSON: {
    virtuals: true,
    getters: true,
    // transform: (doc, ret, options) => {
    //   return new T(ret);
    // }
  }
};