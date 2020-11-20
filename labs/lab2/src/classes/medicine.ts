import { Certificate, Dosage, Package } from '../interfaces';

export class Medicine {
  public name: string;
  public pharm: string;
  public group: string;
  public analogs: string[];
  public versions: string[];
  public certificate: Certificate;
  public package: Package;
  public dosage: Dosage;
}
