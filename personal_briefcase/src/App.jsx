import { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Grid from "./components/Grid/Grid";
import Footer from "./components/Footer/Footer";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Header />
      <Grid />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;