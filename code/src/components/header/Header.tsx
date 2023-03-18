import React from 'react';
import styled from 'styled-components/macro';
import { TextInput } from '../inputs';
import { Button } from '../button';
import add from '../../assets/icons/add.svg';
import { CandidateType } from '../../data';

interface HeaderProps {
  setAddCandidates: (data: CandidateType[]) => void;
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  data: CandidateType[];
}

export const Header = ({ data, setAddCandidates, setIsOpen, isOpen }: HeaderProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 2) {
      setAddCandidates([...data]);
    } else {
      const searchedValue = data.filter(
        (f) => f.name === value || f.city === value || f.status === value.toLowerCase(),
      );
      setAddCandidates(searchedValue);
    }
  };

  return (
    <StyledHeader>
      <Title>Kandidater</Title>
      <TextInput
        type='search'
        placeholder='Sök kandidat'
        id='sök'
        name='sök'
        onChange={(e) => handleSearch(e)}
        icon
      />
      <Button onClick={() => setIsOpen(!isOpen)} icon={add} inverted>
        Lägg till kandidat
      </Button>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  background-color: #ffffff;
  padding: 0 1rem 1rem 1rem;
  box-shadow: 0px 10px 30px -6px rgba(225, 224, 224, 0.52);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled.h1`
  font-family: 'Poppins';
  color: #313131;
`;
