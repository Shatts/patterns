import { IPresentPackFactory } from './present.pack.factory.interface';
import { IProduct } from '../factory-method/product/product.interface';
import { Comics } from '../factory-method/product/comics';
import { Movie } from '../factory-method/product/movie';

export class ComicsMovieFactory implements IPresentPackFactory {
  createFirstPresent(name: string): IProduct {
    return new Comics(name);
  }

  createSecondPresent(name: string): IProduct {
    return new Movie(name);
  }
}
