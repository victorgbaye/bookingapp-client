// // Calendar.tsx
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import moment, { Moment } from 'moment';
// import Header from './Header';
// import DayCell from './DayCell';

// const CalendarWrapper = styled.div`
//   font-family: var(--global-typography-fontFamily-body, 'Inter', sans-serif);
//   color: var(--text-primary);
//   background-color: var(--background-canvas);
//   border-radius: var(--global-radius-8);
//   box-shadow: var(--global-shadow-small);
//   overflow: hidden;
//   width: 300px; /* Set the desired width */
// `;

// interface CalendarProps {
//   // Define any additional props you may need
// }

// const Calendarr: React.FC<CalendarProps> = ({ /* Pass any necessary props here */ }) => {
//   const [currentMonth, setCurrentMonth] = useState<Moment>(moment());

//   useEffect(() => {
//     // Add any additional initialization logic here
//   }, []);

//   const nextMonth = () => {
//     setCurrentMonth(currentMonth.clone().add(1, 'month'));
//   };

//   const prevMonth = () => {
//     setCurrentMonth(currentMonth.clone().subtract(1, 'month'));
//   };

//   const renderDays = (): JSX.Element[] => {
//     const days: JSX.Element[] = [];
//     const daysInMonth = currentMonth.daysInMonth();

//     for (let day = 1; day <= daysInMonth; day++) {
//       const date = currentMonth.clone().date(day);
//       days.push(<DayCell key={date.toString()} date={date} />);
//     }

//     return days;
//   };

//   return (
//     <CalendarWrapper>
//       <Header currentMonth={currentMonth} nextMonth={nextMonth} prevMonth={prevMonth} />
//       <div>
//         {/* Render the days */}
//         {renderDays()}
//       </div>
//     </CalendarWrapper>
//   );
// };

// export default Calendarr;


import React from 'react';
import styled from 'styled-components';

// Styled components
const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const WeekdaysRow = styled.div`
  display: flex;
`;

const DayColumn = styled.div`
  ${(props: { style: React.CSSProperties }) => `
    flex: ${props.style.flex};
    border-right: ${props.style.borderRight};
  `}
`;

const Event = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
`;

interface IEvent {
  time: string;
  title: string;
  color: string;
}

interface IDay {
  date: string;
  events: IEvent[];
}

interface ICalendarProps {
  week: IDay[];
  generateDayColumnStyles: (index: number) => React.CSSProperties; // New prop for generating day column styles
}

// Calendar component
const Calendarrr: React.FC<ICalendarProps> = ({ week, generateDayColumnStyles }) => {
  return (
    <CalendarWrapper>
      <WeekdaysRow>
        {week.map((day, index) => (
          <DayColumn key={day.date} style={generateDayColumnStyles(index)}>
            {day.events.map(event => (
              <Event key={event.title} color={event.color}>
                {event.time} - {event.title}
              </Event>
            ))}
          </DayColumn>
        ))}
      </WeekdaysRow>
    </CalendarWrapper>
  );
};

export default Calendarrr;
