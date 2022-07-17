import './App.css';
import About from './components/about/About';
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Services from './components/services/Services'
import Topbar from './components/Topbar/Topbar'
import Booking from './components/booking/Booking'
import NotFound from './components/NotFound/NotFound'
import Contacts from './components/contacts/Contacts'
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
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </div>

  );
}

export default App;
