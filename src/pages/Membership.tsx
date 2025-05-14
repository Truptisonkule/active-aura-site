
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Membership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  const membershipPlans = {
    monthly: [
      {
        name: 'Basic',
        price: 29.99,
        description: 'Perfect for beginners',
        features: [
          'Gym access during standard hours',
          'Access to basic equipment',
          '2 Group classes per month',
          'Locker room access',
          'Free Wi-Fi'
        ],
        notIncluded: [
          'Personal training sessions',
          'Premium classes',
          '24/7 Access',
          'Nutritional guidance'
        ],
        isPopular: false
      },
      {
        name: 'Standard',
        price: 49.99,
        description: 'Our most popular plan',
        features: [
          'Gym access during all hours',
          'Access to all equipment',
          '8 Group classes per month',
          'Locker with personal key',
          '1 Personal training session',
          'Basic nutritional guidance'
        ],
        notIncluded: [
          'Premium classes',
          'Unlimited group classes'
        ],
        isPopular: true
      },
      {
        name: 'Premium',
        price: 79.99,
        description: 'Maximum results & benefits',
        features: [
          '24/7 Gym access',
          'Access to all premium equipment',
          'Unlimited group classes',
          'Premium locker with towel service',
          '4 Personal training sessions',
          'Advanced nutritional guidance',
          'Access to sauna & spa areas',
          'Free guest passes (2 per month)'
        ],
        notIncluded: [],
        isPopular: false
      }
    ],
    annual: [
      {
        name: 'Basic',
        price: 299.99,
        description: 'Perfect for beginners',
        features: [
          'Gym access during standard hours',
          'Access to basic equipment',
          '2 Group classes per month',
          'Locker room access',
          'Free Wi-Fi',
          'Save $59.89 compared to monthly'
        ],
        notIncluded: [
          'Personal training sessions',
          'Premium classes',
          '24/7 Access',
          'Nutritional guidance'
        ],
        isPopular: false
      },
      {
        name: 'Standard',
        price: 499.99,
        description: 'Our most popular plan',
        features: [
          'Gym access during all hours',
          'Access to all equipment',
          '8 Group classes per month',
          'Locker with personal key',
          '1 Personal training session',
          'Basic nutritional guidance',
          'Save $99.89 compared to monthly'
        ],
        notIncluded: [
          'Premium classes',
          'Unlimited group classes'
        ],
        isPopular: true
      },
      {
        name: 'Premium',
        price: 799.99,
        description: 'Maximum results & benefits',
        features: [
          '24/7 Gym access',
          'Access to all premium equipment',
          'Unlimited group classes',
          'Premium locker with towel service',
          '4 Personal training sessions',
          'Advanced nutritional guidance',
          'Access to sauna & spa areas',
          'Free guest passes (2 per month)',
          'Save $159.89 compared to monthly'
        ],
        notIncluded: [],
        isPopular: false
      }
    ]
  };

  const activePlans = membershipPlans[billingPeriod as keyof typeof membershipPlans];

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
                <span className="text-gym-yellow">MEMBERSHIP</span> PLANS
              </h2>
              <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-gym-yellow to-gym-orange text-5xl md:text-7xl font-bold opacity-10 transform scale-125">
                MEMBERSHIP
              </div>
            </div>
            <div className="w-24 h-1 bg-gym-yellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your fitness goals. All memberships include access to our state-of-the-art facilities and expert guidance.
            </p>
          </motion.div>
          
          <div className="flex justify-center mb-12">
            <div className="bg-gym-dark p-1 rounded-full">
              <div className="flex">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-full transition-all ${
                    billingPeriod === 'monthly' ? 'bg-gym-yellow text-black' : 'text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('annual')}
                  className={`px-6 py-2 rounded-full transition-all flex items-center ${
                    billingPeriod === 'annual' ? 'bg-gym-yellow text-black' : 'text-white'
                  }`}
                >
                  Annual <span className="text-xs ml-1 bg-green-600 text-white px-1 rounded">Save 20%</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-lg overflow-hidden ${
                  plan.isPopular ? 'border-2 border-gym-yellow' : 'border border-gray-700'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-gym-yellow text-black py-1 px-4 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="bg-gym-dark p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                  <button className={`w-full py-3 rounded font-bold transition-colors ${
                    plan.isPopular 
                      ? 'bg-gym-yellow text-black hover:bg-yellow-400'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}>
                    SELECT PLAN
                  </button>
                </div>
                <div className="p-8 bg-black bg-opacity-30">
                  <h4 className="font-semibold mb-4 text-gym-yellow">What's included:</h4>
                  <ul className="mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start mb-3">
                        <Check size={16} className="text-gym-yellow mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-semibold mb-4 text-gray-400">Not included:</h4>
                      <ul>
                        {plan.notIncluded.map((feature, idx) => (
                          <li key={idx} className="flex items-start mb-3">
                            <span className="text-red-500 mr-2 mt-1">✕</span>
                            <span className="text-sm text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 p-10 bg-gym-dark rounded-lg"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Our fitness experts are ready to help you select the perfect membership plan based on your fitness goals, 
                schedule, and preferences. Get personalized advice today!
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-gym-yellow text-black px-8 py-3 rounded font-bold hover:bg-yellow-400 transition-colors">
                  SCHEDULE A TOUR
                </button>
                <button className="border border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-black transition-colors">
                  CONTACT US
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Membership;
