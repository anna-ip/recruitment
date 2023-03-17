import React, { useState, Fragment, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Button } from '../../components/button';
import { Card } from '../../components/card';
import { data } from '../../data';
import add from '../../assets/icons/add.svg';
import { AddCandidate } from '../addCandidate';
import { TextInput } from '../../components/inputs';

// import data and map a list of cards with candidates

export const Candidates = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [candidates, setAddCandidates] = useState([...data]);
  const [candidate, setCandidate] = useState()

  const handleSearch = (e: any) => {
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

  const handleEdit = (value: any) => {
    console.log(value);
    console.log('isEdit', isEditing);
    setIsOpen(true);
    setIsEditing(true);
    setCandidate(value);
  }

  return (
    <>
      {isOpen ? (
        <AddCandidate data={candidate} isEditing={isEditing} setIsEditing={setIsEditing} setIsOpen={setIsOpen} setAddCandidates={setAddCandidates} />
      ) : (
        <Container>
          <Header>
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
          </Header>

          {candidates ? (
            <>
              <Content>
                <SubTitle>Kontakt</SubTitle>
                {candidates.map(
                  (candidate) =>
                    candidate.status === 'kontakt' &&
                      <Card
                        key={candidate.id}
                        id={candidate.id}
                        data={candidates}
                        updateData={setAddCandidates}
                        editData={() => handleEdit(candidate)}
                        name={candidate.name}
                        age={candidate.age}
                        email={candidate.email}
                        street={candidate.street}
                        postalCode={candidate.postalCode}
                        city={candidate.city}
                        status={candidate.status}
                      />
                )}

                <SubTitle>Intervju</SubTitle>
                {candidates.map(
                  (candidate) =>
                    candidate.status === 'intervju' && (
                      <Card
                        key={candidate.id}
                        id={candidate.id}
                        data={candidates}
                        updateData={setAddCandidates}
                        editData={() => handleEdit(candidate)}
                        name={candidate.name}
                        age={candidate.age}
                        email={candidate.email}
                        street={candidate.street}
                        postalCode={candidate.postalCode}
                        city={candidate.city}
                        status={candidate.status}
                      />
                    ),
                )}

                <SubTitle>Erbjudande</SubTitle>
                {candidates.map(
                  (candidate) =>
                    candidate.status === 'erbjudande' && (
                      <Card
                        key={candidate.id}
                        id={candidate.id}
                        data={candidates}
                        updateData={setAddCandidates}
                        editData={() => handleEdit(candidate)}
                        name={candidate.name}
                        age={candidate.age}
                        email={candidate.email}
                        street={candidate.street}
                        postalCode={candidate.postalCode}
                        city={candidate.city}
                        status={candidate.status}
                      />
                    ),
                )}

                <SubTitle>Dialog</SubTitle>
                {candidates.map(
                  (candidate) =>
                    candidate.status === 'dialog' && (
                      <Card
                        key={candidate.id}
                        id={candidate.id}
                        data={candidates}
                        updateData={setAddCandidates}
                        editData={() => handleEdit(candidate)}
                        name={candidate.name}
                        age={candidate.age}
                        email={candidate.email}
                        street={candidate.street}
                        postalCode={candidate.postalCode}
                        city={candidate.city}
                        status={candidate.status}
                      />
                    ),
                )}

                <SubTitle>Avslutad</SubTitle>
                {candidates.map(
                  (candidate) =>
                    candidate.status === 'avslutad' && (
                      <Card
                        key={candidate.id}
                        id={candidate.id}
                        data={candidates}
                        updateData={setAddCandidates}
                        editData={() => handleEdit(candidate)}
                        name={candidate.name}
                        age={candidate.age}
                        email={candidate.email}
                        street={candidate.street}
                        postalCode={candidate.postalCode}
                        city={candidate.city}
                        status={candidate.status}
                      />
                    ),
                )}
              </Content>
            </>
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

const Header = styled.header`
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

const SubTitle = styled.h2`
  font-family: 'Poppins';
  font-size: 1.3rem;
  font-weight: 500;
  color: #313131;
  padding: 0;
  margin: 8px 0 0 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 1rem 1rem 1rem;
`;
