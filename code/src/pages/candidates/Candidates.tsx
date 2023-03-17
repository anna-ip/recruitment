import React, { useState, Fragment, useEffect } from 'react'
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
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [candidates, setAddCandidates] = useState([...data])

  const handleSearch = (e: any) => {
    const value = e.target.value;
    if (value.length <= 2) {
      setAddCandidates([...data]);
    } else {
      const searchedValue = data.filter((f) => 
      f.name === value || 
      f.city === value || 
      f.status === value.toLowerCase());
      setAddCandidates(searchedValue);
    }
  };

  return (
    <>
    {isOpen ? (
      <AddCandidate setIsOpen={setIsOpen} setAddCandidates={setAddCandidates}/>
    ):(
    <Container>
      <Header>
        <h1>Kandidater</h1>
        <TextInput type='search' placeholder='Sök kandidat' id='sök' name='sök' onChange={(e) => handleSearch(e)} icon />
        <Button onClick={() => setIsOpen(!isOpen)} icon={plus}>
          Lägg till kandidat
        </Button>
      </Header>
    
      {candidates ? (
        <>
          <Content>
          <p>Kontakt</p>
          {candidates.map((candidate) => (
          candidate.status === 'kontakt' && (
            isEditing ? 
              (<AddCandidate data={candidate} setIsOpen={setIsOpen} setAddCandidates={setAddCandidates}/> ): 
              ( <Card key={candidate.id} id={candidate.id} data={candidates} updateData={setAddCandidates}  editData={() => setIsEditing(!isEditing)} name={candidate.name} age={candidate.age} email={candidate.email} street={candidate.street} postalCode={candidate.postalCode} city={candidate.city} status={candidate.status}/> )     
            ) 
          ))}

          <p>Intervju</p>
            {candidates.map((candidate) => (
              candidate.status === 'intervju' && (
                <Card key={candidate.id} id={candidate.id} data={candidates} updateData={setAddCandidates} editData={() => setIsOpen(!isOpen)} name={candidate.name} age={candidate.age} email={candidate.email} street={candidate.street} postalCode={candidate.postalCode} city={candidate.city} status={candidate.status}/>      
              ))  
            )}  

          <p>Erbjudande</p>   
          {candidates.map((candidate) => (
          candidate.status === 'erbjudande' && (
            <Card key={candidate.id} id={candidate.id} data={candidates} updateData={setAddCandidates} editData={() => setIsOpen(!isOpen)} name={candidate.name} age={candidate.age} email={candidate.email} street={candidate.street} postalCode={candidate.postalCode} city={candidate.city} status={candidate.status}/>      
            ))  
          )}

          <p>Dialog</p>
            {candidates.map((candidate) => (
              candidate.status === 'dialog' && (
                <Card key={candidate.id} id={candidate.id} data={candidates} updateData={setAddCandidates} editData={() => setIsOpen(!isOpen)} name={candidate.name} age={candidate.age} email={candidate.email} street={candidate.street} postalCode={candidate.postalCode} city={candidate.city} status={candidate.status}/>      
              ))  
            )}

          <p>Avslutad</p> 
          {candidates.map((candidate) => (
            candidate.status === 'avslutad' && (
              <Card key={candidate.id} id={candidate.id} data={candidates} updateData={setAddCandidates} editData={() => setIsOpen(!isOpen)} name={candidate.name} age={candidate.age} email={candidate.email} street={candidate.street} postalCode={candidate.postalCode} city={candidate.city} status={candidate.status}/>      
            ))
          )}
        </Content>
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`
