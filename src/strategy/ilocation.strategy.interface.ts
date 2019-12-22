export interface ILocationStrategy {
  getRegionAndCurrencyByCountry(country: string): string;
}
