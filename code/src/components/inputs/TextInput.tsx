import { ReactNode, InputHTMLAttributes } from 'react';
import styled from 'styled-components/macro';
import magnifier from '../../assets/icons/magnifier.svg';
import cross from '../../assets/icons/cross.svg';

type InputType = 'text' | 'search' | 'password' | 'email';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
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
      {label && <StyledLabel htmlFor={`${id}`}>{label}</StyledLabel>}
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
  width: 100%;
  margin: 5px;

  @media (min-width: 425px) {
    width: 50%;
  }
`;

const StyledLabel = styled.label`
  font-size: 16px;
  margin: 0 0 2px 16px;
`;

const Icon = styled.img`
  width: 19px;
  height: auto;
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  border: 1px solid lightgray;
  border-radius: 24px;
  padding: 16px 24px;
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

  ::-webkit-search-cancel-button {
    position: relative;
    right: 0px;
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    background-size: contain;
    background: url(${cross});
  }
`;

const InputText = styled.p`
  font-size: 16px;
  margin: 0;
`;
