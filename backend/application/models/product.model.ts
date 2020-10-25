import { AutoMap } from "@nartc/automapper";
import { BaseModel } from "./base.model";

export class ProductModel extends BaseModel {

  @AutoMap()
  public name: string;

  @AutoMap()
  public value: number;

  @AutoMap()
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