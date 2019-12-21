import { IProduct } from '../product/product.interface';

export interface IFactory {
  createProduct(name: string): IProduct;
}
