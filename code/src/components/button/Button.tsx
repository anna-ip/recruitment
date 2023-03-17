import { PropsWithChildren, SyntheticEvent } from 'react';
import styled from 'styled-components';

type ButtonType = 'button' | 'submit' | 'reset';

interface LabelProps {
  hasIcon?: boolean;
}
interface ButtonProps extends LabelProps {
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
      <StyledLabel hasIcon={icon ? true : false}>
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
  text-decoration: none;
  cursor: pointer;

  /* @media (min-width: 768px){
    width: 200px;
  } */
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledLabel = styled.p<LabelProps>`
  font-weight: 700;
  font-size:  1rem;
  text-decoration: none;
  padding: 0;
  margin: 0;
  /* display: ${(p) => p.hasIcon && 'none'};

  @media (min-width: 768px){
    display: block;
  } */
`;
