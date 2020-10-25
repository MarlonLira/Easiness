import { AutoMap } from "@nartc/automapper";
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { BaseEntity, schemaOptions } from "./base.entity";

@modelOptions({ schemaOptions: schemaOptions })
export class Product extends BaseEntity {

  @prop() @AutoMap()
  public name: string;

  @prop() @AutoMap()
  public value: number;

  @prop() @AutoMap()
  public amount: number;

  constructor(json?: any) {
    super(json);
    if (json) {
      this.id = String(json._id);
      this.name = json.name;
      this.amount = json.amount;
      this.value = json.value;
      this.createdAt = json.createdAt;
      this.updatedAt = json.updatedAt;
    }
  }
}

export const ProductDAO = getModelForClass(Product);