import React, { PropsWithChildren, useState } from 'react';
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
  editData: (value: any) => void;
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
}

export const Card = ({
  id,
  name,
  age,
  email,
  street,
  postalCode,
  city,
  status,
  data,
  updateData,
  editData,
}: PropsWithChildren<CardProps>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDeleteData = (value: string) => {
    const newValue = data.filter((f) => f.id !== value);
    updateData(newValue);
  };

  const handleUpdateStatus = (idValue: string, value: string) => {
    const newState = data.map((obj) => (obj.id === idValue ? { ...obj, status: value } : obj));
    updateData(newState);
  };

  return (
    <Container>
      <Row>
        <Info>
          <LabelWrapper>
            <Text>namn:</Text>
          </LabelWrapper>
          <Text>{name}</Text>
        </Info>
        {!isOpen && (
          <IconButton onClick={() => setIsOpen(!isOpen)}>
            <Icon src={dots} alt={dots} />
          </IconButton>
        )}
        {isOpen && (
          <MoreWrapper onClick={() => setIsOpen(!open)}>
            <DeleteButton onClick={() => handleDeleteData(id)}>
              <Icon src={trash} alt='Trash can' />
            </DeleteButton>
            <EditButton onClick={editData}>
              <Icon src={edit} alt={dots} />
            </EditButton>
          </MoreWrapper>
        )}
      </Row>
      <Info>
        <LabelWrapper>
          <Text>ålder:</Text>
        </LabelWrapper>
        <Text>{age}</Text>
      </Info>
      <Info>
        <LabelWrapper>
          <Text>email:</Text>
        </LabelWrapper>
        <Text>{email}</Text>
      </Info>

      <Adress>
        <Info>
          <LabelWrapper>
            <Text>adress:</Text>
          </LabelWrapper>
        </Info>
        <Column>
          <Info>
            <Text>{street}</Text>
          </Info>
          <City>
            <Info>
              <Text>{postalCode}</Text>
            </Info>
            <Info>
              <Text>{city}</Text>
            </Info>
          </City>
        </Column>
      </Adress>

      <PillContainer>
        <LabelWrapper>
          <Text>status:</Text>
        </LabelWrapper>
        <PillWrapper>
        {typeOfStatus?.map((s, index) => (
          <Pill
            updateStatus={() => handleUpdateStatus(id, s)}
            key={`${s}-${index}`}
            label={s}
            status={status}
          />
        ))}
        </PillWrapper>
      </PillContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 7px 10px 30px -6px rgba(202, 201, 201, 0.52);

`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

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
`;

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
  font-family: 'Inter';
`;

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
  align-items: baseline;
  gap: 10px;
`;

const PillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;
