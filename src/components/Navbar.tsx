
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CLASSES', path: '/classes' },
    { name: 'TRAINERS', path: '/trainers' },
    { name: 'TIMETABLE', path: '/timetable' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'BLOG', path: '/blog' },
    { name: 'SHOP', path: '/shop' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gym-black bg-opacity-90 py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-white font-bold text-2xl font-display">
            <span className="text-gym-yellow">FIT</span>NATION
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-gym-yellow text-sm font-semibold transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/cart" className="text-white hover:text-gym-yellow ml-4">
            <ShoppingCart className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gym-black bg-opacity-95 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-gym-yellow py-3 text-center font-medium border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/cart" 
              className="text-white hover:text-gym-yellow py-3 text-center font-medium border-b border-gray-800 flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart className="h-5 w-5 mr-2" /> CART
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
