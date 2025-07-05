import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos = () => {
  const logos = [
    { src: '/logos/logo01.png', alt: 'Client Logo 1' },
    { src: '/logos/logo02.svg', alt: 'Client Logo 2' },
    { src: '/logos/logo03.png', alt: 'Client Logo 3' },
    { src: '/logos/logo04.png', alt: 'Client Logo 4' },
    { src: '/logos/logo05.png', alt: 'Client Logo 5' },
    { src: '/logos/logo06.png', alt: 'Client Logo 6' },
    { src: '/logos/logo07.png', alt: 'Client Logo 7' },
    { src: '/logos/logo08.png', alt: 'Client Logo 8' },
    { src: '/logos/logo09.png', alt: 'Client Logo 9' }
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <motion.section 
      className="w-full py-24 bg-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto container-padding">
        <motion.div 
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-4xl font-medium text-white/70 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Investors comes from all over the world
          </motion.h3>
          
          <div className="w-full max-w-7xl overflow-hidden">
            <motion.div 
              className="flex gap-12 items-center"
              animate={{
                x: [0, -50 * logos.length],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center justify-center
                    bg-transparent
                    rounded-xl p-6 
                    min-w-[200px]
                    hover:scale-110"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  <motion.img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-12 w-auto object-contain
                      opacity-50 hover:opacity-100
                      transition-opacity duration-300
                      filter brightness-0 invert"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ClientLogos;
