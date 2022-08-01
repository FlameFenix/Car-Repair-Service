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

import { Routes, Route } from 'react-router-dom';
import { AuthContext } from './contexts/authContext';
import { useState } from 'react';


function App() {

  const [user, setUser] = useState({});

  const onLogin = (userData) => {

    setUser({ userData, isAuthenticated: true })

    localStorage.setItem('user', JSON.stringify(userData));

  }

  return (

    <div className="App">

      <AuthContext.Provider value={{ user, onLogin }}>
        <Topbar />
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </AuthContext.Provider>

    </div>

  );
}

export default App;
