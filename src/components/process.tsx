import React from "react";
import { Badge } from "./ui/badge";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Tea Cultivation",
      description: "Our tea is grown in the highlands of Kenya at the perfect altitude and climate conditions. We use sustainable farming practices to ensure the health of both the plants and the environment.",
      image: "https://images.unsplash.com/photo-1582126892906-5ba118ded0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      number: "02",
      title: "Harvesting",
      description: "Our skilled tea pickers carefully select only the finest tea leaves, ensuring that each leaf is picked at its optimal time for maximum flavor and quality.",
      image: "https://images.unsplash.com/photo-1550350872-8a3b7c6ea4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      number: "03",
      title: "Processing",
      description: "Our leaves undergo a careful processing method that preserves their natural flavors and health benefits. This includes withering, rolling, oxidation, and drying.",
      image: "https://images.unsplash.com/photo-1572085313473-22b8f8a8c08a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      number: "04",
      title: "Quality Control",
      description: "Each batch of tea undergoes rigorous quality control testing to ensure it meets our high standards for flavor, aroma, and appearance.",
      image: "https://images.unsplash.com/photo-1546920591-dbc32e120bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-tea-gold text-tea-dark font-medium px-4 py-1">Our Process</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">From Garden to Cup</h2>
          <div className="w-24 h-1 bg-tea-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover the journey our tea takes from our carefully maintained gardens to your teacup.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
            >
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 bg-tea-gold text-white text-lg font-bold py-2 px-4 z-10">
                    {step.number}
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <div className="w-16 h-1 bg-tea-gold"></div>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
