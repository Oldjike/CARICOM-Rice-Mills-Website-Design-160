import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiGlobe, FiArrowUp, FiAward, FiShield } = FiIcons;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Products',
      links: [
        'Premium White Rice',
        'Nutritious Brown Rice',
        'Golden Parboiled Rice',
        'Custom Packaging',
        'Bulk Orders'
      ]
    },
    {
      title: 'Services',
      links: [
        'Wholesale Distribution',
        'Retail Partnerships',
        'Private Labeling',
        'Quality Assurance',
        'Logistics Support'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Our Process',
        'Certifications',
        'Sustainability',
        'Careers'
      ]
    },
    {
      title: 'Support',
      links: [
        'Contact Us',
        'Customer Service',
        'Order Tracking',
        'Quality Guarantee',
        'Technical Support'
      ]
    }
  ];

  const certifications = [
    { name: 'ISO 9001', icon: FiShield },
    { name: 'ISO 22000', icon: FiShield },
    { name: 'GNBS Award', icon: FiAward }
  ];

  return (
    <footer className="bg-caribbean-green text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-caribbean-gold rounded-full flex items-center justify-center">
                <span className="text-caribbean-green font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">CARICOM</h1>
                <p className="text-sm text-caribbean-gold font-medium">Rice Mills Limited</p>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Feeding the Caribbean with Quality, Care, and Compliance. 
              ISO certified rice milling company committed to excellence, 
              innovation, and food safety.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="text-caribbean-gold" />
                <div>
                  <div className="text-sm">Office: +592 771 4350</div>
                  <div className="text-sm">Mobile: +592 600 25057</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="text-caribbean-gold" />
                <span className="text-sm">info@caricomricemills.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="text-caribbean-gold" />
                <span className="text-sm">Georgetown, Guyana</span>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="mt-6 pt-6 border-t border-caribbean-green/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-caribbean-gold font-semibold mb-3">Certifications</h4>
              <div className="flex space-x-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <SafeIcon icon={cert.icon} className="text-caribbean-gold w-4 h-4" />
                    <span className="text-sm">{cert.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <h3 className="text-caribbean-gold font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-caribbean-gold transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-caribbean-green/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-sm text-gray-300 mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p>© 2024 CARICOM Rice Mills Limited. All rights reserved.</p>
              <p className="mt-1">
                Proudly serving the Caribbean with premium rice products since 1990.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <a href="#" className="text-sm text-gray-300 hover:text-caribbean-gold transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-caribbean-gold transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-300 hover:text-caribbean-gold transition-colors duration-200">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-caribbean-gold text-caribbean-green rounded-full flex items-center justify-center shadow-lg hover:bg-caribbean-gold/90 transition-colors duration-200 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <SafeIcon icon={FiArrowUp} className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;