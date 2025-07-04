"use client";

import React from "react";
import { 
  Search, 
  MapPin, 
  Building, 
  Tag,
  Eye,
  Star,
  Plus,
  Filter,
  Users,
  BarChart3,
  ChevronRight,
  CircleDot
} from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function InvestorDashboardMockup() {
  // Sample mockup data
  const mockInvestors = [
    {
      name: "Sarah Anderson",
      company: "Correios",
      location: "Brazil",
      tags: ["Tech", "Fintech"],
      avatar: "S",
      verified: false,
      headline: "Founder and VP specializing in Consumer Credit Finance and Financial Services..."
    },
    {
      name: "George Franklin",
      company: "New Automotive",
      location: "UK",
      tags: ["Tech"],
      avatar: "G",
      verified: true,
      headline: "Focused entrepreneur and engineer committed to creating long-term value..."
    },
    {
      name: "James Parker",
      company: "Ahold Delhaize",
      location: "Netherlands",
      tags: ["Consumer"],
      avatar: "J",
      verified: false,
      headline: "Corporate Brand Strategist specializing in executive coaching and advisory..."
    }
  ];

  // Shimmer effect animation
  const shimmer = {
    hidden: { opacity: 0.3, x: -100 },
    visible: { 
      opacity: 0.6, 
      x: 100,
      transition: { 
        repeat: Infinity, 
        duration: 1.5,
        ease: "linear"
      }
    }
  };

  return (
    <div className="w-full relative group">
      {/* Ambient glow effect */}
      <div className="absolute inset-0 bg-[#e6d728]/5 blur-[100px] rounded-full -z-10"></div>
      
      {/* Subtle particle animation */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#e6d728]/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Vanishing Mask */}
      <div className="absolute inset-0 z-30 pointer-events-none" style={{
        background: `linear-gradient(to bottom, 
          transparent 0%, 
          transparent 50%, 
          rgba(0,0,0,0.1) 55%, 
          rgba(0,0,0,0.3) 65%, 
          rgba(0,0,0,0.6) 75%, 
          black 85%, 
          black 100%)`,
        maskImage: `linear-gradient(to bottom, 
          transparent 0%, 
          transparent 50%, 
          rgba(0,0,0,0.1) 55%, 
          rgba(0,0,0,0.3) 65%, 
          rgba(0,0,0,0.6) 75%, 
          black 85%, 
          black 100%)`,
        WebkitMaskImage: `linear-gradient(to bottom, 
          transparent 0%, 
          transparent 50%, 
          rgba(0,0,0,0.1) 55%, 
          rgba(0,0,0,0.3) 65%, 
          rgba(0,0,0,0.6) 75%, 
          black 85%, 
          black 100%)`
      }}></div>
      
      <div className="absolute -inset-0.5 z-20 pointer-events-none">
        <BorderBeam 
          size={300}
          duration={10}
          colorFrom="#c9bb22"  // Dark lemon color
          colorTo="#e6d728"    // Brighter lemon yellow
          className="absolute inset-2 rounded-2xl"
        />
      </div>
      
      <div className="w-full bg-black/95 rounded-2xl border border-zinc-800 shadow-xl overflow-hidden relative z-10">
        {/* Header */}
        <div className="border-b border-zinc-800/30 bg-black/80 px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold tracking-tight text-white">Investor Database</h1>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 rounded-full bg-[#e6d728]/20 px-4 py-2 text-xs font-medium text-[#e6d728]">
                <Star className="h-3.5 w-3.5 fill-[#e6d728] text-[#e6d728]" />
                <span>Credits: 10/20</span>
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#e6d728] hover:bg-[#c9bb22] text-black border border-[#f0e13b] rounded-md px-4 py-2 text-xs font-medium flex items-center cursor-pointer shadow-lg shadow-[#e6d728]/10"
              >
                <Plus className="h-3.5 w-3.5 mr-2" />
                Add
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="p-6">
          <div className="bg-zinc-900/70 border-zinc-800/50 rounded-xl border shadow-lg overflow-hidden backdrop-blur-sm">
            {/* Card header with tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4">
              <div className="text-white font-semibold mb-2 sm:mb-0">Investors</div>
              
              {/* Tabs */}
              <div className="bg-zinc-800/50 rounded-xl p-1 text-xs font-medium flex">
                <div className="bg-[#e6d728] text-black rounded-lg px-5 py-2 shadow-lg">All</div>
                <div className="text-zinc-300 px-5 py-2 hover:bg-zinc-800/80 transition-colors rounded-lg">Verified</div>
                <div className="text-zinc-300 px-5 py-2 hover:bg-zinc-800/80 transition-colors rounded-lg">Viewed</div>
              </div>
            </div>
            
            {/* Search and filters */}
            <div className="px-4 py-5 border-t border-b border-zinc-800/30 bg-black/30">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  <input 
                    type="text" 
                    placeholder="Search investors, companies, or keywords..." 
                    className="bg-zinc-800/70 border-0 w-full py-3 px-10 rounded-lg text-xs text-zinc-300 focus:ring-1 focus:ring-[#e6d728]/50 focus:outline-none placeholder-zinc-500" 
                  />
                </div>
                <div className="flex gap-3">
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="bg-zinc-800/70 border border-zinc-700/30 hover:border-[#e6d728]/30 text-zinc-300 px-4 py-2.5 rounded-lg text-xs flex items-center cursor-pointer transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-zinc-400 mr-2" />
                    Location
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="bg-zinc-800/70 border border-zinc-700/30 hover:border-[#e6d728]/30 text-zinc-300 px-4 py-2.5 rounded-lg text-xs flex items-center cursor-pointer transition-colors"
                  >
                    <Tag className="h-4 w-4 text-zinc-400 mr-2" />
                    Industry
                  </motion.div>
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="bg-zinc-800/70 border border-zinc-700/30 hover:border-[#e6d728]/30 text-zinc-300 px-4 py-2.5 rounded-lg text-xs flex items-center cursor-pointer transition-colors"
                  >
                    <Eye className="h-4 w-4 text-zinc-400 mr-2" />
                    Show Viewed
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Table content */}
            <div>
              {/* Table rows */}
              {mockInvestors.map((investor, index) => (
                <div 
                  key={index}
                  className="px-5 py-4 border-b border-zinc-800/30 last:border-0 hover:bg-zinc-800/20 transition-colors relative group/row"
                >
                  <div className="grid grid-cols-12 gap-4">
                    {/* Investor column */}
                    <div className="col-span-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border border-zinc-700/50 shadow-md">
                          <AvatarFallback className="bg-[#e6d728]/30 text-black">{investor.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex flex-col mb-1">
                            <div className="font-medium text-white text-sm flex items-center gap-1.5">
                              {investor.name}
                              {investor.verified && (
                                <div className="h-2 w-2 rounded-full bg-[#e6d728]"></div>
                              )}
                            </div>
                            <div className="text-xs text-zinc-400 flex items-center mt-0.5">
                              <MapPin className="h-3 w-3 mr-1 text-zinc-500" />
                              {investor.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Headline column */}
                    <div className="col-span-5">
                      <p className="line-clamp-1 text-sm text-zinc-300 mb-1.5">
                        {investor.headline}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {investor.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-[#e6d728]/20 text-black hover:bg-[#e6d728]/30 border border-[#e6d728]/20 rounded-full">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Company column */}
                    <div className="col-span-2 flex items-center">
                      <div className="flex items-center gap-2 text-zinc-300 text-sm">
                        <Building className="h-3.5 w-3.5 text-zinc-400" />
                        <span>{investor.company}</span>
                      </div>
                    </div>
                    
                    {/* Action column */}
                    <div className="col-span-2 flex items-center justify-end">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-zinc-700/50 text-zinc-200 hover:bg-[#e6d728] hover:text-black hover:border-[#f0e13b] border rounded-lg px-3.5 py-1.5 text-xs font-medium cursor-pointer transition-colors shadow-sm"
                      >
                        View
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e6d728]/5 to-transparent pointer-events-none opacity-0 group-hover/row:opacity-100"
                    variants={shimmer}
                    initial="hidden"
                    animate="visible"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mt-5">
            {[
              { title: "Total Investors", value: "1,547", change: "+32 new this week", icon: Users },
              { title: "Success Rate", value: "68%", change: "+5% from last month", icon: BarChart3 },
              { title: "Avg. Response", value: "3.2d", change: "-0.5d from average", icon: ChevronRight }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-black via-zinc-900/90 to-[#e6d728]/5 rounded-xl p-4 border border-zinc-800/50 shadow-lg relative overflow-hidden backdrop-blur-sm"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex justify-between mb-2 items-start">
                  <span className="text-sm text-zinc-300 font-medium">{stat.title}</span>
                  <div className="w-8 h-8 bg-[#e6d728]/20 rounded-lg flex items-center justify-center ring-1 ring-[#e6d728]/20">
                    <stat.icon className="w-4 h-4 text-black" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-[#e6d728] flex items-center">
                  {stat.change.includes('+') ? 
                    <ChevronRight size={14} className="rotate-90 mr-1" /> : 
                    <ChevronRight size={14} className="-rotate-90 mr-1" />
                  }
                  {stat.change}
                </div>
                
                {/* Decorative element */}
                <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-[#e6d728]/10 rounded-full blur-xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 