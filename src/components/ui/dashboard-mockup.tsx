"use client";

import { Search, ChevronRight, Plus, RefreshCw, ArrowRight, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function DashboardMockup() {
  return (
    <div className="w-full bg-[#0F1117] rounded-lg border border-gray-800 shadow-xl overflow-hidden">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#0F1117] border-r border-gray-800 p-4">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">⚡</span>
            </div>
            <div>
              <div className="text-sm font-medium">Development</div>
              <div className="text-xs text-gray-400">LionParcel</div>
            </div>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Search" className="w-full bg-gray-800 border-gray-700 pl-10 h-9 text-sm" />
          </div>

          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-400 py-2">Developer</div>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white">
              <div className="w-5 h-5 mr-3 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.9 7.55L12.11 8.98C12 9.18 12.08 9.44 12.28 9.54L13.5 10.21C13.85 10.42 13.85 10.9 13.5 11.11L12.28 11.78C12.08 11.89 12 12.15 12.11 12.34L12.9 13.77C13.11 14.13 12.63 14.48 12.28 14.27L11.06 13.6C10.86 13.5 10.61 13.5 10.41 13.6L9.19 14.27C8.84 14.48 8.36 14.13 8.57 13.77L9.36 12.34C9.47 12.15 9.39 11.89 9.19 11.78L7.97 11.11C7.62 10.9 7.62 10.42 7.97 10.21L9.19 9.54C9.39 9.44 9.47 9.18 9.36 8.98L8.57 7.55C8.36 7.2 8.84 6.85 9.19 7.06L10.41 7.73C10.61 7.83 10.86 7.83 11.06 7.73L12.28 7.06C12.63 6.85 13.11 7.2 12.9 7.55Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm">API Keys</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white">
              <div className="w-5 h-5 mr-3 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 13H5.76C6.52 13 7.21 13.43 7.55 14.11L8.44 15.9C9 17 10.33 17 10.9 15.9L13.1 11.28C13.67 10.18 15 10.18 15.56 11.28L17.76 15.9C18.33 17 19.67 17 20.23 15.9L22 12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm">Environments</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white">
              <div className="w-5 h-5 mr-3 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51 17.22C9.33 17.41 8.96 17.53 8.69 17.49L7.49 17.33C7.09 17.28 6.73 16.9 6.67 16.51L6.51 15.31C6.47 15.05 6.6 14.68 6.78 14.49L9.36 11.91C8.92 10.48 9.26 8.86 10.39 7.73C12.01 6.11 14.65 6.11 16.28 7.73C17.9 9.34 17.9 11.98 16.28 13.61Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.45 16.28L9.6 15.42"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3944 10.7H13.4034"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm">Integration</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white">
              <div className="w-5 h-5 mr-3 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.67 18.95L7.6 15.64C8.39 15.11 9.53 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm">App</span>
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 bg-[#0F1117]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.67 18.95L7.6 15.64C8.39 15.11 9.53 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-medium">Workflow</span>
            </div>
            <Button size="sm" variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white">
              <span>Create workflow</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-1">Overview</h2>
            <p className="text-sm text-gray-400">Monday, 18 December 2025</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="flex justify-center items-center h-20 mb-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <Plus className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <h3 className="font-medium mb-1">Start from scratch</h3>
                <p className="text-xs text-gray-400">Create a workflow from scratch</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="flex justify-center items-center h-20 mb-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-gray-400" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-500 mx-2" />
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-gray-400 text-xs">@</span>
                  </div>
                </div>
                <h3 className="font-medium mb-1">Reset Password Code</h3>
                <p className="text-xs text-gray-400">Sending an OTP code to a user reset</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-4">
                <div className="flex justify-center items-center h-20 mb-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-gray-400 text-xs">W</span>
                  </div>
                </div>
                <h3 className="font-medium mb-1">Welcome</h3>
                <p className="text-xs text-gray-400">Welcome a user to your app</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <Card className="bg-gray-800 border-gray-700 col-span-2">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium">Your workflows</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700 hover:bg-gray-800">
                      <TableHead className="text-gray-400">Workflows</TableHead>
                      <TableHead className="text-gray-400">Status</TableHead>
                      <TableHead className="text-gray-400">Steps</TableHead>
                      <TableHead className="text-gray-400">Last updated</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-gray-700 hover:bg-gray-800">
                      <TableCell>Broadcasting Down</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-yellow-900/20 text-yellow-500 border-yellow-500/20">
                          5 Pending
                        </Badge>
                      </TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>April 9, 2025</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-gray-700 hover:bg-gray-800">
                      <TableCell>Broadcasting Down</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-900/20 text-green-500 border-green-500/20">
                          Active
                        </Badge>
                      </TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>April 8, 2025</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium">Workflows Schedule</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.26 15.53L9.74 12L13.26 8.47"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.74 15.53L14.26 12L10.74 8.47"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <h4 className="text-sm font-medium">November 2025</h4>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  <div className="text-gray-500">Sun</div>
                  <div className="text-gray-500">Mon</div>
                  <div className="text-gray-500">Tue</div>
                  <div className="text-gray-500">Wed</div>
                  <div className="text-gray-500">Thu</div>
                  <div className="text-gray-500">Fri</div>
                  <div className="text-gray-500">Sat</div>

                  <div className="py-1">1</div>
                  <div className="py-1">2</div>
                  <div className="py-1">3</div>
                  <div className="py-1">4</div>
                  <div className="py-1">5</div>
                  <div className="py-1">6</div>
                  <div className="py-1">7</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
