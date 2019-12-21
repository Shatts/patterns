import { IPresentPackFactory } from './present.pack.factory.interface';
import { IProduct } from '../factory-method/product/product.interface';
import { Comics } from '../factory-method/product/comics';
import { Game } from '../factory-method/product/game';

export class ComicsGameFactory implements IPresentPackFactory {
  createFirstPresent(name: string): IProduct {
    return new Comics(name);
  }

  createSecondPresent(name: string): IProduct {
    return new Game(name);
  }
}
