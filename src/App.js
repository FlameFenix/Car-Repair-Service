import './App.css';
import Spinner from "../src/components/Spinner/Spinner"
import Topbar from "../src/components/Topbar/Topbar"
import Navbar from "../src/components/Navbar/Navbar"
import Carousel from './components/Carousel/Carousel';
import Service from './components/Service/Service';
import About from './components/about/About';
import Fact from './components/Fact/Fact';
import Services from './components/services/Services';
import Booking from './components/booking/Booking';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">

      <Spinner />
      <Topbar />
      <Navbar />
      <Carousel />
      <Service />
      <About />
      <Fact />
      <Services />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
