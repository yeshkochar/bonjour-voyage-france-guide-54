
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Emma Johnson",
    country: "United States",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    quote: "This guide was a lifesaver during my first trip to France! The language tips helped me communicate with locals, and the restaurant recommendations were spot on."
  },
  {
    id: 2,
    name: "Hiroshi Tanaka",
    country: "Japan",
    avatar: "https://randomuser.me/api/portraits/men/57.jpg",
    quote: "As someone who doesn't speak French, this multilingual guide made traveling through the countryside so much easier. I felt confident exploring beyond Paris."
  },
  {
    id: 3,
    name: "Sofia Reyes",
    country: "Mexico",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg", 
    quote: "The cultural insights were fantastic. I appreciated learning about local customs before my trip, which helped me feel more comfortable in social situations."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-france-navy to-france-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-2">What Travelers Say</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">Hear from fellow travelers who have explored France with our guidance.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4 border-2 border-white/30">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-200">From {testimonial.country}</p>
                  </div>
                </div>
                <p className="italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
