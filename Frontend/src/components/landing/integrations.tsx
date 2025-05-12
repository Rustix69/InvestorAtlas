import React from 'react';
import { WorldMap } from '@/components/ui/world-map';
import { motion } from 'framer-motion';

const Integrations = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <motion.section 
      className="w-full py-20 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(116,43,175,0.08)_0%,_transparent_70%)]" />
      <motion.div 
        className="absolute h-80 w-80 rounded-full bg-notifyhub-primary/5 blur-[150px] top-0 left-1/4 transform -translate-x-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto flex flex-col items-center container-padding">
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-notifyhub-text-heading mb-6"
          variants={itemVariants}
        >
          Seamless Integrations with Banks & Trading Platforms
        </motion.h2>
        
        <motion.p 
          className="text-lg text-center text-notifyhub-text-body mb-12 max-w-xl"
          variants={itemVariants}
        >
          Investor Atlas connects with your core financial systems to unify fraud signals across banking, brokerage, and payment data.
        </motion.p>

        {/* World Map with Financial Centers */}
        <motion.div 
          className="w-full mx-auto mb-16"
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.3
          }}
        >
          <WorldMap
            lineColor="#742BAF"
            dots={[
              {
                start: { lat: 40.7128, lng: -74.0060 }, // New York
                end: { lat: 51.5074, lng: -0.1278 }, // London
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
              },
              {
                start: { lat: 1.3521, lng: 103.8198 }, // Singapore
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              {
                start: { lat: 22.3964, lng: 114.1095 }, // Hong Kong
                end: { lat: 51.5074, lng: -0.1278 }, // London
              },
              {
                start: { lat: 25.2048, lng: 55.2708 }, // Dubai
                end: { lat: 1.3521, lng: 103.8198 }, // Singapore
              },
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: 40.7128, lng: -74.0060 }, // New York
              },
              
            ]}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Integrations;
