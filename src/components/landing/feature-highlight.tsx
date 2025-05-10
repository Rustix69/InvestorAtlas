import React from 'react';
import { motion } from 'framer-motion';

const FeatureHighlight = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const featureCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  return (
    <motion.section 
      className="w-full section-padding bg-zinc-900/50 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
      <motion.div 
        className="absolute h-80 w-80 rounded-full bg-notifyhub-primary/5 blur-[150px] bottom-0 left-1/2 transform -translate-x-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-16 container-padding">
        <motion.div 
          className="flex-1 order-2 lg:order-1"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-notifyhub-text-heading mb-6"
            variants={itemVariants}
          >
            Streamlined Notification Management
          </motion.h2>
          <motion.p 
            className="text-lg text-notifyhub-text-body mb-8 max-w-xl"
            variants={itemVariants}
          >
            NotifyHub provides a unified interface to manage all your notification channels. Design once, deliver everywhere with customizable templates and intelligent delivery rules.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            <motion.div 
              className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
              variants={featureCardVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div 
                className="h-8 w-8 mb-3 bg-notifyhub-primary/20 rounded-md flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(14, 94, 61, 0.3)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-notifyhub-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Analytics</h3>
              <p className="text-sm text-notifyhub-text-body">Monitor delivery rates and engagement metrics across all channels.</p>
            </motion.div>
            
            <motion.div 
              className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
              variants={featureCardVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div 
                className="h-8 w-8 mb-3 bg-notifyhub-primary/20 rounded-md flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(14, 94, 61, 0.3)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-notifyhub-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">Advanced Security</h3>
              <p className="text-sm text-notifyhub-text-body">End-to-end encryption and compliance with global privacy standards.</p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 order-1 lg:order-2 relative"
          variants={itemVariants}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <motion.div 
            className="relative"
            initial={{ rotate: 2 }}
            whileHover={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-notifyhub-primary/20 to-blue-500/20 blur-xl opacity-50"
              animate={{
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="gradient-card rounded-xl shadow-xl p-4 backdrop-blur-sm border border-zinc-800 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex items-center justify-between p-2 border-b border-zinc-700/50 mb-4">
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-3 h-3 bg-red-500 rounded-full"
                    whileHover={{ scale: 1.2 }}
                  ></motion.div>
                  <motion.div 
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                    whileHover={{ scale: 1.2 }}
                  ></motion.div>
                  <motion.div 
                    className="w-3 h-3 bg-green-500 rounded-full"
                    whileHover={{ scale: 1.2 }}
                  ></motion.div>
                </div>
                <div className="text-xs text-zinc-500">notification-dashboard.js</div>
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  className="p-3 rounded bg-zinc-800/50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="h-3 w-1/3 bg-zinc-700 rounded"></div>
                  <div className="h-3 w-1/2 bg-zinc-700/70 rounded mt-2"></div>
                  <div className="h-3 w-2/3 bg-zinc-700/50 rounded mt-2"></div>
                </motion.div>
                
                <motion.div 
                  className="flex space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="h-8 w-8 bg-notifyhub-primary/30 rounded flex items-center justify-center text-xs font-medium text-notifyhub-primary">E</div>
                  <div className="flex-1 p-2 bg-zinc-800/70 rounded">
                    <div className="h-2 w-1/4 bg-zinc-700 rounded"></div>
                    <div className="h-2 w-1/3 bg-zinc-700/70 rounded mt-1"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="h-8 w-8 bg-purple-500/30 rounded flex items-center justify-center text-xs font-medium text-purple-400">S</div>
                  <div className="flex-1 p-2 bg-zinc-800/70 rounded">
                    <div className="h-2 w-1/3 bg-zinc-700 rounded"></div>
                    <div className="h-2 w-1/4 bg-zinc-700/70 rounded mt-1"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="h-8 w-8 bg-blue-500/30 rounded flex items-center justify-center text-xs font-medium text-blue-400">P</div>
                  <div className="flex-1 p-2 bg-zinc-800/70 rounded">
                    <div className="h-2 w-2/5 bg-zinc-700 rounded"></div>
                    <div className="h-2 w-1/5 bg-zinc-700/70 rounded mt-1"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeatureHighlight;
