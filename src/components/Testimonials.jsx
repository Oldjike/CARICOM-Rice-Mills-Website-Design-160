import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiUser, FiMapPin, FiQuote } = FiIcons;

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      title: 'Store Manager',
      location: 'Trinidad & Tobago',
      rating: 5,
      text: 'CARICOM Rice Mills has been our trusted supplier for over 5 years. Their quality is unmatched and delivery is always on time. Our customers love the premium rice quality.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'James Thompson',
      title: 'Restaurant Owner',
      location: 'Jamaica',
      rating: 5,
      text: 'The consistency and quality of their rice is exceptional. We serve hundreds of customers daily and CARICOM rice never disappoints. Highly recommend for any food business.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Sarah Williams',
      title: 'Procurement Manager',
      location: 'St. Lucia',
      rating: 5,
      text: 'Working with CARICOM Rice Mills has been a game-changer for our supply chain. Their ISO certifications give us confidence in food safety and quality standards.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Michael Chen',
      title: 'Wholesale Distributor',
      location: 'Guyana',
      rating: 5,
      text: 'The traceability and transparency in their supply chain is remarkable. QR codes on packages allow us to track everything from farm to shelf. Excellent service!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Diana Baptiste',
      title: 'Hotel Manager',
      location: 'Barbados',
      rating: 5,
      text: 'Our guests consistently compliment the quality of our rice dishes. CARICOM Rice Mills provides the premium quality we need for our luxury resort dining.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Roberto Santos',
      title: 'Food Service Director',
      location: 'Suriname',
      rating: 5,
      text: 'Reliable, consistent, and high-quality rice supply. Their customer service is exceptional and they always go above and beyond to meet our requirements.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const partners = [
    { name: 'Caribbean Supermarkets', logo: 'CS' },
    { name: 'Island Fresh Foods', logo: 'IF' },
    { name: 'Tropical Wholesale', logo: 'TW' },
    { name: 'Premium Distributors', logo: 'PD' },
    { name: 'Caribbean Hotels Group', logo: 'CH' },
    { name: 'Regional Food Services', logo: 'RF' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-caribbean-green mb-6">
            What Our Partners Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by retailers, restaurants, and distributors across the Caribbean 
            for our consistent quality and reliable service.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-caribbean-gold/30"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-caribbean-gold/10 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiQuote} className="w-6 h-6 text-caribbean-gold" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-caribbean-gold fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 text-center italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-caribbean-green">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                  <div className="flex items-center space-x-1 text-sm text-caribbean-blue">
                    <SafeIcon icon={FiMapPin} className="w-3 h-3" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          className="bg-gradient-to-r from-caribbean-green/5 to-caribbean-blue/5 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-caribbean-green mb-4">
              Trusted Partners Across the Caribbean
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to work with leading retailers, restaurants, and distributors 
              throughout the Caribbean region.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 bg-caribbean-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">{partner.logo}</span>
                </div>
                <p className="text-xs text-gray-600 font-medium">{partner.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-caribbean-green mb-4">
            Ready to Partner with Us?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied customers across the Caribbean who trust 
            CARICOM Rice Mills for their premium rice needs.
          </p>
          <motion.button
            className="bg-caribbean-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-caribbean-green/90 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Partner
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;