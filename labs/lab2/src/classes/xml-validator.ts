import * as libxml from 'libxmljs';
import { IXmlValidator, IFileReader } from '../interfaces/';

export class XmlValidator implements IXmlValidator {
  constructor(private readonly fileReader: IFileReader) {}

  validate(xmlFile: string, xsdFile: string): boolean {
    try {
      const xml = this.fileReader.readFile(xmlFile);
      const xsd = this.fileReader.readFile(xsdFile);

      const xsdDoc = libxml.parseXml(xsd);
      const xmlDoc = libxml.parseXml(xml);

      const isValid = xmlDoc.validate(xsdDoc);
      return isValid;
    } catch (e) {
      console.error(e.message);
      return false;
    }
  }
}
