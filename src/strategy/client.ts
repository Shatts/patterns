import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { dependentTerritoriesMap } from './model/dependent.territories.map';
import { LocationFinder } from './location.finder';
import { DependentRegionStrategy } from './dependent.region.strategy';
import { OnlyCountryStrategy } from './only.country.strategy';

export class Client {
  getLocationByPhone(phoneNumber: string) {
    const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber);
    if (!parsedPhoneNumber || !parsedPhoneNumber.country) {
      const message: string = `This phone number ${phoneNumber} is not valid.`;
      throw new Error(message);
    }

    if(dependentTerritoriesMap.has(parsedPhoneNumber.country)) {
      return new LocationFinder(new DependentRegionStrategy()).getRegionAndCurrency(parsedPhoneNumber.country);
    } else {
      return new LocationFinder(new OnlyCountryStrategy()).getRegionAndCurrency(parsedPhoneNumber.country);
    }
  }
}
