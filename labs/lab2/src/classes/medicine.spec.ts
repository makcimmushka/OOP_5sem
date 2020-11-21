import { medicinesToTest, randomDate, randomNumber } from '../test';
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
      medicine.certificate = {
        date: randomDate(),
      } as any;
      const mockMedicine = {
        certificate: {
          date: randomDate(),
        },
      } as any;

      expect(medicine.compareByDate(mockMedicine)).toEqual(
        medicine.certificate.date.getTime() < mockMedicine.certificate.date.getTime(),
      );
    });
  });

  describe('`compareByPrice`', () => {
    it('should return true if price is greater/equal or false otherwise', () => {
      medicine.package = {
        price: randomNumber(),
      } as any;
      const mockMedicine = {
        package: {
          price: randomNumber(),
        },
      } as any;

      expect(medicine.compareByPrice(mockMedicine)).toEqual(medicine.package.price >= mockMedicine.package.price);
    });
  });
});
