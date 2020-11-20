import * as libxml from 'libxmljs';
import { IFileReader } from '../interfaces';

export class XmlValidator {
  constructor(private readonly fileReader: IFileReader) {}

  validate(xmlFile: string, xsdFile: string): boolean {
    const xml = this.fileReader.readFile(xmlFile);
    const xsd = this.fileReader.readFile(xsdFile);

    const xsdDoc = libxml.parseXml(xsd);
    const xmlDoc = libxml.parseXml(xml);

    const isValid = xmlDoc.validate(xsdDoc);
    return isValid;
  }
}
