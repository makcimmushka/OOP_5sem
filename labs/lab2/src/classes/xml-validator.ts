import { FileReader } from './file-reader';
import * as libxml from 'libxmljs';

export class XmlValidator {
  constructor(private readonly fileReader: FileReader) {}

  validate(xmlPath: string, xsdPath: string): boolean {
    const xml = this.fileReader.readFile(xmlPath);
    const xsd = this.fileReader.readFile(xsdPath);
    
    const xsdDoc = libxml.parseXml(xsd);
    const xmlDoc = libxml.parseXml(xml);

    const isValid = xmlDoc.validate(xsdDoc);
    return isValid;
  }
}
