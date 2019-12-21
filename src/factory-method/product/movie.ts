import { IProduct } from './product.interface';

export class Movie implements IProduct {
  private readonly _name: string;

  constructor(name: string) {
    this._name = name;
  }

  buy(): string {
    return `You have bought the movie with title ${this._name}`;
  }
}
