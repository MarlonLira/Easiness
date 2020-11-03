import { Product } from "../Entities/product.entity";

export interface IProductRepository {
  save(product: Product): Promise<Product>;
  update(product: Product): Promise<any>;
  getById(id: string): Promise<Product>;
  delete(id: string): Promise<any>;
  toList(): Promise<Product[]>;
}