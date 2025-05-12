import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const FeatureCards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: {
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="w-full section-padding"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto container-padding">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {/* Fraud Pattern Intelligence Card */}
          <motion.div 
            className="feature-card"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="mb-4 h-10 w-10 bg-notifyhub-primary/20 rounded-md flex items-center justify-center"
              variants={iconVariants}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-notifyhub-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </motion.div>
            <motion.h3 
              className="text-2xl font-bold text-notifyhub-text-heading mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Fraud Pattern Intelligence
            </motion.h3>
            <motion.p 
              className="text-notifyhub-text-body mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Quickly identify fraud behavior across accounts using advanced graph-based AI models.
            </motion.p>
            
            <motion.div 
              className="mb-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col space-y-3">
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded bg-notifyhub-primary/30 mr-3"></div>
                    <span className="text-sm text-white">Email Notifications</span>
                  </div>
                  <div className="h-5 w-10 rounded-full bg-notifyhub-primary"></div>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded bg-purple-500/30 mr-3"></div>
                    <span className="text-sm text-white">SMS Alerts</span>
                  </div>
                  <div className="h-5 w-10 rounded-full bg-zinc-700"></div>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded bg-blue-500/30 mr-3"></div>
                    <span className="text-sm text-white">Push Notifications</span>
                  </div>
                  <div className="h-5 w-10 rounded-full bg-notifyhub-primary"></div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="default" className="w-full sm:w-auto bg-[#5e0e9e] border-[#8e1cb3]">
                Try For Free <ChevronRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Tokenized Security Card */}
          <motion.div 
            className="feature-card"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="mb-4 h-10 w-10 bg-notifyhub-primary/20 rounded-md flex items-center justify-center"
              variants={iconVariants}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-notifyhub-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </motion.div>
            <motion.h3 
              className="text-2xl font-bold text-notifyhub-text-heading mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Tokenized Security Layers
            </motion.h3>
            <motion.p 
              className="text-notifyhub-text-body mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Enable secure digital authentication with digestible reports and bundled updates sent via email or SMS.
            </motion.p>
            
            <motion.div 
              className="mb-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700 overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col space-y-3">
                <motion.div 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="h-8 w-8 bg-notifyhub-primary/30 rounded flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-notifyhub-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-notifyhub-text-body">Security Token</div>
                    <div className="text-sm font-mono text-notifyhub-text-heading">•••• •••• •••• 1234</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="h-4 bg-zinc-700/50 rounded-full overflow-hidden"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <motion.div 
                    className="h-4 bg-gradient-to-r from-notifyhub-primary to-notifyhub-glow"
                    initial={{ width: "0%" }}
                    animate={{ width: "50%" }}
                    transition={{ delay: 0.9, duration: 1.2 }}
                  />
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-xs text-notifyhub-text-body">Token expires in</span>
                  <span className="text-xs font-medium text-notifyhub-primary">12:59</span>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="default" className="w-full sm:w-auto bg-[#5e0e9e] border-[#8e1cb3]">
                Try For Free <ChevronRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeatureCards;
