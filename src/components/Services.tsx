
import { Dumbbell, Users, Calendar, ShoppingCart } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="service-card animate-zoom-in">
      <div className="bg-gym-yellow p-4 w-16 h-16 flex items-center justify-center rounded-md mb-4">
        <Icon className="h-8 w-8 text-black" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "FREE WEIGHT",
      description: "Access to a complete range of free weights for strength training and muscle building."
    },
    {
      icon: Users,
      title: "SOLO TRAINER",
      description: "One-on-one training sessions with certified fitness professionals tailored to your goals."
    },
    {
      icon: Calendar,
      title: "FULL GEAR",
      description: "State-of-the-art equipment for all your fitness needs, from cardio to strength training."
    },
    {
      icon: ShoppingCart,
      title: "PRIVATE TRAIN",
      description: "Exclusive access to private training areas for a more personalized workout experience."
    }
  ];

  return (
    <section className="py-20 bg-gym-black" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">WHY CHOOSE US</h2>
          <div className="w-24 h-1 bg-gym-yellow mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
