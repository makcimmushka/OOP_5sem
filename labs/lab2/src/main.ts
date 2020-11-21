import { FileReader, XmlDomParser, XmlValidator } from './classes';


const fileReader = new FileReader();
const xmlValidator = new XmlValidator(fileReader);

// console.log(xmlValidator.validate('medicine.xml', 'medicine.xsd'));

const parser = new XmlDomParser(fileReader, xmlValidator);

console.log(parser.parse('medicine.xml', 'medicine.xsd'));
