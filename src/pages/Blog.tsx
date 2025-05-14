
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const blogCategories = ['all', 'fitness', 'nutrition', 'wellness', 'motivation'];
  
  const blogPosts = [
    {
      id: 1,
      title: 'Mind Over Matter: The Importance of Health in Fitness',
      excerpt: 'Consistency is key when it comes to reaching your fitness goals. Our blog is here to provide you with tips...',
      category: 'wellness',
      image: '/blog1.jpg',
      date: 'May 10, 2023',
      author: 'John Smith'
    },
    {
      id: 2,
      title: 'Strategies for Overcoming Fitness Plateaus and Achieving New Goals',
      excerpt: 'Cardio is essential for heart health and burning calories. Explore our blog for exciting cardio workouts that can be done...',
      category: 'fitness',
      image: '/blog2.jpg',
      date: 'April 25, 2023',
      author: 'Sarah Johnson'
    },
    {
      id: 3,
      title: 'Fuel Your Workout: A Guide to Pre- and Post-Workout Nutrition',
      excerpt: 'Recovery is just as important as your workouts. Dive into our blog to learn about the best practices for muscle...',
      category: 'nutrition',
      image: '/blog3.jpg',
      date: 'April 15, 2023',
      author: 'Mike Davis'
    },
    {
      id: 4,
      title: '5 Essential Exercises to Improve Your Core Strength',
      excerpt: 'A strong core is the foundation of overall fitness. Learn the most effective exercises to build a solid core...',
      category: 'fitness',
      image: '/blog4.jpg',
      date: 'March 30, 2023',
      author: 'Emma Wilson'
    },
    {
      id: 5,
      title: 'The Science of Sleep: How Rest Impacts Your Fitness Results',
      excerpt: 'Are you getting enough quality sleep? Discover how sleep affects your recovery, muscle growth, and overall performance...',
      category: 'wellness',
      image: '/blog5.jpg',
      date: 'March 22, 2023',
      author: 'Robert Chen'
    },
    {
      id: 6,
      title: 'Balanced Nutrition: Creating a Sustainable Diet Plan',
      excerpt: 'Forget fad diets - learn how to create a balanced nutrition plan that supports your fitness goals while being sustainable long-term...',
      category: 'nutrition',
      image: '/blog6.jpg',
      date: 'March 15, 2023',
      author: 'Lisa Thompson'
    },
  ];
  
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
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
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
                <span className="text-gym-yellow">BLOG</span>
              </h2>
              <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-gym-yellow to-gym-orange text-5xl md:text-7xl font-bold opacity-10 transform scale-125">
                BLOG
              </div>
            </div>
            <div className="w-24 h-1 bg-gym-yellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Empowering You To Reach New Fitness Heights
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12 space-x-2 space-y-2">
            <div className="hidden">This div fixes the space-y issue with the first element</div>
            {blogCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category 
                    ? 'bg-gym-yellow text-black' 
                    : 'bg-gym-dark text-white hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gym-dark p-6 rounded-lg">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Featured Post Image</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-gym-yellow text-sm uppercase tracking-wider mb-2">{filteredPosts[0]?.category.toUpperCase()}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{filteredPosts[0]?.title}</h3>
                <p className="text-gray-400 mb-4">{filteredPosts[0]?.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <span>{filteredPosts[0]?.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {filteredPosts[0]?.author}</span>
                </div>
                <Link to={`/blog/${filteredPosts[0]?.id}`} className="inline-flex items-center text-gym-yellow hover:text-yellow-400 transition-colors">
                  READ MORE <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gym-dark rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="aspect-[16/9] bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500">Blog Post Image</span>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="text-gym-yellow text-xs uppercase tracking-wider mb-2">{post.category.toUpperCase()}</span>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-1">•</span>
                        <span>By {post.author}</span>
                      </div>
                      <Link to={`/blog/${post.id}`} className="text-gym-yellow hover:text-yellow-400 transition-colors flex items-center text-sm">
                        Read <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 p-10 bg-gym-dark rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Want More Fitness Content?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to get weekly updates on the latest articles, fitness tips, and exclusive workout content.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 mb-3 sm:mb-0 sm:mr-2 bg-gym-black border border-gray-700 rounded focus:outline-none focus:border-gym-yellow"
              />
              <button className="bg-gym-yellow text-black px-6 py-3 rounded font-bold hover:bg-yellow-400 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
