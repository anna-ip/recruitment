import {ChangeEvent, useState, FormEvent} from 'react';
import styled from 'styled-components/macro';
import { TextInput } from '../inputs';
import { RadioButton } from '../inputs/RadioButton';
import { Button } from '../button';
import { data } from '../../data';

// Add Candidate information
// Name
// Age
// Email
// Adress
// Status - Kontakt, Dialog, Intervju, Erbjudande, Avslutad

// Submit data and push to data or local storage

interface FormProps {
  setIsOpen: (open: boolean) => void;
  setAddCandidates: (candidates: any) => void; 
  data?: {
    id: string;
    age: string;
    city: string;
    email: string;
    name: string;
    postalCode: string;
    status: string;
    street: string;
  };
}

export const Form = ({ setIsOpen, setAddCandidates, data }: FormProps) => {
  const [candidate, setCandidate] = useState({
    id: `candidate-${Math.random().toString(16).slice(2)}`,
    age: '',
    city: '',
    email: '',
    name: '',
    postalCode: '',
    status: '',
    street: '',
})

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCandidate({...candidate, [event?.target.name]: event?.target.value});
  }

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
    console.log('Submit form', candidate);
    setAddCandidates((current: any) => [candidate, ...current]);
    setIsOpen(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Add Candidate</Title>
      <TextInput id='name' type='text' name='name' label='Name' placeholder={data && data?.name ||'Name'} onChange={handleChange} />
      <TextInput id='age' type='text' name='age' label='Age' placeholder={data && data.age || 'Age'} onChange={handleChange} />
      <TextInput id='email' type='email' name='email' label='Email' placeholder={data && data.email ||'Email'} onChange={handleChange} />
      <TextInput id='street' type='text' name='street' label='Street'  placeholder={data && data?.street || 'Street'} onChange={handleChange} />
      <TextInput id='postalCode' type='text' name='postalCode' label='Postal Code'  placeholder={data && data?.postalCode ||'PostalCode'} onChange={handleChange} />
      <TextInput id='city' type='text' name='city' label='City'  placeholder={data && data .city || 'City'} onChange={handleChange} />
     
      <Title>Status</Title>
      <RadioButtonGroup>
        <RadioButton id='kontakt' value='kontakt' label='Kontakt' name='status' onChange={handleChange} />
        <RadioButton id='dialog' value='dialog' label='Dialog'  name='status'  onChange={handleChange} />
        <RadioButton id='intervju' value='intervju' label='Intervju' name='status' onChange={handleChange}  />
        <RadioButton id='erbjudande' value='erbjudande' label='Erbjudande' name='status' onChange={handleChange}  />
        <RadioButton id='avslutad' value='avslutad' label='Avslutad' name='status' onChange={handleChange} />
      </RadioButtonGroup>
      <ButtonWrapper>
        <Button type='button' onClick={() => setIsOpen(false)}>Tillbaka</Button>
        <Button type='submit' onClick={handleSubmit}>Add Candidate</Button>
      </ButtonWrapper>
    </StyledForm>
   
  )
}

const StyledForm = styled.form`
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100%;
  background: #ffffff;
  border-radius: 10px;
  padding: 1rem;
`

const Title = styled.p`
`;

const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 768px){
    flex-direction: row;
  }
`
