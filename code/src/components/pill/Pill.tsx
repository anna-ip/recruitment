import styled from 'styled-components';

export type StatusType = 'contact' | 'dialog' | 'interview' | 'offer' | 'completed';
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

const StyledPill = styled.button<PillProps>`
  font-family: 'Inter';
  font-size: 0.9rem;
  border-radius: 15px;
  border-width: 1px;
  padding: 2px 8px;
  text-transform: capitalize;
  ${(p) =>
    (p.label === 'completed' && 'background-color: #baeff1; color:#222d2f; border-color: #222f22') ||
    (p.label === 'dialog' && 'background-color: #d2adff; color:#0f0f56; border-color: #0f0f56') ||
    (p.label === 'contact' && 'background-color: #eeb5ee; color:#5e085e; border-color: #400e40') ||
    (p.label === 'offer' &&
      'background-color: #f1be83; color:#6A1706; border-color: #6A1706') ||
    (p.label === 'interview' && 'background-color: #ffc0cb; color:#73091b; border-color: #73091b') ||
    'background-color: grey'};
  opacity: ${(p) => (p.status === p.label ? 1 : 0.5)};
  cursor: pointer;
`;
