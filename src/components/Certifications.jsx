import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiShield, FiCheckCircle, FiGlobe, FiTrendingUp } = FiIcons;

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications = [
    {
      icon: FiShield,
      title: 'ISO 9001:2015',
      subtitle: 'Quality Management System',
      description: 'International standard for quality management systems, ensuring consistent delivery of products and services.',
      color: 'bg-blue-500',
      badge: 'Quality'
    },
    {
      icon: FiShield,
      title: 'ISO 22000:2018',
      subtitle: 'Food Safety Management',
      description: 'Comprehensive food safety management system covering the entire food chain.',
      color: 'bg-green-500',
      badge: 'Food Safety'
    },
    {
      icon: FiAward,
      title: 'GNBS Quality Award',
      subtitle: '2009 National Quality Week',
      description: 'Recognized by the Guyana National Bureau of Standards for excellence in quality standards.',
      color: 'bg-gold-500',
      badge: 'Excellence'
    },
    {
      icon: FiGlobe,
      title: 'Export Certifications',
      subtitle: 'Regional Compliance',
      description: 'Certified for export across Caribbean markets with full regulatory compliance.',
      color: 'bg-purple-500',
      badge: 'Export Ready'
    }
  ];

  const compliance = [
    'HACCP Food Safety Standards',
    'Caribbean Food Safety Regulations',
    'International Export Standards',
    'Organic Certification Ready',
    'Halal Certification Available',
    'Environmental Compliance'
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-caribbean-green/5 to-caribbean-blue/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-caribbean-green mb-6">
            Certifications & Awards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is validated by international certifications 
            and recognition from industry authorities.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <SafeIcon icon={cert.icon} className="w-10 h-10 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 bg-caribbean-gold text-caribbean-green text-xs px-2 py-1 rounded-full font-semibold">
                  {cert.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-caribbean-green mb-2">{cert.title}</h3>
              <h4 className="text-caribbean-blue font-semibold mb-4">{cert.subtitle}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Section */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-caribbean-green mb-6">
                Comprehensive Compliance
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                We maintain the highest standards of compliance across all aspects 
                of our operations, ensuring quality and safety at every level.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {compliance.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-caribbean-green rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div
                className="bg-gradient-to-br from-caribbean-green to-caribbean-blue rounded-2xl p-8 text-white text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="w-16 h-16 bg-caribbean-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-caribbean-green" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Quality Guarantee</h4>
                <p className="text-gray-200 leading-relaxed">
                  Every product that leaves our facility meets or exceeds international 
                  quality standards, backed by our certifications and decades of experience.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-caribbean-green mb-2">100%</div>
            <div className="text-gray-600">Compliant Operations</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-caribbean-green mb-2">15+</div>
            <div className="text-gray-600">Years ISO Certified</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-caribbean-green mb-2">Zero</div>
            <div className="text-gray-600">Quality Incidents</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;