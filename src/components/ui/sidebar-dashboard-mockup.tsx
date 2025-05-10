"use client";

import React from "react";
import { 
  Search, 
  ChevronRight, 
  Plus, 
  RefreshCw, 
  ArrowRight, 
  MoreVertical,
  Command,
  Inbox,
  File,
  Send,
  ArchiveX,
  Trash2,
  Bell,
  Users,
  BarChart3,
  Settings,
  Calendar
} from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function SidebarDashboardMockup() {
  return (
    <div className="w-full relative group">
      {/* Entire Dashboard Vanishing Mask */}
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
          colorFrom="#5e0e9e"  // Dark violet color
          colorTo="#8e1cb3"    // Slightly lighter violet
          className="absolute inset-2 rounded-lg"
        />
      </div>
      
      <div className="w-full bg-black/90 rounded-lg border border-zinc-800 shadow-xl overflow-hidden relative z-10">
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-16 bg-gradient-to-b from-black to-zinc-900/90 border-r border-zinc-800 p-3 flex flex-col items-center">
            <div className="w-10 h-10 bg-[#5e0e9e]/90 rounded-lg flex items-center justify-center mb-8">
              <span className="text-white text-lg font-bold">M</span>
            </div>
            
            <div className="space-y-6 flex flex-col items-center">
              <div className="w-10 h-10 bg-black/60 rounded-lg flex items-center justify-center text-white">
                <Command className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-black/60 rounded-lg flex items-center justify-center text-white">
                <Inbox className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-black/60 rounded-lg flex items-center justify-center text-white">
                <Users className="w-5 h-5" />
              </div>
            </div>
            
            <div className="mt-auto mb-4">
              <div className="w-10 h-10 bg-black/60 rounded-lg flex items-center justify-center text-white">
                <Settings className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Secondary Sidebar */}
          <div className="w-64 bg-gradient-to-b from-black to-zinc-900/95 border-r border-zinc-800 p-4">
            <div className="flex items-center space-x-2 mb-6">
              <div>
                <div className="text-sm font-medium text-white">Fraud Detection</div>
                <div className="text-xs text-gray-400">Investor Atlas</div>
              </div>
            </div>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input placeholder="Search" className="w-full bg-black/80 border-zinc-800 border rounded-md px-9 py-2 text-sm text-white" />
            </div>

            <div className="mb-6">
              <div className="text-sm font-medium text-gray-300 mb-3">Cases</div>
              <div className="space-y-1">
                <div className="flex items-center space-x-3 p-2 bg-black/50 rounded-md">
                  <div className="w-2 h-2 rounded-full bg-[#5e0e9e]"></div>
                  <span className="text-sm text-white">New Alerts</span>
                  <span className="text-xs bg-[#5e0e9e]/20 text-[#8e1cb3] px-2 py-0.5 rounded-full ml-auto">12</span>
                </div>
                <div className="flex items-center space-x-3 p-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <span className="text-sm text-white">In Progress</span>
                  <span className="text-xs bg-black/60 text-gray-300 px-2 py-0.5 rounded-full ml-auto">4</span>
                </div>
                <div className="flex items-center space-x-3 p-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <span className="text-sm text-white">Resolved</span>
                  <span className="text-xs bg-black/60 text-gray-300 px-2 py-0.5 rounded-full ml-auto">28</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-300 mb-3">Categories</div>
              <div className="space-y-1">
                <div className="flex items-center space-x-3 p-2">
                  <span className="text-sm text-white">Account Takeover</span>
                  <span className="text-xs bg-black/60 text-gray-300 px-2 py-0.5 rounded-full ml-auto">8</span>
                </div>
                <div className="flex items-center space-x-3 p-2">
                  <span className="text-sm text-white">Payment Fraud</span>
                  <span className="text-xs bg-black/60 text-gray-300 px-2 py-0.5 rounded-full ml-auto">7</span>
                </div>
                <div className="flex items-center space-x-3 p-2">
                  <span className="text-sm text-white">Synthetic Identity</span>
                  <span className="text-xs bg-black/60 text-gray-300 px-2 py-0.5 rounded-full ml-auto">3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-6 bg-gradient-to-br from-black via-black to-transparent relative overflow-hidden">
            {/* Advanced Gradient Mask for Vanishing Effect */}
            <div className="absolute inset-0 z-20 pointer-events-none" style={{
              background: `linear-gradient(to bottom, 
                transparent 0%, 
                transparent 50%, 
                rgba(0,0,0,0.2) 55%, 
                rgba(0,0,0,0.5) 65%, 
                black 75%, 
                black 100%)`,
              maskImage: `linear-gradient(to bottom, 
                transparent 0%, 
                transparent 50%, 
                rgba(0,0,0,0.2) 55%, 
                rgba(0,0,0,0.5) 65%, 
                black 75%, 
                black 100%)`,
              WebkitMaskImage: `linear-gradient(to bottom, 
                transparent 0%, 
                transparent 50%, 
                rgba(0,0,0,0.2) 55%, 
                rgba(0,0,0,0.5) 65%, 
                black 75%, 
                black 100%)`
            }}></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-1 text-white">Fraud Cases Overview</h2>
                  <p className="text-sm text-gray-300">Real-time monitoring dashboard</p>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-black/60 p-2 rounded-md">
                    <Bell className="w-5 h-5 text-gray-300" />
                  </div>
                  <div className="bg-[#5e0e9e]/90 p-2 rounded-md">
                    <Plus className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-black to-zinc-900/90 rounded-lg p-4 border border-zinc-800">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">Total Alerts</span>
                    <div className="w-8 h-8 bg-[#5e0e9e]/20 rounded-md flex items-center justify-center">
                      <Bell className="w-4 h-4 text-[#8e1cb3]" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white">247</div>
                  <div className="text-xs text-[#8e1cb3] mt-2">+12% from last week</div>
                </div>
                <div className="bg-gradient-to-br from-black to-zinc-900/90 rounded-lg p-4 border border-zinc-800">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">Resolution Rate</span>
                    <div className="w-8 h-8 bg-[#5e0e9e]/20 rounded-md flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-[#8e1cb3]" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white">84%</div>
                  <div className="text-xs text-[#8e1cb3] mt-2">+3% from last week</div>
                </div>
                <div className="bg-gradient-to-br from-black to-zinc-900/90 rounded-lg p-4 border border-zinc-800">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300">Avg. Response Time</span>
                    <div className="w-8 h-8 bg-[#5e0e9e]/20 rounded-md flex items-center justify-center">
                      <RefreshCw className="w-4 h-4 text-[#8e1cb3]" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white">2.4h</div>
                  <div className="text-xs text-[#8e1cb3] mt-2">-18min from last week</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-black to-zinc-900/90 rounded-lg p-4 border border-zinc-800 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-white">Recent Activity</h3>
                  <button className="text-xs bg-black/60 text-gray-300 px-3 py-1 rounded-md">View All</button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-black/70 rounded-md">
                    <div className="w-10 h-10 bg-[#5e0e9e]/20 rounded-md flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-[#8e1cb3]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Account Takeover Attempt</div>
                      <div className="text-xs text-gray-300">Multiple login attempts from unusual location</div>
                    </div>
                    <div className="ml-auto text-xs text-gray-300">2m ago</div>
                  </div>
                  <div className="flex items-center p-3 bg-black/70 rounded-md">
                    <div className="w-10 h-10 bg-[#5e0e9e]/20 rounded-md flex items-center justify-center mr-3">
                      <BarChart3 className="w-5 h-5 text-[#8e1cb3]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Large Transaction Flagged</div>
                      <div className="text-xs text-gray-300">Unusual amount for customer profile</div>
                    </div>
                    <div className="ml-auto text-xs text-gray-300">15m ago</div>
                  </div>
                  <div className="flex items-center p-3 bg-black/70 rounded-md">
                    <div className="w-10 h-10 bg-[#5e0e9e]/20 rounded-md flex items-center justify-center mr-3">
                      <Send className="w-5 h-5 text-[#8e1cb3]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">New Device Login</div>
                      <div className="text-xs text-gray-300">First time login from Windows device</div>
                    </div>
                    <div className="ml-auto text-xs text-gray-300">1h ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 