
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Info, Hotel, Utensils, Camera } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import NotFound from "./NotFound";

// This should match the destinations data structure from both Destinations.tsx components
const destinations = [
  {
    id: "paris",
    name: "Paris",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Experience the romance and beauty of the City of Light, home to iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.",
    region: "Île-de-France",
    bestTimeToVisit: "Spring (April to June) or Fall (September to November)",
    famousFor: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Champs-Élysées", "Seine River Cruises"],
    highlights: [
      {
        name: "Eiffel Tower",
        description: "The iconic symbol of Paris offering panoramic views of the city.",
        image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Louvre Museum",
        description: "World's largest art museum and historic monument housing the Mona Lisa.",
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Montmartre",
        description: "Historic arts district with the stunning Sacré-Cœur Basilica.",
        image: "https://images.unsplash.com/photo-1551887196-72e32bfc7bf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "nice",
    name: "Nice",
    image: "https://images.unsplash.com/photo-1585546129520-02096f61855c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Enjoy the Mediterranean charm of the French Riviera with its beautiful beaches, vibrant markets, and stunning coastal views.",
    region: "Provence-Alpes-Côte d'Azur",
    bestTimeToVisit: "May to October for beach weather, April and September for fewer crowds",
    famousFor: ["Promenade des Anglais", "Old Town (Vieux Nice)", "Mediterranean Beaches", "French Riviera", "Local Cuisine"],
    highlights: [
      {
        name: "Promenade des Anglais",
        description: "Iconic waterfront promenade with stunning Mediterranean views.",
        image: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Old Town (Vieux Nice)",
        description: "Charming district with narrow streets, colorful buildings, and vibrant markets.",
        image: "https://images.unsplash.com/photo-1594822610350-e6faa764e4c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Castle Hill (Colline du Château)",
        description: "Park with panoramic views of Nice, the Mediterranean, and the port.",
        image: "https://images.unsplash.com/photo-1517861198338-bc36218185a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "mont-saint-michel",
    name: "Mont Saint-Michel",
    image: "https://images.unsplash.com/photo-1591807749751-4e715047e056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Discover this magical island commune with its medieval abbey rising dramatically from the sea, creating one of France's most iconic silhouettes.",
    region: "Normandy",
    bestTimeToVisit: "May to October, early morning or evening to avoid crowds",
    famousFor: ["Medieval Abbey", "Tidal Island", "Gothic Architecture", "Dramatic Silhouette", "Religious History"],
    highlights: [
      {
        name: "Abbey of Mont-Saint-Michel",
        description: "Stunning medieval monastery at the peak of the island with breathtaking architecture.",
        image: "https://images.unsplash.com/photo-1596394723269-b2cbca4e6463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Grande Rue",
        description: "Main street lined with medieval buildings, shops and restaurants.",
        image: "https://images.unsplash.com/photo-1598883912951-8f129994c9c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Bay of Mont Saint-Michel",
        description: "Beautiful bay surrounding the island known for its extreme tides.",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "provence",
    name: "Provence",
    image: "https://images.unsplash.com/photo-1595823215595-5204aac9dd6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Wander through picturesque lavender fields, historic villages, and experience the laid-back rural lifestyle of southern France.",
    region: "Provence-Alpes-Côte d'Azur",
    bestTimeToVisit: "June to August for lavender blooms, April to May or September to October for pleasant weather",
    famousFor: ["Lavender Fields", "Historic Villages", "Mediterranean Climate", "Wine Production", "French Cuisine"],
    highlights: [
      {
        name: "Lavender Fields",
        description: "Stunning purple fields blooming in summer, especially around Valensole.",
        image: "https://images.unsplash.com/photo-1534784200635-37729f0b24bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Verdon Gorge",
        description: "Stunning river canyon with turquoise waters perfect for hiking and water activities.",
        image: "https://images.unsplash.com/photo-1533309907656-3af9dd6def5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Aix-en-Provence",
        description: "Elegant city with tree-lined boulevards, fountains, and vibrant markets.",
        image: "https://images.unsplash.com/photo-1595313862848-8201caa3bf5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "bordeaux",
    name: "Bordeaux",
    image: "https://images.unsplash.com/photo-1560983073-c29bff7438fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Explore this elegant port city known for its world-class wine, stunning architecture, and vibrant culinary scene.",
    region: "Nouvelle-Aquitaine",
    bestTimeToVisit: "May to October, September and October for wine harvest",
    famousFor: ["Wine Production", "18th-Century Architecture", "Gastronomy", "River Garonne", "Wine Tours"],
    highlights: [
      {
        name: "Place de la Bourse",
        description: "Stunning 18th-century square with the famous water mirror reflecting pool.",
        image: "https://images.unsplash.com/photo-1592149859847-93420a729653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "La Cité du Vin",
        description: "Modern wine museum offering an immersive journey through wine culture.",
        image: "https://images.unsplash.com/photo-1566193643802-6959ddafb050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Saint-Émilion",
        description: "UNESCO World Heritage medieval village surrounded by prestigious vineyards.",
        image: "https://images.unsplash.com/photo-1591892204883-43cdc889cdbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "chamonix",
    name: "Chamonix",
    image: "https://images.unsplash.com/photo-1598127968750-801a9a502abb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    description: "Discover this alpine paradise nestled beneath Mont Blanc, offering exceptional skiing, hiking, and breathtaking mountain vistas.",
    region: "Auvergne-Rhône-Alpes",
    bestTimeToVisit: "December to April for skiing, June to September for hiking",
    famousFor: ["Mont Blanc", "Skiing", "Alpine Hiking", "Cable Cars", "Mountain Sports"],
    highlights: [
      {
        name: "Aiguille du Midi",
        description: "Cable car to spectacular viewing platforms with 360° views of the French, Swiss and Italian Alps.",
        image: "https://images.unsplash.com/photo-1580332449382-d345908b686c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Mer de Glace",
        description: "France's largest glacier accessible by the scenic Montenvers Railway.",
        image: "https://images.unsplash.com/photo-1669710000653-01bcecaf2309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Chamonix Town Center",
        description: "Charming alpine town with shops, restaurants, and historic buildings.",
        image: "https://images.unsplash.com/photo-1536335188295-1af7d576cc9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];

export default function DestinationDetail() {
  const { id } = useParams<{id: string}>();
  const [destination, setDestination] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundDestination = destinations.find(d => d.id === id);
    setDestination(foundDestination || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl">Loading destination information...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!destination) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="relative h-80 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${destination.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
            <div className="flex items-center text-white text-sm mb-2">
              <MapPin size={16} className="mr-2" />
              <span>{destination.region}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{destination.name}</h1>
            <p className="text-white text-lg max-w-2xl">{destination.description}</p>
          </div>
        </div>
        
        {/* Navigation Bar */}
        <div className="sticky top-16 bg-white shadow-sm z-40">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start overflow-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="highlights">Highlights</TabsTrigger>
                <TabsTrigger value="tips">Travel Tips</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        {/* Content Sections */}
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsContent value="overview" className="space-y-8">
              {/* Quick Facts */}
              <div className="bg-france-cream rounded-lg p-6">
                <h2 className="text-2xl font-serif font-bold text-france-navy mb-4">Quick Facts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Calendar className="text-france-blue mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold">Best Time to Visit</h3>
                      <p className="text-gray-700">{destination.bestTimeToVisit}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Info className="text-france-blue mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold">Known For</h3>
                      <ul className="list-disc list-inside text-gray-700">
                        {destination.famousFor.map((item: string, index: number) => (
                          <li key={index} className="ml-2">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-france-navy mb-4">About {destination.name}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {destination.description} Located in the beautiful region of {destination.region}, 
                  {destination.name === "Paris" ? 
                    " Paris is the capital and most populous city of France. Situated on the Seine River, it is known worldwide for its rich history, stunning architecture, and cultural influence. The city is home to some of the world's most famous landmarks and museums, including the Eiffel Tower, the Louvre, and Notre-Dame Cathedral." :
                    destination.name === "Nice" ? 
                    " Nice is a glamorous city on the French Riviera. With its stunning Mediterranean beaches, vibrant markets, and colorful buildings, it embodies the relaxed elegance of southern France. The city blends Italian and French influences in its architecture and cuisine." :
                    destination.name === "Mont Saint-Michel" ? 
                    " Mont Saint-Michel is a tidal island and mainland commune in Normandy, France. The medieval monastery and surrounding buildings create one of France's most recognizable silhouettes. The abbey's remarkable Gothic architecture and dramatic setting have made it a center of pilgrimage for centuries." :
                    destination.name === "Provence" ? 
                    " Provence is a geographical region and historical province in southeastern France. Known for its diverse landscapes, from the Southern Alps to the Camargue plains, it's most famous for its lavender fields, olive groves, and picturesque villages that have inspired many famous artists." :
                    destination.name === "Bordeaux" ? 
                    " Bordeaux is a port city on the Garonne River in southwestern France. It's world-renowned for its wine industry, with the surrounding region containing over 7,000 wine-producing châteaux. The historic part of the city is on the UNESCO World Heritage List as 'an outstanding urban and architectural ensemble'." :
                    " Chamonix is a resort area near the junction of France, Switzerland, and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing and mountaineering. The town has been the site of the first Winter Olympics in 1924 and continues to attract winter sports enthusiasts from around the world."
                  }
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Where to Stay */}
                <div>
                  <div className="flex items-center mb-4">
                    <Hotel className="text-france-blue mr-2" size={24} />
                    <h2 className="text-xl font-serif font-bold text-france-navy">Where to Stay</h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    {destination.name === "Paris" ? (
                      <>
                        <li><span className="font-semibold">Le Marais:</span> Central historic district with boutique hotels</li>
                        <li><span className="font-semibold">Saint-Germain-des-Prés:</span> Upscale area with luxury accommodations</li>
                        <li><span className="font-semibold">Montmartre:</span> Bohemian neighborhood with charming guesthouses</li>
                      </>
                    ) : destination.name === "Nice" ? (
                      <>
                        <li><span className="font-semibold">Promenade des Anglais:</span> Beachfront hotels with sea views</li>
                        <li><span className="font-semibold">Old Town:</span> Authentic accommodations in historic buildings</li>
                        <li><span className="font-semibold">Cimiez:</span> Quiet residential area with upscale hotels</li>
                      </>
                    ) : destination.name === "Mont Saint-Michel" ? (
                      <>
                        <li><span className="font-semibold">On the Island:</span> Limited but atmospheric accommodations</li>
                        <li><span className="font-semibold">Mainland:</span> Hotels with views of Mont Saint-Michel</li>
                        <li><span className="font-semibold">Nearby Villages:</span> Charming B&Bs in surrounding Norman countryside</li>
                      </>
                    ) : destination.name === "Provence" ? (
                      <>
                        <li><span className="font-semibold">Aix-en-Provence:</span> Elegant city hotels and nearby estates</li>
                        <li><span className="font-semibold">Rural Farmhouses:</span> Authentic renovated farmhouses</li>
                        <li><span className="font-semibold">Luberon Villages:</span> Boutique hotels in picturesque settings</li>
                      </>
                    ) : destination.name === "Bordeaux" ? (
                      <>
                        <li><span className="font-semibold">City Center:</span> Historic hotels near Place de la Bourse</li>
                        <li><span className="font-semibold">Chartrons District:</span> Trendy neighborhood with boutique options</li>
                        <li><span className="font-semibold">Wine Châteaux:</span> Luxurious stays in vineyard estates</li>
                      </>
                    ) : (
                      <>
                        <li><span className="font-semibold">Town Center:</span> Convenient alpine lodges and hotels</li>
                        <li><span className="font-semibold">Les Houches:</span> Family-friendly accommodations</li>
                        <li><span className="font-semibold">Luxury Chalets:</span> Premium mountain retreats</li>
                      </>
                    )}
                  </ul>
                </div>
                
                {/* Where to Eat */}
                <div>
                  <div className="flex items-center mb-4">
                    <Utensils className="text-france-blue mr-2" size={24} />
                    <h2 className="text-xl font-serif font-bold text-france-navy">Where to Eat</h2>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    {destination.name === "Paris" ? (
                      <>
                        <li><span className="font-semibold">Classic Bistros:</span> Authentic French cuisine in intimate settings</li>
                        <li><span className="font-semibold">Patisseries:</span> World-famous bakeries for croissants and pastries</li>
                        <li><span className="font-semibold">Michelin-Starred:</span> Fine dining experiences throughout the city</li>
                      </>
                    ) : destination.name === "Nice" ? (
                      <>
                        <li><span className="font-semibold">Cours Saleya:</span> Restaurants surrounding the famous market</li>
                        <li><span className="font-semibold">Socca Vendors:</span> Try the local chickpea pancake specialty</li>
                        <li><span className="font-semibold">Seafood Restaurants:</span> Fresh Mediterranean cuisine</li>
                      </>
                    ) : destination.name === "Mont Saint-Michel" ? (
                      <>
                        <li><span className="font-semibold">La Mère Poulard:</span> Famous for its fluffy omelets</li>
                        <li><span className="font-semibold">Island Restaurants:</span> Traditional Norman cuisine with a view</li>
                        <li><span className="font-semibold">Mainland Options:</span> More affordable dining before visiting</li>
                      </>
                    ) : destination.name === "Provence" ? (
                      <>
                        <li><span className="font-semibold">Local Markets:</span> Fresh produce and regional specialties</li>
                        <li><span className="font-semibold">Village Bistros:</span> Rustic Provençal cuisine</li>
                        <li><span className="font-semibold">Olive Oil Mills:</span> Tastings and farm-to-table experiences</li>
                      </>
                    ) : destination.name === "Bordeaux" ? (
                      <>
                        <li><span className="font-semibold">Wine Bars:</span> Excellent selections paired with local cheese</li>
                        <li><span className="font-semibold">Riverfront Restaurants:</span> Scenic dining along the Garonne</li>
                        <li><span className="font-semibold">Canelé Bakeries:</span> Try the local rum and vanilla pastry</li>
                      </>
                    ) : (
                      <>
                        <li><span className="font-semibold">Alpine Restaurants:</span> Hearty mountain cuisine</li>
                        <li><span className="font-semibold">Fondue Specialists:</span> Traditional cheese fondue in cozy settings</li>
                        <li><span className="font-semibold">Mountain Huts:</span> Rustic dining with panoramic views</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
              
              {/* Photo Gallery */}
              <div>
                <div className="flex items-center mb-4">
                  <Camera className="text-france-blue mr-2" size={24} />
                  <h2 className="text-xl font-serif font-bold text-france-navy">Photo Gallery</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {destination.highlights.map((highlight: any, index: number) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <img 
                        src={highlight.image} 
                        alt={highlight.name}
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="highlights">
              <h2 className="text-2xl font-serif font-bold text-france-navy mb-6">Highlights of {destination.name}</h2>
              <div className="space-y-8">
                {destination.highlights.map((highlight: any, index: number) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
                        <img 
                          src={highlight.image} 
                          alt={highlight.name}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-france-navy mb-2">{highlight.name}</h3>
                      <p className="text-gray-700 mb-4">{highlight.description}</p>
                      <Button variant="outline" className="border-france-blue text-france-blue hover:bg-france-blue hover:text-white">
                        Learn More
                      </Button>
                    </div>
                    {index < destination.highlights.length - 1 && (
                      <Separator className="col-span-1 md:col-span-2 my-4" />
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tips">
              <h2 className="text-2xl font-serif font-bold text-france-navy mb-6">Travel Tips for {destination.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow rounded-lg p-6 border-l-4 border-france-blue">
                  <h3 className="font-semibold text-lg mb-2">Best Time to Visit</h3>
                  <p className="text-gray-700">{destination.bestTimeToVisit}</p>
                </div>
                
                <div className="bg-white shadow rounded-lg p-6 border-l-4 border-france-blue">
                  <h3 className="font-semibold text-lg mb-2">Getting Around</h3>
                  <p className="text-gray-700">
                    {destination.name === "Paris" ? 
                      "Use the extensive metro system and walk to explore neighborhoods. Consider the Paris Visite travel pass for unlimited travel." : 
                      destination.name === "Nice" ? 
                      "The tramway and buses are convenient. The city center is walkable, and bikes are available for rental along the promenade." :
                      destination.name === "Mont Saint-Michel" ? 
                      "Shuttle buses run from the parking areas to the island. Once there, exploring is done entirely on foot." :
                      destination.name === "Provence" ? 
                      "A rental car is recommended to explore villages and countryside. Some towns have limited public transportation." :
                      destination.name === "Bordeaux" ? 
                      "The city center is easily explored on foot or by tram. For vineyard tours, consider guided excursions or car rentals." :
                      "Local shuttle buses connect the different areas of the valley. For mountain access, use the cable cars and gondolas."
                    }
                  </p>
                </div>
                
                <div className="bg-white shadow rounded-lg p-6 border-l-4 border-france-blue">
                  <h3 className="font-semibold text-lg mb-2">Local Customs</h3>
                  <p className="text-gray-700">
                    {destination.name === "Paris" ? 
                      "Greet shopkeepers with 'Bonjour' when entering. Dining is typically later than in Anglo countries, with dinner often starting at 8pm." : 
                      destination.name === "Nice" ? 
                      "The relaxed Mediterranean pace means longer lunches and later dinners. Beaches often have entrance fees for the equipped sections." :
                      destination.name === "Mont Saint-Michel" ? 
                      "The island gets extremely crowded during peak hours. Consider staying overnight to experience early morning or evening tranquility." :
                      destination.name === "Provence" ? 
                      "Markets are an important social occasion. Many shops close for a long lunch break and on Sundays." :
                      destination.name === "Bordeaux" ? 
                      "Wine tastings often require reservations at prestigious châteaux. Sunday mornings feature a lively market along the riverfront." :
                      "Mountain safety is taken seriously. Always check weather forecasts and lift operations before planning your day."
                    }
                  </p>
                </div>
                
                <div className="bg-white shadow rounded-lg p-6 border-l-4 border-france-blue">
                  <h3 className="font-semibold text-lg mb-2">Money-Saving Tips</h3>
                  <p className="text-gray-700">
                    {destination.name === "Paris" ? 
                      "Many museums are free on the first Sunday of each month. Consider picnicking in parks rather than dining out for every meal." : 
                      destination.name === "Nice" ? 
                      "Public beaches are free, while private beaches charge for amenities. The daily market offers affordable lunch options." :
                      destination.name === "Mont Saint-Michel" ? 
                      "Bring water and snacks as prices on the island are inflated. Consider a combined ticket for multiple attractions." :
                      destination.name === "Provence" ? 
                      "Travel in shoulder seasons for lower accommodation rates. Shop at local markets for picnic supplies." :
                      destination.name === "Bordeaux" ? 
                      "The Bordeaux City Pass offers good value for multiple attractions. Many wine shops offer free tastings." :
                      "Look for ski pass deals when booking in advance. Consider self-catering accommodations to save on dining costs."
                    }
                  </p>
                </div>
                
                <div className="bg-white shadow rounded-lg p-6 border-l-4 border-france-blue">
                  <h3 className="font-semibold text-lg mb-2">Must-Try Local Specialties</h3>
                  <p className="text-gray-700">
                    {destination.name === "Paris" ? 
                      "Croissants, macarons, steak-frites, and classic French onion soup. Don't miss the artisanal cheese shops." : 
                      destination.name === "Nice" ? 
                      "Socca (chickpea pancake), Salade Niçoise, Pissaladière (onion tart), and local olive oils." :
                      destination.name === "Mont Saint-Michel" ? 
                      "La Mère Poulard omelets, butter cookies, salt marsh lamb, and fresh seafood from the bay." :
                      destination.name === "Provence" ? 
                      "Bouillabaisse, ratatouille, tapenade, calissons (almond candies), and local rosé wines." :
                      destination.name === "Bordeaux" ? 
                      "Canelés, entrecôte à la Bordelaise (rib steak with wine sauce), and of course, Bordeaux wines." :
                      "Cheese fondue, tartiflette (potato and cheese dish), and local mountain cheeses like Reblochon."
                    }
                  </p>
                </div>
                
                <div className="bg-white shadow rounded-lg p-6 border-l-4 border-france-blue">
                  <h3 className="font-semibold text-lg mb-2">Useful French Phrases</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><span className="italic">Bonjour</span> - Hello</li>
                    <li><span className="italic">Merci</span> - Thank you</li>
                    <li><span className="italic">S'il vous plaît</span> - Please</li>
                    <li><span className="italic">Excusez-moi</span> - Excuse me</li>
                    <li><span className="italic">Parlez-vous anglais?</span> - Do you speak English?</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Destinations */}
        <div className="bg-france-cream py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold text-france-navy mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {destinations
                .filter(d => d.id !== id)
                .slice(0, 3)
                .map(relatedDest => (
                  <Card key={relatedDest.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <img 
                        src={relatedDest.image} 
                        alt={relatedDest.name}
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-france-navy mb-2">{relatedDest.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{relatedDest.description.substring(0, 80)}...</p>
                      <Button 
                        asChild 
                        variant="outline" 
                        className="w-full border-france-blue text-france-blue hover:bg-france-blue hover:text-white"
                      >
                        <Link to={`/destinations/${relatedDest.id}`}>
                          Explore {relatedDest.name}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
