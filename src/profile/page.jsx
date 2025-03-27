"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Users,
  BookOpen,
  Trophy,
  Settings,
  Bell,
  Shield,
  LogOut,
  Pencil,
  User,
  Clock,
  MapPin,
  FileText,
  Save,
  Plus,
} from "lucide-react"

// demo user data
const user = {
  id: 1,
  name: "Mayank Monu",
  email: "123@thapar.edu",
  major: "Computer Science",
  year: "Senior",
  phone: "123-4567",
  bio: "Computer Science major with a focus on AI and machine learning. Looking for study partners for advanced algorithms and data structures courses. Also enjoy playing basketball and tennis in my free time.",
  avatar: null,
  interests: ["Programming", "Algorithms", "Machine Learning", "Badminton", "Tennis"],
  classes: [
    { id: 1, code: "CS 301", name: "Data Structures and Algorithms", schedule: "MWF 10:00 AM - 11:15 AM" },
    { id: 2, code: "CS 315", name: "Machine Learning", schedule: "TR 1:00 PM - 2:15 PM" },
    { id: 3, code: "MATH 241", name: "Calculus III", schedule: "MWF 2:00 PM - 3:15 PM" },
    { id: 4, code: "PHYS 201", name: "Physics I", schedule: "TR 9:30 AM - 10:45 AM" },
  ],
  groups: [
    { id: 1, name: "Calculus Study Group", type: "study", members: 5, role: "Member" },
    { id: 2, name: "Programming Club", type: "study", members: 12, role: "Admin" },
    { id: 3, name: "Basketball Team", type: "sports", members: 10, role: "Member" },
  ],
  upcomingEvents: [
    { id: 1, title: "Calculus Study Session", time: "Today, 4:00 PM", location: "Library, Room 204", type: "study" },
    {
      id: 2,
      name: " Practice",
      time: "Tomorrow, 6:00 PM",
      location: "University Gym, Court 2",
      type: "sports",
    },
    {
      id: 3,
      name: "Machine Learning Project Meeting",
      time: "Friday, 3:00 PM",
      location: "Computer Science Building, Room 301",
      type: "study",
    },
  ],
  notifications: {
    email: true,
    app: true,
    studyReminders: true,
    sportsReminders: true,
    newGroupInvites: true,
    marketing: false,
  },
  privacy: {
    showEmail: false,
    showPhone: false,
    publicProfile: true,
    allowMessaging: true,
  },
}

export default function ProfilePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    major: user.major,
    year: user.year,
    bio: user.bio,
  })
  const [notificationSettings, setNotificationSettings] = useState(user.notifications)
  const [privacySettings, setPrivacySettings] = useState(user.privacy)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const toggleNotificationSetting = (setting) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }))
  }

  const togglePrivacySetting = (setting) => {
    setPrivacySettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }))
  }

  const handleSaveProfile = () => {
    // In a real app, you would send this to your backend
    console.log("Saving profile:", formData)
    setEditMode(false)
  }

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      <header className="border-b sticky top-0 z-10 bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-1.5 rounded-lg">
              <Users className="h-5 w-5" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              PeerConnectHub
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                3
              </span>
            </Button>
            <Button
              variant="outline"
              className="gap-2 border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" /> Log Out
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
            {/* Profile Sidebar */}
            <div className="space-y-6">
              <Card className="border-blue-100 shadow-lg overflow-hidden">
                <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div className="p-6 -mt-12 text-center">
                  <Avatar className="h-24 w-24 border-4 border-white mx-auto">
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-3xl">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="mt-4 text-xl font-bold">{user.name}</h2>
                  <p className="text-slate-600">
                    {user.major} • {user.year}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {user.interests.slice(0, 3).map((interest, index) => (
                      <Badge key={index} className="bg-blue-100 text-blue-600 hover:bg-blue-200">
                        {interest}
                      </Badge>
                    ))}
                    {user.interests.length > 3 && (
                      <Badge variant="outline" className="border-blue-200 text-blue-600">
                        +{user.interests.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="mt-6">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      onClick={() => setEditMode(!editMode)}
                    >
                      <Pencil className="h-4 w-4 mr-2" /> Edit Profile
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider px-1">Navigation</h3>
                <nav className="grid gap-1">
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600 bg-blue-50 text-blue-600"
                    onClick={() => setActiveTab("overview")}
                  >
                    <User className="h-4 w-4" />
                    Profile Overview
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                    onClick={() => setActiveTab("groups")}
                  >
                    <Users className="h-4 w-4" />
                    My Groups
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                    onClick={() => setActiveTab("classes")}
                  >
                    <BookOpen className="h-4 w-4" />
                    My Classes
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-600 transition-all hover:text-blue-600"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                </nav>
              </div>

              <Card className="border-blue-100 shadow-lg">
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg border border-blue-100 bg-blue-50">
                      <div className="flex items-center gap-2 text-blue-600 font-medium">
                        <BookOpen className="h-4 w-4" />
                        <span>Calculus Study Session</span>
                      </div>
                      <div className="mt-2 pl-6 space-y-1 text-sm">
                        <div className="flex items-center gap-2 text-slate-600">
                          <Clock className="h-3 w-3" />
                          <span>Today, 4:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="h-3 w-3" />
                          <span>Library, Room 204</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg border border-blue-100">
                      <div className="flex items-center gap-2 text-blue-600 font-medium">
                        <Trophy className="h-4 w-4" />
                        <span>Basketball Practice</span>
                      </div>
                      <div className="mt-2 pl-6 space-y-1 text-sm">
                        <div className="flex items-center gap-2 text-slate-600">
                          <Clock className="h-3 w-3" />
                          <span>Tomorrow, 6:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="h-3 w-3" />
                          <span>University Gym, Court 2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="bg-blue-50 w-full justify-start border-b rounded-none p-0">
                  <TabsTrigger
                    value="overview"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="groups"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
                  >
                    My Groups
                  </TabsTrigger>
                  <TabsTrigger
                    value="classes"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
                  >
                    My Classes
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
                  >
                    Settings
                  </TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="mt-6">
                  <Card className="border-blue-100 shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Profile Information</CardTitle>
                      {!editMode && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                          onClick={() => setEditMode(true)}
                        >
                          <Pencil className="h-4 w-4 mr-2" /> Edit
                        </Button>
                      )}
                    </CardHeader>
                    <CardContent>
                      {editMode ? (
                        <div className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border-blue-200 focus-visible:ring-blue-500"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border-blue-200 focus-visible:ring-blue-500"
                              />
                            </div>
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone</Label>
                              <Input
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border-blue-200 focus-visible:ring-blue-500"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="major">Major</Label>
                              <Input
                                id="major"
                                name="major"
                                value={formData.major}
                                onChange={handleChange}
                                className="border-blue-200 focus-visible:ring-blue-500"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="year">Year</Label>
                            <Input
                              id="year"
                              name="year"
                              value={formData.year}
                              onChange={handleChange}
                              className="border-blue-200 focus-visible:ring-blue-500"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                              id="bio"
                              name="bio"
                              value={formData.bio}
                              onChange={handleChange}
                              className="min-h-[120px] border-blue-200 focus-visible:ring-blue-500"
                            />
                          </div>

                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              onClick={() => setEditMode(false)}
                              className="border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={handleSaveProfile}
                              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                            >
                              <Save className="h-4 w-4 mr-2" /> Save Changes
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="flex flex-col gap-1">
                              <p className="text-sm text-slate-500">Full Name</p>
                              <p className="font-medium">{user.name}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-sm text-slate-500">Email</p>
                              <p className="font-medium">{user.email}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-sm text-slate-500">Phone</p>
                              <p className="font-medium">{user.phone}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-sm text-slate-500">Major</p>
                              <p className="font-medium">{user.major}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-sm text-slate-500">Year</p>
                              <p className="font-medium">{user.year}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm text-slate-500 mb-1">Bio</p>
                            <p className="text-slate-600">{user.bio}</p>
                          </div>

                          <div>
                            <p className="text-sm text-slate-500 mb-2">Interests</p>
                            <div className="flex flex-wrap gap-2">
                              {user.interests.map((interest, index) => (
                                <Badge key={index} className="bg-blue-100 text-blue-600 hover:bg-blue-200">
                                  {interest}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <div className="grid gap-6 md:grid-cols-2 mt-6">
                    <Card className="border-blue-100 shadow-lg">
                      <CardHeader>
                        <CardTitle>Study Groups</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {user.groups
                            .filter((g) => g.type === "study")
                            .map((group) => (
                              <div
                                key={group.id}
                                className="flex items-center justify-between p-3 rounded-lg border border-blue-100 hover:bg-blue-50 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                    <BookOpen className="h-4 w-4" />
                                  </div>
                                  <div>
                                    <p className="font-medium">{group.name}</p>
                                    <p className="text-xs text-slate-500">{group.members} members</p>
                                  </div>
                                </div>
                                {group.role === "Admin" && <Badge className="bg-blue-100 text-blue-600">Admin</Badge>}
                              </div>
                            ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-100 shadow-lg">
                      <CardHeader>
                        <CardTitle>Sports Activities</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {user.groups
                            .filter((g) => g.type === "sports")
                            .map((group) => (
                              <div
                                key={group.id}
                                className="flex items-center justify-between p-3 rounded-lg border border-blue-100 hover:bg-blue-50 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                                    <Trophy className="h-4 w-4" />
                                  </div>
                                  <div>
                                    <p className="font-medium">{group.name}</p>
                                    <p className="text-xs text-slate-500">{group.members} members</p>
                                  </div>
                                </div>
                                {group.role === "Admin" && <Badge className="bg-blue-100 text-blue-600">Admin</Badge>}
                              </div>
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Groups Tab */}
                <TabsContent value="groups" className="mt-6">
                  <Card className="border-blue-100 shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>My Groups</CardTitle>
                      <div className="flex gap-2">
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                          <Plus className="h-4 w-4 mr-2" /> Join Group
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {user.groups.map((group) => (
                          <div
                            key={group.id}
                            className="flex items-center justify-between p-4 rounded-lg border border-blue-100 hover:bg-blue-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${
                                  group.type === "study"
                                    ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                                    : "bg-gradient-to-r from-orange-500 to-amber-500"
                                }`}
                              >
                                {group.type === "study" ? (
                                  <BookOpen className="h-5 w-5" />
                                ) : (
                                  <Trophy className="h-5 w-5" />
                                )}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className="font-medium">{group.name}</p>
                                  {group.role === "Admin" && <Badge className="bg-blue-100 text-blue-600">Admin</Badge>}
                                </div>
                                <div className="flex items-center gap-1 mt-1">
                                  <Badge variant="outline" className="text-xs border-slate-200">
                                    {group.type === "study" ? "Study Group" : "Sports Activity"}
                                  </Badge>
                                  <p className="text-xs text-slate-500">{group.members} members</p>
                                </div>
                              </div>
                            </div>
                            <Button variant="outline" className="border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                              View
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Classes Tab */}
                <TabsContent value="classes" className="mt-6">
                  <Card className="border-blue-100 shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>My Classes</CardTitle>
                      <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <Plus className="h-4 w-4 mr-2" /> Add Class
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {user.classes.map((course) => (
                          <div
                            key={course.id}
                            className="p-4 rounded-lg border border-blue-100 hover:bg-blue-50 transition-colors"
                          >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <div>
                                <div className="flex items-center gap-2">
                                  <Badge className="bg-blue-100 text-blue-600">{course.code}</Badge>
                                  <h3 className="font-medium">{course.name}</h3>
                                </div>
                                <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
                                  <Clock className="h-4 w-4 text-slate-500" />
                                  <span>{course.schedule}</span>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                                >
                                  <FileText className="h-4 w-4 mr-2" /> Materials
                                </Button>
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                                >
                                  <Users className="h-4 w-4 mr-2" /> Find Study Group
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings" className="mt-6">
                  <div className="grid gap-6">
                    <Card className="border-blue-100 shadow-lg">
                      <CardHeader>
                        <CardTitle>Notification Preferences</CardTitle>
                        <CardDescription>Control how and when you receive notifications</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="email-notifications">Email Notifications</Label>
                              <p className="text-sm text-slate-500">Receive notifications via email</p>
                            </div>
                            <Switch
                              id="email-notifications"
                              checked={notificationSettings.email}
                              onCheckedChange={() => toggleNotificationSetting("email")}
                              className="data-[state=checked]:bg-blue-600"
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="app-notifications">App Notifications</Label>
                              <p className="text-sm text-slate-500">Receive in-app notifications</p>
                            </div>
                            <Switch
                              id="app-notifications"
                              checked={notificationSettings.app}
                              onCheckedChange={() => toggleNotificationSetting("app")}
                              className="data-[state=checked]:bg-blue-600"
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="study-reminders">Study Session Reminders</Label>
                              <p className="text-sm text-slate-500">Get reminded about upcoming study sessions</p>
                            </div>
                            <Switch
                              id="study-reminders"
                              checked={notificationSettings.studyReminders}
                              onCheckedChange={() => toggleNotificationSetting("studyReminders")}
                              className="data-[state=checked]:bg-blue-600"
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="sports-reminders">Sports Activity Reminders</Label>
                              <p className="text-sm text-slate-500">Get reminded about upcoming sports activities</p>
                            </div>
                            <Switch
                              id="sports-reminders"
                              checked={notificationSettings.sportsReminders}
                              onCheckedChange={() => toggleNotificationSetting("sportsReminders")}
                              className="data-[state=checked]:bg-blue-600"
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="group-invites">Group Invitations</Label>
                              <p className="text-sm text-slate-500">Get notified when you're invited to a group</p>
                            </div>
                            <Switch
                              id="group-invites"
                              checked={notificationSettings.newGroupInvites}
                              onCheckedChange={() => toggleNotificationSetting("newGroupInvites")}
                              className="data-[state=checked]:bg-blue-600"
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="marketing">Marketing Updates</Label>
                              <p className="text-sm text-slate-500">Receive news and updates about PeerConnectHub</p>
                            </div>
                            <Switch
                              id="marketing"
                              checked={notificationSettings.marketing}
                              onCheckedChange={() => toggleNotificationSetting("marketing")}
                              className="data-[state=checked]:bg-blue-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-100 shadow-lg">
                      <CardHeader>
                        <CardTitle>Privacy Settings</CardTitle>
                        <CardDescription>Control your privacy and what others can see</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="show-email">Show Email Address</Label>
                              <p className="text-sm text-slate-500">Make your email visible to other users</p>
                            </div>
                            <Switch
                              id="show-email"
                              checked={privacySettings.showEmail}
                              onCheckedChange={() => togglePrivacySetting("showEmail")}
                              className="data-[state=checked]:bg-blue-600"
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="show-phone">Show Phone Number</Label>
                              <p className="text-sm text-slate-500">Make your phone number visible to other users</p>
                            </div>
                            <Switch
                              id="show-phone"
                              checked={privacySettings.showPhone}
                              onCheckedChange={() => togglePrivacySetting("showPhone")}
                              className="data-[state=checked]:bg-blue-600"
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="public-profile">Public Profile</Label>
                              <p className="text-sm text-slate-500">Allow your profile to appear in search results</p>
                            </div>
                            <Switch
                              id="public-profile"
                              checked={privacySettings.publicProfile}
                              onCheckedChange={() => togglePrivacySetting("publicProfile")}
                              className="data-[state=checked]:bg-blue-600"
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="allow-messaging">Allow Messaging</Label>
                              <p className="text-sm text-slate-500">Allow other users to send you messages</p>
                            </div>
                            <Switch
                              id="allow-messaging"
                              checked={privacySettings.allowMessaging}
                              onCheckedChange={() => togglePrivacySetting("allowMessaging")}
                              className="data-[state=checked]:bg-blue-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-100 shadow-lg">
                      <CardHeader>
                        <CardTitle>Account Security</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Button
                            variant="outline"
                            className="w-full justify-start border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Shield className="h-4 w-4 mr-2" /> Change Password
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full justify-start border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Bell className="h-4 w-4 mr-2" /> Two-Factor Authentication
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full justify-start border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                          >
                            <LogOut className="h-4 w-4 mr-2" /> Deactivate Account
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

