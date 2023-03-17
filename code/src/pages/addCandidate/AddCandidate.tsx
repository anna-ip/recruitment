import styled from 'styled-components/macro';
import { Form } from '../../components/form';

interface AddCandidateProps {
  setIsOpen: (open: boolean) => void;
  setAddCandidates: (candidates: any) => void;
  isEditing: boolean;
  setIsEditing: (edit: boolean) => void;
  data?: {
    id: string;
    age: string;
    city: string;
    email: string;
    name: string;
    postalCode: string;
    status: string;
    street: string;
  };
}

export const AddCandidate = ({ setIsOpen, setAddCandidates, data, isEditing, setIsEditing }: AddCandidateProps) => {
  return (
    <Background>
      <Form data={data} isEditing={isEditing} setIsEditing={setIsEditing} setIsOpen={setIsOpen} setAddCandidates={setAddCandidates} />
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
