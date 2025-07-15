import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiHeart, FiTrendingUp, FiGlobe } = FiIcons;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: FiUser,
      title: 'Led by Excellence',
      description: 'CEO Tamesh Jagmohan brings decades of leadership and community service to our operations.'
    },
    {
      icon: FiHeart,
      title: 'Community Focused',
      description: 'Active Lions Club member since 1991, committed to serving the Caribbean community.'
    },
    {
      icon: FiTrendingUp,
      title: 'Award Winning',
      description: '2009 National Quality Week Award by the Guyana National Bureau of Standards.'
    },
    {
      icon: FiGlobe,
      title: 'Regional Impact',
      description: 'Feeding the Caribbean with quality rice products and supporting food security.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-caribbean-green/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-caribbean-green mb-6">
            About CARICOM Rice Mills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A leading rice milling company based in Guyana, committed to delivering 
            high-quality, safe, and sustainable rice products across the Caribbean.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-2 bg-caribbean-gold/10 rounded-full px-4 py-2">
              <SafeIcon icon={FiTrendingUp} className="text-caribbean-gold" />
              <span className="text-sm font-medium text-caribbean-green">Excellence Since Foundation</span>
            </div>

            <h3 className="text-3xl font-bold text-caribbean-green">
              From Farm to Table Excellence
            </h3>

            <p className="text-gray-600 leading-relaxed">
              With our subsidiary farm, Pure Harvest Inc., we control every stage of the rice 
              production process — from planting and harvesting to milling and packaging. This 
              vertical integration ensures quality at every step.
            </p>

            <p className="text-gray-600 leading-relaxed">
              As an ISO 9001 (Quality Management) and ISO 22000 (Food Safety Management) 
              certified company, we are dedicated to excellence, innovation, and food safety 
              compliance that meets international standards.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <div className="w-16 h-16 bg-caribbean-green rounded-full flex items-center justify-center">
                <SafeIcon icon={FiUser} className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-caribbean-green">Tamesh Jagmohan</h4>
                <p className="text-gray-600">CEO & Community Leader</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern rice milling facility"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-caribbean-green/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-caribbean-gold rounded-full flex items-center justify-center shadow-lg">
              <SafeIcon icon={FiTrendingUp} className="w-12 h-12 text-caribbean-green" />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-caribbean-green rounded-full flex items-center justify-center mb-4">
                <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-caribbean-green mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;