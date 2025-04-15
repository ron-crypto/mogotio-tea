import React from "react";
import { Badge } from "../components/ui/badge";
import { Leaf, Award, Clock, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Leaf className="h-6 w-6 text-tea-gold" />,
      title: "Organic Farming",
      description: "All our tea is grown using sustainable and organic farming practices."
    },
    {
      icon: <Award className="h-6 w-6 text-tea-gold" />,
      title: "Premium Quality",
      description: "Our teas consistently win awards for taste and quality."
    },
    {
      icon: <Clock className="h-6 w-6 text-tea-gold" />,
      title: "Traditional Methods",
      description: "We blend modern technology with time-honored tea processing traditions."
    },
    {
      icon: <Users className="h-6 w-6 text-tea-gold" />,
      title: "Community Support",
      description: "We work closely with local farmers to ensure fair wages and practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-tea-gold text-tea-dark font-medium px-4 py-1">About Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Our Story and Heritage</h2>
          <div className="w-24 h-1 bg-tea-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Founded in 1982, Mogotio Tea Factory has been producing the finest quality tea from the highlands of Kenya for over 40 years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-tea-dark">
              From the Highlands of Kenya to Your Cup
            </h3>
            <p className="text-gray-600">
              Nestled in the lush highlands of Kenya's Rift Valley, Mogotio Tea Factory has been cultivating and processing premium tea since 1982. Our factory combines traditional methods with modern technology to produce tea that's known for its exceptional quality, rich flavor, and distinctive aroma.
            </p>
            <p className="text-gray-600">
              We take pride in our sustainable farming practices, working closely with local farmers to ensure both environmental stewardship and community development. Every leaf is carefully picked by skilled hands, ensuring only the finest tea reaches your cup.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1921&q=80" 
                    alt="CEO" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">James Kimani</h4>
                  <p className="text-gray-500 text-sm">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2121&q=80" 
              alt="Tea plantation" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-tea-light/30 h-14 w-14 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
