"use client"

import { useState } from "react"
import { Search, MapPin, Building, Tag, Eye, Star, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Sample data
const investors = [
  {
    id: 1,
    name: "Sarah Anderson",
    headline:
      "Founder and VP specializing in Consumer Credit Finance and Financial Services. Expert in Credit Collection Risk, loans, Fintech, and retail sectors. Passionate about Tech, Innovation, and Energy Transition in business strategies. Advisory at Correios, focusing on business turnaround and ESG strategies.",
    company: "Correios",
    location: "Brazil",
    tags: ["Consumer", "Tech", "Fintech", "E-commerce"],
    avatar: "S",
    verified: false,
    viewed: false,
  },
  {
    id: 2,
    name: "George Franklin",
    headline:
      "Focused entrepreneur and engineer at New Automotive, committed to creating long-term value and making a significant impact.",
    company: "New Automotive",
    location: "United Kingdom",
    tags: ["Tech"],
    avatar: "G",
    verified: true,
    viewed: false,
  },
  {
    id: 3,
    name: "James Parker",
    headline:
      "Corporate Brand Strategist at Ahold Delhaize, specializing in executive coaching, advisory, leadership development and investor relations.",
    company: "Ahold Delhaize",
    location: "Netherlands",
    tags: ["Consumer"],
    avatar: "J",
    verified: false,
    viewed: true,
  },
  {
    id: 4,
    name: "Patricia Torres",
    headline:
      "Special Situations Lawyer at Takjas, excelling in Finance, Restructuring, M&A, Litigation, Employment, and Real Estate.",
    company: "Takjas",
    location: "Germany",
    tags: ["Fintech"],
    avatar: "P",
    verified: true,
    viewed: false,
  },
  {
    id: 5,
    name: "Emma Lewis",
    headline:
      "Chief Revenue Officer at Linearity, responsible for spearheading strategies to drive growth and profitability. Extensive experience in the tech industry focusing on strategic financial planning and execution.",
    company: "Linearity",
    location: "United Kingdom",
    tags: ["SaaS", "Tech"],
    avatar: "E",
    verified: true,
    viewed: true,
  },
  {
    id: 6,
    name: "Michael Chen",
    headline: 
      "Managing Director at Quant Capital with 15+ years experience in venture capital, focusing on early-stage fintech and blockchain investments.",
    company: "Quant Capital",
    location: "Singapore",
    tags: ["Fintech", "Blockchain"],
    avatar: "M",
    verified: true,
    viewed: false,
  },
  {
    id: 7,
    name: "Rebecca Johnson",
    headline: 
      "Angel investor specializing in sustainable businesses and climate-tech solutions with a portfolio of 25+ companies and 4 successful exits.",
    company: "Independent",
    location: "Canada",
    tags: ["Sustainability", "CleanTech"],
    avatar: "R",
    verified: false,
    viewed: false,
  },
  {
    id: 8,
    name: "David Martinez",
    headline: 
      "Investment Director at Green Horizon Fund focusing on renewable energy infrastructure projects across Europe and Latin America.",
    company: "Green Horizon Fund",
    location: "Spain",
    tags: ["Renewable Energy", "Infrastructure"],
    avatar: "D",
    verified: true,
    viewed: true,
  },
  {
    id: 9,
    name: "Sophie Lambert",
    headline: 
      "Principal at TechVentures Partners focusing on B2B SaaS and marketplace investments with previous experience at Goldman Sachs.",
    company: "TechVentures Partners",
    location: "France",
    tags: ["SaaS", "Marketplace"],
    avatar: "S",
    verified: true,
    viewed: false,
  },
  {
    id: 10,
    name: "Takahiro Yamada",
    headline: 
      "Veteran investor and board member with expertise in scaling international businesses, particularly in Asian markets.",
    company: "Vision Capital",
    location: "Japan",
    tags: ["International", "Growth"],
    avatar: "T",
    verified: false,
    viewed: true,
  },
  {
    id: 11,
    name: "Olivia Thompson",
    headline: 
      "Partner at Healthcare Ventures specializing in biotechnology and digital health investments with background in pharma research.",
    company: "Healthcare Ventures",
    location: "Switzerland",
    tags: ["Biotech", "Healthcare"],
    avatar: "O",
    verified: true,
    viewed: false,
  },
  {
    id: 12,
    name: "Daniel Kowalski",
    headline: 
      "Founder of Elysium Capital, focusing on AI/ML startups with previous exits to Google and Microsoft.",
    company: "Elysium Capital",
    location: "Poland",
    tags: ["AI", "Machine Learning"],
    avatar: "D",
    verified: true,
    viewed: false,
  },
  {
    id: 13,
    name: "Maria Gomez",
    headline: 
      "Impact investor supporting women-led businesses across Latin America with over $50M deployed in the last 5 years.",
    company: "Alma Ventures",
    location: "Mexico",
    tags: ["Impact", "Gender Equity"],
    avatar: "M",
    verified: false,
    viewed: true,
  },
  {
    id: 14,
    name: "Alexander Petrov",
    headline: 
      "Managing Partner at Arctic Circle Investments specializing in cold climate technologies and Nordic startups.",
    company: "Arctic Circle Investments",
    location: "Sweden",
    tags: ["CleanTech", "Hardware"],
    avatar: "A",
    verified: true,
    viewed: false,
  },
  {
    id: 15,
    name: "Jasmine Wong",
    headline: 
      "Principal at East West Capital bridging investment opportunities between Asian and Western markets, specializing in consumer technology.",
    company: "East West Capital",
    location: "Hong Kong",
    tags: ["Consumer Tech", "Cross-border"],
    avatar: "J",
    verified: true,
    viewed: false,
  },
  {
    id: 16,
    name: "Noah Goldstein",
    headline: 
      "Family Office Director specializing in long-term investments across real estate, art, and next-generation technologies.",
    company: "Goldstein Family Office",
    location: "Israel",
    tags: ["Family Office", "Diversified"],
    avatar: "N",
    verified: true,
    viewed: true,
  },
  {
    id: 17,
    name: "Priya Sharma",
    headline: 
      "General Partner at Elephant Ventures focusing on Series A investments in Indian and Southeast Asian startups.",
    company: "Elephant Ventures",
    location: "India",
    tags: ["Emerging Markets", "Mobile"],
    avatar: "P",
    verified: false,
    viewed: false,
  },
  {
    id: 18,
    name: "Carlos Mendoza",
    headline: 
      "Investment Manager at Latin America Growth Fund with expertise in agricultural technology and sustainable food systems.",
    company: "Latin America Growth Fund",
    location: "Brazil",
    tags: ["AgTech", "Sustainability"],
    avatar: "C",
    verified: true,
    viewed: false,
  },
  {
    id: 19,
    name: "Fatima Al-Mansour",
    headline: 
      "Director at Gulf Innovations Fund supporting technology transfer and innovation ecosystems in the MENA region.",
    company: "Gulf Innovations Fund",
    location: "UAE",
    tags: ["GovTech", "Education"],
    avatar: "F",
    verified: true,
    viewed: true,
  },
  {
    id: 20,
    name: "Thomas Eriksson",
    headline: 
      "Founding Partner at Nordic AI Fund with expertise in machine learning applications for industrial automation.",
    company: "Nordic AI Fund",
    location: "Norway",
    tags: ["AI", "Industrial"],
    avatar: "T",
    verified: true,
    viewed: false,
  },
]

const locations = ["All Locations", "Brazil", "United Kingdom", "Netherlands", "Germany", "Singapore", "Canada", "Spain", "France", "Japan", "Switzerland", "Poland", "Mexico", "Sweden", "Hong Kong", "Israel", "India", "UAE", "Norway"]
const industries = ["All Industries", "Consumer", "Tech", "Fintech", "E-commerce", "SaaS", "Blockchain", "Sustainability", "CleanTech", "Renewable Energy", "Infrastructure", "Marketplace", "International", "Growth", "Biotech", "Healthcare", "AI", "Machine Learning", "Impact", "Gender Equity", "Hardware", "Consumer Tech", "Cross-border", "Family Office", "Diversified", "Emerging Markets", "Mobile", "AgTech", "GovTech", "Education", "Industrial"]

export function InvestorDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries")
  const [showViewed, setShowViewed] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  // Add current page state for pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Filter investors based on search, location, industry, and viewed status
  const filteredInvestors = investors.filter((investor) => {
    const matchesSearch =
      investor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      investor.company.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesLocation = selectedLocation === "All Locations" || investor.location === selectedLocation

    const matchesIndustry =
      selectedIndustry === "All Industries" || investor.tags.some((tag) => tag === selectedIndustry)

    const matchesViewed = !showViewed || investor.viewed

    const matchesTab =
      activeTab === "all" ||
      (activeTab === "verified" && investor.verified) ||
      (activeTab === "viewed" && investor.viewed)

    return matchesSearch && matchesLocation && matchesIndustry && matchesViewed && matchesTab
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
          <h1 className="text-2xl font-bold tracking-tight text-white">Investor Database</h1>
          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2 rounded-full bg-[#5e0e9e]/20 px-3 py-1 text-sm font-medium text-[#8e1cb3]">
                    <Star className="h-4 w-4 fill-[#8e1cb3] text-[#8e1cb3]" />
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
              <CardTitle className="text-white">Investors</CardTitle>
              <Tabs defaultValue="all" className="w-full sm:w-auto" onValueChange={setActiveTab}>
                <TabsList className="bg-zinc-800/50">
                  <TabsTrigger value="all" className="data-[state=active]:bg-[#5e0e9e] data-[state=active]:text-white">All</TabsTrigger>
                  <TabsTrigger value="verified" className="data-[state=active]:bg-[#5e0e9e] data-[state=active]:text-white">Verified</TabsTrigger>
                  <TabsTrigger value="viewed" className="data-[state=active]:bg-[#5e0e9e] data-[state=active]:text-white">Viewed</TabsTrigger>
                </TabsList>
              </Tabs>
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
                    className="pl-8 bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-[#8e1cb3] focus:ring-[#5e0e9e]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 sm:flex-row">
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="w-full sm:w-[180px] bg-zinc-800 border-zinc-700 text-zinc-200">
                      <MapPin className="mr-2 h-4 w-4 text-zinc-400" />
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700 text-zinc-200 max-h-60 overflow-y-auto">
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger className="w-full sm:w-[180px] bg-zinc-800 border-zinc-700 text-zinc-200">
                      <Tag className="mr-2 h-4 w-4 text-zinc-400" />
                      <SelectValue placeholder="Industry" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700 text-zinc-200 max-h-60 overflow-y-auto">
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant={showViewed ? "default" : "outline"}
                    className={`w-full sm:w-auto ${
                      showViewed 
                        ? "bg-[#5e0e9e] hover:bg-[#500c83] text-white border border-[#8e1cb3]" 
                        : "text-zinc-200 border-zinc-700 hover:bg-zinc-800 hover:text-white"
                    }`}
                    onClick={() => setShowViewed(!showViewed)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    {showViewed ? "Showing Viewed" : "Show Viewed"}
                  </Button>
                </div>
              </div>

              <div className="rounded-md border border-zinc-800">
                {currentInvestors.length > 0 ? (
                  <>
                    {/* Mobile Card View */}
                    <div className="sm:hidden space-y-4">
                      {currentInvestors.map((investor) => (
                        <Card 
                          key={investor.id} 
                          className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800/50 transition-colors duration-300"
                        >
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10 border border-zinc-700">
                                  <AvatarFallback className="bg-[#5e0e9e]/20 text-[#8e1cb3]">
                                    {investor.avatar}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h3 className="text-white font-semibold">{investor.name}</h3>
                                    {investor.verified && (
                                      <TooltipProvider>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <div className="h-2 w-2 rounded-full bg-[#8e1cb3]"></div>
                                          </TooltipTrigger>
                                          <TooltipContent className="bg-zinc-900 text-zinc-200 border-zinc-800">
                                            <p>Verified investor</p>
                                          </TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>
                                    )}
                                  </div>
                                  <div className="flex items-center text-xs text-zinc-400 mt-1">
                                    <MapPin className="h-3 w-3 mr-1 text-zinc-500" />
                                    {investor.location}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-2">
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-zinc-300">
                                <Building className="h-4 w-4 text-zinc-500" />
                                <span className="text-sm">{investor.company}</span>
                              </div>
                              <p className="text-sm text-zinc-400 line-clamp-3">{investor.headline}</p>
                              <div className="flex flex-wrap gap-1 mt-2">
                                {investor.tags.map((tag) => (
                                  <Badge 
                                    key={tag} 
                                    variant="secondary" 
                                    className="text-xs bg-[#5e0e9e]/20 text-[#8e1cb3] hover:bg-[#5e0e9e]/30"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                          <CardHeader className="pt-0 pb-4">
                            <Button 
                              size="sm" 
                              className="w-full bg-[#5e0e9e] hover:bg-[#500c83] text-white border border-[#8e1cb3]"
                            >
                              View Investor
                            </Button>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>

                    {/* Existing Desktop Table View */}
                    <div className="hidden sm:block rounded-md border border-zinc-800">
                      <div className="grid grid-cols-12 gap-2 border-b border-zinc-800 bg-zinc-800/30 p-4 text-sm font-medium text-zinc-300">
                        <div className="col-span-4 sm:col-span-3">Investor</div>
                        <div className="col-span-5 sm:col-span-4">Headline</div>
                        <div className="col-span-3 hidden sm:block ml-16">Company</div>
                        <div className="col-span-3 sm:col-span-1 text-right">Action</div>
                      </div>
                      {currentInvestors.map((investor) => (
                        <div
                          key={investor.id}
                          className="grid grid-cols-12 gap-2 border-b border-zinc-800 p-4 last:border-0 hover:bg-zinc-800/20"
                        >
                          <div className="col-span-4 sm:col-span-3">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-9 w-9 border border-zinc-700">
                                <AvatarFallback className="bg-[#5e0e9e]/20 text-[#8e1cb3]">{investor.avatar}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center gap-1 font-medium text-white">
                                  {investor.name}
                                  {investor.verified && (
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <div className="h-2 w-2 rounded-full bg-[#8e1cb3]"></div>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-zinc-900 text-zinc-200 border-zinc-800">
                                          <p>Verified investor</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  )}
                                </div>
                                <div className="flex items-center text-xs text-zinc-400 mt-1">
                                  <MapPin className="h-3 w-3 mr-1 text-zinc-500" />
                                  {investor.location}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-5 sm:col-span-4">
                            <p className="line-clamp-2 text-sm text-zinc-400">{investor.headline}</p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {investor.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs bg-[#5e0e9e]/20 text-[#8e1cb3] hover:bg-[#5e0e9e]/30">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="col-span-3 ml-16 hidden items-center sm:flex">
                            <div className="flex items-center gap-2 text-zinc-300">
                              <Building className="h-4 w-4 text-zinc-500" />
                              <span>{investor.company}</span>
                            </div>
                          </div>
                          <div className="col-span-3 sm:col-span-1 flex items-center justify-end">
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="border-zinc-700 text-zinc-200 hover:bg-[#5e0e9e] hover:text-white hover:border-[#8e1cb3]"
                            >
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pagination - Works for both mobile and desktop */}
                    <div className="flex justify-between items-center p-4 border-t border-zinc-800 bg-zinc-900/50 mt-4">
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
                          // Display pagination logic to show current page in the middle when possible
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
                                  ? "bg-[#5e0e9e] text-white border-[#8e1cb3]"
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