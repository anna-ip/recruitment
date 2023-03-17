import React, { PropsWithChildren, ReactNode, useState } from 'react'
import styled from 'styled-components/macro';
import { typeOfStatus } from '../../data';
import dots from '../../assets/icons/dots.svg';
import trash from '../../assets/icons/delete.svg';
import edit from '../../assets/icons/edit.svg';

type StatusType = 'kontakt' | 'dialog' | 'intervju' | 'erbjudande' | 'avslutad'

interface PillProps {
  children?: ReactNode;
  status: StatusType | string;
  label?: StatusType | string;
}

interface CardProps extends PillProps {
  name: string;
  age: string;
  email: string;
  street: string;
  postalCode: string;
  city: string;
  updateData: (data: any) => void;
  data: {
    age: string;
    city: string;
    email: string;
    name: string;
    postalCode: string;
    status: string;
    street: string;
}[];
  
}

// Card with info and status pills

export const Card = ({name, age, email, street, postalCode, city, status, data, updateData}: PropsWithChildren <CardProps>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteData = (n: string) => {
    console.log('Delete Candidate')

    const newValue = data.filter((e) => e.name !== n);
    console.log(newValue);
    updateData(newValue);
  }

  return (
    <Container >
      <Row>
      <Info><LabelWrapper><Text>namn:</Text></LabelWrapper>{name}</Info>
     {!isOpen && 
     <IconButton onClick={() => setIsOpen(!isOpen)}>
        <Icon src={dots} alt={dots}/>
      </IconButton>}
     {isOpen &&
      <MoreWrapper onClick={() => setIsOpen(!open)}>
        <DeleteButton onClick={() => handleDeleteData(name)}><Icon src={trash} alt='Trash can'/></DeleteButton>
        <EditButton onClick={() => console.log('Edit Candidate')}><Icon src={edit} alt={dots}/></EditButton>
      </MoreWrapper>
      }
      </Row>
      <Info><LabelWrapper><Text>ålder:</Text></LabelWrapper> {age}</Info>
      <Info><LabelWrapper><Text>email:</Text></LabelWrapper> {email}</Info>
 
      <Adress>
      <Info><LabelWrapper><Text>adress:</Text></LabelWrapper></Info>
      <Column>
      <Info>{street}</Info>
      <City>
      <Info>{postalCode}</Info>
      <Info>{city}</Info>
      </City>
      </Column>
      </Adress>
  
      <PillContainer>
      <LabelWrapper><Text>status:</Text></LabelWrapper>
      {typeOfStatus?.map((s, index) => (
          <Pill key={`${s}-${index}`} label={s} status={status}>{s}</Pill>
          ))}
        
      </PillContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  border-radius: 8px;
  border: 1px solid black;
  padding: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

const IconButton = styled.button`
  display: flex;
  align-self: end;
  background: transparent;
  border: none;
  padding: 0.3rem;
  cursor: pointer;
`;

const DeleteButton = styled(IconButton)`
`;

const EditButton = styled(IconButton)`
`;

const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const MoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0 1rem;
  background-color: yellow;
  border: 1px solid black;
`

const LabelWrapper = styled.div`
  text-align: left;
  width: 60px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.p`
  padding: 0;
  margin: 0;
`

const Adress = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const City = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const Pill = styled.div<PillProps>`
  border-radius: 15px;
  border: 1px solid black;
  padding: 0 8px;
  margin: 0.5rem 0;
  text-transform: capitalize;
  ${(p) => 
  (p.label === 'avslutad' && 'background-color: #baf3ba') ||
  (p.label === 'dialog' && 'background-color: #adadff') ||
  (p.label === 'kontakt' && 'background-color: #eeb5ee') ||
  (p.label === 'erbjudande' && 'background-color: #ffc252') ||
  (p.label === 'intervju' && 'background-color: pink') ||
  ('background-color: grey')
  };
  opacity: ${(p) => p.status === p.label ? 1 : 0.5};
  cursor: pointer;
`;

const PillContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
`;
