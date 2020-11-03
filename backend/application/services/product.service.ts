import { Mapper } from "@nartc/automapper";
import { inject, injectable } from "inversify";
import { Product } from "../../Domain/Entities/product.entity";
import { IProductRepository } from "../../Domain/Interfaces/product-repository.interface";
import { TYPES } from "../../Infrastructure/Crosscutting/IOC/types";
import { InnerException } from "../Commons/core/innerException";
import { IProductService } from "../Interfaces/product-service.interface";
import { ProductModel } from "../Models/product.model";

@injectable()
export class ProductService implements IProductService {

  constructor(@inject(TYPES.IProductRepository) private repository: IProductRepository) { }

  save(product: ProductModel): Promise<ProductModel> {
    return new Promise((resolve, reject) => {
      this.repository.save(Mapper.map(product, Product, ProductModel))
        .then((result) => resolve(Mapper.map(result, ProductModel, Product)))
        .catch(async (error: any) => reject(console.log(InnerException.decode(error))));
    });
  }

  update(product: ProductModel): Promise<ProductModel> {
    return new Promise((resolve, reject) => {
      this.repository.update(Mapper.map(product, Product, ProductModel))
        .then((result) => resolve(result))
        .catch(async (error: any) => reject(console.log(InnerException.decode(error))));
    });
  }

  toList(): Promise<ProductModel[]> {
    return new Promise((resolve, reject) => {
      this.repository.toList()
        .then((result: Product[]) => resolve(Mapper.mapArray(result, ProductModel, Product)))
        .catch(async (error: any) => reject(console.log(InnerException.decode(error))));
    });
  }

  getById(id: string): Promise<ProductModel> {
    return new Promise((resolve, reject) => {
      this.repository.getById(id)
        .then((result) => resolve(Mapper.map(result, ProductModel, Product)))
        .catch(async (error: any) => reject(console.log(InnerException.decode(error))));
    });
  }

  delete(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.repository.delete(id)
        .then((result) => resolve(result))
        .catch(async (error: any) => reject(console.log(InnerException.decode(error))));
    });
  }

}