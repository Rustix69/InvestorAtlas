import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

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
          className="flex flex-col items-center text-center mb-12"
          variants={containerVariants}
        >
          {/* Logo and Tagline */}
          <motion.div 
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              VC Atlas
            </motion.h2>
            <motion.p 
              className="text-sm text-zinc-400 mb-6 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Find and pitch to thousands of vetted investors in just a few clicks. No hidden fees, no gatekeepers. Built for founders. Loved by investors.
            </motion.p>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 max-w-md mx-auto"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
            <p className="text-sm text-zinc-400 mb-4">
              For any questions about our pricing or billing, please contact us at:
            </p>
            <div className="flex items-center justify-center gap-2 text-[#ffff00] hover:text-[#ffff00]/80 transition-colors">
              <Mail className="h-4 w-4" />
              <a 
                href="mailto:prithwijit@getalchemystai.com"
                className="text-sm font-medium hover:underline"
              >
                prithwijit@getalchemystai.com
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-zinc-800 pt-6 text-center"
          variants={itemVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-sm text-zinc-500">
            © {new Date().getFullYear()} VC Atlas. All rights reserved.
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
