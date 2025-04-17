
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would submit to a backend service
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our latest travel tips and guides soon.",
      duration: 5000,
    });
    
    setEmail("");
  };

  return (
    <section className="py-16 bg-france-stone">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-france-navy mb-3">
            Stay Updated with French Travel Insights
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest travel tips, seasonal guides, and special offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-france-blue hover:bg-france-blue/90">
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
