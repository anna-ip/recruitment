import { PropsWithChildren, SyntheticEvent } from 'react';
import styled from 'styled-components';

type ButtonType = 'button' | 'submit' | 'reset';
interface StyleButtonProps {
  inverted?: boolean;
}
interface ButtonProps extends StyleButtonProps {
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
  inverted,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton type={type} onClick={onClick} inverted={inverted}>
      <>
        {icon && <Icon src={icon} alt={icon} />}
        <StyledLabel inverted={inverted}>{children}</StyledLabel>
      </>
    </StyledButton>
  );
};

const StyledButton = styled.button<StyleButtonProps>`
  display: flex;
  background-color: ${(p) => (p.inverted ? '#ab57ab' : '#ffffff')};
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: ${(p) => (p.inverted ? '0px' : ' 1px solid #313131')};
  text-decoration: none;
  cursor: pointer;

  @media (min-width: 425px) {
    width: 200px;
  }
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 4px;
`;

const StyledLabel = styled.p<StyleButtonProps>`
  font-weight: 600;
  font-size: 1rem;
  font-family: 'Inter';
  color: ${(p) => (p.inverted ? '#ffffff' : '#313131')};
  text-decoration: none;
  padding: 0;
  margin: 0;
`;
