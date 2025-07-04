import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, Search, LogIn } from "lucide-react";
import InvestorDashboardMockup from "@/components/ui/investor-dashboard-mockup";
import { motion } from "framer-motion";
import { SignInButton, useUser } from "@clerk/clerk-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Hero = () => {
  const { isSignedIn } = useUser();

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <section className="w-full min-h-screen section-padding relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(230,215,40,0.3)_0%,_transparent_60%)] opacity-70" />
      <motion.div
        className="absolute h-40 w-40 rounded-full bg-[#e6d728]/30 blur-[100px] -top-10 -left-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute h-60 w-60 rounded-full bg-[#e6d728]/20 blur-[120px] -bottom-20 -right-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut"
        }}
      />

      {/* Stars/Dots Animation Background */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-40" />

      {/* Additional Twinkling Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 5;
          const opacity = 0.3 + Math.random() * 0.7;
          const duration = 2 + Math.random() * 4;
          const delay = Math.random() * 3;

          return (
            <motion.div
              key={i}
              className="absolute bg-white/30 rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [opacity, opacity * 0.4, opacity],
                scale: [1, 1.2, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: duration,
                delay: delay,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      <motion.div
        className="container mx-auto flex flex-col items-center text-center z-10 relative container-padding mt-36"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-6 px-4 py-2 bg-zinc-800/50 rounded-full border border-[#e6d728]/40"
          variants={itemVariants}
        >
          <span className="text-sm font-medium text-white">✨ Find and pitch to thousands of vetted investors</span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl mb-6 font-satoshi tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-400 to-zinc-400"
          variants={itemVariants}
        >
          Raise from 15,000+ investors.
          <br />
          For free.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-notifyhub-text-body mb-10 max-w-2xl font-satoshi"
          variants={itemVariants}
        >
          Find and pitch to thousands of vetted investors in just a few clicks. No hidden fees, no gatekeepers. Built for founders. Loved by investors.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="default"
              className="w-full sm:w-auto flex items-center gap-2 
                bg-[#e6d728] 
                text-black 
                font-medium
                px-6 py-6 
                hover:bg-[#c9bb22] 
                border-[1px] border-[#f0e13b]
                shadow-md
                rounded-xl"
            >
              <Search size={18} />
              Explore Investors
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto flex items-center gap-2 
                      bg-transparent
                      text-white 
                      font-medium
                      px-6 py-6 
                      hover:bg-white/10
                      border-[1px] border-[#e6d728]/50
                      shadow-md
                      rounded-xl
                      opacity-75
                      cursor-not-allowed"
                    disabled
                  >
                    <ChevronRight size={18} />
                    <span className="flex items-center gap-2">
                      Pitch Now
                      <span className="text-xs bg-[#e6d728]/20 text-[#e6d728] px-2 py-0.5 rounded-full">Coming Soon</span>
                    </span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-900 text-zinc-200 border-zinc-800">
                  <p>This feature will be available soon!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          className="relative w-full max-w-[1400px] mt-16"
          variants={itemVariants}
          whileInView={{
            y: [50, 0],
            opacity: [0, 1]
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-notifyhub-background via-transparent to-transparent z-20 pointer-events-none h-[120%]" />
          <motion.div
            className="transform perspective-1200"
            initial={{ rotateX: 12 }}
            whileHover={{ rotateX: 8 }}
            transition={{ duration: 0.7 }}
          >
            <InvestorDashboardMockup />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
