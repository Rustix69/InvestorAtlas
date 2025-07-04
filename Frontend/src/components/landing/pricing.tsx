import React from 'react';
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import PaymentButton from "@/components/payment-button";

const PLANS = {
  FREE: {
    id: 'free',
    name: 'Free Plan',
    amount: 0,
    features: [
      '10K events/month included',
      'Multi-Channel Support: Email, In-app, SMS, Chat, Push',
      'EU or US Data-residency',
      'Up to 20 Workflows',
      '2 Environments',
      'Activity Feed Retention: 24 hours'
    ]
  },
  PRO: {
    id: 'pro',
    name: 'Pro Plan',
    amount: 1200, // $12.00
    features: [
      'Everything in Free, plus:',
      'Unlimited events/month',
      'Advanced Analytics & Reporting',
      'Custom Branding',
      'Priority Support',
      'Unlimited Workflows',
      'Activity Feed Retention: 1 year'
    ]
  },
  TEAM: {
    id: 'team',
    name: 'Team Plan',
    amount: 1200, // $12.00 per user
    features: [
      'Everything in Pro, plus:',
      'Team Collaboration Features',
      'Role-Based Access Control',
      'Audit Logs',
      'SSO Integration',
      'Dedicated Account Manager',
      'Custom Contract Terms'
    ]
  }
};

const Pricing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      id="pricing" 
      className="w-full section-padding bg-transparent"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-12"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4 font-satoshi tracking-tight"
            variants={cardVariants}
          >
            Flexible Pricing
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          {/* Free Plan */}
          <motion.div 
            className="gradient-card rounded-xl p-6 border border-zinc-800/50 hover:border-zinc-700/70 transition-all duration-300 
              relative overflow-hidden
              bg-gradient-to-b from-zinc-800/40 via-zinc-900/70 to-zinc-950/90
              shadow-xl shadow-black/20 
              hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
              before:absolute before:top-0 before:left-0 before:right-0 before:h-1/2 
              before:bg-gradient-to-b before:from-white/5 before:to-transparent 
              before:pointer-events-none"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="mb-4 relative z-10">
              <motion.h3 
                className="text-xl font-bold text-white mb-1 font-satoshi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Free
              </motion.h3>
              <motion.div 
                className="flex items-end mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-4xl font-bold text-white font-satoshi">$0</span>
                <span className="text-notifyhub-text-body ml-1 mb-1">per user / month</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PaymentButton 
                  amount={PLANS.FREE.amount}
                  planId={PLANS.FREE.id}
                  planName={PLANS.FREE.name}
                  className="w-full mb-4 
                    bg-[#eaeaea] 
                    text-black 
                    font-satoshi
                    font-medium
                    hover:bg-[#d0d0d0] 
                    hover:text-black 
                    transition-colors 
                    duration-300"
                />
              </motion.div>
              <motion.p 
                className="text-notifyhub-text-body text-sm text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Start for free. Essential features included.
              </motion.p>
            </div>
            
            <motion.ul 
              className="space-y-3 mt-6 relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
            >
              {PLANS.FREE.features.map((feature, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start"
                  variants={listItemVariants}
                >
                  <Check size={18} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-notifyhub-text-body">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Pro Plan */}
          <motion.div 
            className="gradient-card rounded-xl p-6 relative 
              border border-[#ffff00]/30
              bg-gradient-to-b from-[#ffff00]/20 via-[#ffff00]/10 to-zinc-950/90
              shadow-[0_0_30px_rgba(255,255,0,0.2)] 
              hover:shadow-[0_0_40px_rgba(255,255,0,0.3)] 
              transition-all duration-300
              before:absolute before:top-0 before:left-0 before:right-0 before:h-1/2 
              before:bg-gradient-to-b before:from-white/10 before:to-transparent 
              before:pointer-events-none
              overflow-hidden"
            variants={cardVariants}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div className="mb-4 relative z-10">
              <motion.h3 
                className="text-xl font-bold text-white mb-1 font-satoshi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Pro Plan
              </motion.h3>
              <motion.div 
                className="flex items-end mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-4xl font-bold text-white font-satoshi">$12</span>
                <span className="text-notifyhub-text-body ml-1 mb-1">per user / month</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PaymentButton 
                  amount={PLANS.PRO.amount}
                  planId={PLANS.PRO.id}
                  planName={PLANS.PRO.name}
                  className="w-full mb-4 
                    bg-[#eaeaea] 
                    text-black
                    font-medium
                    hover:bg-[#d0d0d0] 
                    hover:text-black
                    border-[1px] border-[#ffff00]/30
                    shadow-md
                    rounded-xl
                    transition-colors 
                    duration-300"
                />
              </motion.div>
              <motion.p 
                className="text-notifyhub-text-body text-sm text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Perfect for growing businesses.
              </motion.p>
            </div>
            
            <motion.ul 
              className="space-y-3 mt-6 relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
            >
              {PLANS.PRO.features.map((feature, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start"
                  variants={listItemVariants}
                >
                  <Check size={18} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-notifyhub-text-body">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          {/* Team Plan */}
          <motion.div 
            className="gradient-card rounded-xl p-6 border border-zinc-800/50 hover:border-zinc-700/70 transition-all duration-300 
              relative overflow-hidden
              bg-gradient-to-b from-zinc-800/40 via-zinc-900/70 to-zinc-950/90
              shadow-xl shadow-black/20 
              hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
              before:absolute before:top-0 before:left-0 before:right-0 before:h-1/2 
              before:bg-gradient-to-b before:from-white/5 before:to-transparent 
              before:pointer-events-none"
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="mb-4 relative z-10">
              <motion.h3 
                className="text-xl font-bold text-white mb-1 font-satoshi"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Team
              </motion.h3>
              <motion.div 
                className="flex items-end mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-4xl font-bold text-white font-satoshi">$12</span>
                <span className="text-notifyhub-text-body ml-1 mb-1">per user / month</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PaymentButton 
                  amount={PLANS.TEAM.amount}
                  planId={PLANS.TEAM.id}
                  planName={PLANS.TEAM.name}
                  className="w-full mb-4 
                    bg-[#eaeaea] 
                    text-black 
                    font-medium
                    hover:bg-[#d0d0d0] 
                    hover:text-black
                    border-[1px] border-[#ffff00]/30
                    shadow-md
                    rounded-xl
                    transition-colors 
                    duration-300"
                />
              </motion.div>
              <motion.p 
                className="text-notifyhub-text-body text-sm text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                For teams that need more control and features.
              </motion.p>
            </div>
            
            <motion.ul 
              className="space-y-3 mt-6 relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
            >
              {PLANS.TEAM.features.map((feature, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start"
                  variants={listItemVariants}
                >
                  <Check size={18} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-notifyhub-text-body">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Pricing;
