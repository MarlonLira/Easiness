import { AutoMap } from "@nartc/automapper";
import { BaseModel } from "./base.model";

export class ProductModel extends BaseModel {
  @AutoMap()
  public status: string;

  @AutoMap()
  public name: string;

  @AutoMap()
  public amount: number;

  @AutoMap()
  public value: number;

  @AutoMap()
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