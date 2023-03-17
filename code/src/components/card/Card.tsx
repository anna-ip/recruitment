import React, { PropsWithChildren, useState } from 'react'
import styled from 'styled-components/macro';
import { typeOfStatus } from '../../data';
import dots from '../../assets/icons/dots.svg';
import trash from '../../assets/icons/delete.svg';
import edit from '../../assets/icons/edit.svg';
import { Pill } from '../pill';
import { StatusType } from '../pill/Pill';
interface CardProps {
  id: string;
  name: string;
  age: string;
  email: string;
  street: string;
  postalCode: string;
  city: string;
  status: StatusType;
  updateData: (data: any) => void;
  editData: () => void;
  data: {
    id: string;
    age: string;
    city: string;
    email: string;
    name: string;
    postalCode: string;
    status: string;
    street: string;
}[];
};

export const Card = ({id, name, age, email, street, postalCode, city, status, data, updateData, editData}: PropsWithChildren <CardProps>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteData = (value: string) => {
    const newValue = data.filter((f) => f.id !== value);
    updateData(newValue);
  }

  const handleUpdateStatus = (idValue: string, value: string) => {
    const newState = data.map(obj =>
      obj.id === idValue ? { ...obj, status: value } : obj
  );
    updateData(newState);
  }

  return (
    <Container>
      <Row>
      <Info ><LabelWrapper ><Text>namn:</Text></LabelWrapper>{name}</Info>
     {!isOpen && 
     <IconButton onClick={() => setIsOpen(!isOpen)}>
        <Icon src={dots} alt={dots}/>
      </IconButton>}
     {isOpen &&
      <MoreWrapper onClick={() => setIsOpen(!open)}>
        <DeleteButton onClick={() => handleDeleteData(id)}><Icon src={trash} alt='Trash can'/></DeleteButton>
        <EditButton onClick={editData}><Icon src={edit} alt={dots}/></EditButton>
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
          <Pill updateStatus={() => handleUpdateStatus(id, s)} key={`${s}-${index}`} label={s} status={status}/>
        ))}
      </PillContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
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
  padding: 0.2rem;
  cursor: pointer;
`;

const DeleteButton = styled(IconButton)`
  /* padding: 0.2rem; */
`;

const EditButton = styled(IconButton)`
  /* padding: 0.2rem; */
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
  border: 1px solid black;
`

const LabelWrapper = styled.div`
  text-align: left;
  width: 60px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.2rem;
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

const PillContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
`;
