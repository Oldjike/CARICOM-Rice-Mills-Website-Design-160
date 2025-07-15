import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShoppingCart, FiInfo, FiStar, FiPackage } = FiIcons;

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const products = [
    {
      name: 'Premium White Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Our flagship white rice, perfectly milled for optimal texture and taste',
      features: ['Long grain', 'Premium quality', 'Nutritious'],
      sizes: ['1kg', '5kg', '10kg', '25kg'],
      color: 'from-gray-100 to-gray-200'
    },
    {
      name: 'Nutritious Brown Rice',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Wholesome brown rice retaining natural nutrients and fiber',
      features: ['High fiber', 'Natural nutrients', 'Healthy choice'],
      sizes: ['1kg', '5kg', '10kg'],
      color: 'from-amber-100 to-amber-200'
    },
    {
      name: 'Golden Parboiled Rice',
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Parboiled rice with enhanced nutritional value and extended shelf life',
      features: ['Enhanced nutrition', 'Long shelf life', 'Easy cooking'],
      sizes: ['1kg', '5kg', '10kg', '25kg'],
      color: 'from-yellow-100 to-yellow-200'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-caribbean-green/5 to-caribbean-blue/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-caribbean-green mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our range of premium rice products, each carefully processed 
            to deliver exceptional quality and nutrition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20`}></div>
                <div className="absolute top-4 right-4 bg-caribbean-gold text-caribbean-green px-3 py-1 rounded-full text-sm font-semibold">
                  Premium
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-caribbean-green mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-caribbean-green mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-caribbean-green/10 text-caribbean-green px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Package Sizes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-caribbean-green mb-2 flex items-center">
                    <SafeIcon icon={FiPackage} className="mr-2" />
                    Available Sizes:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, sizeIndex) => (
                      <span
                        key={sizeIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <motion.button
                    className="flex-1 bg-caribbean-green text-white py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-caribbean-green/90 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SafeIcon icon={FiShoppingCart} />
                    <span>Order Now</span>
                  </motion.button>
                  <motion.button
                    className="px-4 py-3 border-2 border-caribbean-green text-caribbean-green rounded-full hover:bg-caribbean-green hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SafeIcon icon={FiInfo} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Packaging Section */}
        <motion.div
          className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-caribbean-green mb-6">
                Custom Packaging Solutions
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                We offer flexible packaging options for retailers and bulk buyers, 
                including private labeling and custom sizes to meet your specific needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-caribbean-gold rounded-full"></div>
                  <span className="text-gray-700">Private label options available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-caribbean-gold rounded-full"></div>
                  <span className="text-gray-700">Bulk packaging for wholesale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-caribbean-gold rounded-full"></div>
                  <span className="text-gray-700">QR code traceability on all packages</span>
                </div>
              </div>
              <motion.button
                className="mt-6 bg-caribbean-green text-white px-8 py-3 rounded-full font-semibold hover:bg-caribbean-green/90 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact for Custom Orders
              </motion.button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566843972142-a0c58ee8c2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Custom packaging"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;