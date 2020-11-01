import { AutoMap } from "@nartc/automapper";
import { BaseModel } from "./base.model";

export class CategoryModel extends BaseModel {
  @AutoMap()
  public status: string;

  @AutoMap()
  public name: string;

  @AutoMap()
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