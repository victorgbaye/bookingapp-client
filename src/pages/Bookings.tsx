import { useState, useEffect, useRef } from 'react';
import Wrapper from '../assets/wrappers/cmsDisplay.styles';
import Sidebar from '../components/patterns/Sidebar';
import { reservationsData } from '../utils/BookingsData';
import { BookingStatus, TableDataDisplayWrapper } from '../assets/wrappers/TableDataDisplay';
import Menu from '../components/patterns/Menu';
import HomePageHeader from '../components/patterns/HomePageHeader';
import { ContextualMenu } from '../assets/wrappers/ContextualMenu.styles';

const Bookings = () => {
  const [BookingData, setBookingData] = useState(reservationsData);
  const [activeStatus, setActiveStatus] = useState<string | string[]>('any');  // Updated line

  const allCategories = ['All', ...new Set(BookingData.map((data) => data.status))];
  const [status] = useState< string[]>(allCategories);  // Updated line
  const [showContextual, setShowContextual] = useState(false)
  const [activeRow, setActiveRow] = useState<string | null>(null);


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
  const viewContextualMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (viewContextualMenuRef.current && !viewContextualMenuRef.current.contains(event.target as Node)) {
        setShowContextual(false);
      }
    };

    if (showContextual) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showContextual]);
  return (
    <Wrapper>
      <main className="cms-display">
        <Sidebar />
        <div style={{position:'relative'}}>
            <HomePageHeader/>
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
                    <td style={{position:'relative'}} onClick={()=>setShowContextual(!showContextual)}>
                      <div onClick={() => setActiveRow(booking.name)}>...</div>
                      {activeRow === booking.name && (
                        showContextual &&
                      <ContextualMenu>
                        <p className='context-menu-item'>Schedule</p>
                      </ContextualMenu>
                      )}
                    </td>
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
