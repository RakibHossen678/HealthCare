import "./App.css";
import Accordion from "./Components/Accordion";
import Advertisement from "./Components/Advertisement";
import Banner from "./Components/Banner";
import Care from "./Components/Care";
import Empower from "./Components/Empower";
import Footer from "./Components/Footer";
import Mission from "./Components/Mission";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="font-inter">
      <div className="lg:w-9/12  mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <Care></Care>
        <Mission></Mission>
        <Empower></Empower>
        <Testimonial></Testimonial>
        <Accordion></Accordion>
        <Advertisement></Advertisement>
        
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
