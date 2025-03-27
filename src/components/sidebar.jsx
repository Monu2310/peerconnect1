"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Trophy, Calendar, MessageSquare, Settings, User, LogOut, Menu, Home } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"

export function Sidebar({ user }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Default user if not provided
  const defaultUser = {
    name: "Mayank Monu",
    email: "monu@thapar.edu",
    avatar: null,
  }

  const currentUser = user || defaultUser

  // Detect mobile screen
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  const handleLogout = () => {
    //  logout logic here
    router.push("/")
  }

  // Navigation items
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/study-group", label: "Study Groups", icon: BookOpen },
    { path: "/sports-activity", label: "Sports Activities", icon: Trophy },
    { path: "/schedule", label: "My Schedule", icon: Calendar },
    { path: "/messages", label: "Messages", icon: MessageSquare },
  ]

  // Groups
  const myGroups = [
    { path: "/study-group/calculus-101", label: "Calculus Study Group", color: "bg-green-500" },
    { path: "/sports-activity/basketball-team", label: "Basketball Team", color: "bg-blue-500" },
    { path: "/study-group/programming-club", label: "Programming Club", color: "bg-purple-500" },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={closeSidebar}></div>}

      {/* Mobile Header Button */}
      <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50" onClick={toggleSidebar}>
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-blue-100 transform transition-transform duration-300 ease-in-out ${
          isOpen || !isMobile ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:z-0`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-blue-100">
            <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl" onClick={closeSidebar}>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-1.5 rounded-lg">
                <Users className="h-5 w-5" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                PeerConnectHub
              </span>
            </Link>
          </div>

          {/* User Profile */}
          <div className="p-4 border-b border-blue-100">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  {currentUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="overflow-hidden">
                <p className="font-medium truncate">{currentUser.name}</p>
                <p className="text-xs text-slate-500 truncate">{currentUser.email}</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link href="/profile" onClick={closeSidebar}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                >
                  <User className="h-3 w-3 mr-1" /> Profile
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                onClick={handleLogout}
              >
                <LogOut className="h-3 w-3 mr-1" /> Logout
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`)
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeSidebar}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
                      isActive ? "bg-blue-50 text-blue-600" : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* My Groups */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider px-1 mb-2">My Groups</h3>
              <nav className="space-y-1">
                {myGroups.map((group) => (
                  <Link
                    key={group.path}
                    href={group.path}
                    onClick={closeSidebar}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all text-slate-600 hover:text-blue-600 ${
                      pathname === group.path ? "bg-blue-50 text-blue-600" : ""
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${group.color}`}></span>
                    {group.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-blue-100">
            <Button
              variant="outline"
              className="w-full justify-start border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => router.push("/profile?tab=settings")}
            >
              <Settings className="h-4 w-4 mr-2" /> Settings
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar

