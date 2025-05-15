
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from 'lucide-react';

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  const products = [
    { 
      id: 1, 
      name: 'FitNation Performance T-Shirt', 
      price: 29.99, 
      category: 'apparel',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 2, 
      name: 'Premium Protein Powder (2lb)', 
      price: 49.99, 
      category: 'supplements',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1579722821273-0f6c1edd4933?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 3, 
      name: 'FitNation Sports Water Bottle', 
      price: 19.99, 
      category: 'accessories',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1605987743673-89aa11ad9388?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 4, 
      name: 'Performance Training Shorts', 
      price: 34.99, 
      category: 'apparel',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1562886877-77045044f840?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 5, 
      name: 'BCAA Recovery Supplement', 
      price: 39.99, 
      category: 'supplements',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 6, 
      name: 'Fitness Resistance Bands Set', 
      price: 24.99, 
      category: 'accessories',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 7, 
      name: 'Gym Duffel Bag', 
      price: 54.99, 
      category: 'accessories',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 8, 
      name: 'Women\'s Performance Leggings', 
      price: 44.99, 
      category: 'apparel',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const addToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`);
    // Implementation of cart functionality would go here
    alert(`Product added to cart!`);
  };

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
              FitNation <span className="text-gym-yellow">Shop</span>
            </h2>
            <div className="w-24 h-1 bg-gym-yellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Enhance your fitness journey with our premium workout apparel, supplements, and accessories.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center mb-12 space-x-2 space-y-2">
            <div className="hidden">This div fixes the space-y issue with the first element</div>
            {['all', 'apparel', 'supplements', 'accessories'].map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category 
                    ? 'bg-gym-yellow text-black' 
                    : 'bg-gym-dark text-white hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="bg-gym-dark border-gray-700 text-white overflow-hidden hover:border-gym-yellow transition-colors duration-300">
                  <div className="relative h-64">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gym-yellow text-black text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">{product.category.toUpperCase()}</span>
                      <div className="flex items-center">
                        <span className="text-gym-yellow mr-1">★</span>
                        <span className="text-xs">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold text-gym-yellow">${product.price}</p>
                      <button 
                        onClick={() => addToCart(product.id)}
                        className="p-2 rounded bg-gym-yellow text-black hover:bg-yellow-400 transition-colors"
                      >
                        <ShoppingCart className="h-5 w-5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 p-10 bg-gym-dark rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Need Personalized Recommendations?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Our fitness experts can help you choose the right supplements and gear for your specific fitness goals.
            </p>
            <button className="bg-gym-yellow text-black px-8 py-3 rounded font-bold hover:bg-yellow-400 transition-colors">
              GET EXPERT ADVICE
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
