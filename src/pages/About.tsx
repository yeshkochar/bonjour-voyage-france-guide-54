
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-france-navy/70 to-france-blue/30"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">About Bonjour Voyage</h1>
            <p className="text-white text-lg max-w-2xl">Your trusted companion for exploring the beauty and culture of France.</p>
          </div>
        </div>
        
        {/* About Us Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <h2 className="text-2xl font-serif font-bold text-france-navy mb-4">Our Story</h2>
              <p className="mb-4">
                Founded in 2023, Bonjour Voyage was born out of a passion for French culture and a desire to share the authentic France with travelers from around the world. Our team of local experts and travel enthusiasts has created this comprehensive guide to help you discover the magic of France beyond the typical tourist experiences.
              </p>
              <p className="mb-8">
                Whether you're planning your first visit to Paris or you're an experienced traveler looking to explore the hidden corners of Provence, our mission is to provide you with reliable information, local insights, and practical tips to make your journey unforgettable.
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-france-navy mb-4">Our Mission</h2>
              <p className="mb-8">
                At Bonjour Voyage, we believe that travel should be more than just visiting popular landmarks. Our mission is to help travelers connect with the authentic culture, history, and people of France. We strive to:
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li className="mb-2">Provide accurate, up-to-date information about destinations across France</li>
                <li className="mb-2">Offer practical advice that makes travel planning easier</li>
                <li className="mb-2">Share cultural insights that enhance your understanding and appreciation</li>
                <li className="mb-2">Support sustainable tourism that respects local communities and environments</li>
                <li className="mb-2">Break down language barriers with helpful phrases and communication tips</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold text-france-navy mb-4">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 mb-12">
                <div className="flex flex-col items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                    alt="Sophie Dubois"
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">Sophie Dubois</h3>
                  <p className="text-france-blue">Founder & Paris Expert</p>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                    alt="Michel Laurent"
                    className="w-32 h-32 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">Michel Laurent</h3>
                  <p className="text-france-blue">Culinary Guide & Provence Specialist</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-serif font-bold text-france-navy mb-4">Get In Touch</h2>
              <p className="mb-6">
                Have questions or suggestions? We'd love to hear from you! Visit our contact page or reach out to us directly.
              </p>
              
              <Button asChild className="bg-france-blue hover:bg-france-blue/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
