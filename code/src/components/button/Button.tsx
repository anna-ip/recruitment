import { PropsWithChildren, SyntheticEvent } from 'react';
import styled from 'styled-components';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  type?: ButtonType;
  onClick: (e: SyntheticEvent) => void;
  width?: string;
  marginLeft?: number;
  icon?: string; 
}

export const Button = ({
  type = 'button',
  onClick,
  icon,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
    >
      <>
      {icon && <Icon src={icon} alt={icon}/>}
      <StyledLabel>
        {children}
      </StyledLabel>
      </>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  background-color: white;
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: 15px;
  text-decoration: none;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledLabel = styled.p`
  font-weight: 700;
  font-size:  1rem;
  text-decoration: none;
  padding: 0;
  margin: 0;
`;
