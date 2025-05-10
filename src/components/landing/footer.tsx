import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const linkVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100, 
        damping: 10
      }
    }
  };

  return (
    <motion.footer 
      className="w-full bg-black py-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background decoration - ASCII-style dot matrix */}
      <div className="absolute inset-0 opacity-5 text-[8px] text-white font-mono overflow-hidden pointer-events-none select-none">
        {Array(20).fill(0).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {Array(50).fill(0).map((_, j) => (
              <span key={j}>
                {' • NotifyHub • '}
              </span>
            ))}
          </div>
        ))}
      </div>

      <motion.div 
        className="container mx-auto container-padding relative z-10"
        variants={containerVariants}
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12"
          variants={containerVariants}
        >
          {/* Logo and Tagline */}
          <motion.div 
            className="md:col-span-2"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Investor Atlas
            </motion.h2>
            <motion.p 
              className="text-sm text-zinc-400 mb-6 max-w-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Protecting financial institutions and individuals with AI-powered fraud detection.
            </motion.p>
          </motion.div>
          
          {/* Links Columns */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-white font-semibold mb-4"
              variants={itemVariants}
            >
              Product
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.05, delayChildren: 0.4 }}
            >
              {['Features', 'Pricing', 'Customers', 'Integrations'].map((item, i) => (
                <motion.li 
                  key={i}
                  variants={linkVariants}
                >
                  <motion.a 
                    href="#" 
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-white font-semibold mb-4"
              variants={itemVariants}
            >
              Company
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.05, delayChildren: 0.5 }}
            >
              {['About', 'Blog', 'Careers', 'Contact'].map((item, i) => (
                <motion.li 
                  key={i}
                  variants={linkVariants}
                >
                  <motion.a 
                    href="#" 
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-white font-semibold mb-4"
              variants={itemVariants}
            >
              Resources
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.05, delayChildren: 0.6 }}
            >
              {['Documentation', 'API Reference', 'Status', 'Support'].map((item, i) => (
                <motion.li 
                  key={i}
                  variants={linkVariants}
                >
                  <motion.a 
                    href="#" 
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Investor Atlas. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Terms', 'Privacy', 'Cookies'].map((item, i) => (
              <motion.a 
                key={i}
                href="#" 
                className="text-sm text-zinc-500 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
