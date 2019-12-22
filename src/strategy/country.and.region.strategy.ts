import { ILocationStrategy } from './ilocation.strategy.interface';

export class CountryAndRegionStrategy implements ILocationStrategy {
  getRegionAndCurrencyByCountry(country: string): string {
    //Here will be some logic for dependent country and their currency
    return 'country and region';
  }
}
