
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gym-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="text-white font-bold text-2xl font-display">
                <span className="text-gym-yellow">FIT</span>NATION
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              FitNation is your ultimate fitness destination. Join our community and take your fitness journey to the next level!
            </p>
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-gym-black text-white px-4 py-2 rounded-l focus:outline-none w-full"
              />
              <button className="bg-gym-yellow text-black px-4 py-2 font-semibold rounded-r hover:bg-yellow-400 transition-colors">
                SIGN UP
              </button>
            </div>
          </div>
          
          {/* Column 2 - Our Studio */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Studio</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-gym-yellow transition-colors">About us</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-gym-yellow transition-colors">Leadership</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-gym-yellow transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-gym-yellow transition-colors">Article & News</Link></li>
              <li><Link to="/legal" className="text-gray-400 hover:text-gym-yellow transition-colors">Legal Notices</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-gym-yellow transition-colors">Send Ticket</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-gym-yellow transition-colors">Customer Support</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-gym-yellow transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gym-yellow transition-colors">Contact us</Link></li>
              <li><Link to="/forum" className="text-gray-400 hover:text-gym-yellow transition-colors">Forum Community</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <span className="text-gray-400">123 Fitness Street, Gym City, GC 12345</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-gym-yellow" />
                <a href="mailto:support@fitnation.com" className="text-gray-400 hover:text-gym-yellow transition-colors">support@fitnation.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-gym-yellow" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-gym-yellow transition-colors">(888) 4000-2424</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Copyright © 2025 FitNation, All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gym-yellow transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gym-yellow transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gym-yellow transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gym-yellow transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
