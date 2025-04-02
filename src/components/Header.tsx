
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#001B3D] text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center">
            <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M25 45L5 32.5V17.5L25 5L45 17.5V32.5L25 45Z" fill="#00EA64" />
            </svg>
            <span className="font-bold text-xl tracking-tight">coursecompass</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-1 py-2">
                Catalog <ChevronDown size={16} />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-1 py-2">
                Resources <ChevronDown size={16} />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-1 py-2">
                Pricing <ChevronDown size={16} />
              </button>
            </div>
            
            <Link to="/" className="py-2">
              DataLab
            </Link>
            
            <Link to="/" className="py-2">
              For Business
            </Link>
            
            <Link to="/" className="py-2">
              For Universities
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center">
            <Search size={20} />
          </button>
          
          <button className="hidden md:flex items-center gap-1">
            <Globe size={18} /> EN
          </button>
          
          <Link to="/login">
            <Button variant="outline" className="hidden md:block border-white text-white hover:bg-white/10">
              Log In
            </Button>
          </Link>
          
          <Link to="/login">
            <Button className="bg-white text-[#001B3D] hover:bg-white/90">
              Get Started
            </Button>
          </Link>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-[#001B3D]/90 backdrop-blur-sm p-4 rounded">
          <nav className="flex flex-col gap-3">
            <Link to="/" className="py-2">Catalog</Link>
            <Link to="/" className="py-2">Resources</Link>
            <Link to="/" className="py-2">Pricing</Link>
            <Link to="/" className="py-2">DataLab</Link>
            <Link to="/" className="py-2">For Business</Link>
            <Link to="/" className="py-2">For Universities</Link>
            <Link to="/login" className="py-2">Log In</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
