
import { Check } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About TickyFy</h2>
          <div className="w-24 h-1 bg-tickyfy-green mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            A modern digital ticketing solution specifically designed for the 2025 Africa Cup of Nations in Morocco,
            providing a seamless experience for football fans.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="max-w-3xl">
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
        </div>
      </div>
    </section>
  );
}
