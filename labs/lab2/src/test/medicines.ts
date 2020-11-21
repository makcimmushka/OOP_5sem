import { Medicine } from '../classes';

export const medicinesToTest: Array<Medicine> = [
  {
    analogs: ['Bumidol', 'Deblock'],
    versions: ['Pills', 'Capsules'],
    name: 'Ibuprofen',
    pharm: 'Marbiopharm',
    group: 'Antibiotics',
    certificate: {
      number: 1,
      date: new Date('13 Jan 2020 20:35:00 GMT'),
      organization: 'Deltavit',
    },
    package: {
      type: 'Cardboard packaging',
      amount: 20,
      price: 150.5,
    },
    dosage: {
      dose: 2,
      periodicity: 4,
    },
  },
  {
    analogs: ['Drotaverin MS', 'Drotaverin Forte'],
    versions: ['Pills'],
    name: 'No-Spa',
    pharm: 'Sanofi',
    group: 'Analgetics',
    certificate: {
      number: 2,
      date: new Date('26 Oct 2019 23:53:00 GMT'),
      organization: 'Hugge',
    },
    package: {
      type: 'Plastic bottle',
      amount: 30,
      price: 315,
    },
    dosage: {
      dose: 3,
      periodicity: 3,
    },
  },
  {
    analogs: ['Nurofen', 'Aspirin', 'Nimulid'],
    versions: ['Powder', 'Pills'],
    name: 'Analgin',
    pharm: 'PharmaDelit',
    group: 'Analgetics',
    certificate: {
      number: 3,
      date: new Date('30 Dec 2020 08:07:00 GMT'),
      organization: 'Fliit',
    },
    package: {
      type: 'Cardboard packaging',
      amount: 40,
      price: 110,
    },
    dosage: {
      dose: 1,
      periodicity: 4,
    },
  },
];
