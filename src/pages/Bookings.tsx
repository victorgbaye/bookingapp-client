import { useState } from 'react';
import Wrapper from '../assets/wrappers/cmsDisplay.styles';
import PageHeader from '../components/patterns/PageHeader';
import Sidebar from '../components/patterns/Sidebar';
import { reservationsData } from '../utils/BookingsData';
import { BookingStatus, TableDataDisplayWrapper } from '../assets/wrappers/TableDataDisplay';
import Menu from '../components/patterns/Menu';

const Bookings = () => {
  const [BookingData, setBookingData] = useState(reservationsData);
  const [activeStatus, setActiveStatus] = useState<string | string[]>('any');  // Updated line

  const allCategories = ['All', ...new Set(BookingData.map((data) => data.status))];
  const [status] = useState< string[]>(allCategories);  // Updated line

  const filterItems = (status: string | string[] = [...allCategories]) => {
    console.log(status);
    if (status === 'All') {
      setBookingData(reservationsData);
      setActiveStatus(status);
      return;
    }
    const newItem = reservationsData.filter((item) => item.status === status);
    setBookingData(newItem);
    setActiveStatus(status);
  };


  const dataheader = ['Name & Email', 'Service', 'Time', 'Phone No', 'Status', ''];

  return (
    <Wrapper>
      <main className="cms-display">
        <Sidebar />
        <div>
          <PageHeader />
            <Menu status={status} filterItems={filterItems} activeStatus={activeStatus}/>
          <div className="body">
            <TableDataDisplayWrapper>
              <thead>
                <tr>
                  {dataheader.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BookingData.map((booking) => (
                  <tr key={booking.name}>
                    <td>
                      <span>
                        <p className='name'>{booking.name}</p>
                        
                        <p>{booking.email}</p>
                      </span>
                    </td>
                    <td>{booking.service}</td>
                    <td>{booking.time}</td>
                    <td>{booking.phoneNumber}</td>
                    <td>
                    <BookingStatus variant={booking.status}>{booking.status}</BookingStatus>
                    </td>
                    <td>...</td>
                  </tr>
                ))}
              </tbody>
            </TableDataDisplayWrapper>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Bookings;
