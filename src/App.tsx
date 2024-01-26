import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './pages/Calendar';
import Bookings from './pages/Bookings';
import Clients from './pages/Clients';
import Services from './pages/Services';
import Settings from './pages/Settings';
function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Calendar/>} />
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/bookings" element={<Bookings/>} />
          <Route path="/clients" element={< Clients/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/preference" element={<Settings/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
