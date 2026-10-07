import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import * as THREE from "three";
import * as VantaNetModule from "vanta/dist/vanta.net.min";
import NavBar from "./components/NavBar";
import Welcome from "./pages/Welcome/Welcome";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

// Vite 8 / Rolldown wraps Vanta's UMD twice — the NET function lands at
// `.default.default`, not `.default`. Walk both interop shapes.
const VANTA =
  (typeof VantaNetModule === "function" && VantaNetModule) ||
  (typeof VantaNetModule.default === "function" && VantaNetModule.default) ||
  (typeof VantaNetModule.default?.default === "function" && VantaNetModule.default.default) ||
  null;

function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && VANTA) {
      // Respect users who prefer reduced motion; also guard against
      // environments without WebGL so a failed init can't take down the app.
      // (matchMedia may not exist in test environments like jsdom.)
      const prefersReducedMotion =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
      try {
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
      } catch (err) {
        console.warn("Vanta background failed to initialize:", err);
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ position: "relative", minHeight: "100vh" }}>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <NavBar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Unknown URLs redirect home instead of rendering a blank page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
