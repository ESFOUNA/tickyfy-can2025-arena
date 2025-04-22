
import { Card } from "./ui/card";

const testimonials = [
  {
    quote: "TickyFy has revolutionized how we manage stadium access. The facial recognition technology and digital tickets have drastically reduced entry times.",
    author: "CAF Official",
    title: "African Football Confederation"
  },
  {
    quote: "As a football fan, I appreciate how easy it is to purchase, store and use tickets through TickyFy. No more paper tickets to worry about!",
    author: "Football Fan",
    title: "CAN 2025 Attendee"
  },
  {
    quote: "The security features in TickyFy give us confidence that only authorized fans can enter the stadium, eliminating fraud and improving crowd management.",
    author: "Stadium Manager",
    title: "Morocco 2025 Venue"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Are Saying</h2>
          <div className="w-24 h-1 bg-morocco-green mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Our digital ticketing solution is making a real impact for CAN 2025 stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-white border-none shadow-lg hover:shadow-xl transition-shadow rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-tickyfy-green to-tickyfy-blue"></div>
              <div className="text-4xl font-serif text-gray-200 mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
