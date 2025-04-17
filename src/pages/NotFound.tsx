
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-france-blue mb-4">404</h1>
          <p className="text-2xl font-serif text-gray-600 mb-8">
            Oops! We couldn't find that page.
          </p>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Button asChild size="lg" className="bg-france-blue hover:bg-france-blue/90">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
