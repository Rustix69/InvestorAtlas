import React from 'react';
import { motion } from 'framer-motion';
import { Search, Send, BarChart3, Zap, Filter, ThumbsUp, Shield } from 'lucide-react';

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
        className="absolute h-80 w-80 rounded-full bg-[#ffff00]/5 blur-[150px] bottom-0 left-1/2 transform -translate-x-1/2"
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

      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-notifyhub-text-body mt-6 max-w-3xl font-satoshi text-center mx-auto"
            variants={itemVariants}
          >
            Raise capital faster with targeted outreach, automated insights, and fundraising tools that work.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Founders */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              For Founders
            </motion.h3>

            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
                variants={itemVariants}
              >
                <div className="p-2 bg-[#ffff00]/20 rounded-lg">
                  <Search className="h-5 w-5 text-[#ffff00]" />
                </div>
                <p className="text-zinc-300">Access 15,000+ global VCs, angels, and micro-funds.</p>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
                variants={itemVariants}
              >
                <div className="p-2 bg-[#ffff00]/20 rounded-lg">
                  <Filter className="h-5 w-5 text-[#ffff00]" />
                </div>
                <p className="text-zinc-300">Filter by sector, geography, check size, stage, and more.</p>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
                variants={itemVariants}
              >
                <div className="p-2 bg-[#ffff00]/20 rounded-lg">
                  <Send className="h-5 w-5 text-[#ffff00]" />
                </div>
                <p className="text-zinc-300">Submit your pitch and track responses with our CRM.</p>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
                variants={itemVariants}
              >
                <div className="p-2 bg-[#ffff00]/20 rounded-lg">
                  <Zap className="h-5 w-5 text-[#ffff00]" />
                </div>
                <p className="text-zinc-300">Upgrade to unlock warm intro suggestions, AI-enhanced emails, and expert reviews.</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* For Investors */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              For Investors
            </motion.h3>

            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
                variants={itemVariants}
              >
                <div className="p-2 bg-[#ffff00]/20 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-[#ffff00]" />
                </div>
                <p className="text-zinc-300">Receive pre-qualified deal flow tailored to your thesis.</p>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
                variants={itemVariants}
              >
                <div className="p-2 bg-[#ffff00]/20 rounded-lg">
                  <ThumbsUp className="h-5 w-5 text-[#ffff00]" />
                </div>
                <p className="text-zinc-300">Define your investment preferences and filter out mismatched pitches.</p>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700"
                variants={itemVariants}
              >
                <div className="p-2 bg-[#ffff00]/20 rounded-lg">
                  <Shield className="h-5 w-5 text-[#ffff00]" />
                </div>
                <p className="text-zinc-300">No spam, no fees, just curated deal opportunities.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeatureHighlight;
