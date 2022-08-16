import './App.css';
import About from './components/about/About';
import Home from './components/home/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import OurServices from './components/ourServices/OurServices';
import Topbar from './components/Topbar/Topbar'
import Booking from './components/booking/Booking'
import NotFound from './components/NotFound/NotFound'
import Contacts from './components/contacts/Contacts'
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/common/PrivateRoute';
import { Catalogue } from './components/catalogue/Catalogue';
import { Details } from './components/details/Details';
import { Logout } from './components/logout/Logout';
import { Administration } from './components/administration/Administration';
import { Messages } from './components/contacts/messages/Messages';
import { DetailsEdit } from './components/details/detailsEdit/DetailsEdit';
import { Bookings } from './components/administration/Bookings/Bookings';


import { AuthContext } from './contexts/authContext';
import { BookingContext } from './contexts/bookingContext';

import * as bookingService from './services/bookingService';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';



function App() {

  const [user, setUser] = useState({});

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    bookingService.listOfBooking()
      .then(res => {
        setBookings(res);
      })
  }, [])

  const onEditHandler = (bookingItem) => {
    setBookings(state => ([
      ...state.filter(x => x._id !== bookingItem._id),
      bookingItem
    ]))
  }

  const onLogin = (userData) => {

    setUser({ userData, isAuthenticated: true })

    localStorage.setItem('user', JSON.stringify(userData));

  }

  const onLogout = () => {
    setUser({});
    localStorage.clear();
  }

  return (

    <div className="App">

      <AuthContext.Provider value={{ user, onLogin, onLogout }}>
        <BookingContext.Provider value={{ user, bookings, onEditHandler }}>
          <Topbar />
          <Navbar />

          <Routes>

            <Route element={<PrivateRoute />}>
              <Route path="/Booking" element={<Booking />} />
              <Route path="/Catalogue" element={<Catalogue />} />
              <Route path="/Details/:id" element={<Details />} />
              <Route path="/Details/Edit/:id" element={<DetailsEdit />} />
              <Route path="/Services/:serviceId" element={<OurServices />} />
              <Route path="/Logout" element={<Logout />} />
              <Route path="/Administration" element={<Administration />} />
              <Route path="/Administration/Contacts/Messages" element={<Messages />} />
              <Route path="/Administration/Bookings" element={<Bookings />} />
              <Route path="/Administration/Bookings/DeleteItem/:id" element={<Bookings />} />
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<OurServices />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </BookingContext.Provider>
      </AuthContext.Provider>

    </div >

  );
}

export default App;
