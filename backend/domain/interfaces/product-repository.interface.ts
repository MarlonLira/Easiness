import { Product } from "../Entities/product.entity";

export interface IProductRepository {
  save(product: Product): Promise<Product>;
  getById(id: string): Promise<Product>;
  toList(): Promise<Product[]>;
}