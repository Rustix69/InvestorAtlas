"use client"

import { useState, useEffect } from "react"
import { Search, MapPin, Building, Tag, Eye, Star, Plus, Phone, Mail, Globe, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// API endpoint
const API_BASE_URL = "http://localhost:3001" // Update this to match your backend URL

// Scramble Text Component
const ScrambleText = ({ originalText, targetText, isScrambling, className = "" }) => {
  const [displayText, setDisplayText] = useState(originalText)

  useEffect(() => {
    if (!isScrambling) {
      setDisplayText(targetText)
      return
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@.-'
    const duration = 1000
    const steps = 20
    const stepDuration = duration / steps
    let currentStep = 0

    const interval = setInterval(() => {
      let result = ''
      
      for (let i = 0; i < Math.max(originalText.length, targetText.length); i++) {
        if (i < targetText.length) {
          if (currentStep >= steps || Math.random() < currentStep / steps) {
            result += targetText[i]
          } else {
            result += chars[Math.floor(Math.random() * chars.length)]
          }
        }
      }
      
      setDisplayText(result)
      
      if (currentStep >= steps) {
        clearInterval(interval)
        setDisplayText(targetText)
      }
      
      currentStep++
    }, stepDuration)

    return () => clearInterval(interval)
  }, [originalText, targetText, isScrambling])

  return <span className={className}>{displayText}</span>
}

export function InvestorDashboard() {
  const [investors, setInvestors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedSector, setSelectedSector] = useState("All Sectors")
  const [selectedStage, setSelectedStage] = useState("All Stages")
  const [selectedTicketSize, setSelectedTicketSize] = useState("All Ticket Sizes")
  const [selectedContactPref, setSelectedContactPref] = useState("All Contact Preferences")
  const [showViewed, setShowViewed] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const [revealedInvestors, setRevealedInvestors] = useState(new Set())
  const [revealingInvestors, setRevealingInvestors] = useState(new Set())

  // Generate unique filter options from API data
  const locations = ["All Locations", ...new Set(investors.map(investor => investor["Country"]))].filter(Boolean)
  const sectors = ["All Sectors", ...new Set(
    investors.flatMap(investor => 
      investor["Keywords"] ? investor["Keywords"].split(", ").map(k => k.trim()) : []
    )
  )].filter(Boolean)
  const stages = ["All Stages", "Pre-seed", "Seed", "Series A", "Series B", "Series C+", "Growth"]
  const ticketSizes = ["All Ticket Sizes", "$0-100K", "$100K-500K", "$500K-1M", "$1M-5M", "$5M+"]
  const contactPrefs = ["All Contact Preferences", "Direct", "Warm Intro", "Platform Only"]

  // Fetch investors data from API
  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${API_BASE_URL}/api/investors/list`)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        
        if (result.success && result.data) {
          setInvestors(result.data)
        } else {
          throw new Error(result.message || "Failed to fetch investors")
        }
      } catch (err) {
        console.error("Error fetching investors:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchInvestors()
  }, [])

  // Function to create scramble effect
  const scrambleText = (originalText, targetText, duration = 1000) => {
    return new Promise((resolve) => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@.-'
      const steps = 20
      const stepDuration = duration / steps
      let currentStep = 0

      const interval = setInterval(() => {
        let result = ''
        
        for (let i = 0; i < Math.max(originalText.length, targetText.length); i++) {
          if (i < targetText.length) {
            if (currentStep >= steps || Math.random() < currentStep / steps) {
              result += targetText[i]
            } else {
              result += chars[Math.floor(Math.random() * chars.length)]
            }
          }
        }
        
        if (currentStep >= steps) {
          clearInterval(interval)
          resolve(targetText)
        }
        
        currentStep++
      }, stepDuration)
    })
  }

  // Function to handle revealing investor details
  const handleRevealInvestor = async (investorId) => {
    if (revealedInvestors.has(investorId) || revealingInvestors.has(investorId)) {
      return
    }

    try {
      setRevealingInvestors(prev => new Set([...prev, investorId]))
      
      const response = await fetch(`${API_BASE_URL}/api/investors/${investorId}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const result = await response.json()
      
      if (result.success && result.data) {
        const detailedInvestor = result.data
        
        // Update the investor in the list with detailed data
        setInvestors(prevInvestors => 
          prevInvestors.map(investor => {
            if (investor.row_id === investorId) {
              return {
                ...investor,
                ...detailedInvestor,
                isRevealing: true
              }
            }
            return investor
          })
        )

        // Simulate the scramble effect duration
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mark as revealed and remove from revealing
        setRevealedInvestors(prev => new Set([...prev, investorId]))
        setRevealingInvestors(prev => {
          const newSet = new Set(prev)
          newSet.delete(investorId)
          return newSet
        })
        
        // Remove revealing flag
        setInvestors(prevInvestors => 
          prevInvestors.map(investor => {
            if (investor.row_id === investorId) {
              return {
                ...investor,
                isRevealing: false
              }
            }
            return investor
          })
        )
      }
    } catch (err) {
      console.error("Error fetching investor details:", err)
      setRevealingInvestors(prev => {
        const newSet = new Set(prev)
        newSet.delete(investorId)
        return newSet
      })
    }
  }

  // Filter investors based on all criteria
  const filteredInvestors = investors.filter((investor) => {
    const matchesSearch =
      investor["Full Name"].toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor["Headline"].toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor["Venture Capital Name"].toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor["Keywords"].toLowerCase().includes(searchQuery.toLowerCase())

    const matchesLocation = selectedLocation === "All Locations" || investor["Country"] === selectedLocation
    const matchesSector = selectedSector === "All Sectors" || investor["Keywords"].toLowerCase().includes(selectedSector.toLowerCase())
    const matchesStage = selectedStage === "All Stages" || investor["Investment Stage"] === selectedStage
    const matchesTicketSize = selectedTicketSize === "All Ticket Sizes" || investor["Ticket Size"] === selectedTicketSize
    const matchesContactPref = selectedContactPref === "All Contact Preferences" || investor["Contact Preference"] === selectedContactPref

    return matchesSearch && matchesLocation && matchesSector && matchesStage && matchesTicketSize && matchesContactPref
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredInvestors.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentInvestors = filteredInvestors.slice(indexOfFirstItem, indexOfLastItem)

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <header className="sticky top-0 z-10 border-b border-zinc-800 bg-black/90 px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Find Active Venture Capitalists & Angel Investors</h1>
            <p className="text-sm text-zinc-400 mt-1">Search a live directory of 15,000+ investors by location, industry focus, investment stage, and more.</p>
          </div>
          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2 rounded-full bg-[#ffff00]/20 px-3 py-1 text-sm font-medium text-[#ffff00]">
                    <Star className="h-4 w-4 fill-[#ffff00] text-[#ffff00]" />
                    <span>Credits: 10/20</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-900 text-zinc-200 border-zinc-800">
                  <p>Your available credits</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6">
        <Card className="bg-zinc-900 border-zinc-800 shadow-lg">
          <CardHeader className="pb-3 border-b border-zinc-800">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <CardTitle className="text-white">Investor Database</CardTitle>
              <Button 
                className="bg-[#eaeaea] text-black hover:bg-[#d0d0d0] hover:text-black"
              >
                Access Full Database Now
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
                  <Input
                    type="search"
                    placeholder="Search investors, companies, or keywords..."
                    className="pl-8 bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-[#ffff00] focus:ring-[#ffff00]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-200">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedSector} onValueChange={setSelectedSector}>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-200">
                    <SelectValue placeholder="Sector" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedStage} onValueChange={setSelectedStage}>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-200">
                    <SelectValue placeholder="Investment Stage" />
                  </SelectTrigger>
                  <SelectContent>
                    {stages.map((stage) => (
                      <SelectItem key={stage} value={stage}>{stage}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedTicketSize} onValueChange={setSelectedTicketSize}>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-200">
                    <SelectValue placeholder="Ticket Size" />
                  </SelectTrigger>
                  <SelectContent>
                    {ticketSizes.map((size) => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedContactPref} onValueChange={setSelectedContactPref}>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-200">
                    <SelectValue placeholder="Contact Preference" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactPrefs.map((pref) => (
                      <SelectItem key={pref} value={pref}>{pref}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="rounded-md border border-zinc-800">
                {loading ? (
                  <div className="p-8 text-center">
                    <div className="flex items-center justify-center space-x-2 text-zinc-400">
                      <div className="animate-spin h-4 w-4 border-2 border-zinc-400 border-t-transparent rounded-full"></div>
                      <span>Loading investors...</span>
                    </div>
                  </div>
                ) : error ? (
                  <div className="p-8 text-center">
                    <div className="text-red-400 mb-2">Error loading investors</div>
                    <div className="text-zinc-500 text-sm">{error}</div>
                    <button 
                      onClick={() => window.location.reload()} 
                      className="mt-4 px-4 py-2 bg-[#eaeaea] text-black hover:bg-[#d0d0d0] rounded transition-colors"
                    >
                      Retry
                    </button>
                  </div>
                ) : currentInvestors.length > 0 ? (
                  <>
                    {/* Mobile Card View */}
                    <div className="sm:hidden space-y-4 p-4">
                      {currentInvestors.map((investor) => (
                        <Card 
                          key={investor.row_id} 
                          className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors duration-300"
                        >
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10 border border-zinc-700">
                                  <AvatarFallback className="bg-[#ffff00]/20 text-[#ffff00]">
                                    {investor["First Name"][0]}{investor["Last Name"][0]}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="text-white font-semibold">
                                    <ScrambleText 
                                      originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Full Name"] || investor["Full Name"]}
                                      targetText={investor["Full Name"]}
                                      isScrambling={investor.isRevealing}
                                    />
                                  </h3>
                                  <p className="text-xs text-zinc-400">
                                    <ScrambleText 
                                      originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Title"] || investor["Title"]}
                                      targetText={investor["Title"]}
                                      isScrambling={investor.isRevealing}
                                    />
                                  </p>
                                  <div className="flex items-center text-xs text-zinc-400 mt-1">
                                    <MapPin className="h-3 w-3 mr-1 text-zinc-500" />
                                    <ScrambleText 
                                      originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Country"] || investor["Country"]}
                                      targetText={investor["Country"]}
                                      isScrambling={investor.isRevealing}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-2">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-zinc-300">
                                <Building className="h-4 w-4 text-zinc-500" />
                                <span className="text-sm">
                                  <ScrambleText 
                                    originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Venture Capital Name"] || investor["Venture Capital Name"]}
                                    targetText={investor["Venture Capital Name"]}
                                    isScrambling={investor.isRevealing}
                                  />
                                </span>
                              </div>
                              <p className="text-sm text-zinc-400 line-clamp-3">
                                <ScrambleText 
                                  originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Headline"] || investor["Headline"]}
                                  targetText={investor["Headline"]}
                                  isScrambling={investor.isRevealing}
                                />
                              </p>
                              
                              {/* Contact Information */}
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-zinc-300">
                                  <Mail className="h-3 w-3 text-zinc-500" />
                                  <a href={`mailto:${investor["Email"]}`} className="hover:text-[#ffff00] transition-colors">
                                    <ScrambleText 
                                      originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Email"] || investor["Email"]}
                                      targetText={investor["Email"]}
                                      isScrambling={investor.isRevealing}
                                    />
                                  </a>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-300">
                                  <Phone className="h-3 w-3 text-zinc-500" />
                                  <span>
                                    <ScrambleText 
                                      originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Phone"] || investor["Phone"]}
                                      targetText={investor["Phone"]}
                                      isScrambling={investor.isRevealing}
                                    />
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-300">
                                  <ExternalLink className="h-3 w-3 text-zinc-500" />
                                  {revealedInvestors.has(investor.row_id) ? (
                                    <a 
                                      href={investor["Linkedin URL"]} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="hover:text-[#ffff00] transition-colors"
                                    >
                                      LinkedIn Profile
                                    </a>
                                  ) : (
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <span className="text-zinc-500 cursor-not-allowed">
                                            LinkedIn Profile
                                          </span>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-zinc-900 text-zinc-200 border-zinc-800">
                                          <p>View the details to access this link</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-zinc-300">
                                  <Globe className="h-3 w-3 text-zinc-500" />
                                  {revealedInvestors.has(investor.row_id) ? (
                                    <a 
                                      href={investor["Website"]} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="hover:text-[#ffff00] transition-colors"
                                    >
                                      <ScrambleText 
                                        originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Website"] || investor["Website"]}
                                        targetText={investor["Website"]}
                                        isScrambling={investor.isRevealing}
                                      />
                                    </a>
                                  ) : (
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <span className="text-zinc-500 cursor-not-allowed">
                                            <ScrambleText 
                                              originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Website"] || investor["Website"]}
                                              targetText={investor["Website"]}
                                              isScrambling={investor.isRevealing}
                                            />
                                          </span>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-zinc-900 text-zinc-200 border-zinc-800">
                                          <p>View the details to access this link</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  )}
                                </div>
                              </div>
                              
                              {/* Keywords */}
                              <div className="flex flex-wrap gap-1 mt-2">
                                {investor["Keywords"].split(", ").map((keyword, index) => (
                                  <Badge 
                                    key={index} 
                                    variant="secondary" 
                                    className="text-xs bg-[#ffff00]/20 text-[#ffff00] hover:bg-[#ffff00]/30"
                                  >
                                    {keyword.trim()}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                          <CardHeader className="pt-0 pb-4">
                            <Button 
                              size="sm" 
                              className="w-full bg-[#eaeaea] hover:bg-[#d0d0d0] text-black border border-[#ffff00]/30 disabled:opacity-50"
                              onClick={() => handleRevealInvestor(investor.row_id)}
                              disabled={revealedInvestors.has(investor.row_id) || revealingInvestors.has(investor.row_id)}
                            >
                              {revealingInvestors.has(investor.row_id) ? (
                                <div className="flex items-center gap-2">
                                  <div className="animate-spin h-3 w-3 border border-black border-t-transparent rounded-full"></div>
                                  Revealing...
                                </div>
                              ) : revealedInvestors.has(investor.row_id) ? (
                                "Revealed"
                              ) : (
                                "View Details"
                              )}
                            </Button>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden sm:block">
                                             <div className="grid grid-cols-12 gap-4 border-b border-zinc-800 bg-zinc-800/30 p-4 text-sm font-medium text-zinc-300">
                         <div className="col-span-3">Investor</div>
                         <div className="col-span-2">Company</div>
                         <div className="col-span-2">Contact</div>
                         <div className="col-span-2">Links</div>
                         <div className="col-span-2">Keywords</div>
                         <div className="col-span-1 text-center">Action</div>
                       </div>
                      {currentInvestors.map((investor) => (
                        <div
                          key={investor.row_id}
                          className="grid grid-cols-12 gap-4 border-b border-zinc-800 p-4 last:border-0 hover:bg-zinc-800/20"
                        >
                          <div className="col-span-3">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-9 w-9 border border-zinc-700">
                                <AvatarFallback className="bg-[#ffff00]/20 text-[#ffff00]">
                                  {investor["First Name"][0]}{investor["Last Name"][0]}
                                </AvatarFallback>
                              </Avatar>
                                                             <div>
                                 <div className="font-medium text-white">
                                   <ScrambleText 
                                     originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Full Name"] || investor["Full Name"]}
                                     targetText={investor["Full Name"]}
                                     isScrambling={investor.isRevealing}
                                   />
                                 </div>
                                 <div className="text-xs text-zinc-400">
                                   <ScrambleText 
                                     originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Title"] || investor["Title"]}
                                     targetText={investor["Title"]}
                                     isScrambling={investor.isRevealing}
                                   />
                                 </div>
                                 <div className="flex items-center text-xs text-zinc-400 mt-1">
                                   <MapPin className="h-3 w-3 mr-1 text-zinc-500" />
                                   <ScrambleText 
                                     originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Country"] || investor["Country"]}
                                     targetText={investor["Country"]}
                                     isScrambling={investor.isRevealing}
                                   />
                                 </div>
                               </div>
                            </div>
                          </div>
                                                     <div className="col-span-2">
                             <div className="flex items-center gap-2 text-zinc-300">
                               <Building className="h-4 w-4 text-zinc-500" />
                               <div>
                                 <div className="text-sm font-medium">
                                   <ScrambleText 
                                     originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Venture Capital Name"] || investor["Venture Capital Name"]}
                                     targetText={investor["Venture Capital Name"]}
                                     isScrambling={investor.isRevealing}
                                   />
                                 </div>
                                 <div className="text-xs text-zinc-400 line-clamp-2">
                                   <ScrambleText 
                                     originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Headline"] || investor["Headline"]}
                                     targetText={investor["Headline"]}
                                     isScrambling={investor.isRevealing}
                                   />
                                 </div>
                               </div>
                             </div>
                           </div>
                           <div className="col-span-2">
                             <div className="space-y-1">
                               <div className="flex items-center gap-2 text-xs text-zinc-300">
                                 <Mail className="h-3 w-3 text-zinc-500" />
                                 <a href={`mailto:${investor["Email"]}`} className="hover:text-[#ffff00] transition-colors truncate">
                                   <ScrambleText 
                                     originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Email"] || investor["Email"]}
                                     targetText={investor["Email"]}
                                     isScrambling={investor.isRevealing}
                                   />
                                 </a>
                               </div>
                               <div className="flex items-center gap-2 text-xs text-zinc-300">
                                 <Phone className="h-3 w-3 text-zinc-500" />
                                 <span>
                                   <ScrambleText 
                                     originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Phone"] || investor["Phone"]}
                                     targetText={investor["Phone"]}
                                     isScrambling={investor.isRevealing}
                                   />
                                 </span>
                               </div>
                               <div className="flex items-center gap-2 text-xs text-zinc-400">
                                 <MapPin className="h-3 w-3 text-zinc-500" />
                                 <span>
                                   <ScrambleText 
                                     originalText={investors.find(orig => orig.row_id === investor.row_id && !revealedInvestors.has(investor.row_id))?.["Country"] || investor["Country"]}
                                     targetText={investor["Country"]}
                                     isScrambling={investor.isRevealing}
                                   />
                                 </span>
                               </div>
                             </div>
                           </div>
                           <div className="col-span-2">
                             <div className="space-y-1">
                               <div className="flex items-center gap-2 text-xs text-zinc-300">
                                 <ExternalLink className="h-3 w-3 text-zinc-500" />
                                 {revealedInvestors.has(investor.row_id) ? (
                                   <a 
                                     href={investor["Linkedin URL"]} 
                                     target="_blank" 
                                     rel="noopener noreferrer"
                                     className="hover:text-[#ffff00] transition-colors"
                                   >
                                     LinkedIn
                                   </a>
                                 ) : (
                                   <TooltipProvider>
                                     <Tooltip>
                                       <TooltipTrigger asChild>
                                         <span className="text-zinc-500 cursor-not-allowed">
                                           LinkedIn
                                         </span>
                                       </TooltipTrigger>
                                       <TooltipContent className="bg-zinc-900 text-zinc-200 border-zinc-800">
                                         <p>View the details to access this link</p>
                                       </TooltipContent>
                                     </Tooltip>
                                   </TooltipProvider>
                                 )}
                               </div>
                               <div className="flex items-center gap-2 text-xs text-zinc-300">
                                 <Globe className="h-3 w-3 text-zinc-500" />
                                 {revealedInvestors.has(investor.row_id) ? (
                                   <a 
                                     href={investor["Website"]} 
                                     target="_blank" 
                                     rel="noopener noreferrer"
                                     className="hover:text-[#ffff00] transition-colors truncate"
                                   >
                                     Website
                                   </a>
                                 ) : (
                                   <TooltipProvider>
                                     <Tooltip>
                                       <TooltipTrigger asChild>
                                         <span className="text-zinc-500 cursor-not-allowed truncate">
                                           Website
                                         </span>
                                       </TooltipTrigger>
                                       <TooltipContent className="bg-zinc-900 text-zinc-200 border-zinc-800">
                                         <p>View the details to access this link</p>
                                       </TooltipContent>
                                     </Tooltip>
                                   </TooltipProvider>
                                 )}
                               </div>
                             </div>
                           </div>
                                                     <div className="col-span-2">
                             <div className="flex flex-wrap gap-1">
                               {investor["Keywords"].split(", ").slice(0, 2).map((keyword, index) => (
                                 <Badge 
                                   key={index} 
                                   variant="secondary" 
                                   className="text-xs bg-[#ffff00]/20 text-[#ffff00] hover:bg-[#ffff00]/30"
                                 >
                                   {keyword.trim()}
                                 </Badge>
                               ))}
                               {investor["Keywords"].split(", ").length > 2 && (
                                 <Badge variant="secondary" className="text-xs bg-zinc-700 text-zinc-300">
                                   +{investor["Keywords"].split(", ").length - 2}
                                 </Badge>
                               )}
                             </div>
                           </div>
                           <div className="col-span-1 flex items-center justify-center">
                             <Button 
                               size="sm" 
                               variant="outline" 
                               className="border-zinc-700 text-zinc-200 hover:bg-[#eaeaea] hover:text-black hover:border-[#ffff00]/30 disabled:opacity-50"
                               onClick={() => handleRevealInvestor(investor.row_id)}
                               disabled={revealedInvestors.has(investor.row_id) || revealingInvestors.has(investor.row_id)}
                             >
                               {revealingInvestors.has(investor.row_id) ? (
                                 <div className="flex items-center gap-1">
                                   <div className="animate-spin h-3 w-3 border border-zinc-200 border-t-transparent rounded-full"></div>
                                   <span className="hidden sm:inline">Revealing</span>
                                 </div>
                               ) : revealedInvestors.has(investor.row_id) ? (
                                 "Revealed"
                               ) : (
                                 "View"
                               )}
                             </Button>
                           </div>
                        </div>
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex justify-between items-center p-4 border-t border-zinc-800 bg-zinc-900/50">
                        <div className="text-xs text-zinc-400">
                          Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredInvestors.length)} of {filteredInvestors.length} investors
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                          >
                            Previous
                          </Button>
                          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) {
                              pageNum = i + 1;
                            } else if (currentPage <= 3) {
                              pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                              pageNum = totalPages - 4 + i;
                            } else {
                              pageNum = currentPage - 2 + i;
                            }

                            return (
                              <Button
                                key={pageNum}
                                variant={currentPage === pageNum ? "default" : "outline"}
                                size="sm"
                                className={`w-8 ${
                                  currentPage === pageNum
                                    ? "bg-[#eaeaea] text-black hover:bg-[#d0d0d0] border-[#ffff00]/30"
                                    : "border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                                }`}
                                onClick={() => handlePageChange(pageNum)}
                              >
                                {pageNum}
                              </Button>
                            );
                          })}
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-zinc-500">No investors found matching your criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
} 