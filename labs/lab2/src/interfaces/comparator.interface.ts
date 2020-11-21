import { Medicine } from '../classes';

export interface Comparator {
  compareByDate(medicineToCompare: Medicine): boolean;
  compareByPrice(medicineToCompare: Medicine): boolean;
}
