// DayCell.tsx
import React from 'react';
import styled from 'styled-components';
import  { Moment } from 'moment';

const DayCellWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  font-size: var(--global-typography-text-2-fontSize);
  font-weight: var(--global-typography-text-2-fontWeight);
  color: var(--text-secondary);
  border-radius: var(--global-radius-4);
  cursor: pointer;

  &:hover {
    background-color: var(--background-accent-hover);
  }
`;

interface DayCellProps {
  date?: Moment;
}

const DayCell: React.FC<DayCellProps> = ({ date }) => {
  return (
    <DayCellWrapper>
      {date ? date.format('D') : ''}
    </DayCellWrapper>
  );
};

export default DayCell;
