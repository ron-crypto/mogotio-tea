import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Products from "../components/products";
import Process from "../components/process";
import Contact from "../contact";
import Footer from "../components/footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
