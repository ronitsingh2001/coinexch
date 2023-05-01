import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./Components/Style.css";
import Market from "./Components/Market";
import ChooseUs from "./Components/ChooseUs";
import Join from "./Components/Join";
import Footer from "./Components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Hero />
        <Market />
        <ChooseUs />
        <Join />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
