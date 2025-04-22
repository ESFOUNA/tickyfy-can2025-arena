
import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About TickyFy</h2>
          <div className="w-24 h-1 bg-tickyfy-green mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            A modern digital ticketing solution specifically designed for the 2025 Africa Cup of Nations in Morocco,
            providing a seamless experience for football fans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6">Why Choose TickyFy?</h3>
            
            <ul className="space-y-4">
              {[
                "Digital ticket management with QR code validation",
                "Facial recognition for seamless stadium entry",
                "Secure ticket storage and retrieval",
                "PDF ticket download functionality",
                "Responsive design for all devices",
                "Moroccan-themed interface with national colors",
                "Token-based authentication for security",
                "Real-time seat allocation system"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-tickyfy-green" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="bg-gradient-to-r from-morocco-red/10 to-morocco-green/10 p-6 rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Football stadium in Morocco" 
                className="rounded-lg w-full h-80 object-cover shadow-lg"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block">
              <img 
                src="/lovable-uploads/b8f810cd-78b9-4da1-bcc8-aa3d9034abbe.png" 
                alt="CAN 2025 Logo" 
                className="h-24 w-24 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
