import * as fs from 'fs';
import { FileReader } from './file-reader';

jest.mock('fs');

describe('FileReader', () => {
  let fileReader: FileReader;

  beforeEach(() => {
    fileReader = new FileReader();
  });

  it('should be defined', () => {
    expect(fileReader).toBeDefined();
  });

  describe('`readFile`', () => {
    it('should call fs.readFileSync and return result', () => {
      const data = 'data';
      const fileName = 'fileName';
      const fsSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue(data);

      expect(fileReader.readFile(fileName)).toEqual(data);
      expect(fsSpy).toHaveBeenCalledTimes(1);
    });
  });
});
