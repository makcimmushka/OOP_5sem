import * as fs from 'fs';
import * as path from 'path';
import { IFileReader } from '../interfaces';


export class FileReader implements IFileReader {
  private readonly basePath = path.join(__dirname, '..', 'resources');
  
  readFile(fileName: string): string {
    try {
      const data = fs.readFileSync(path.join(this.basePath, fileName), 'utf8');
      return data;
    } catch (e) {
      console.error('Error: ', e.stack);
    }
  }
}
