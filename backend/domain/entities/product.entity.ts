import { AutoMap } from "@nartc/automapper";
import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { BaseEntity, schemaOptions } from "./base.entity";

@modelOptions({ schemaOptions: schemaOptions })
export class Product extends BaseEntity {
  @prop() @AutoMap()
  public status: string;

  @prop() @AutoMap()
  public name: string;

  @prop() @AutoMap()
  public amount: number;

  @prop() @AutoMap()
  public value: number;

  @prop() @AutoMap()
  public categoryId: string;

  constructor(json?: any) {
    super(json);
    if (json) {
      this.status = json.status;
      this.name = json.name;
      this.amount = json.amount;
      this.value = json.value;
      this.categoryId = json.categoryId;
    }
  }
}

export const ProductDAO = getModelForClass(Product);