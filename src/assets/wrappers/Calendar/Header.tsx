// Header.tsx
import React from 'react';
import styled from 'styled-components';
import  { Moment } from 'moment';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--global-spacing-4);
  background-color: var(--background-accent);
  color: var(--text-onPrimary);
`;

interface HeaderProps {
  currentMonth: Moment;
  nextMonth: () => void;
  prevMonth: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentMonth, nextMonth, prevMonth }) => {
  return (
    <HeaderWrapper>
      <button onClick={prevMonth}>{'<'}</button>
      <span>{currentMonth.format('MMMM YYYY')}</span>
      <button onClick={nextMonth}>{'>'}</button>
    </HeaderWrapper>
  );
};

export default Header;
