
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const changeLanguage = (langCode: string) => {
    setCurrentLanguage(langCode);
    // In a real app, you would also change the app's language here
  };

  const currentLangName = languages.find(lang => lang.code === currentLanguage)?.name || 'English';

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-cursive text-2xl text-france-navy">Bonjour Voyage</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-gray-700 hover:text-france-blue transition-colors">
            Home
          </Link>
          <Link to="/destinations" className="font-medium text-gray-700 hover:text-france-blue transition-colors">
            Destinations
          </Link>
          <Link to="/travel-tips" className="font-medium text-gray-700 hover:text-france-blue transition-colors">
            Travel Tips
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-france-blue transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium text-gray-700 hover:text-france-blue transition-colors">
            Contact
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-2 gap-2">
                <Globe size={16} />
                {currentLangName}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
              {languages.map((language) => (
                <DropdownMenuItem 
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={currentLanguage === language.code ? "bg-muted" : ""}
                >
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Globe size={16} />
                {currentLangName}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
              {languages.map((language) => (
                <DropdownMenuItem 
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={currentLanguage === language.code ? "bg-muted" : ""}
                >
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="py-2 font-medium text-gray-700 hover:text-france-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/destinations" 
              className="py-2 font-medium text-gray-700 hover:text-france-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              to="/travel-tips" 
              className="py-2 font-medium text-gray-700 hover:text-france-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Travel Tips
            </Link>
            <Link 
              to="/about" 
              className="py-2 font-medium text-gray-700 hover:text-france-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="py-2 font-medium text-gray-700 hover:text-france-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
