import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiArrowRight, FiTrendingUp, FiUsers, FiAward } = FiIcons;

const News = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const news = [
    {
      category: 'Company News',
      title: 'CARICOM Rice Mills Expands Production Capacity',
      excerpt: 'New milling equipment increases our capacity by 40% to meet growing Caribbean demand for premium rice products.',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      icon: FiTrendingUp
    },
    {
      category: 'Community',
      title: 'CEO Tamesh Jagmohan Leads Community Initiative',
      excerpt: 'Lions Club partnership brings agricultural education to local schools, inspiring the next generation of farmers.',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      icon: FiUsers
    },
    {
      category: 'Industry',
      title: 'Sustainable Farming Practices Show Results',
      excerpt: 'Our climate-resilient farming methods at Pure Harvest Inc. deliver 25% higher yields while reducing environmental impact.',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      icon: FiAward
    }
  ];

  const updates = [
    {
      title: 'New Export Partnership with Eastern Caribbean',
      date: 'March 20, 2024',
      type: 'Business'
    },
    {
      title: 'ISO Certification Renewal Completed',
      date: 'March 18, 2024',
      type: 'Quality'
    },
    {
      title: 'Harvest Season Begins at Pure Harvest Inc.',
      date: 'March 12, 2024',
      type: 'Operations'
    },
    {
      title: 'New Blockchain Payment System Launched',
      date: 'March 8, 2024',
      type: 'Technology'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-caribbean-green/5 to-caribbean-blue/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-caribbean-green mb-6">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed about our latest developments, community initiatives, 
            and industry insights from CARICOM Rice Mills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News Stories */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {news.map((article, index) => (
                <motion.article
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-10 h-10 bg-caribbean-green rounded-full flex items-center justify-center">
                          <SafeIcon icon={article.icon} className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-caribbean-blue">
                            {article.category}
                          </span>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-caribbean-green mb-3">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      <motion.button
                        className="flex items-center space-x-2 text-caribbean-green hover:text-caribbean-blue transition-colors duration-200"
                        whileHover={{ x: 5 }}
                      >
                        <span className="font-semibold">Read More</span>
                        <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Updates */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-caribbean-green mb-6">
                Recent Updates
              </h3>
              <div className="space-y-4">
                {updates.map((update, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-caribbean-gold pl-4 hover:bg-gray-50 p-2 rounded transition-colors duration-200"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <h4 className="font-semibold text-caribbean-green mb-1">
                      {update.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{update.date}</span>
                      <span className="text-xs bg-caribbean-green/10 text-caribbean-green px-2 py-1 rounded-full">
                        {update.type}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              className="bg-gradient-to-br from-caribbean-green to-caribbean-blue rounded-2xl p-6 text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-200 mb-6">
                Subscribe to our newsletter for the latest news, harvest updates, 
                and industry insights.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-caribbean-gold"
                />
                <motion.button
                  className="w-full bg-caribbean-gold text-caribbean-green py-3 rounded-full font-semibold hover:bg-caribbean-gold/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe Now
                </motion.button>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h3 className="text-2xl font-bold text-caribbean-green mb-6">
                Quick Links
              </h3>
              <div className="space-y-3">
                {[
                  'Product Catalog',
                  'Quality Certifications',
                  'Sustainability Report',
                  'Career Opportunities',
                  'Investor Relations'
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="block text-gray-600 hover:text-caribbean-green transition-colors duration-200 py-2 border-b border-gray-100 last:border-b-0"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;