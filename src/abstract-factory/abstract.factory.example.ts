import { IPresentPackFactory } from './present.pack.factory.interface';
import { IProduct } from '../factory-method/product/product.interface';

export class AbstractFactoryExample {
  run(factory: IPresentPackFactory) {
    const firstProduct: IProduct = factory.createFirstPresent('Spiderman');
    const secondProduct: IProduct = factory.createSecondPresent('Batman');
  }
}
