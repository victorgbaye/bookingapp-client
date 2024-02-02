import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyCalendar: React.FC = () => {
  const handleScroll = () => {
    const timeHeader = document.querySelector('.rbc-time-header') as HTMLElement;
    const calendar = document.querySelector('.rbc-calendar') as HTMLElement;

    if (timeHeader && calendar) {
      const rect = calendar.getBoundingClientRect();
      const isSticky = rect.top <= 0;

      timeHeader.style.position = isSticky ? 'fixed' : 'static';
      timeHeader.style.top = isSticky ? '0' : '';
    }
  };

  return (
    <div onScroll={handleScroll} style={{ overflowY: 'auto', height: '100%' }}>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        views={['week']}
        defaultView="week"
      />
    </div>
  );
};

export default MyCalendar;