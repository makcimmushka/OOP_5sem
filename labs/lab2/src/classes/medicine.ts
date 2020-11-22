import { Certificate, Dosage, Package, Comparator, IMedicine } from '../interfaces';

export class Medicine implements IMedicine, Comparator {
  public name: string;
  public pharm: string;
  public group: string;
  public analogs: string[] = [];
  public versions: string[] = [];
  public certificate: Certificate;
  public package: Package;
  public dosage: Dosage;

  /* Is date lower */
  compareByDate(medicineToCompare: Medicine): boolean {
    return this.certificate.date.getTime() < medicineToCompare.certificate.date.getTime();
  }

  /* Is price greater or equal */
  compareByPrice(medicineToCompare: Medicine): boolean {
    return this.package.price >= medicineToCompare.package.price;
  }
}
