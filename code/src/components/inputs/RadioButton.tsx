import styled from 'styled-components/macro';

interface RadioButtonProps {
  label: string;
  id: string | undefined;
  value: string;
  checked?: boolean;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton = ({ label, id, value, checked, name, onChange }: RadioButtonProps) => {
  return (
    <RadioButtonContainer>
      <StyledRadioButton
        type='radio'
        id={id}
        checked={checked}
        name={name}
        value={value}
        onChange={onChange}
      />
      <Label htmlFor={id}>{label}</Label>
    </RadioButtonContainer>
  );
};

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledRadioButton = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 1.5em;
  height: 1.5em;
  border: 2px solid black;
  border-radius: 50%;

  ::after {
    content: '';
    display: flex;
    border-radius: 50%;
    width: 0.75em;
    height: 0.75em;
    margin: 3px;
  }
  :checked {
    ::after {
      background-color: black;
    }
  }
`;

const Label = styled.label`
  font-size: 1rem;
  margin: 10px 0 10px 12px;
  text-transform: capitalize;
`;
