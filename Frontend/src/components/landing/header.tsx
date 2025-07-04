import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      // Set scrolled state
      setIsScrolled(currentScrollY > 50);
      
      // Update last scroll position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for shimmer effect
  const shimmer = {
    hidden: { opacity: 0.3, x: -100 },
    visible: { 
      opacity: 0.6, 
      x: 100,
      transition: { 
        repeat: Infinity, 
        duration: 2,
        ease: "linear"
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header 
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className={`
            container mx-auto container-padding
            ${isScrolled ? 'py-2' : 'py-3'}
            transition-all duration-300
          `}>
            {/* Main header with centered navigation */}
            <div className="relative">
              {/* Glassy background */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-xl rounded-lg border border-zinc-800/50 shadow-lg -z-10"></div>
              
              {/* Subtle shimmer effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e6d728]/5 to-transparent pointer-events-none rounded-lg"
                variants={shimmer}
                initial="hidden"
                animate="visible"
              />
              
              <div className="flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <motion.div 
                  className="flex items-center relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.h2 
                    className="text-2xl font-bold bg-gradient-to-r from-white to-[#f0e13b] bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    VC Atlas
                  </motion.h2>
                </motion.div>
                
                {/* Centered Navigation */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.nav 
                    className="flex items-center space-x-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {['Investors', 'Pricing', 'Resources', 'Community'].map((item, index) => (
                      <motion.a 
                        key={item}
                        href={item === 'Investors' ? '/investors' : `#${item.toLowerCase()}`} 
                        className="text-zinc-300 hover:text-white transition-colors duration-200 relative group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                      >
                        {item}
                        
                        {/* Hover indicator */}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e6d728] group-hover:w-full transition-all duration-300"></span>
                      </motion.a>
                    ))}
                  </motion.nav>
                </div>
                
                {/* Authentication section */}
                <motion.div 
                  className="flex items-center relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <SignedOut>
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <SignInButton mode="modal">
                        <Button 
                          variant="default" 
                          className="bg-black/60 hover:bg-black/40 border border-[#e6d728]/30 text-white rounded-lg"
                        >
                          Sign In
                        </Button>
                      </SignInButton>
                    </motion.div>
                  </SignedOut>
                  
                  <SignedIn>
                    <motion.div 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <UserButton 
                        appearance={{
                          elements: {
                            avatarBox: "w-10 h-10 border-2 border-[#e6d728]/30 hover:border-[#e6d728] transition-colors duration-200",
                            userButtonPopoverCard: "bg-black/90 backdrop-blur-xl border border-zinc-800/70",
                            userButtonPopoverActionButton: "text-zinc-300 hover:text-white hover:bg-[#e6d728]/20",
                            userButtonPopoverActionButtonText: "text-zinc-300",
                            userButtonPopoverFooter: "border-t border-zinc-800/70"
                          }
                        }}
                      />
                    </motion.div>
                  </SignedIn>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
