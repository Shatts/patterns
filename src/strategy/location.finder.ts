import { ILocationStrategy } from './ilocation.strategy.interface';

export class LocationFinder {
  set locationStrategy(value: ILocationStrategy) {
    this._locationStrategy = value;
  }
  private _locationStrategy: ILocationStrategy;

  constructor(locationStrategy: ILocationStrategy) {
    this._locationStrategy = locationStrategy;
  }

  getRegionAndCurrency(country: string): string {
    return this._locationStrategy.getRegionAndCurrencyByCountry(country);
  }
}
