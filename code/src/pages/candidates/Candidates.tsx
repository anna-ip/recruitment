import React, { useState, Fragment } from 'react';
import styled from 'styled-components/macro';
import { Header } from '../../components/header';
import { AddCandidate } from '../addCandidate';
import { CardGroup } from '../../components/cardGroup';
import { CandidateType, data } from '../../data';

export const Candidates = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [candidates, setAddCandidates] = useState<CandidateType[]>([...data]);
  const [candidate, setCandidate] = useState<CandidateType>({
    id: '',
    age: '',
    city: '',
    email: '',
    name: '',
    postalCode: '',
    status: '',
    street: '',
  });

  const filteredData = candidates.filter((value: CandidateType) => {
    if (searchValue === '') {
      return value;
    } else {
      const newValue =
        value.name.toLowerCase().includes(searchValue) ||
        value.status.toLowerCase().includes(searchValue) ||
        value.city.toLowerCase().includes(searchValue);
      return newValue;
    }
  });

  return (
    <>
      {isOpen ? (
        <AddCandidate
          data={candidate}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setIsOpen={setIsOpen}
          setAddCandidates={setAddCandidates}
        />
      ) : (
        <Container>
          <Header setIsOpen={setIsOpen} isOpen={isOpen} setQuery={setSearchValue} />

          {candidates.length > 0 ? (
            <CardGroup
              candidates={filteredData}
              setAddCandidates={setAddCandidates}
              setCandidate={setCandidate}
              setIsEditing={setIsEditing}
              setIsOpen={setIsOpen}
            />
          ) : (
            <SubTitle>Inga kandidater</SubTitle>
          )}
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.h2`
  font-family: 'Poppins';
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  color: #313131;
  padding: 0;
  margin: 8px 0 0 0;
`;
