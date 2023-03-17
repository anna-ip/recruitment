import styled from 'styled-components';


export type StatusType = 'kontakt' | 'dialog' | 'intervju' | 'erbjudande' | 'avslutad';
interface PillProps {
  status: StatusType | string;
  label?: StatusType | string;
  updateStatus?: () => void;
}

export const Pill = ({label, status, updateStatus}:PillProps) => {
  return (
    <StyledPill onClick={updateStatus} label={label} status={status}>{label}</StyledPill>
  )
};

const StyledPill = styled.div<PillProps>`
  border-radius: 15px;
  border: 1px solid black;
  padding: 0 8px;
  margin: 0.5rem 0;
  text-transform: capitalize;
  ${(p) => 
  (p.label === 'avslutad' && 'background-color: #baf3ba') ||
  (p.label === 'dialog' && 'background-color: #adadff') ||
  (p.label === 'kontakt' && 'background-color: #eeb5ee') ||
  (p.label === 'erbjudande' && 'background-color: #ffc252') ||
  (p.label === 'intervju' && 'background-color: pink') ||
  ('background-color: grey')
  };
  opacity: ${(p) => p.status === p.label ? 1 : 0.5};
  cursor: pointer;
`;
