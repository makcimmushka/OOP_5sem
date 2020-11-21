import { invalidXml, invalidXsd, notCorrespondingValidXsd, validXml, validXsd } from '../test';
import { IFileReader } from '../interfaces';
import { XmlValidator } from './xml-validator';

describe('XmlValidator', () => {
  let xmlValidator: XmlValidator;
  let consoleSpy: jest.SpyInstance;

  const mockFileReader: IFileReader = {
    readFile: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    xmlValidator = new XmlValidator(mockFileReader);
    consoleSpy = jest.spyOn(global.console, 'error').mockImplementation(() => null);
  });

  it('should be defined', () => {
    expect(xmlValidator).toBeDefined();
  });

  describe('`validate`', () => {
    const xmlFile = 'file.xml';
    const xsdFile = 'file.xsd';

    it('should read files and return true for corresponding valid xml and xsd', () => {
      const readFileSpy = jest
        .spyOn(mockFileReader, 'readFile')
        .mockReturnValueOnce(validXml)
        .mockReturnValueOnce(validXsd);

      expect(xmlValidator.validate(xmlFile, xsdFile)).toEqual(true);
      expect(readFileSpy).toHaveBeenNthCalledWith(1, xmlFile);
      expect(readFileSpy).toHaveBeenNthCalledWith(2, xsdFile);
      expect(consoleSpy).not.toHaveBeenCalled();
    });

    it('should read files and return false for not corresponding valid xml and xsd', () => {
      const readFileSpy = jest
        .spyOn(mockFileReader, 'readFile')
        .mockReturnValueOnce(validXml)
        .mockReturnValueOnce(notCorrespondingValidXsd);

      expect(xmlValidator.validate(xmlFile, xsdFile)).toEqual(false);
      expect(readFileSpy).toHaveBeenNthCalledWith(1, xmlFile);
      expect(readFileSpy).toHaveBeenNthCalledWith(2, xsdFile);
      expect(consoleSpy).not.toHaveBeenCalled();
    });

    it('should read files and return false for not valid xml and log error', () => {
      const readFileSpy = jest
        .spyOn(mockFileReader, 'readFile')
        .mockReturnValueOnce(invalidXml)
        .mockReturnValueOnce(validXsd);

      expect(xmlValidator.validate(xmlFile, xsdFile)).toEqual(false);
      expect(readFileSpy).toHaveBeenNthCalledWith(1, xmlFile);
      expect(readFileSpy).toHaveBeenNthCalledWith(2, xsdFile);
      expect(consoleSpy).toHaveBeenCalled();
    });

    it('should read files and return false for not valid xsd and log error', () => {
      const readFileSpy = jest
        .spyOn(mockFileReader, 'readFile')
        .mockReturnValueOnce(validXml)
        .mockReturnValueOnce(invalidXsd);

      expect(xmlValidator.validate(xmlFile, xsdFile)).toEqual(false);
      expect(readFileSpy).toHaveBeenNthCalledWith(1, xmlFile);
      expect(readFileSpy).toHaveBeenNthCalledWith(2, xsdFile);
      expect(consoleSpy).toHaveBeenCalled();
    });
  });
});
