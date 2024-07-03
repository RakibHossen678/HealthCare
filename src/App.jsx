import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="">
      <div className="lg:w-9/12  mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </div>
  );
}

export default App;
