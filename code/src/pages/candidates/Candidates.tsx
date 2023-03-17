import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Button } from '../../components/button'
import { Card } from '../../components/card'
import { data } from '../../data';
import plus from '../../assets/icons/plus.svg';
import { AddCandidate } from '../addCandidate';
import { TextInput } from '../../components/inputs';

// import data and map a list of cards with candidates

export const Candidates = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [candidates, setAddCandidates] = useState([...data])

  return (
    <>
    {isOpen ? (
      <AddCandidate setIsOpen={setIsOpen} setAddCandidates={setAddCandidates}/>
    ):(
    <Container>
      <Header>
      <h1>Kandidater</h1>
      <TextInput type='text' placeholder='Sök kandidat' onChange={(e) => console.log('Sök', e.target.value)} icon/>
      <Button onClick={() => setIsOpen(!isOpen)} icon={plus}>
          Lägg till kandidat
      </Button>
      </Header>
      {candidates ? (
        <>
          <p>Kontakt</p>
          {candidates.map((candidate, index) => (
          candidate.status === 'kontakt' && (
              <Card data={candidates} updateData={setAddCandidates} key={`${candidate.name}-${index}`} name={candidate.name} age={candidate.age} email={candidate.email} street={candidate.street} postalCode={candidate.postalCode} city={candidate.city} status={candidate.status}/>      
            ))  
          )}

          <p>Dialog</p>
          {candidates.map((candidate, index) => (
          candidate.status === 'dialog' && (
              <Card data={candidates} updateData={setAddCandidates} key={`${candidate.name}-${index}`} name={candidate.name} age={candidate.age} email={candidate.email} street={candidate.street} postalCode={candidate.postalCode} city={candidate.city} status={candidate.status}/>      
            ))  
          )}

          <p>Erbjudande</p>   
          {candidates.map((candidate, index) => (
          candidate.status === 'erbjudande' && (
              <Card data={candidates} updateData={setAddCandidates} key={`${candidate.name}-${index}`} name={candidate.name} age={candidate.age} email={candidate.email} street={candidate.street} postalCode={candidate.postalCode} city={candidate.city} status={candidate.status}/>      
            ))  
          )}

          <p>Intervju</p>
          {candidates.map((candidate, index) => (
          candidate.status === 'intervju' && (
              <Card data={candidates} updateData={setAddCandidates} key={`${candidate.name}-${index}`} name={candidate.name} age={candidate.age} email={candidate.email} street={candidate.street} postalCode={candidate.postalCode} city={candidate.city} status={candidate.status}/>      
            ))  
          )}

          <p>Avslutad</p> 
          {candidates.map((candidate, index) => (
          candidate.status === 'intervju' && (
              <Card data={candidates} updateData={setAddCandidates} key={`${candidate.name}-${index}`} name={candidate.name} age={candidate.age} email={candidate.email} street={candidate.street} postalCode={candidate.postalCode} city={candidate.city} status={candidate.status}/>      
            ))  
          )}
      </>
    ) : (
      <p>Inga kandidater</p>
    )}
    </Container>
    )}
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 1rem 1rem 1rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
