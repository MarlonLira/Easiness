import { AutoMapper, mapFrom, ProfileBase } from '@nartc/automapper';
import { BaseEntity } from '../../Domain/Entities/base.entity';
import { Product } from '../../Domain/Entities/product.entity';
import { BaseModel } from '../Models/base.model';
import { ProductModel } from '../Models/product.model';

export class EntityToModel extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(BaseEntity, BaseModel);
    mapper.createMap(Product, ProductModel);
  }
}