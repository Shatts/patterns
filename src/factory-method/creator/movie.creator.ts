import { IProduct } from '../product/product.interface';
import { Movie } from '../product/movie';
import { IFactory } from './factory.interface';

class MovieCreator implements IFactory {
  createProduct(name: string): IProduct {
    return new Movie(name);
  }
}
