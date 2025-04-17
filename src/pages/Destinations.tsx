
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

const destinations = [
  {
    id: "paris",
    name: "Paris",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Experience the romance and beauty of the City of Light, home to iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.",
    region: "Île-de-France"
  },
  {
    id: "nice",
    name: "Nice",
    image: "https://images.unsplash.com/photo-1585546129520-02096f61855c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Enjoy the Mediterranean charm of the French Riviera with its beautiful beaches, vibrant markets, and stunning coastal views.",
    region: "Provence-Alpes-Côte d'Azur"
  },
  {
    id: "mont-saint-michel",
    name: "Mont Saint-Michel",
    image: "https://images.unsplash.com/photo-1591807749751-4e715047e056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Discover this magical island commune with its medieval abbey rising dramatically from the sea, creating one of France's most iconic silhouettes.",
    region: "Normandy"
  },
  {
    id: "provence",
    name: "Provence",
    image: "https://images.unsplash.com/photo-1595823215595-5204aac9dd6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Wander through picturesque lavender fields, historic villages, and experience the laid-back rural lifestyle of southern France.",
    region: "Provence-Alpes-Côte d'Azur"
  },
  {
    id: "bordeaux",
    name: "Bordeaux",
    image: "https://images.unsplash.com/photo-1560983073-c29bff7438fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Explore this elegant port city known for its world-class wine, stunning architecture, and vibrant culinary scene.",
    region: "Nouvelle-Aquitaine"
  },
  {
    id: "chamonix",
    name: "Chamonix",
    image: "https://images.unsplash.com/photo-1598127968750-801a9a502abb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Discover this alpine paradise nestled beneath Mont Blanc, offering exceptional skiing, hiking, and breathtaking mountain vistas.",
    region: "Auvergne-Rhône-Alpes"
  },
  {
    id: "strasbourg",
    name: "Strasbourg",
    image: "https://images.unsplash.com/photo-1574867155559-c7478c504180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Experience this charming border city with its unique blend of French and German influences, stunning cathedral, and picturesque canals.",
    region: "Grand Est"
  },
  {
    id: "lyon",
    name: "Lyon",
    image: "https://images.unsplash.com/photo-1524396309943-e3b46c8a2cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Explore France's gastronomic capital with its rich culinary heritage, historic old town, and beautiful riverside setting.",
    region: "Auvergne-Rhône-Alpes"
  },
  {
    id: "marseille",
    name: "Marseille",
    image: "https://images.unsplash.com/photo-1560523309-2bef7a21a539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Discover France's oldest city with its vibrant multicultural atmosphere, historic port, and stunning Mediterranean coastline.",
    region: "Provence-Alpes-Côte d'Azur"
  }
];

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRegion, setActiveRegion] = useState("");
  
  const regions = [...new Set(destinations.map(dest => dest.region))];
  
  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = activeRegion === "" || destination.region === activeRegion;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="relative h-64 sm:h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552751753-d8ba8b0e7ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-france-navy/70 to-france-blue/30"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">Destinations in France</h1>
            <p className="text-white text-lg max-w-2xl">Explore the diverse regions and cities that make France a top travel destination.</p>
          </div>
        </div>
        
        {/* Search and Filter Section */}
        <div className="bg-france-cream py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search destinations..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={activeRegion === "" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setActiveRegion("")}
                  className={activeRegion === "" ? "bg-france-blue" : ""}
                >
                  All Regions
                </Button>
                {regions.map(region => (
                  <Button 
                    key={region}
                    variant={activeRegion === region ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setActiveRegion(region)}
                    className={activeRegion === region ? "bg-france-blue" : ""}
                  >
                    {region}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Destinations Grid */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.length > 0 ? (
                filteredDestinations.map((destination) => (
                  <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img 
                        src={destination.image} 
                        alt={`View of ${destination.name}, France`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </AspectRatio>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-france-blue mb-2">
                        <MapPin size={16} />
                        <span>{destination.region}</span>
                      </div>
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
                ))
              ) : (
                <div className="col-span-3 py-12 text-center">
                  <p className="text-xl text-gray-500">No destinations found matching your search.</p>
                  <Button 
                    className="mt-4 bg-france-blue" 
                    onClick={() => {setSearchTerm(""); setActiveRegion("");}}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
