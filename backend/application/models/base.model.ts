import { AutoMap } from "@nartc/automapper";

export class BaseModel {
  @AutoMap()
  public id: string;

  @AutoMap()
  public createdAt: Date;

  @AutoMap()
  public updatedAt: Date;

  constructor(json?: any) {
    if (json) {
      this.id = String(json._id);
      this.createdAt = json.createdAt;
      this.updatedAt = json.updatedAt;
    }
  }

}