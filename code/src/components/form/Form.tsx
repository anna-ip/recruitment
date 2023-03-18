import { ChangeEvent, useState, FormEvent } from 'react';
import styled from 'styled-components/macro';
import { TextInput } from '../inputs';
import { RadioButton } from '../inputs/RadioButton';
import { Button } from '../button';
import { typeOfStatus } from '../../data';
interface FormProps {
  setIsOpen: (open: boolean) => void;
  setAddCandidates: (candidates: any) => void;
  isEditing?: boolean;
  setIsEditing: (edit: boolean) => void;
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

export const Form = ({ setIsOpen, setAddCandidates, data, isEditing, setIsEditing }: FormProps) => {
  const [candidate, setCandidate] = useState(
    isEditing && data
      ? data
      : {
          id: `candidate-${Math.random().toString(16).slice(2)}`,
          age: '',
          city: '',
          email: '',
          name: '',
          postalCode: '',
          status: '',
          street: '',
        },
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCandidate({ ...candidate, [event?.target.name]: event?.target.value });
  };

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();

    setAddCandidates((current: any) => {
      const newValue = current.filter((f: any) => f.id !== candidate.id);
      return [candidate, ...newValue];
    });

    setIsEditing(false);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsEditing(false);
    setIsOpen(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Kandidat</Title>
      <TextInput
        id='name'
        type='text'
        name='name'
        label='Namn'
        value={candidate.name}
        onChange={handleChange}
      />
      <TextInput
        id='age'
        type='text'
        name='age'
        label='Ålder'
        value={candidate.age}
        onChange={handleChange}
      />
      <TextInput
        id='email'
        type='email'
        name='email'
        label='Email'
        value={candidate.email}
        onChange={handleChange}
      />
      <TextInput
        id='street'
        type='text'
        name='street'
        label='Gata'
        value={candidate.street}
        onChange={handleChange}
      />
      <TextInput
        id='postalCode'
        type='text'
        name='postalCode'
        label='Postkod'
        value={candidate.postalCode}
        onChange={handleChange}
      />
      <TextInput
        id='city'
        type='text'
        name='city'
        label='Stad'
        value={candidate.city}
        onChange={handleChange}
      />

      {!isEditing && (
        <RadioButtonGroup>
          <SubTitle>Status</SubTitle>
          {typeOfStatus.map((status, index) => (
            <RadioButton
              key={`radio-${index}`}
              id={status}
              value={status}
              label={status}
              name='status'
              onChange={handleChange}
            />
          ))}
        </RadioButtonGroup>
      )}
      <ButtonWrapper>
        <Button type='button' onClick={handleClose}>
          Tillbaka
        </Button>
        <Button type='submit' onClick={handleSubmit} inverted>
          {isEditing ? 'Uppdatera' : 'Lägg till'}
        </Button>
      </ButtonWrapper>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: auto;
  background: #ffffff;
  border-radius: 10px;
  padding: 1rem;
  gap: 4px;
`;

const Title = styled.h2`
  font-family: 'Poppins';
`;

const SubTitle = styled.h3`
  font-family: 'Poppins';
  text-align: left;
`;

const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 425px) {
    flex-direction: row;
    gap: 0.5rem;
  }
`;
