import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos = () => {
  const logos = [
    { src: '/logos/Google.svg', alt: 'Google' },
    { src: '/logos/Microsoft.svg', alt: 'Microsoft' },
    { src: '/logos/GitHub.svg', alt: 'GitHub' },
    { src: '/logos/Uber.svg', alt: 'Uber' },
    { src: '/logos/Notion.svg', alt: 'Notion' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <motion.section 
      className="w-full py-24 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto container-padding">
        <motion.div 
          className="flex flex-col items-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-4xl font-medium text-white/70 mb-12 text-center"
            variants={itemVariants}
          >
            Trusted by Industry Leaders Worldwide
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-3 md:grid-cols-5 gap-12 items-center justify-center w-full max-w-5xl"
            variants={itemVariants}
          >
            {logos.map((logo, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-center
                  bg-white/5 hover:bg-white/10 
                  rounded-xl p-6 
                  gap-7
                  shadow-sm hover:shadow-xl"
                whileHover={{ 
                  y: -8,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                variants={itemVariants}
              >
                <motion.img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-8 max-w-[150px] 
                    opacity-50
                    invert brightness-0 contrast-200"
                  whileHover={{ 
                    scale: 1.1,
                    opacity: 1
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ClientLogos;
