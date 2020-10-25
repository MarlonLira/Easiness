import { DocumentType } from "@typegoose/typegoose";
import { injectable } from "inversify";
import { Json } from "../../../Application/Commons/core/json";
import { Product, ProductDAO } from "../../../Domain/Entities/product.entity";
import { IProductRepository } from "../../../Domain/Interfaces/product-repository.interface";

@injectable()
export class ProductRepository implements IProductRepository {

  save(product: Product): Promise<Product> {
    return new Promise((resolve, reject) => {
      ProductDAO.create(product)
        .then((result: DocumentType<Product>) => resolve(Json.parse(result)))
        .catch((error: any) => reject(error));
    });
  }

  getById(id: string): Promise<Product> {
    return new Promise((resolve, reject) => {
      ProductDAO.findById(id)
        .then((result: DocumentType<Product>) => resolve(Json.parse(result)))
        .catch((error: any) => reject(error));
    });
  }

  toList(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      ProductDAO.find({})
        .then((result: DocumentType<Product>[]) => resolve(Json.parse(result)))
        .catch((error: any) => reject(error));
    });
  }
}