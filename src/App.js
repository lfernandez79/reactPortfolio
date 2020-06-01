import React from "react";
import NavBar from "./components/NavBar";
import Welcome from "./pages/Welcome/Welcome";
import About from "./pages/About/About";
import Footer from "./components/Footer/";
import Projects from "./pages/Projetcs/Projects";
import Contact from "./pages/Contact/Contact"



function App() {
  return (
    <div>
      <NavBar />
      
      <Welcome />

      <About />
      
      <Projects />

      <Contact />
      
      <Footer />
    </div>
    
  )
}

export default App;
