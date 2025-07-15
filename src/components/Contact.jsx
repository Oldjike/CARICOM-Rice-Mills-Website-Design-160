import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiSend, FiUser, FiMessageSquare, FiClock, FiGlobe } = FiIcons;

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone Numbers',
      details: [
        { label: 'Office', value: '+592 771 4350' },
        { label: 'Mobile', value: '+592 600 25057' }
      ],
      color: 'bg-green-500'
    },
    {
      icon: FiMail,
      title: 'Email Address',
      details: [
        { label: 'General', value: 'info@caricomricemills.com' },
        { label: 'Sales', value: 'sales@caricomricemills.com' }
      ],
      color: 'bg-blue-500'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      details: [
        { label: 'Head Office', value: 'Georgetown, Guyana' },
        { label: 'Distribution Hub', value: 'Port of Spain, Trinidad' }
      ],
      color: 'bg-purple-500'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: [
        { label: 'Monday - Friday', value: '8:00 AM - 6:00 PM' },
        { label: 'Saturday', value: '8:00 AM - 2:00 PM' }
      ],
      color: 'bg-orange-500'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: FiGlobe, url: '#' },
    { name: 'Facebook', icon: FiGlobe, url: '#' },
    { name: 'Instagram', icon: FiGlobe, url: '#' },
    { name: 'Twitter', icon: FiGlobe, url: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-caribbean-green mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to partner with us or have questions about our premium rice products? 
            We're here to help you with all your rice supply needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-caribbean-green mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-caribbean-green focus:outline-none transition-colors duration-200"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-caribbean-green focus:outline-none transition-colors duration-200"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-full focus:border-caribbean-green focus:outline-none transition-colors duration-200"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-caribbean-green focus:outline-none transition-colors duration-200"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-full focus:border-caribbean-green focus:outline-none transition-colors duration-200"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="retail">Retail Partnership</option>
                  <option value="custom">Custom Packaging</option>
                  <option value="quality">Quality Question</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <div className="relative">
                  <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-4 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-caribbean-green focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us about your rice supply needs..."
                    required
                  ></textarea>
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-caribbean-green text-white py-4 rounded-full font-semibold text-lg hover:bg-caribbean-green/90 transition-colors duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiSend} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-caribbean-gold/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <SafeIcon icon={info.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-caribbean-green mb-3">
                      {info.title}
                    </h4>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 font-medium min-w-20">
                            {detail.label}:
                          </span>
                          <span className="text-gray-700">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              className="bg-gradient-to-br from-caribbean-green to-caribbean-blue rounded-2xl p-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <p className="text-gray-200 mb-6">
                Stay connected with us on social media for the latest updates 
                and behind-the-scenes content.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SafeIcon icon={social.icon} className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-16 bg-gray-100 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-caribbean-green mb-4">
            Visit Our Facilities
          </h3>
          <p className="text-gray-600 mb-6">
            Located in the heart of Guyana's rice-growing region, our facilities 
            are open for tours and business meetings by appointment.
          </p>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-gray-500 italic">
              Interactive map would be embedded here showing our locations in 
              Georgetown, Guyana and our distribution hub in Trinidad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;