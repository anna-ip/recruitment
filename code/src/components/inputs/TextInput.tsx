import { ReactNode } from 'react';
import styled from 'styled-components/macro';
import magnifier from '../../assets/icons/magnifier.svg';

type InputType = 'text' | 'password' | 'email';

interface TextInputProps {
  type: InputType;
  label?: string;
  id?: any;
  name?: string;
  placeholder: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: boolean;
  inputText?: ReactNode;
}

export const TextInput = ({
  type,
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  icon = false,
  inputText,
}: TextInputProps) => {
  return (
    <InputContainer>
      {label && (
        <StyledLabel htmlFor={`${id}`}>
          {label}
        </StyledLabel>
      )}
      <StyledInput>
        {icon && <Icon src={magnifier} alt='Magnifier icon' />}
        <Input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {inputText && <InputText>{inputText}</InputText>}
      </StyledInput>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  margin:  0;
`;

const Icon = styled.img`
  width: 19px;
  height: auto;
  margin-left: 10px;
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 256px;
  height: 28px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px 24px;
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  border-style: none;
  padding: 0;
  ::placeholder {
    font-size: 1rem;
    margin: 0;
  }
  :focus {
    outline: none;
    border-color: none;
  }
`;

const InputText = styled.p`
  font-size: 16px;
  margin: 0;
`;