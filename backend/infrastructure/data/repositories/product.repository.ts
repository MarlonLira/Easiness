import { DocumentType } from "@typegoose/typegoose";
import { injectable } from "inversify";
import { Json } from "../../../application/commons/core/json";
import { Product, ProductDAO } from "../../../Domain/Entities/product.entity";
import { IProductRepository } from "../../../Domain/Interfaces/product-repository.interface";

@injectable()
export class ProductRepository implements IProductRepository {

  save(product: Product): Promise<Product> {
    return new Promise((resolve, reject) => {
      ProductDAO.create(product)
        .then((result: DocumentType<Product>) => resolve(result.toJSON()))
        .catch((error: any) => reject(error));
    });
  }

  update(product: Product): Promise<any> {
    return new Promise((resolve, reject) => {
      ProductDAO.updateOne({ _id: product.id }, product)
        .then((result: any) => resolve(result.nModified))
        .catch((error: any) => reject(error));
    });
  }

  getById(id: string): Promise<Product> {
    return new Promise((resolve, reject) => {
      ProductDAO.findById(id)
        .then((result: DocumentType<Product>) => resolve(result.toJSON()))
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

  delete(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      ProductDAO.deleteOne({ _id: id })
        .then((result) => resolve(result.deletedCount))
        .catch((error: any) => reject(error));
    });
  }
}