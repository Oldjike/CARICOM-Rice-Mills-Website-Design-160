import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSeed, FiSun, FiTruck, FiSettings, FiPackage, FiGlobe } = FiIcons;

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      icon: FiSeed,
      title: 'Planting',
      description: 'Pure Harvest Inc. plants premium rice varieties using sustainable farming practices',
      color: 'bg-green-500'
    },
    {
      icon: FiSun,
      title: 'Harvesting',
      description: 'Climate-resilient harvesting techniques ensure optimal grain quality',
      color: 'bg-yellow-500'
    },
    {
      icon: FiTruck,
      title: 'Transportation',
      description: 'Efficient logistics system transports rice from farm to mill',
      color: 'bg-blue-500'
    },
    {
      icon: FiSettings,
      title: 'Milling',
      description: 'State-of-the-art milling equipment processes rice to perfection',
      color: 'bg-purple-500'
    },
    {
      icon: FiPackage,
      title: 'Packaging',
      description: 'Food-safe packaging with QR codes for full traceability',
      color: 'bg-orange-500'
    },
    {
      icon: FiGlobe,
      title: 'Distribution',
      description: 'Regional distribution across the Caribbean through our Trinidad hub',
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-caribbean-green mb-6">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From seed to shelf, we control every step of the rice production process 
            to ensure premium quality and food safety.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 hover:border-caribbean-gold/30">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-caribbean-green text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6`}>
                    <SafeIcon icon={step.icon} className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-caribbean-green mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-caribbean-gold/30 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-caribbean-green to-caribbean-blue rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Quality at Every Step</h3>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                Our ISO 9001 and ISO 22000 certifications ensure that every grain of rice 
                meets the highest standards of quality and food safety.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-caribbean-gold rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiSettings} className="w-6 h-6 text-caribbean-green" />
                </div>
                <div>
                  <h4 className="font-semibold">Traceable Supply Chain</h4>
                  <p className="text-gray-200">QR codes enable full traceability from farm to table</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566843972142-a0c58ee8c2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Quality control process"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;