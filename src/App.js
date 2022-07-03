import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services'
import Topbar from './components/Topbar/Topbar'
import Booking from './components/Booking/Booking'
import NotFound from './components/NotFound/NotFound'
import Contacts from './components/Contacts/Contacts'
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Contacts" element={<Contacts/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </div>

  );
}

export default App;
