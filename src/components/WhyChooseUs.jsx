import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiMapPin, FiShield, FiTrendingUp, FiTruck, FiSettings, FiStar, FiGlobe } = FiIcons;

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const reasons = [
    {
      icon: FiAward,
      title: 'ISO 9001 & ISO 22000 Certified',
      description: 'Internationally recognized quality and food safety management systems',
      color: 'bg-blue-500'
    },
    {
      icon: FiMapPin,
      title: 'Locally Grown & Regionally Distributed',
      description: 'Supporting local agriculture while serving the entire Caribbean region',
      color: 'bg-green-500'
    },
    {
      icon: FiShield,
      title: 'Climate-Resilient Farming',
      description: 'Sustainable practices that adapt to Caribbean climate challenges',
      color: 'bg-emerald-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Traceable Supply Chain',
      description: 'Full transparency from farm to table with QR code technology',
      color: 'bg-purple-500'
    },
    {
      icon: FiTruck,
      title: 'Reliable Logistics',
      description: 'Efficient distribution network with Trinidad hub for regional coverage',
      color: 'bg-orange-500'
    },
    {
      icon: FiSettings,
      title: 'Blockchain-Enabled Payments',
      description: 'Modern payment systems for secure and efficient transactions',
      color: 'bg-red-500'
    },
    {
      icon: FiStar,
      title: 'Award-Winning Quality',
      description: '2009 National Quality Week Award winner by GNBS',
      color: 'bg-yellow-500'
    },
    {
      icon: FiGlobe,
      title: 'Regional Food Security',
      description: 'Contributing to Caribbean food independence and sustainability',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-caribbean-green mb-6">
            Why Choose CARICOM Rice Mills?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine traditional Caribbean agriculture with modern technology and 
            international standards to deliver unmatched quality and reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-caribbean-gold/30"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-16 h-16 ${reason.color} rounded-full flex items-center justify-center mb-6`}>
                <SafeIcon icon={reason.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-caribbean-green mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-caribbean-green to-caribbean-blue rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="text-4xl font-bold text-caribbean-gold mb-2">30+</div>
              <div className="text-gray-200">Years of Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-4xl font-bold text-caribbean-gold mb-2">15+</div>
              <div className="text-gray-200">Caribbean Countries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="text-4xl font-bold text-caribbean-gold mb-2">99%</div>
              <div className="text-gray-200">Customer Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="text-4xl font-bold text-caribbean-gold mb-2">1000+</div>
              <div className="text-gray-200">Tons Processed Monthly</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;