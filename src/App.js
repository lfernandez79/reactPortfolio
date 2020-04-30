import React from "react";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Footer from "./components/Footer/";
import Projects from "./pages/Projects";



function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Projects />
      <Footer />
    </div>
    
  )
}

export default App;
