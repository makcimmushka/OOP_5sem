import { IXmlValidator, IFileReader, IMedicine } from '../interfaces';
import { XmlDomParser } from './xml-dom-parser';
import { medicineXml, medicinesToTest } from '../test';


describe('XmlDomParser', () => {
  let xmlDomParser: XmlDomParser;

  const mockFileReader: IFileReader = {
    readFile: jest.fn(),
  };

  const mockXmlValidator: IXmlValidator = {
    validate: jest.fn(),
  };

  beforeEach(() => {
    xmlDomParser = new XmlDomParser(mockFileReader, mockXmlValidator);
  });

  it('should be defined', () => {
    expect(xmlDomParser).toBeDefined();
  });

  describe('`parse`', () => {
    const xmlFile = 'file.xml';
    const xsdFile = 'file.xsd';

    it('should validate xml successfully and return array of <Medicine> classes', () => {
      const validSpy = jest.spyOn(mockXmlValidator, 'validate').mockReturnValue(true);
      const readFileSpy = jest.spyOn(mockFileReader, 'readFile').mockReturnValue(medicineXml);

      const medicines = xmlDomParser.parse(xmlFile, xsdFile);
      expect(validSpy).toHaveBeenCalledWith(xmlFile, xsdFile);
      expect(readFileSpy).toHaveBeenCalledWith(xmlFile);

      medicines.forEach((medicine, ind) => {
        expect(medicine).toMatchObject<IMedicine>(medicinesToTest[ind]);
      });
    });

    it('should validate xml unsuccessfully and return null', () => {
      const validSpy = jest.spyOn(mockXmlValidator, 'validate').mockReturnValue(false);
      const readFileSpy = jest.spyOn(mockFileReader, 'readFile');

      expect(xmlDomParser.parse(xmlFile, xsdFile)).toEqual(null);
      expect(validSpy).toHaveBeenCalledWith(xmlFile, xsdFile);
      expect(readFileSpy).not.toHaveBeenCalled();
    });
  });
});
