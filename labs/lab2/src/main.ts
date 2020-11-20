import { FileReader } from './classes/file-reader';
import { XmlValidator } from './classes/xml-validator';

const fileReader = new FileReader();

const validator = new XmlValidator(fileReader);

console.log(validator.validate('test.xml', 'test.xsd'));
