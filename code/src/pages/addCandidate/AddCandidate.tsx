import styled from 'styled-components/macro';
import { Form } from '../../components/form';

interface AddCandidateProps {
  setIsOpen: (open: boolean) => void;
  setAddCandidates: (candidates: any) => void; 
}

export const AddCandidate = ({setIsOpen, setAddCandidates} : AddCandidateProps) => {
  return (
    <Background>
      <Form setIsOpen={setIsOpen} setAddCandidates={setAddCandidates}/>
    </Background>
  )
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  background: grey;
`
