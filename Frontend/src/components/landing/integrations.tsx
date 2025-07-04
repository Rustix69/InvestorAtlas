import React from 'react';
import { WorldMap } from '@/components/ui/world-map';
import { motion } from 'framer-motion';
import { Building2, Globe2, Briefcase } from 'lucide-react';

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

  const stats = [
    {
      icon: <Building2 className="w-5 h-5 text-[#ffff00]" />,
      value: "15,000+",
      label: "Active Investors"
    },
    {
      icon: <Globe2 className="w-5 h-5 text-[#ffff00]" />,
      value: "50+",
      label: "Countries"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-[#ffff00]" />,
      value: "$10B+",
      label: "Capital Deployed"
    }
  ];

  return (
    <motion.section 
      className="w-full py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,0,0.08)_0%,_transparent_70%)]" />
      <motion.div 
        className="absolute h-80 w-80 rounded-full bg-[#ffff00]/5 blur-[150px] top-0 left-1/4 transform -translate-x-1/2"
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
        <motion.div
          className="mb-6 px-4 py-2 bg-zinc-800/50 rounded-full border border-[#ffff00]/40"
          variants={itemVariants}
        >
          <span className="text-sm font-medium text-white">🌍 Global Investor Network</span>
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-6 font-satoshi tracking-tight"
          variants={itemVariants}
        >
          Global Network of Active Investors
        </motion.h2>
        
        <motion.p 
          className="text-lg text-center text-notifyhub-text-body mb-12 max-w-2xl font-satoshi"
          variants={itemVariants}
        >
          Connect with over 15,000 active investors across major startup hubs worldwide. From Silicon Valley to Singapore, find the right investors for your startup.
        </motion.p>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full max-w-4xl"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl bg-zinc-800/30 border border-zinc-700/50 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-3 bg-[#ffff00]/20 rounded-lg mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-1 font-satoshi">{stat.value}</h3>
              <p className="text-sm text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* World Map with Financial Centers */}
        <motion.div 
          className="w-full mx-auto relative"
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-notifyhub-background pointer-events-none z-10" />
          <WorldMap
            lineColor="#ffff00"
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
              }
            ]}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Integrations;
