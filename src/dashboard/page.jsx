"use client"

import { useState } from "react"
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import {
  Users,
  BookOpen,
  Trophy,
  Bell,
  MessageSquare,
  Calendar,
  Search,
  Plus,
  User,
  LogOut,
  Menu,
  Clock,
  MapPin,
  Heart,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function DashboardPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("study")
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New study group invitation", time: "5 min ago", read: false },
    { id: 2, message: "Basketball game tomorrow", time: "1 hour ago", read: false },
    { id: 3, message: "New message from Sarah", time: "3 hours ago", read: true },
  ])

  const handleLogout = () => {
//logout logic
    router.push("/")
  }

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const markAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const unreadNotificationsCount = notifications.filter((n) => !n.read).length

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      <header className="border-b sticky top-0 z-10 bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={toggleMobileMenu}>
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-1.5 rounded-lg">
                <Users className="h-5 w-5" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                PeerConnectHub
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <Input
                type="search"
                placeholder="Search for groups, peers..."
                className="w-full bg-white pl-8 border-blue-100 focus-visible:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {unreadNotificationsCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                      {unreadNotificationsCount}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80" align="end">
                <DropdownMenuLabel className="flex items-center justify-between">
                  <span>Notifications</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={markAllNotificationsAsRead}
                    className="h-auto p-0 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Mark all as read
                  </Button>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    className={`flex flex-col items-start p-3 ${!notification.read ? "bg-blue-50" : ""}`}
                  >
                    <div className="flex w-full justify-between">
                      <span className="font-medium">{notification.message}</span>
                      {!notification.read && <span className="h-2 w-2 rounded-full bg-blue-600"></span>}
                    </div>
                    <span className="text-xs text-slate-500">{notification.time}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8 border-2 border-blue-100">
                    <AvatarImage src="/placeholder.svg" alt="@user" />
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-slate-500">john.doe@university.edu</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
            {/* Mobile Sidebar */}
            {showMobileMenu && (
              <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={toggleMobileMenu}>
                <div
                  className="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-white p-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 font-bold text-xl">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-1.5 rounded-lg">
                        <Users className="h-5 w-5" />
                      </div>
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        PeerConnectHub
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </Button>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Dashboard
                      </h2>
                      <nav className="grid gap-1">
                        <Link
                          href="#"
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600 bg-blue-50 text-blue-600"
                          onClick={toggleMobileMenu}
                        >
                          <BookOpen className="h-4 w-4" />
                          Study Groups
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                          onClick={toggleMobileMenu}
                        >
                          <Trophy className="h-4 w-4" />
                          Sports Activities
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                          onClick={toggleMobileMenu}
                        >
                          <Calendar className="h-4 w-4" />
                          My Schedule
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                          onClick={toggleMobileMenu}
                        >
                          <MessageSquare className="h-4 w-4" />
                          Messages
                        </Link>
                      </nav>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        My Groups
                      </h2>
                      <nav className="grid gap-1">
                        <Link
                          href="#"
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                          onClick={toggleMobileMenu}
                        >
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          Calculus Study Group
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                          onClick={toggleMobileMenu}
                        >
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          Basketball Team
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                          onClick={toggleMobileMenu}
                        >
                          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                          Programming Club
                        </Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Desktop Sidebar */}
            <div className="hidden md:block space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Dashboard
                </h2>
                <nav className="grid gap-1">
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600 bg-blue-50 text-blue-600"
                  >
                    <BookOpen className="h-4 w-4" />
                    Study Groups
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                  >
                    <Trophy className="h-4 w-4" />
                    Sports Activities
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                  >
                    <Calendar className="h-4 w-4" />
                    My Schedule
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Messages
                  </Link>
                </nav>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  My Groups
                </h2>
                <nav className="grid gap-1">
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Calculus Study Group
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Basketball Team
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Programming Club
                  </Link>
                </nav>
              </div>

              <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
                <h3 className="font-medium mb-2">Upcoming Session</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span>Today, 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>Library, Room 204</span>
                  </div>
                  <div className="font-medium">Calculus Study Group</div>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Welcome back, John!
                </h1>
                <div className="md:hidden">
                  <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Study Groups</CardTitle>
                    <CardDescription>You're in 3 study groups</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      3
                    </div>
                    <div className="mt-2 h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">60% more than average student</p>
                  </CardContent>
                </Card>
                <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Sports Activities</CardTitle>
                    <CardDescription>You're in 1 sports group</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                      1
                    </div>
                    <div className="mt-2 h-2 w-full bg-orange-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Try joining more sports activities!</p>
                  </CardContent>
                </Card>
                <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
                    <CardDescription>You have 2 sessions this week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                      2
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                      <Clock className="h-4 w-4 text-green-500" />
                      <span>Next: Today, 4:00 PM</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="study" onValueChange={setActiveTab} className="w-full">
                <div className="flex items-center justify-between">
                  <TabsList className="bg-blue-50">
                    <TabsTrigger
                      value="study"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
                    >
                      Study Groups
                    </TabsTrigger>
                    <TabsTrigger
                      value="sports"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
                    >
                      Sports Activities
                    </TabsTrigger>
                  </TabsList>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create New
                  </Button>
                </div>

                <TabsContent value="study" className="space-y-4 mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Study Group Cards */}
                    <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                      <CardHeader>
                        <CardTitle>Calculus Study Group</CardTitle>
                        <CardDescription className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-green-500" />
                          Next session: Today, 4:00 PM
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="flex -space-x-2">
                            <Avatar className="border-2 border-white">
                              <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                JD
                              </AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white">
                              <AvatarFallback className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                                AB
                              </AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white">
                              <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                                CD
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-50 text-xs font-medium text-blue-600">
                              +2
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200">Math</Badge>
                            <Badge variant="outline" className="border-blue-200 text-blue-600">
                              Calculus
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all"
                        >
                          View Group
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-purple-500 to-violet-500"></div>
                      <CardHeader>
                        <CardTitle>Programming Club</CardTitle>
                        <CardDescription className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-purple-500" />
                          Next session: Tomorrow, 6:00 PM
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="flex -space-x-2">
                            <Avatar className="border-2 border-white">
                              <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                JD
                              </AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white">
                              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">
                                EF
                              </AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white">
                              <AvatarFallback className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                                GH
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-50 text-xs font-medium text-blue-600">
                              +5
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200">CS</Badge>
                            <Badge variant="outline" className="border-purple-200 text-purple-600">
                              Coding
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all"
                        >
                          View Group
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                      <CardHeader>
                        <CardTitle>Physics Study Group</CardTitle>
                        <CardDescription className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-blue-500" />
                          Next session: Friday, 3:00 PM
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="flex -space-x-2">
                            <Avatar className="border-2 border-white">
                              <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                JD
                              </AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white">
                              <AvatarFallback className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                                IJ
                              </AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white">
                              <AvatarFallback className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white">
                                KL
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex gap-1">
                            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200">Science</Badge>
                            <Badge variant="outline" className="border-blue-200 text-blue-600">
                              Physics
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all"
                        >
                          View Group
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Recommended Study Groups
                      </CardTitle>
                      <CardDescription>Based on your major and interests</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-center gap-4 p-3 rounded-lg border border-blue-100 hover:bg-blue-50 transition-all">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                            <BookOpen className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">Data Structures Group</p>
                            <p className="text-sm text-slate-500">12 members</p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="ml-auto border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Plus className="h-3 w-3 mr-1" /> Join
                          </Button>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg border border-blue-100 hover:bg-blue-50 transition-all">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                            <BookOpen className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">Algorithms Study</p>
                            <p className="text-sm text-slate-500">8 members</p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="ml-auto border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Plus className="h-3 w-3 mr-1" /> Join
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="sports" className="space-y-4 mt-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Sports Activity Cards */}
                    <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                      <CardHeader>
                        <CardTitle>Basketball Team</CardTitle>
                        <CardDescription className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-blue-500" />
                          Next game: Saturday, 2:00 PM
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4">
                          <div className="flex -space-x-2">
                            <Avatar className="border-2 border-white">
                              <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                JD
                              </AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white">
                              <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                                MN
                              </AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-white">
                              <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                                OP
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-50 text-xs font-medium text-blue-600">
                              +7
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200">Sports</Badge>
                            <Badge variant="outline" className="border-blue-200 text-blue-600">
                              Basketball
                            </Badge>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center text-sm">
                          <MapPin className="h-4 w-4 mr-1 text-blue-500" />
                          <span className="text-slate-600">University Gym, Court 2</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="outline"
                          className="w-full border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all"
                        >
                          View Team
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>

                  <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Recommended Sports Activities
                      </CardTitle>
                      <CardDescription>Based on your interests</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-center gap-4 p-3 rounded-lg border border-blue-100 hover:bg-blue-50 transition-all">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                            <Trophy className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">Soccer Club</p>
                            <p className="text-sm text-slate-500">20 members</p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="ml-auto border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Plus className="h-3 w-3 mr-1" /> Join
                          </Button>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg border border-blue-100 hover:bg-blue-50 transition-all">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                            <Trophy className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">Tennis Group</p>
                            <p className="text-sm text-slate-500">6 members</p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="ml-auto border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Plus className="h-3 w-3 mr-1" /> Join
                          </Button>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg border border-blue-100 hover:bg-blue-50 transition-all">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                            <Trophy className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">Yoga Class</p>
                            <p className="text-sm text-slate-500">15 members</p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="ml-auto border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Plus className="h-3 w-3 mr-1" /> Join
                          </Button>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg border border-blue-100 hover:bg-blue-50 transition-all">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                            <Trophy className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">Running Club</p>
                            <p className="text-sm text-slate-500">12 members</p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="ml-auto border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Plus className="h-3 w-3 mr-1" /> Join
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    <Heart className="h-5 w-5 inline-block mr-2 text-pink-500" /> Popular on Campus
                  </CardTitle>
                  <CardDescription>Trending groups and activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 rounded-lg border border-blue-100 hover:bg-blue-50 transition-all">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Psychology Research Group</p>
                        <div className="flex items-center text-sm text-slate-500">
                          <span className="flex items-center mr-3">
                            <Users className="h-3 w-3 mr-1" /> 28 members
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" /> Meets weekly
                          </span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="ml-auto bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                      >
                        <Plus className="h-3 w-3 mr-1" /> Join
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 p-3 rounded-lg border border-blue-100 hover:bg-blue-50 transition-all">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                        <Trophy className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Ultimate Frisbee Team</p>
                        <div className="flex items-center text-sm text-slate-500">
                          <span className="flex items-center mr-3">
                            <Users className="h-3 w-3 mr-1" /> 15 members
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" /> Practices twice weekly
                          </span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="ml-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                      >
                        <Plus className="h-3 w-3 mr-1" /> Join
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

