import moment, { Moment } from 'moment';
import styled from 'styled-components';
import React, { RefObject, useEffect } from 'react';

const WeekCalendarContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 100%;
  margin: 0 auto;
  overflow: scroll;
  /* overflow-y: auto; */
  position: relative;
  /* overflow: scroll; */
  height: 100vh;
  overflow: auto;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  /* position: fixed; */
  position: fixed;
  /* top: 0; */
  width: 100%;
  z-index: 1;
  flex: 1;
  background:white;


`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 68px;
  position: relative;
  overflow: hidden;
`;

const DayCell = styled.td<{ isToday: boolean; isCurrentTime: boolean }>`
  border: 1px solid #ddd;
  background-color: ${(props) => (props.isToday ? '#e0f7fa' : 'white')};
  text-align: left;
  padding: 10px;
  position: relative;
  width: 160px;
  height: 80px;
  /* background-color: yellow; */
  overflow-y: auto;
  


  &:before {
    content: '';
    position: absolute;
    bottom: ${(props) => {
      if (props.isCurrentTime) {
        const currentMinute = moment().minutes();
        const remainingMinutes = 60 - currentMinute;
        return `${(remainingMinutes / 60) * 100}%`;
      }
      return '50%';
    }};
    left: 0;
    height: 2px;
    background-color: ${(props) => (props.isCurrentTime ? 'red' : 'transparent')};
    width: 100%;
  }
`;
const DayCell2 = styled.td<{ isToday: boolean; isCurrentTime: boolean }>`
  border: none;
  background-color: ${(props) => (props.isToday ? '#e0f7fa' : 'white')};
  text-align: left;
  padding: 10px;
  position: relative;
  width: 160px;
  height: 80px;
  /* background-color: green; */
  position: sticky;
  top: 0;
  

  &:before {
    content: '';
    position: absolute;
    bottom: ${(props) => {
      if (props.isCurrentTime) {
        const currentMinute = moment().minutes();
        const remainingMinutes = 60 - currentMinute;
        return `${(remainingMinutes / 60) * 100}%`;
      }
      return '50%';
    }};
    left: 0;
    height: 2px;
    background-color: ${(props) => (props.isCurrentTime ? 'red' : 'transparent')};
    width: 100%;
  }
`;

const DayText = styled.div`
  /* font-weight: bold;
  color: #000;  */
  color: var(--greys-primary-600, #515151);
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: 0.238px;
  text-transform: uppercase;
`;

const DateText = styled.div`
  margin-top: 4px;
  color: var(--greys-primary-600, #515151);
  /* Body/Paragraph (L) Bold */
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 32px */
  letter-spacing: 0.34px;
`;

const HourSidePanel = styled.td`
  border: 1px solid #ddd;
  text-align: center;
  padding: 10px;
  
`;

const HourCell = styled.td<{ isCurrentTime: boolean }>`
  /* border: 1px solid #ddd; */
  text-align: right;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 10px;
  position: relative;
  width: 150px;
  height: 80px;
  /* background-color: red; */
  /* border-bottom: ${(props) => (props.isCurrentTime ? '2px solid red' : '1px solid #ddd')};  */
  color: var(--greys-primary-600, #515151);

/* Body/Paragraph (Medium) */
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.272px;
  overflow-y: auto;
`;

const Button = styled.button`
  border: none;
  /* color: white; */
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background: none;
  border-radius: 4px; /* Tailwind: rounded */
`;


interface WeekCalendarProps {
  currentDate: Moment;
  onTodayClick: () => void;
  onNextClick: () => void;
  onPrevClick: () => void;
  hourRef: RefObject<HTMLTableCellElement>;
  currentHour: number;
}

const CalendarComponent: React.FC<WeekCalendarProps> = ({
  currentDate,
  onTodayClick,
  onNextClick,
  onPrevClick,
  hourRef,

}) => {
  
  const startOfWeek = currentDate.clone().startOf('isoWeek'); // Start from Monday
  const days = Array.from({ length: 7 }, (_, index) =>
  startOfWeek.clone().add(index, 'days')
  );
  
  const hours = Array.from({ length: 24 }, (_, index) => index);
  const currentHour = moment().hours();
  const currentDay = moment().startOf('day');
  
  useEffect(() => {
    // Scroll to the current time cell when the component mounts or currentHour changes
    if (hourRef.current && currentHour >= 0 && currentHour < 24) {
      hourRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [ hourRef, currentHour ]);

  return (
    <WeekCalendarContainer>
      <Header >
        <Button onClick={onPrevClick}>&larr;</Button>
        <Button onClick={onNextClick}>&rarr;</Button>
        <div>{currentDate.format('MMMM YYYY')}</div>
        <Button onClick={onTodayClick} style={{border:'1px solid grey', borderRadius:'8px', padding:'4px'}}>today</Button>
      </Header>
      <Table>
        <tbody>
          <tr 
          >
            <HourSidePanel />
            {days.map((day) => (
             <DayCell2
                key={day.format('YYYY-MM-DD')}
                isToday={day.isSame(moment(), 'day')}
                isCurrentTime={false}
              >
                <DateText>{day.format('DD')}</DateText>
                <DayText>{day.format('dddd')}</DayText>
              </DayCell2>

            ))}
          </tr>
          {hours.map((hour) => (
            <tr 
            style={{overflowY: 'auto',}}
            key={hour} >
              <HourCell ref={currentHour === hour ? hourRef : null} isCurrentTime={currentHour === hour}>{moment().hour(hour).format('h A')}</HourCell>
              {days.map((day) => (
                <DayCell
                  key={`${day.format('YYYY-MM-DD')}-${hour}`}
                  isToday={day.isSame(moment(), 'day')}
                  isCurrentTime={day.isSame(currentDay, 'day') && currentHour === hour}
                >
                  {/* You can place your hourly content here */}
                  {/* YOU NEED TO BE HERE */}
                </DayCell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </WeekCalendarContainer>
  );
};

export default CalendarComponent;
