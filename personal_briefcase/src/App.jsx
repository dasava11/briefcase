import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Header from "./components/Header/Header";
import Grid from "./components/Grid/Grid";
import Footer from "./components/Footer/Footer";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex-grow">
      <NavigationBar />
      <Header />
      <Grid />
      <Works />
      <Contact />
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
