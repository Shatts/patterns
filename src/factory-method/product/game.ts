import { IProduct } from './product.interface';

export class Game implements IProduct {
  private readonly _name: string;

  constructor(name: string) {
    this._name = name;
  }

  buy(): string {
    return `You have bought the game with title ${this._name}`;
  }
}
