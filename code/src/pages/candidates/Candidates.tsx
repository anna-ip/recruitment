import React, { useState, Fragment } from 'react';
import styled from 'styled-components/macro';
import { Header } from '../../components/header';
import { AddCandidate } from '../addCandidate';
import { CardGroup } from '../../components/cardGroup';
import { CandidateType, data } from '../../data';

export const Candidates = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
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
          <Header
            data={data}
            setIsOpen={setIsOpen}
            setAddCandidates={setAddCandidates}
            isOpen={isOpen}
          />

          {candidates ? (
            <CardGroup
              candidates={candidates}
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
  color: #313131;
  padding: 0;
  margin: 8px 0 0 0;
`;
