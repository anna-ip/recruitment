import {ChangeEvent, useState} from 'react';
import styled from 'styled-components/macro';
import { TextInput } from '../inputs';
import { RadioButton } from '../inputs/RadioButton';
import { Button } from '../button';

// Add Candidate information
// Name
// Age
// Email
// Adress
// Status - Kontakt, Dialog, Intervju, Erbjudande, Avslutad

// Submit data and push to data or local storage

export const Form = () => {
  const [candidate, setCandidate] = useState({})

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCandidate({...candidate, [event?.target.name]: event?.target.value});
  }

  const handleSubmit = () => {
    event?.preventDefault();
    console.log('Submit form', candidate);
  }
  return (
    <Background>
    <StyledForm onSubmit={handleSubmit}>
      <Title>Add Candidate</Title>
      <TextInput id='name' type='text' name='name' label='Name' placeholder='Name' onChange={handleChange} />
      <TextInput id='age' type='text' name='age' label='Age' placeholder='Age' onChange={handleChange} />
      <TextInput id='email' type='email' name='email' label='Email' placeholder='Email' onChange={handleChange} />
      <TextInput id='street' type='text' name='street' label='Street'  placeholder='Street' onChange={handleChange} />
      <TextInput id='postalCode' type='text' name='postalCode' label='Postal Code'  placeholder='PostalCode' onChange={handleChange} />
      <TextInput id='city' type='text' name='city' label='City'  placeholder='City' onChange={handleChange} />
     
      <Title>Status</Title>
      <RadioButtonGroup>
      <RadioButton id='kontakt' value='kontakt' label='Kontakt' name='status' defaultChecked onChange={handleChange} />
      <RadioButton id='dialog' value='dialog' label='Dialog'  name='status'  onChange={handleChange} />
      <RadioButton id='intervju' value='intervju' label='Intervju' name='status' onChange={handleChange}  />
      <RadioButton id='erbjudande' value='erbjudande' label='Erbjudande' name='status' onChange={handleChange}  />
      <RadioButton id='avslutad' value='avslutad' label='Avslutad' name='status' onChange={handleChange} />
      </RadioButtonGroup>
      <Button type='submit' onClick={handleSubmit}>Add Candidate</Button>
    </StyledForm>
    </Background>
  )
}


const Background = styled.div`
  display: flex;
  justify-content: center;
  background: grey;
`

const StyledForm = styled.form`
  align-items: center;
  width: 50%;
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
