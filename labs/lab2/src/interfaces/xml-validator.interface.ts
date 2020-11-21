export interface IXmlValidator {
  validate(xmlFile: string, xsdFile: string): boolean;
}
