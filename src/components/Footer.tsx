
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gym-dark text-white relative">
      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-12 text-gym-black">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="currentColor" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-32 pb-8">
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
                className="bg-gym-black text-white px-4 py-2 rounded-l focus:outline-none w-full border border-gray-700 border-r-0"
              />
              <button className="bg-gym-yellow text-black px-4 py-2 font-semibold rounded-r hover:bg-yellow-400 transition-colors flex items-center">
                <span className="mr-1">SIGN UP</span> <ArrowRight size={16} />
              </button>
            </div>
          </div>
          
          {/* Column 2 - Our Studio */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-8 h-1 bg-gym-yellow mr-2"></span> Our Studio
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About us", url: "/about" },
                { label: "Leadership", url: "/team" },
                { label: "Careers", url: "/careers" },
                { label: "Article & News", url: "/blog" },
                { label: "Legal Notices", url: "/legal" }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.url} className="text-gray-400 hover:text-gym-yellow transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2 text-gym-yellow" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Support */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-8 h-1 bg-gym-yellow mr-2"></span> Support
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Send Ticket", url: "/help" },
                { label: "Customer Support", url: "/support" },
                { label: "FAQ", url: "/faq" },
                { label: "Contact us", url: "/contact" },
                { label: "Forum Community", url: "/forum" }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.url} className="text-gray-400 hover:text-gym-yellow transition-colors flex items-center">
                    <ArrowRight size={14} className="mr-2 text-gym-yellow" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="w-8 h-1 bg-gym-yellow mr-2"></span> Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gym-yellow mt-1" />
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
              <li className="flex items-center">
                <Clock className="mr-3 h-5 w-5 text-gym-yellow" />
                <span className="text-gray-400">Mon-Fri: 5:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Copyright © 2025 FitNation, All rights reserved. Made with <Heart size={14} className="inline text-gym-yellow" /> for fitness lovers.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: <Facebook className="h-5 w-5" />, url: "#" },
              { icon: <Instagram className="h-5 w-5" />, url: "#" },
              { icon: <Twitter className="h-5 w-5" />, url: "#" },
              { icon: <Youtube className="h-5 w-5" />, url: "#" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                className="text-gray-400 hover:text-gym-yellow transition-colors h-8 w-8 rounded-full bg-gym-black flex items-center justify-center hover:bg-gym-yellow hover:text-black"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
