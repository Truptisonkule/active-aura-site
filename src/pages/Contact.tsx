
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
    alert('Message sent! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-gym-yellow" />,
      title: "Phone",
      details: ["(888) 4000-2424", "(888) 4000-2425"]
    },
    {
      icon: <Mail className="h-6 w-6 text-gym-yellow" />,
      title: "Email",
      details: ["support@fitnation.com", "info@fitnation.com"]
    },
    {
      icon: <MapPin className="h-6 w-6 text-gym-yellow" />,
      title: "Location",
      details: ["123 Fitness Street", "Gym City, GC 12345"]
    },
    {
      icon: <Clock className="h-6 w-6 text-gym-yellow" />,
      title: "Working Hours",
      details: ["Mon-Fri: 5:00 AM - 11:00 PM", "Sat-Sun: 7:00 AM - 9:00 PM"]
    }
  ];

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
              Get In <span className="text-gym-yellow">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gym-yellow mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Have questions or ready to start your fitness journey? Contact us using the form below or visit us at one of our locations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-gym-dark rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send Us A Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gym-black border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-gym-yellow"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gym-black border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-gym-yellow"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gym-black border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-gym-yellow"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="classes">Class Information</option>
                    <option value="training">Personal Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gym-black border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-gym-yellow"
                  ></textarea>
                </div>
                <button type="submit" className="bg-gym-yellow text-black px-8 py-3 rounded font-bold hover:bg-yellow-400 transition-colors">
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gym-dark rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-400">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gym-dark rounded-lg p-8 mt-8">
                <h3 className="text-2xl font-bold mb-6">Find Us</h3>
                <div className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                    alt="Gym Location"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
