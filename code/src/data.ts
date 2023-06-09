export const data = [
  {
    id: 'candidate-3682ac107e53b',
    age: '40',
    city: 'Hello',
    email: 'dabsm@bsfa',
    name: 'Anna',
    postalCode: '12365',
    status: 'dialog',
    street: 'Eva B',
  },
  {
    id: 'candidate-9c8d20bcfea9d',
    age: '23',
    city: 'Celeryville',
    email: 'faithlloyd@flotonic.com',
    name: 'Faith Lloyd',
    postalCode: '53558',
    status: 'contact',
    street: 'Moultrie Street',
  },
  {
    id: 'candidate-e446fcc3defc3',
    age: '59',
    city: 'Vernon',
    email: 'banksdurham@flotonic.com',
    name: 'Banks Durham',
    postalCode: '48453',
    status: 'interview',
    street: 'Quentin Street',
  },
  {
    id: 'candidate-3682ac107e56a',
    age: '28',
    name: 'Mcknight Rivas',
    email: 'mcknightrivas@flotonic.com',
    street: 'Coyle Street',
    postalCode: '88410',
    status: 'offer',
    city: 'Strykersville',
  },
  {
    id: 'candidate-3682ac107e5a8',
    age: '48',
    name: 'Lancaster Hughes',
    email: 'lancasterhughes@flotonic.com',
    street: 'Hawthorne Street',
    postalCode: '64874',
    status: 'completed',
    city: 'Kula',
  },
  {
    id: 'candidate-3682ac107e57s',
    age: '36',
    name: 'Lee Elliott',
    email: 'leeelliott@flotonic.com',
    street: 'Will Place',
    postalCode: '66328',
    status: 'dialog',
    city: 'Carbonville',
  },
];

export const typeOfStatus = ['contact', 'interview', 'offer', 'dialog', 'completed'];

export type CandidateType = {
  id: string;
  age: string;
  city: string;
  email: string;
  name: string;
  postalCode: string;
  status: string;
  street: string;
};
