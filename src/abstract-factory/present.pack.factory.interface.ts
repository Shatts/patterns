import { IProduct } from '../factory-method/product/product.interface';

export interface IPresentPackFactory {
  createFirstPresent(name: string): IProduct;
  createSecondPresent(name: string): IProduct;
}
