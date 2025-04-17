
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background image - Eiffel Tower */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop')", 
          backgroundPosition: "center 25%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      </div>
      
      <div className="container relative z-10 h-full mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
        <h1 className="animate-fade-in font-cursive text-5xl md:text-7xl mb-2 text-shadow">
          Bonjour Voyage
        </h1>
        <h2 className="animate-fade-in text-xl md:text-3xl font-serif mb-6 text-shadow">
          Your Guide to Discovering France
        </h2>
        <p className="animate-slide-up text-lg md:text-xl max-w-3xl mb-8 text-shadow delay-150">
          Explore the beauty, culture, and heritage of France with our comprehensive 
          multilingual travel guides and insider tips.
        </p>
        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 delay-300">
          <Button 
            size="lg" 
            className="bg-france-blue hover:bg-france-blue/90 text-white"
            onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Destinations
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-france-navy"
            onClick={() => document.getElementById('travel-tips')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Travel Tips
          </Button>
        </div>
      </div>
    </div>
  );
}
