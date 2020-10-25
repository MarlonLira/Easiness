import { ProductModel } from "../Models/product.model";

export interface IProductService {
  save(product: ProductModel): Promise<ProductModel>;
  getById(id: string): Promise<ProductModel>;
  toList(): Promise<ProductModel[]>;
}