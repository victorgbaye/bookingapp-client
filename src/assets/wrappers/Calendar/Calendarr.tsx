import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyCalendar: React.FC = () => {

  return (
    <div>
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
