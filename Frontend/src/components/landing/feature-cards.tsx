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
          {/* Discover Investors Card */}
          <motion.div 
            className="feature-card"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="mb-4 h-10 w-10 bg-[#ffff00]/20 rounded-md flex items-center justify-center"
              variants={iconVariants}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ffff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" /></svg>
            </motion.div>
            <motion.h3 
              className="text-2xl font-bold text-notifyhub-text-heading mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Discover Investors Effortlessly
            </motion.h3>
            <motion.p 
              className="text-notifyhub-text-body mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Instantly access a curated directory of 15,000+ VCs, angels, and micro-funds worldwide. Filter by sector, stage, location, and more to find your perfect match.
            </motion.p>
            <motion.div 
              className="mb-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col space-y-3">
                <div className="flex items-center"><div className="h-4 w-4 rounded bg-[#ffff00]/30 mr-3"></div><span className="text-sm text-white">Advanced Search Filters</span></div>
                <div className="flex items-center"><div className="h-4 w-4 rounded bg-[#ffff00]/30 mr-3"></div><span className="text-sm text-white">Global Coverage</span></div>
                <div className="flex items-center"><div className="h-4 w-4 rounded bg-[#ffff00]/30 mr-3"></div><span className="text-sm text-white">Up-to-date Profiles</span></div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="default" className="w-full sm:w-auto bg-[#eaeaea] hover:bg-[#d0d0d0] text-black border-[#eaeaea]">
                Explore Now <ChevronRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Smart Fundraising Tools Card */}
          <motion.div 
            className="feature-card"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="mb-4 h-10 w-10 bg-[#ffff00]/20 rounded-md flex items-center justify-center"
              variants={iconVariants}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ffff00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h6m-6 0V7a4 4 0 014-4h2a4 4 0 014 4v6a4 4 0 01-4 4h-2a4 4 0 01-4-4z" /></svg>
            </motion.div>
            <motion.h3 
              className="text-2xl font-bold text-notifyhub-text-heading mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Smart Fundraising Tools
            </motion.h3>
            <motion.p 
              className="text-notifyhub-text-body mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Streamline your outreach with AI-powered email generation, CRM tracking, and real-time analytics. Manage your fundraising pipeline with ease.
            </motion.p>
            <motion.div 
              className="mb-6 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col space-y-3">
                <div className="flex items-center"><div className="h-4 w-4 rounded bg-[#ffff00]/30 mr-3"></div><span className="text-sm text-white">AI Outreach & Follow-ups</span></div>
                <div className="flex items-center"><div className="h-4 w-4 rounded bg-[#ffff00]/30 mr-3"></div><span className="text-sm text-white">CRM & Deal Tracking</span></div>
                <div className="flex items-center"><div className="h-4 w-4 rounded bg-[#ffff00]/30 mr-3"></div><span className="text-sm text-white">Deck Analytics</span></div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="default" className="w-full sm:w-auto bg-[#eaeaea] hover:bg-[#d0d0d0] text-black border-[#eaeaea]">
                Explore Now <ChevronRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeatureCards;
