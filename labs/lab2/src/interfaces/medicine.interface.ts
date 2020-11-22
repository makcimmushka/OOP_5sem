import { Certificate } from './certificate.interface';
import { Dosage } from './dosage.interface';
import { Package } from './package.interface';

export interface IMedicine {
  name: string;
  pharm: string;
  group: string;
  analogs: string[];
  versions: string[];
  certificate: Certificate;
  package: Package;
  dosage: Dosage;
};
