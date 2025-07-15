import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiAward, FiTruck, FiShield } = FiIcons;

const Hero = () => {
  const stats = [
    { icon: FiAward, value: '30+', label: 'Years Experience' },
    { icon: FiTruck, value: '1000+', label: 'Deliveries Monthly' },
    { icon: FiShield, value: 'ISO', label: 'Certified Quality' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-rice-field bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-caribbean-green/90 via-caribbean-green/70 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-caribbean-gold/20 rounded-full animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-caribbean-blue/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-caribbean-gold/20 backdrop-blur-sm rounded-full px-4 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SafeIcon icon={FiAward} className="text-caribbean-gold" />
              <span className="text-sm font-medium">2009 National Quality Week Award Winner</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-caribbean-gold">ISO Certified.</span>
              <br />
              <span className="text-white">Locally Grown.</span>
              <br />
              <span className="text-caribbean-gold">Regionally Trusted.</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              CARICOM Rice Mills Limited delivers premium quality rice across the Caribbean, 
              feeding communities with quality, care, and compliance.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="bg-caribbean-gold text-caribbean-green px-8 py-4 rounded-full font-semibold text-lg hover:bg-caribbean-gold/90 transition-colors duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Our Rice</span>
                <SafeIcon icon={FiArrowRight} />
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-caribbean-green transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-caribbean-gold rounded-full flex items-center justify-center">
                    <SafeIcon icon={stat.icon} className="w-8 h-8 text-caribbean-green" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-caribbean-gold mb-2">{stat.value}</div>
                <div className="text-white font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;