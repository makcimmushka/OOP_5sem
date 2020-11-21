import { DOMParser } from 'xmldom';
import { IFileReader, IXmlValidator } from '../interfaces';
import { Medicine } from './medicine';

export class XmlDomParser {
  private readonly domParser = new DOMParser();

  constructor(
    private readonly fileReader: IFileReader, 
    private readonly xmlValidator: IXmlValidator,
  ) {}

  parse(xmlFile: string, xsdFile: string): Array<Medicine> {
    const isValid = this.xmlValidator.validate(xmlFile, xsdFile);

    if (isValid) {
      const xml = this.fileReader.readFile(xmlFile);
      const dom = this.domParser.parseFromString(xml);
      return this.convertDomToClasses(dom);
    }

    return null;
  }

  private convertDomToClasses(dom: Document): Array<Medicine> {
    const medicines: Array<Medicine> = [];
    const medicineTags = dom.getElementsByTagName('medicine');

    for (let i = 0; i < medicineTags.length; i++) {
      const medicine: Medicine = new Medicine();
      const medicineTag = medicineTags[i];

      const nameTag = medicineTag.getElementsByTagName('name')[0];
      const pharmTag = medicineTag.getElementsByTagName('pharm')[0];
      const groupTag = medicineTag.getElementsByTagName('group')[0];

      medicine.name = this.retrieveTagValue(nameTag);
      medicine.pharm = this.retrieveTagValue(pharmTag);
      medicine.group = this.retrieveTagValue(groupTag);

      const analogTags = medicineTag.getElementsByTagName('analogs')[0].getElementsByTagName('analog');

      for (let i = 0; i < analogTags.length; i++) {
        medicine.analogs.push(this.retrieveTagValue(analogTags[i]));
      }

      const versionTags = medicineTag.getElementsByTagName('versions')[0].getElementsByTagName('version');

      for (let i = 0; i < versionTags.length; i++) {
        medicine.versions.push(this.retrieveTagValue(versionTags[i]));
      }

      const certificateTag = medicineTag.getElementsByTagName('certificate')[0];
      const numberTag = certificateTag.getElementsByTagName('number')[0];
      const dateTag = certificateTag.getElementsByTagName('date')[0];
      const organizationTag = certificateTag.getElementsByTagName('organization')[0];

      medicine.certificate = {
        number: +this.retrieveTagValue(numberTag),
        date: new Date(this.retrieveTagValue(dateTag)),
        organization: this.retrieveTagValue(organizationTag),
      };

      const packageTag = medicineTag.getElementsByTagName('package')[0];
      const typeTag = packageTag.getElementsByTagName('type')[0];
      const amountTag = packageTag.getElementsByTagName('amount')[0];
      const priceTag = packageTag.getElementsByTagName('price')[0];

      medicine.package = {
        type: this.retrieveTagValue(typeTag),
        amount: +this.retrieveTagValue(amountTag),
        price: +this.retrieveTagValue(priceTag),
      };

      const dosageTag = medicineTag.getElementsByTagName('dosage')[0];
      const doseTag = dosageTag.getElementsByTagName('dose')[0];
      const periodicityTag = dosageTag.getElementsByTagName('periodicity')[0];

      medicine.dosage = {
        dose: +this.retrieveTagValue(doseTag),
        periodicity: +this.retrieveTagValue(periodicityTag),
      };

      medicines.push(medicine);
    }

    return medicines;
  }

  private retrieveTagValue(targetTagName: Element): string {
    const value: string = targetTagName.childNodes[0].nodeValue;
    return value;
  }
}
