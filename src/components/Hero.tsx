
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-white to-blue-50 animate-fade-in"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-2xl">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/24bfd42d-216e-4e22-8c0b-80e200bff779.png" 
                alt="TickyFy Logo" 
                className="h-10 mr-3"
              />
              <img 
                src="/lovable-uploads/b8f810cd-78b9-4da1-bcc8-aa3d9034abbe.png" 
                alt="CAN 2025 Logo" 
                className="h-10"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Modern Digital Ticketing for 
              <span className="text-morocco-red"> CAN </span>
              <span className="text-morocco-green">2025</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              TickyFy revolutionizes stadium access with secure, digital tickets and facial recognition technology for 
              the Africa Cup of Nations in Morocco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-tickyfy-green hover:bg-tickyfy-green/90 text-white"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-tickyfy-blue text-tickyfy-blue hover:bg-tickyfy-blue/10"
                asChild
              >
                <a href="#features">See Features</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1561616177-86df5330cad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Stadium with Digital Ticket Access" 
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-morocco-red/80 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">Coming to Morocco</p>
                <p>January 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
