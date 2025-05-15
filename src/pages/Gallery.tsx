
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Gallery items with categories and actual images
  const galleryItems = [
    { 
      id: 1, 
      category: 'gym', 
      title: 'Gym Facilities',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    { 
      id: 2, 
      category: 'classes', 
      title: 'Group Classes',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    { 
      id: 3, 
      category: 'gym', 
      title: 'Weight Area',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    { 
      id: 4, 
      category: 'events', 
      title: 'Fitness Competition',
      image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    { 
      id: 5, 
      category: 'classes', 
      title: 'Yoga Session',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80'
    },
    { 
      id: 6, 
      category: 'trainers', 
      title: 'Personal Training',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    { 
      id: 7, 
      category: 'gym', 
      title: 'Cardio Section',
      image: 'https://images.unsplash.com/photo-1596357395217-80de13130e92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    },
    { 
      id: 8, 
      category: 'events', 
      title: 'Member Meetup',
      image: 'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80'
    },
    { 
      id: 9, 
      category: 'trainers', 
      title: 'Coaching Session',
      image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
    },
    { 
      id: 10, 
      category: 'classes', 
      title: 'HIIT Class',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    { 
      id: 11, 
      category: 'gym', 
      title: 'Recovery Area',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    { 
      id: 12, 
      category: 'events', 
      title: 'Nutrition Workshop',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80'
    },
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gym-black text-white">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
              Our <span className="text-gym-yellow">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-gym-yellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Take a visual tour of our facilities, classes, and community events. Get a glimpse of the FitNation experience.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center mb-12 space-x-2 space-y-2">
            <div className="hidden">This div fixes the space-y issue with the first element</div>
            {['all', 'gym', 'classes', 'trainers', 'events'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === filter 
                    ? 'bg-gym-yellow text-black' 
                    : 'bg-gym-dark text-white hover:bg-gray-700'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className="overflow-hidden rounded-lg group relative"
              >
                <div className="aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <span className="inline-block px-3 py-1 bg-gym-yellow text-black text-xs rounded-full uppercase">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="text-xl font-bold mb-6">Follow Us on Social Media for More Updates</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="h-12 w-12 rounded-full bg-gym-dark flex items-center justify-center hover:bg-gym-yellow transition-colors duration-300">
                <span className="text-xl">FB</span>
              </a>
              <a href="#" className="h-12 w-12 rounded-full bg-gym-dark flex items-center justify-center hover:bg-gym-yellow transition-colors duration-300">
                <span className="text-xl">IG</span>
              </a>
              <a href="#" className="h-12 w-12 rounded-full bg-gym-dark flex items-center justify-center hover:bg-gym-yellow transition-colors duration-300">
                <span className="text-xl">TW</span>
              </a>
              <a href="#" className="h-12 w-12 rounded-full bg-gym-dark flex items-center justify-center hover:bg-gym-yellow transition-colors duration-300">
                <span className="text-xl">YT</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
