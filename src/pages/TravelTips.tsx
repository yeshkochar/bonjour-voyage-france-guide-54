
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Euro, Utensils, Train, Clock, Languages, Luggage, ShieldCheck, CreditCard } from "lucide-react";

// Define tips directly in this component
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

const categories = [
  { id: "all", name: "All Tips" },
  { id: "transport", name: "Transportation", icon: <Train className="h-5 w-5 text-france-blue" /> },
  { id: "money", name: "Money Matters", icon: <Euro className="h-5 w-5 text-france-blue" /> },
  { id: "food", name: "Food & Dining", icon: <Utensils className="h-5 w-5 text-france-blue" /> },
  { id: "language", name: "Language Tips", icon: <Languages className="h-5 w-5 text-france-blue" /> },
  { id: "safety", name: "Safety & Health", icon: <ShieldCheck className="h-5 w-5 text-france-blue" /> }
];

const extendedTips = [
  // Transportation Tips
  {
    category: "transport",
    title: "Getting Around Paris",
    content: "The Paris Metro is one of the most efficient ways to get around the city. Purchase a carnet of 10 tickets for savings, or consider the Paris Visite travel pass for unlimited travel. Most major attractions are near Metro stations. For a scenic experience, try the Batobus boats that stop at major sights along the Seine."
  },
  {
    category: "transport",
    title: "Train Travel in France",
    content: "France's high-speed TGV trains connect major cities quickly and comfortably. Book tickets in advance on the SNCF website for the best prices. Consider the France Rail Pass if you plan to make multiple journeys. Remember to validate your ticket before boarding regional trains at the small yellow machines."
  },
  {
    category: "transport",
    title: "Driving in France",
    content: "France has excellent roads, but be prepared for toll highways (autoroutes). City driving can be challenging, especially in Paris. International driving permits are recommended alongside your regular license. Gas (essence) is expensive compared to North America. Parking in cities can be difficult - look for underground parking garages."
  },
  {
    category: "transport",
    title: "Public Transportation Etiquette",
    content: "Always validate your ticket when using buses, trams, or metros. Offer your seat to elderly, pregnant, or disabled travelers. Keep conversations quiet, especially on early morning or late night services. Standing on the right side of escalators allows people in a hurry to pass on the left."
  },
  
  // Money Matters
  {
    category: "money",
    title: "Currency Exchange Tips",
    content: "Avoid exchanging money at airports or tourist areas where rates are poor. ATMs generally offer the best exchange rates, but check with your bank about foreign transaction fees. Always carry some cash, as small businesses in rural areas may not accept cards. Inform your bank of your travel dates to avoid card blocking."
  },
  {
    category: "money",
    title: "Tipping in France",
    content: "Service is usually included in restaurant bills (look for 'service compris'). If service was exceptional, leaving a few euros is appreciated but not expected. For taxi drivers, rounding up to the nearest euro or adding 5-10% for longer rides is customary. Hotel porters typically receive 1-2€ per bag."
  },
  {
    category: "money",
    title: "Tax Refunds for Visitors",
    content: "Non-EU residents spending over €100 in the same store on the same day may qualify for VAT refunds. Look for 'Tax-Free Shopping' signs in stores. Keep your receipts and request a tax-free form. Process your refund at the airport before departure at the PABLO terminal or customs office."
  },
  {
    category: "money",
    title: "Budget Planning",
    content: "Paris and the French Riviera are considerably more expensive than rural areas. Consider staying in smaller towns and taking day trips to major cities. Many museums offer free admission on the first Sunday of each month. Look for 'menu du jour' (set menu) options in restaurants for better value meals."
  },
  
  // Food & Dining
  {
    category: "food",
    title: "French Dining Hours",
    content: "French lunch typically runs from 12:00-2:00 PM, and dinner from 7:30-10:00 PM. Many restaurants won't serve food outside these hours. Cafés usually serve food all day. Making reservations is recommended for dinner, especially in popular restaurants or tourist areas."
  },
  {
    category: "food",
    title: "Understanding French Menus",
    content: "A 'formule' or 'menu fixe' offers a set meal at a fixed price. 'Entrée' in French refers to a starter, not the main course. 'Plat' is the main dish, and 'dessert' is, well, dessert! Don't be afraid to ask waiters for recommendations or explanations of unfamiliar dishes."
  },
  {
    category: "food",
    title: "Regional Specialties Worth Trying",
    content: "Each region has its own specialties: Bouillabaisse in Marseille, Cassoulet in Toulouse, Ratatouille in Nice, Choucroute in Alsace, and Coq au Vin in Burgundy. Always try the local cheese specialties, as each region produces unique varieties. Wine pairing with local food is part of the French gastronomic experience."
  },
  {
    category: "food",
    title: "Market Shopping",
    content: "Local markets offer the freshest produce and authentic local products. Most towns have weekly markets (look for signs saying 'jour du marché'). Bring your own bag and be prepared to choose your own fruits and vegetables (don't handle what you don't intend to buy). Practice basic French phrases for quantities and asking prices."
  },
  
  // Language Tips
  {
    category: "language",
    title: "Essential French Phrases",
    content: "Learning a few basic phrases will enhance your experience: 'Bonjour' (Hello), 'Merci' (Thank you), 'S'il vous plaît' (Please), 'Excusez-moi' (Excuse me), 'Parlez-vous anglais?' (Do you speak English?). Remember to use formal 'vous' rather than informal 'tu' with strangers."
  },
  {
    category: "language",
    title: "Greeting Etiquette",
    content: "Always start interactions with 'Bonjour' (or 'Bonsoir' in the evening) before asking questions or making requests. This is considered basic politeness in France. When entering small shops, greeting the shopkeeper is expected. Saying goodbye ('Au revoir') when leaving is equally important."
  },
  {
    category: "language",
    title: "Pronunciation Tips",
    content: "French pronunciation can be challenging. The 'r' sound is made in the back of the throat. Final consonants are often silent. Nasal vowels take practice. Don't worry about perfect pronunciation - locals appreciate the effort to speak their language, even with mistakes."
  },
  {
    category: "language",
    title: "Helpful Apps and Resources",
    content: "Download offline French dictionaries and translation apps before your trip. Google Translate's camera feature can translate menus and signs in real-time. Language learning apps like Duolingo or Babbel offer basic French courses. Consider carrying a small phrasebook for situations when technology isn't available."
  },
  
  // Safety & Health
  {
    category: "safety",
    title: "Emergency Information",
    content: "Important emergency numbers in France: General Emergency: 112, Police: 17, Fire: 18, Medical: 15. These numbers are free to call, even from mobile phones without a SIM card. If you need medical attention, pharmacies (marked by a green cross) can provide basic advice and are widely available."
  },
  {
    category: "safety",
    title: "Avoiding Tourist Scams",
    content: "Be wary of petition scammers, friendship bracelet schemes, and the 'gold ring' trick in tourist areas. Keep valuables secure and be vigilant in crowded places, particularly on public transport and at major attractions. Use hotel safes for important documents and excess cash."
  },
  {
    category: "safety",
    title: "Health Insurance",
    content: "Ensure your travel insurance includes health coverage before departing. European Union citizens should obtain a free European Health Insurance Card (EHIC) or the new UK Global Health Insurance Card (GHIC) for UK citizens. Non-EU visitors should consider comprehensive travel insurance as medical care, while excellent, can be expensive."
  },
  {
    category: "safety",
    title: "Staying Safe in Cities",
    content: "France is generally safe, but take normal precautions in cities. Avoid isolated areas late at night, particularly around train stations. Keep photocopies of important documents separate from originals. Register with your country's embassy or consulate if staying for an extended period."
  }
];

const phrasesForTravelers = [
  { phrase: "Bonjour", meaning: "Hello", usage: "Essential greeting for all situations" },
  { phrase: "Au revoir", meaning: "Goodbye", usage: "When leaving any establishment" },
  { phrase: "S'il vous plaît", meaning: "Please", usage: "When making any request" },
  { phrase: "Merci", meaning: "Thank you", usage: "After receiving service or help" },
  { phrase: "Excusez-moi", meaning: "Excuse me", usage: "To get attention or apologize" },
  { phrase: "Parlez-vous anglais?", meaning: "Do you speak English?", usage: "When you need language assistance" },
  { phrase: "Je ne comprends pas", meaning: "I don't understand", usage: "When confused by French responses" },
  { phrase: "Où sont les toilettes?", meaning: "Where are the toilets?", usage: "When nature calls" },
  { phrase: "L'addition, s'il vous plaît", meaning: "The bill, please", usage: "When ready to pay at restaurants" },
  { phrase: "C'est combien?", meaning: "How much is it?", usage: "When shopping" },
  { phrase: "Je voudrais...", meaning: "I would like...", usage: "For ordering or making requests" },
  { phrase: "À votre santé", meaning: "To your health", usage: "For toasting drinks" }
];

export default function TravelTipsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-france-navy/70 to-france-blue/40"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">France Travel Tips</h1>
            <p className="text-white text-lg max-w-2xl">Essential advice to help you navigate French culture and make the most of your journey.</p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="overflow-x-auto p-1">
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    {category.icon && category.icon}
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tips.map((tip, index) => (
                  <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4">{tip.icon}</div>
                      <h3 className="text-xl font-semibold text-france-navy mb-2">{tip.title}</h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-serif font-bold text-france-navy mb-6">Detailed Travel Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Accordion type="single" collapsible className="w-full">
                      {extendedTips.slice(0, Math.ceil(extendedTips.length / 2)).map((tip, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-france-navy font-medium">{tip.title}</AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            {tip.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                  <div>
                    <Accordion type="single" collapsible className="w-full">
                      {extendedTips.slice(Math.ceil(extendedTips.length / 2)).map((tip, index) => (
                        <AccordionItem key={index} value={`item-${index + Math.ceil(extendedTips.length / 2)}`}>
                          <AccordionTrigger className="text-france-navy font-medium">{tip.title}</AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            {tip.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Category-specific tabs */}
            {categories.slice(1).map(category => (
              <TabsContent key={category.id} value={category.id}>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">{category.icon}</div>
                    <h2 className="text-2xl font-serif font-bold text-france-navy">{category.name}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {extendedTips
                      .filter(tip => tip.category === category.id)
                      .map((tip, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-france-navy font-medium">{tip.title}</AccordionTrigger>
                          <AccordionContent className="text-gray-700">
                            {tip.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Language Phrase Section */}
          <div className="mt-16 bg-france-cream rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Languages className="h-6 w-6 text-france-blue mr-3" />
              <h2 className="text-2xl font-serif font-bold text-france-navy">Essential French Phrases for Travelers</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-france-blue">
                    <th className="px-4 py-3">French Phrase</th>
                    <th className="px-4 py-3">Meaning</th>
                    <th className="px-4 py-3">When to Use</th>
                  </tr>
                </thead>
                <tbody>
                  {phrasesForTravelers.map((phrase, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white/50" : "bg-white/20"}>
                      <td className="px-4 py-3 font-semibold italic">{phrase.phrase}</td>
                      <td className="px-4 py-3">{phrase.meaning}</td>
                      <td className="px-4 py-3">{phrase.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Tourist Information */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-france-navy mb-6">Tourist Information Centers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-france-navy mb-2">Paris Visitor Center</h3>
                  <p className="text-gray-700 mb-4">29 Rue de Rivoli, 75004 Paris</p>
                  <p className="text-sm text-gray-600">Open daily 9am-7pm. Multilingual staff available for information, maps, and ticketing services.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-france-navy mb-2">Nice Tourism Office</h3>
                  <p className="text-gray-700 mb-4">5 Promenade des Anglais, 06000 Nice</p>
                  <p className="text-sm text-gray-600">Open Monday-Saturday 9am-6pm, Sunday 10am-5pm. Information on Riviera attractions and coastal activities.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-france-navy mb-2">Bordeaux Tourism Office</h3>
                  <p className="text-gray-700 mb-4">12 Cours du 30 Juillet, 33000 Bordeaux</p>
                  <p className="text-sm text-gray-600">Open daily 9:30am-6:30pm. Specializes in wine tour information and regional excursions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
