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
            Founded in 2017, Motigo Tea Factory has been producing the finest quality tea from the highlands of Kenya for over 8 years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-tea-dark">
              From the Highlands of Kenya to Your Cup
            </h3>
            <p className="text-gray-600">
              Motigo Tea Factory is a satellite of Kapkoros Tea Factory which falls in KTDA administrative zone 9 of region 5. The factory is situated 12 km from Bomet Town in MotigoSub-location, Silibwet location, Bomet Centralsub-county in Bomet County. Its construction was necessitated by congestion in the Mother factory – Kapkoros Tea Factory.

              The factory serves Mugango, Kiromwok,Tegat and Chemaner electoral Zones of Kapkoros Tea Factory Company Limited.

              The factory construction started in December 2015 and was completed in April 2017. Thereafter, commercial production commenced in August 2017 with a capacity to process 15million kg of green leaf.

              The factory produces BP1, PF1, PD,D1, TMF, TM2, F1 and Dust tea grades with about 95% of it being for export.

              Sitting on 6.3 Hectares of land at an altitude of 2332 MASL, the factory is serving a total of 10,408 growers spread in 29 coded centres and 70 un-coded collection centres with total acreage under tea of 1569.5 hectares. The total number of estimated tea bushes is 15,694,227.

              The factory is served by the Kapkoros Group board of directors. The directors are responsible for governance and policy making while the day to day management of the factory operations and technical responsibilities are discharged by Kenya Tea Development Agency Ltd. through a management agreement with the Factory board..
            </p>
            <p className="text-gray-600">
              We take pride in our sustainable farming practices, working closely with local farmers to ensure both environmental stewardship and community development. Every leaf is carefully picked by skilled hands, ensuring only the finest tea reaches your cup.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden">
                  <img
                    src="./DAVID-K.KORIR-CHARMAN-OLENGURUONE-ZONE1.webp"
                    alt="CEO"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">David Kiptonui Korir</h4>
                  <p className="text-gray-500 text-sm">Chairman</p>
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
