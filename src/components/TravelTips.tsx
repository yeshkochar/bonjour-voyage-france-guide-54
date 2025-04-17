
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Euro, Utensils, Train, Clock, Languages } from "lucide-react";

const tips = [
  {
    icon: <MapPin className="h-8 w-8 text-france-blue" />,
    title: "Getting Around",
    description: "France has an excellent public transportation system. Learn how to navigate the metro, trains, and buses like a local."
  },
  {
    icon: <Euro className="h-8 w-8 text-france-blue" />,
    title: "Money Matters",
    description: "Tips on currency exchange, tipping etiquette, and budgeting for your French adventure."
  },
  {
    icon: <Utensils className="h-8 w-8 text-france-blue" />,
    title: "Food & Dining",
    description: "Discover French culinary traditions, dining etiquette, and how to order food in French restaurants."
  },
  {
    icon: <Languages className="h-8 w-8 text-france-blue" />,
    title: "Language Basics",
    description: "Learn essential French phrases to enhance your travel experience and connect with locals."
  },
  {
    icon: <Train className="h-8 w-8 text-france-blue" />,
    title: "Day Trips",
    description: "Recommendations for perfect day trips from major cities to explore more of France's diverse regions."
  },
  {
    icon: <Clock className="h-8 w-8 text-france-blue" />,
    title: "Seasonal Travel",
    description: "Find the best time to visit based on your interests, whether it's wine harvests, lavender blooms, or ski season."
  }
];

export default function TravelTips() {
  return (
    <section id="travel-tips" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-france-navy mb-2">Essential Travel Tips</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Practical advice to help you navigate French culture, customs, and make your journey smooth and enjoyable.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-france-navy mb-2">{tip.title}</h3>
                <p className="text-gray-600 mb-4">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            asChild 
            size="lg" 
            className="bg-france-blue hover:bg-france-blue/90"
          >
            <Link to="/travel-tips">More Travel Tips</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
