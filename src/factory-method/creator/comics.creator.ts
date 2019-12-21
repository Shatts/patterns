import { IProduct } from '../product/product.interface';
import { Comics } from '../product/comics';
import { IFactory } from './factory.interface';

class ComicsCreator implements IFactory {
  createProduct(name: string): IProduct {
    return new Comics(name);
  }
}
