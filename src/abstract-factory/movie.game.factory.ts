import { IPresentPackFactory } from './present.pack.factory.interface';
import { IProduct } from '../factory-method/product/product.interface';
import { Movie } from '../factory-method/product/movie';
import { Game } from '../factory-method/product/game';

export class MovieGameFactory implements IPresentPackFactory {
  createFirstPresent(name: string): IProduct {
    return new Movie(name);
  }

  createSecondPresent(name: string): IProduct {
    return new Game(name);
  }
}
