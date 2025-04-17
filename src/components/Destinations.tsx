
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const destinations = [
  {
    id: "paris",
    name: "Paris",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Experience the romance and beauty of the City of Light, home to iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral."
  },
  {
    id: "nice",
    name: "Nice",
    image: "https://images.unsplash.com/photo-1585546129520-02096f61855c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Enjoy the Mediterranean charm of the French Riviera with its beautiful beaches, vibrant markets, and stunning coastal views."
  },
  {
    id: "mont-saint-michel",
    name: "Mont Saint-Michel",
    image: "https://images.unsplash.com/photo-1591807749751-4e715047e056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Discover this magical island commune with its medieval abbey rising dramatically from the sea, creating one of France's most iconic silhouettes."
  },
  {
    id: "provence",
    name: "Provence",
    image: "https://images.unsplash.com/photo-1595823215595-5204aac9dd6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Wander through picturesque lavender fields, historic villages, and experience the laid-back rural lifestyle of southern France."
  },
  {
    id: "bordeaux",
    name: "Bordeaux",
    image: "https://images.unsplash.com/photo-1560983073-c29bff7438fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Explore this elegant port city known for its world-class wine, stunning architecture, and vibrant culinary scene."
  },
  {
    id: "chamonix",
    name: "Chamonix",
    image: "https://images.unsplash.com/photo-1598127968750-801a9a502abb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Discover this alpine paradise nestled beneath Mont Blanc, offering exceptional skiing, hiking, and breathtaking mountain vistas."
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-france-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-france-navy mb-2">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover the most enchanting places to visit throughout France, from iconic cities to hidden gems.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img 
                  src={destination.image} 
                  alt={`View of ${destination.name}, France`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </AspectRatio>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-france-navy mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-france-blue text-france-blue hover:bg-france-blue hover:text-white"
                >
                  <Link to={`/destinations/${destination.id}`}>
                    Explore {destination.name}
                  </Link>
                </Button>
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
            <Link to="/destinations">View All Destinations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
