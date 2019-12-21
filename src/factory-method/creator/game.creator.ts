import { IProduct } from '../product/product.interface';
import { Game } from '../product/game';
import { IFactory } from './factory.interface';

class GameCreator implements IFactory {
  createProduct(name: string): IProduct {
    return new Game(name);
  }
}
