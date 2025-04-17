
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import TravelTips from "@/components/TravelTips";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Destinations />
      <TravelTips />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
