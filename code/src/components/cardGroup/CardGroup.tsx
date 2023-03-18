import React from 'react';
import styled from 'styled-components/macro';
import { Card } from '../card/Card';
import { CandidateType } from '../../data';

interface CardGroupProps {
  candidates: CandidateType[];
  setIsOpen: (open: boolean) => void;
  setIsEditing: (edit: boolean) => void;
  setAddCandidates: (candidates: CandidateType[]) => void;
  setCandidate: (value: CandidateType) => void;
}

export const CardGroup = ({
  candidates,
  setIsOpen,
  setIsEditing,
  setAddCandidates,
  setCandidate,
}: CardGroupProps) => {
  
  const handleEdit = (value: CandidateType) => {
    setIsOpen(true);
    setIsEditing(true);
    setCandidate(value);
  };

  const handleDeleteData = (value: string) => {
    const newValue = candidates.filter((f: CandidateType) => f.id !== value);
    setAddCandidates(newValue);
  };

  return (
    <Content>
      <SubTitle>Kontakt</SubTitle>
      {candidates &&
        candidates.map(
          (candidate) =>
            candidate.status === 'kontakt' && (
              <Card
                key={candidate.id}
                id={candidate.id}
                data={candidates}
                updateData={setAddCandidates}
                editData={() => handleEdit(candidate)}
                handleDelete={() => handleDeleteData(candidate.id)}
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
              handleDelete={() => handleDeleteData(candidate.id)}
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
              handleDelete={() => handleDeleteData(candidate.id)}
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
              handleDelete={() => handleDeleteData(candidate.id)}
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
              handleDelete={() => handleDeleteData(candidate.id)}
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
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 1rem 1rem 1rem;
`;

const SubTitle = styled.h2`
  font-family: 'Poppins';
  font-size: 1.3rem;
  font-weight: 500;
  color: #313131;
  padding: 0;
  margin: 8px 0 0 0;
`;
