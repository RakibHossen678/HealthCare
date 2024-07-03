import "./App.css";
import Banner from "./Components/Banner";
import Care from "./Components/Care";
import Mission from "./Components/Mission";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="font-inter">
      <div className="lg:w-9/12  mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <Care></Care>
        <Mission></Mission>
      </div>
    </div>
  );
}

export default App;
