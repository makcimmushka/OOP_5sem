import { Medicine } from './medicine';

describe('Medicine', () => {
  let medicine: Medicine;

  beforeEach(() => {
    medicine = new Medicine();
  });

  it('should be defined', () => {
    expect(medicine).toBeDefined();
  });

  describe('`compareByDate`', () => {
    it('should return true if date is lower or false otherwise', () => {
      const now = Date.now();
      medicine.certificate = {
        date: new Date(now + 1),
      } as any;
      const medicineWithLowerDate = new Medicine();
      medicineWithLowerDate.certificate = {
        date: new Date(now),
      } as any;

      expect(medicineWithLowerDate.compareByDate(medicine)).toBeTruthy();
      expect(medicine.compareByDate(medicineWithLowerDate)).toBeFalsy();
    });
  });

  describe('`compareByPrice`', () => {
    it('should return true if price is greater/equal or false otherwise', () => {
      medicine.package = {
        price: 1,
      } as any;
      const medicineWithGreaterPrice = new Medicine();
      medicineWithGreaterPrice.package = {
        price: 2,
      } as any;

      expect(medicineWithGreaterPrice.compareByPrice(medicine)).toBeTruthy();
      expect(medicine.compareByPrice(medicineWithGreaterPrice)).toBeFalsy();
    });
  });
});
