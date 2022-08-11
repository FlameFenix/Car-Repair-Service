import './App.css';
import About from './components/about/About';
import Home from './components/home/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Services from './components/services/Services'
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


import { AuthContext } from './contexts/authContext';
import { BookingContext } from './contexts/bookingContext';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Messages } from './components/contacts/messages/Messages';
import { DetailsEdit } from './components/details/detailsEdit/DetailsEdit';



function App() {

  const [user, setUser] = useState({});

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
        <BookingContext.Provider value={{ user }}>
          <Topbar />
          <Navbar />

          <Routes>

            <Route element={<PrivateRoute />}>
              <Route path="/Booking" element={<Booking />} />
              <Route path="/Catalogue" element={<Catalogue />} />
              <Route path="/Details/:id" element={<Details />} />
              <Route path="Details/Edit/:id" element={<DetailsEdit />} />
              <Route path="/Services/:serviceId" element={<Services />} />
              <Route path="/Administration" element={<Administration />} />
              <Route path="/Contacts/Messages" element={<Messages />} />
              <Route path="/Logout" element={<Logout />} />
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
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
