import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import VANTA from "vanta/dist/vanta.net.min";
import NavBar from "./components/NavBar";
import Welcome from "./pages/Welcome/Welcome";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VANTA({
          el: vantaRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color: 0xb4c6ff,
          backgroundColor: 0xffffff,
          showDots: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef}>
      <NavBar />

      <Welcome />

      <About />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
