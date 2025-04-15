import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('./about.png')" 
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl text-white animate-fade-in">
          <span className="inline-block px-4 py-1 bg-tea-gold/90 text-white rounded-full mb-4">Premium Tea from Kenya</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Experience the Finest <br/> Tea from motigo
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl">
            From lush tea gardens to your cup. Our premium tea is grown with care and harvested with precision to deliver exceptional flavor and quality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-tea-DEFAULT hover:bg-tea-dark text-white px-6 py-6 text-lg">
              Explore Our Teas
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg">
              Learn Our Story <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
