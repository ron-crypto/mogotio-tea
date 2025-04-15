import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Contact from "../contact";
import Footer from "../components/footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
