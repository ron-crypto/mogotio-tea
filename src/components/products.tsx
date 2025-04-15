import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Premium Black Tea",
      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Our signature black tea with a rich and robust flavor profile.",
      price: "ksh 500",
      rating: 5
    },
    {
      id: 2,
      name: "Green Tea Special",
      image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Delicate and refreshing green tea with subtle floral notes.",
      price: "ksh 300",
      rating: 4
    },
    {
      id: 3,
      name: "Purple Tea Blend",
      image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description: "Unique purple tea with high antioxidant content and smooth taste.",
      price: "ksh 400",
      rating: 5
    },
    {
      id: 4,
      name: "White Tea Collection",
      image: "https://images.unsplash.com/photo-1556679343-c1917e0ccc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      description: "Delicately harvested white tea with a mild, sweet flavor.",
      price: "ksh 200",
      rating: 4
    }
  ];

  const renderRatingStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-tea-gold fill-tea-gold' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-tea-gold text-tea-dark font-medium px-4 py-1">Our Products</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Premium Tea Selection</h2>
          <div className="w-24 h-1 bg-tea-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover our range of premium teas, carefully cultivated and processed to perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <span className="text-tea-gold font-bold">{product.price}</span>
                </div>
                <div className="flex mb-3">
                  {renderRatingStars(product.rating)}
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button variant="outline" className="border-tea-DEFAULT text-tea-DEFAULT hover:bg-tea-DEFAULT hover:text-white w-full">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-tea-DEFAULT hover:bg-tea-dark text-white px-8 py-6">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
