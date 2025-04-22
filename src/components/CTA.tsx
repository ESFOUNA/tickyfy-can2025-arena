
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-tickyfy-green/90 to-tickyfy-blue/90 text-white dark:from-tickyfy-blue/80 dark:to-tickyfy-green/80">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for CAN 2025?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Join us in revolutionizing the stadium experience for the Africa Cup of Nations 2025 in Morocco.
        </p>
        <Button 
          size="lg" 
          className="bg-white hover:bg-gray-100 text-tickyfy-green dark:bg-gray-900 dark:hover:bg-gray-800"
        >
          Get in Touch
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
