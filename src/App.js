import React from "react";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Footer from "./components/Footer/";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"



function App() {
  return (
    <div>
      <NavBar />
      
      <About />
      
      <Projects />
      
      <Contact />
      
      <Footer />
    </div>
    
  )
}

export default App;
