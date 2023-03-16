import { PropsWithChildren, SyntheticEvent } from 'react';
import styled from 'styled-components';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  type?: ButtonType;
  onClick: (e: SyntheticEvent) => void;
  width?: string;
  marginLeft?: number;
}

export const Button = ({
  type = 'button',
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
    >
      <StyledLabel>
        {children}
      </StyledLabel>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  background-color: white;
  width: '150px';
  height: 60px;
  width: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: 15px;
  text-decoration: none;
  cursor: pointer;
`;

const StyledLabel = styled.p`
  font-weight: 700;
  font-size:  1rem;
  text-decoration: none;
`;
