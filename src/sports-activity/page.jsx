"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  Trophy,
  Calendar,
  Clock,
  MapPin,
  FileText,
  Share2,
  ArrowLeft,
  Send,
  Plus,
  Mail,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"

// data for a sports activity
const sportsActivity = {
  id: "basketball-team",
  name: "Basketball Team",
  description:
    "An intramural basketball team competing in the university league. We practice twice a week and play games on weekends. All skill levels are welcome!",
  sport: "Basketball",
  level: "Intermediate",
  schedule: [
    { type: "Practice", day: "Tuesday", time: "6:00 PM - 8:00 PM", location: "University Gym, Court 2" },
    { type: "Practice", day: "Thursday", time: "7:00 PM - 9:00 PM", location: "University Gym, Court 3" },
    {
      type: "Game",
      day: "Saturday",
      time: "2:00 PM - 4:00 PM",
      location: "University Gym, Main Court",
      opponent: "Engineering Tigers",
    },
  ],
  members: [
    {
      id: 1,
      name: "John Doe",
      role: "Captain",
      avatar: null,
      major: "Computer Science",
      year: "Junior",
      position: "Point Guard",
    },
    {
      id: 2,
      name: "Michael Thompson",
      role: "Member",
      avatar: null,
      major: "Business",
      year: "Senior",
      position: "Shooting Guard",
    },
    {
      id: 3,
      name: "David Wilson",
      role: "Member",
      avatar: null,
      major: "Engineering",
      year: "Sophomore",
      position: "Small Forward",
    },
    {
      id: 4,
      name: "Chris Johnson",
      role: "Member",
      avatar: null,
      major: "Psychology",
      year: "Junior",
      position: "Power Forward",
    },
    { id: 5, name: "Andrew Lee", role: "Member", avatar: null, major: "Biology", year: "Freshman", position: "Center" },
    {
      id: 6,
      name: "Robert Chen",
      role: "Member",
      avatar: null,
      major: "Physics",
      year: "Senior",
      position: "Point Guard",
    },
    {
      id: 7,
      name: "James Taylor",
      role: "Member",
      avatar: null,
      major: "Mathematics",
      year: "Junior",
      position: "Shooting Guard",
    },
  ],
  announcements: [
    {
      id: 1,
      author: "John Doe",
      avatar: null,
      time: "Yesterday at 3:30 PM",
      content:
        "Important: Our game this Saturday has been moved to 2:00 PM instead of the original 1:00 PM time slot. Please make sure to arrive by 1:30 PM for warm-up!",
      urgent: true,
    },
    {
      id: 2,
      author: "John Doe",
      avatar: null,
      time: "3 days ago",
      content:
        "Great practice today, everyone! Let's focus on our defensive strategy for Thursday's session to prepare for Saturday's game.",
      urgent: false,
    },
  ],
  stats: {
    wins: 7,
    losses: 2,
    nextGame: {
      opponent: "Engineering Tigers",
      time: "Saturday, 2:00 PM",
      location: "University Gym, Main Court",
    },
    standings: "2nd in Division A",
  },
  tags: ["Basketball", "Intramural", "Sports", "Team"],
}

export default function SportsActivityPage({ params }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [newMessage, setNewMessage] = useState("")

  const handleBack = () => {
    router.back()
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    //  send this to your backend
    console.log("Sending message:", newMessage)
    setNewMessage("")
  }

  // Calculate initials for avatar fallbacks
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
  }

  // Function to get gradient color based on position
  const getPositionColor = (position) => {
    const colors = {
      "Point Guard": "from-blue-600 to-indigo-600",
      "Shooting Guard": "from-purple-600 to-indigo-600",
      "Small Forward": "from-green-500 to-emerald-500",
      "Power Forward": "from-orange-500 to-amber-500",
      Center: "from-red-500 to-rose-500",
    }
    return colors[position] || "from-slate-500 to-slate-600"
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      <header className="border-b sticky top-0 z-10 bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={handleBack} className="mr-2">
              <ArrowLeft className="h-5 w-5" />
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

          <div className="flex items-center gap-2">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Plus className="h-4 w-4 mr-2" /> Invite Players
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          {/* Header Section */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {sportsActivity.name}
                </h1>
                <p className="text-slate-600 mt-1">
                  {sportsActivity.sport} • {sportsActivity.level} Level
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {sportsActivity.tags.map((tag) => (
                  <Badge key={tag} className="bg-blue-100 text-blue-600 hover:bg-blue-200">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center mt-4 gap-2">
              <div className="flex -space-x-2">
                {sportsActivity.members.slice(0, 4).map((member) => (
                  <Avatar key={member.id} className="border-2 border-white">
                    <AvatarFallback className={`bg-gradient-to-r text-white ${getPositionColor(member.position)}`}>
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                ))}
                {sportsActivity.members.length > 4 && (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-50 text-xs font-medium text-blue-600">
                    +{sportsActivity.members.length - 4}
                  </div>
                )}
              </div>
              <span className="text-sm text-slate-600">{sportsActivity.members.length} members</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-blue-50 w-full justify-start border-b rounded-none p-0">
              <TabsTrigger
                value="overview"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="schedule"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
              >
                Schedule
              </TabsTrigger>
              <TabsTrigger
                value="announcements"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
              >
                Announcements
              </TabsTrigger>
              <TabsTrigger
                value="members"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
              >
                Team
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6 mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card className="border-blue-100 shadow-lg">
                    <CardHeader>
                      <CardTitle>About this Team</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{sportsActivity.description}</p>

                      <div className="mt-6">
                        <h3 className="font-semibold text-lg">Team Information</h3>
                        <div className="grid md:grid-cols-2 gap-4 mt-3">
                          <div className="flex items-start gap-2">
                            <Trophy className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div>
                              <p className="font-medium">Sport</p>
                              <p className="text-sm text-slate-600">{sportsActivity.sport}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div>
                              <p className="font-medium">Experience Level</p>
                              <p className="text-sm text-slate-600">{sportsActivity.level}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-100 shadow-lg mt-6">
                    <CardHeader>
                      <CardTitle>Upcoming Game</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-lg text-blue-700">
                              vs. {sportsActivity.stats.nextGame.opponent}
                            </h3>
                            <div className="mt-2 space-y-1">
                              <div className="flex items-center gap-2 text-slate-600">
                                <Calendar className="h-4 w-4 text-blue-600" />
                                <span>{sportsActivity.stats.nextGame.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-slate-600">
                                <MapPin className="h-4 w-4 text-blue-600" />
                                <span>{sportsActivity.stats.nextGame.location}</span>
                              </div>
                            </div>
                          </div>
                          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                            <Calendar className="h-4 w-4 mr-2" /> Add to Calendar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="border-blue-100 shadow-lg">
                    <CardHeader>
                      <CardTitle>Team Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center gap-6 mb-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600">{sportsActivity.stats.wins}</div>
                          <div className="text-sm text-slate-600">Wins</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-red-600">{sportsActivity.stats.losses}</div>
                          <div className="text-sm text-slate-600">Losses</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Win Rate</span>
                            <span className="text-sm font-medium">
                              {Math.round(
                                (sportsActivity.stats.wins /
                                  (sportsActivity.stats.wins + sportsActivity.stats.losses)) *
                                  100,
                              )}
                              %
                            </span>
                          </div>
                          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                              style={{
                                width: `${Math.round((sportsActivity.stats.wins / (sportsActivity.stats.wins + sportsActivity.stats.losses)) * 100)}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 p-3 rounded-lg bg-blue-50 text-center">
                        <p className="font-medium">Current Standing</p>
                        <p className="text-lg font-bold text-blue-700">{sportsActivity.stats.standings}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-100 shadow-lg mt-6">
                    <CardHeader>
                      <CardTitle>Quick Links</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          className="w-full justify-start border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <FileText className="h-4 w-4 mr-2" /> League Rules
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Calendar className="h-4 w-4 mr-2" /> Full Season Schedule
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Share2 className="h-4 w-4 mr-2" /> Share Team
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule" className="mt-6">
              <Card className="border-blue-100 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Team Schedule</CardTitle>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Plus className="h-4 w-4 mr-2" /> Add Event
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sportsActivity.schedule.map((event, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border border-blue-100 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            className={
                              event.type === "Game"
                                ? "bg-orange-100 text-orange-600 hover:bg-orange-200"
                                : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                            }
                          >
                            {event.type}
                          </Badge>
                          {event.type === "Game" && <span className="font-medium">vs. {event.opponent}</span>}
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2 text-slate-600">
                            <Calendar className="h-4 w-4 text-blue-600" />
                            <span>{event.day}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <Clock className="h-4 w-4 text-blue-600" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <MapPin className="h-4 w-4 text-blue-600" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div className="mt-3 flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <Calendar className="h-3 w-3 mr-1" /> Add to Calendar
                          </Button>
                          {event.type === "Game" && (
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                            >
                              <CheckCircle className="h-3 w-3 mr-1" /> RSVP
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Announcements Tab */}
            <TabsContent value="announcements" className="mt-6">
              <Card className="border-blue-100 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Team Announcements</CardTitle>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Plus className="h-4 w-4 mr-2" /> New Announcement
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {sportsActivity.announcements.map((announcement) => (
                      <div
                        key={announcement.id}
                        className={`border rounded-lg p-4 ${
                          announcement.urgent ? "border-orange-200 bg-orange-50" : "border-blue-100"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                              {getInitials(announcement.author)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <p className="font-medium">{announcement.author}</p>
                                {announcement.urgent && (
                                  <Badge className="bg-orange-100 text-orange-600">
                                    <AlertTriangle className="h-3 w-3 mr-1" /> Important
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-slate-500">{announcement.time}</p>
                            </div>
                            <p className="mt-2 text-slate-600">{announcement.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <form onSubmit={handleSendMessage}>
                      <div className="flex gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                            JD
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <Textarea
                            placeholder="Write your announcement..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className="min-h-[80px] border-blue-200 focus-visible:ring-blue-500"
                          />
                          <div className="mt-2 flex justify-end gap-2">
                            <Button
                              type="submit"
                              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                            >
                              <Send className="h-4 w-4 mr-2" /> Post Announcement
                            </Button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Team Members Tab */}
            <TabsContent value="members" className="mt-6">
              <Card className="border-blue-100 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Team Roster</CardTitle>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Plus className="h-4 w-4 mr-2" /> Add Player
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sportsActivity.members.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center justify-between p-4 rounded-lg border border-blue-100 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback
                              className={`bg-gradient-to-r text-white ${getPositionColor(member.position)}`}
                            >
                              {getInitials(member.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{member.name}</p>
                              {member.role === "Captain" && (
                                <Badge className="bg-blue-100 text-blue-600">Captain</Badge>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-2 mt-1">
                              <p className="text-sm text-slate-500">{member.position}</p>
                              <span className="text-sm text-slate-400">•</span>
                              <p className="text-sm text-slate-500">{member.major}</p>
                              <span className="text-sm text-slate-400">•</span>
                              <p className="text-sm text-slate-500">{member.year}</p>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Mail className="h-4 w-4 mr-2" /> Message
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

