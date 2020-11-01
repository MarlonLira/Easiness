import { AutoMap } from "@nartc/automapper";
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { BaseEntity, schemaOptions } from "./base.entity";

@modelOptions({ schemaOptions: schemaOptions })
export class Category extends BaseEntity {
  @prop() @AutoMap()
  public status: string;

  @prop() @AutoMap()
  public name: string;

  @prop() @AutoMap()
  public measure: string;

  constructor(json?: any) {
    super(json);
    if (json) {
      this.status = json.status;
      this.name = json.name;
      this.measure = json.measure;
    }
  }
}

export const CategoryDAO = getModelForClass(Category);