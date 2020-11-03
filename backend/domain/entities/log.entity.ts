import { AutoMap } from "@nartc/automapper";
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { BaseEntity, schemaOptions } from "./base.entity";

@modelOptions({ schemaOptions: schemaOptions })
export class Log extends BaseEntity {
  @prop() @AutoMap()
  public level: string;

  @prop() @AutoMap()
  public message: string;

  @prop() @AutoMap()
  public source: string;

  @prop() @AutoMap()
  public code: string;

  @prop() @AutoMap()
  public obj: string;

  @prop() @AutoMap()
  public userId: string;

  constructor(json?: any) {
    super(json);
    if (json) {
      this.level = json.level;
      this.message = json.message;
      this.source = json.source;
      this.code = json.code;
      this.obj = json.obj;
      this.userId = json.userId;
    }
  }
}

export const LogDAO = getModelForClass(Log);