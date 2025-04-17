
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-france-navy text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-cursive text-2xl mb-4 text-france-gold">Bonjour Voyage</h3>
            <p className="text-gray-300 mb-4">
              Your trusted companion for exploring the beauty and culture of France.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-300 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/travel-tips" className="text-gray-300 hover:text-white transition-colors">
                  Travel Tips
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-100">Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations/paris" className="text-gray-300 hover:text-white transition-colors">
                  Paris
                </Link>
              </li>
              <li>
                <Link to="/destinations/nice" className="text-gray-300 hover:text-white transition-colors">
                  Nice
                </Link>
              </li>
              <li>
                <Link to="/destinations/lyon" className="text-gray-300 hover:text-white transition-colors">
                  Lyon
                </Link>
              </li>
              <li>
                <Link to="/destinations/marseille" className="text-gray-300 hover:text-white transition-colors">
                  Marseille
                </Link>
              </li>
              <li>
                <Link to="/destinations/bordeaux" className="text-gray-300 hover:text-white transition-colors">
                  Bordeaux
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-100">Contact Us</h4>
            <address className="text-gray-300 not-italic">
              <p>742 Rue de la Paix</p>
              <p>75008 Paris, France</p>
              <p className="mt-2">Email: info@bonjourvoyage.com</p>
              <p>Phone: +33 1 23 45 67 89</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bonjour Voyage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
