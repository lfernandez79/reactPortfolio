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
          mouseControls: true,
          touchControls: true,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color: 0x2a7a8c,
          backgroundColor: 0xf1f5f9,
          points: 8,
          maxDistance: 25,
          spacing: 20,
          showDots: true,
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
