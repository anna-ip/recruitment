import styled from 'styled-components';

export type StatusType = 'kontakt' | 'dialog' | 'intervju' | 'erbjudande' | 'avslutad';
interface PillProps {
  status: StatusType | string;
  label?: StatusType | string;
  updateStatus?: () => void;
}

export const Pill = ({ label, status, updateStatus }: PillProps) => {
  return (
    <StyledPill onClick={updateStatus} label={label} status={status}>
      {label}
    </StyledPill>
  );
};

const StyledPill = styled.div<PillProps>`
  font-family: 'Inter';
  font-size: 0.9rem;
  border-radius: 15px;
  padding: 2px 8px;
  text-transform: capitalize;
  ${(p) =>
    (p.label === 'avslutad' && 'background-color: #baeff1; color:#222d2f; border-color: #222f22') ||
    (p.label === 'dialog' && 'background-color: #d2adff; color:#0f0f56; border-color: #0f0f56') ||
    (p.label === 'kontakt' && 'background-color: #eeb5ee; color:#5e085e; border-color: #400e40') ||
    (p.label === 'erbjudande' &&
      'background-color: #f1be83; color:#a22107; border-color: #421c04') ||
    (p.label === 'intervju' && 'background-color: #ffc0cb; color:#73091b; border-color: #73091b') ||
    'background-color: grey'};
  opacity: ${(p) => (p.status === p.label ? 1 : 0.5)};
  cursor: pointer;
`;
