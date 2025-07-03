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
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-6"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="container mx-auto container-padding">
            {/* Main header layout with logo outside the floating navbar */}
            <div className="flex items-center justify-between">
              {/* Logo - positioned outside floating navbar */}
              <motion.div 
                className="flex items-center relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Subtle glow behind logo */}
                <div className="absolute -inset-2 bg-[#5e0e9e]/20 blur-lg rounded-full -z-10"></div>
                
                <motion.h2 
                  className="text-2xl font-bold bg-gradient-to-r from-white to-[#d4a6ff] bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Investor Atlas
                </motion.h2>
              </motion.div>
              
              {/* Floating navbar island */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {/* Ambient glow effect */}
                <div className="absolute inset-0 bg-[#5e0e9e]/10 blur-xl rounded-full -z-10 transform scale-110"></div>
                
                {/* Border glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5e0e9e]/50 to-[#8e1cb3]/50 rounded-full blur-sm -z-10"></div>
                
                <div className={`
                  bg-black/60 backdrop-blur-xl rounded-full border border-zinc-800/70
                  py-3 px-8 shadow-lg shadow-[#5e0e9e]/20
                  transition-all duration-300 flex items-center justify-center
                  ${isScrolled ? 'scale-95' : ''}
                  relative overflow-hidden
                `}>
                  {/* Shimmer effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8e1cb3]/10 to-transparent pointer-events-none"
                    variants={shimmer}
                    initial="hidden"
                    animate="visible"
                  />
                  
                  {/* Navbar Links */}
                  {['Investors', 'Pricing', 'Resources', 'Community'].map((item, index) => (
                    <motion.a 
                      key={item}
                      href={item === 'Investors' ? '/investors' : `#${item.toLowerCase()}`} 
                      className="text-zinc-300 hover:text-white transition-colors duration-200 mx-4 relative group"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      {item}
                      
                      {/* Hover indicator */}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8e1cb3] group-hover:w-full transition-all duration-300"></span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              
              {/* Authentication section - positioned outside floating navbar */}
              <motion.div 
                className="flex items-center relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <SignedOut>
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-[#5e0e9e]/30 blur-md rounded-lg -z-10"></div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5e0e9e] to-[#8e1cb3] rounded-lg blur-sm"></div>
                    <SignInButton mode="modal">
                      <Button 
                        variant="default" 
                        className="relative bg-black/80 hover:bg-black/60 border border-[#8e1cb3]/50 text-white rounded-lg"
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
                    className="relative"
                  >
                    {/* User button glow effect */}
                    <div className="absolute -inset-2 bg-[#5e0e9e]/20 blur-lg rounded-full -z-10"></div>
                    <UserButton 
                      appearance={{
                        elements: {
                          avatarBox: "w-10 h-10 border-2 border-[#8e1cb3]/50 hover:border-[#8e1cb3] transition-colors duration-200",
                          userButtonPopoverCard: "bg-black/90 backdrop-blur-xl border border-zinc-800/70",
                          userButtonPopoverActionButton: "text-zinc-300 hover:text-white hover:bg-[#5e0e9e]/20",
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
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
