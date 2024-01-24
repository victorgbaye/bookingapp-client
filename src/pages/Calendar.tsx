import { useRef, useEffect, useState } from 'react';
import moment from 'moment';
import CalendarComponent from '../components/patterns/CalendarComponent';
import Wrapper from '../assets/wrappers/cmsDisplay.styles';
import PageHeader from '../components/patterns/PageHeader';
import Sidebar from '../components/patterns/Sidebar';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [currentHour, setCurrentHour] = useState(moment().hours());
  const hourRef = useRef<HTMLTableCellElement | null>(null);

  const handleTodayClick = () => {
    setCurrentDate(moment());
  };

  const handleNextClick = () => {
    setCurrentDate(currentDate.clone().add(1, 'week'));
  };

  const handlePrevClick = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'week'));
  };

  useEffect(() => {
    // Update the current hour every minute
    const intervalId = setInterval(() => {
      setCurrentHour(moment().hours());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []); // Run the effect only once when the component mounts

  return (
    <Wrapper>
      <main className="cms-display">
        <Sidebar />
        <div style={{ position:'relative'}}>
          <PageHeader />
          <div style={{marginTop:'80px', overflowY: 'auto', maxHeight: 'calc(100vh - 80px)', position:'relative'}}>
            <CalendarComponent
              currentDate={currentDate}
              onTodayClick={handleTodayClick}
              onNextClick={handleNextClick}
              onPrevClick={handlePrevClick}
              hourRef={hourRef}
              currentHour={currentHour}
            />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Calendar;
