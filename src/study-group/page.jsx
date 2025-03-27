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
  BookOpen,
  Calendar,
  Clock,
  MapPin,
  MessageSquare,
  FilePlus,
  FileText,
  Share2,
  ArrowLeft,
  Send,
  ThumbsUp,
  Plus,
  Mail,
} from "lucide-react"

// data for a study group
const studyGroup = {
  id: "calculus-101",
  name: "Calculus Study Group",
  description:
    "A collaborative group focused on mastering Calculus I & II concepts through regular study sessions and problem-solving workshops.",
  course: "MATH 241: Calculus I",
  professor: "Dr. Williams",
  schedule: [
    { day: "Monday", time: "4:00 PM - 6:00 PM", location: "Library, Room 204" },
    { day: "Thursday", time: "5:00 PM - 7:00 PM", location: "Math Building, Room 110" },
  ],
  members: [
    { id: 1, name: "Mayank", role: "Admin", avatar: null, major: "Computer Science", year: "Junior" },
    { id: 2, name: "Anchal", role: "Member", avatar: null, major: "Biology", year: "Sophomore" },
    { id: 3, name: "Bhuvesh", role: "Member", avatar: null, major: "Engineering", year: "Junior" },
    { id: 4, name: "Akhil", role: "Member", avatar: null, major: "Mathematics", year: "Senior" },
    { id: 5, name: "Raghav", role: "Member", avatar: null, major: "Physics", year: "Sophomore" },
  ],
  resources: [
    { id: 1, name: "Calculus Cheat Sheet", type: "PDF", size: "2.4 MB", author: "Amit", date: "Oct 12, 2023" },
    { id: 2, name: "Lecture Notes - Week 1", type: "DOCX", size: "1.1 MB", author: "Zeenat", date: "Oct 5, 2023" },
    { id: 3, name: "Practice Problems", type: "PDF", size: "3.7 MB", author: "Roshan", date: "Sep 28, 2023" },
  ],
  discussions: [
    {
      id: 1,
      author: "Sunny",
      avatar: null,
      time: "Yesterday at 5:30 PM",
      content:
        "Is anyone struggling with the integration by parts concept? I'd love to review it during our next session.",
      likes: 4,
      replies: 2,
    },
    {
      id: 2,
      author: "Lee",
      avatar: null,
      time: "2 days ago",
      content:
        "I found this great YouTube channel that explains the chain rule really well. Check it out: https://youtube.com/example",
      likes: 6,
      replies: 3,
    },
  ],
  tags: ["Calculus", "Math", "STEM", "Exam Prep"],
}

export default function StudyGroupPage({ params }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [newMessage, setNewMessage] = useState("")

  const handleBack = () => {
    router.back()
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    //send this to your backend
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
              <Plus className="h-4 w-4 mr-2" /> Invite Peers
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
                  {studyGroup.name}
                </h1>
                <p className="text-slate-600 mt-1">{studyGroup.course}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {studyGroup.tags.map((tag) => (
                  <Badge key={tag} className="bg-blue-100 text-blue-600 hover:bg-blue-200">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center mt-4 gap-2">
              <div className="flex -space-x-2">
                {studyGroup.members.slice(0, 4).map((member) => (
                  <Avatar key={member.id} className="border-2 border-white">
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                ))}
                {studyGroup.members.length > 4 && (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-50 text-xs font-medium text-blue-600">
                    +{studyGroup.members.length - 4}
                  </div>
                )}
              </div>
              <span className="text-sm text-slate-600">{studyGroup.members.length} members</span>
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
                value="resources"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
              >
                Resources
              </TabsTrigger>
              <TabsTrigger
                value="discussion"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
              >
                Discussion
              </TabsTrigger>
              <TabsTrigger
                value="members"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:text-blue-600"
              >
                Members
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6 mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card className="border-blue-100 shadow-lg">
                    <CardHeader>
                      <CardTitle>About this Study Group</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{studyGroup.description}</p>

                      <div className="mt-6">
                        <h3 className="font-semibold text-lg">Course Information</h3>
                        <div className="grid md:grid-cols-2 gap-4 mt-3">
                          <div className="flex items-start gap-2">
                            <BookOpen className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div>
                              <p className="font-medium">Course</p>
                              <p className="text-sm text-slate-600">{studyGroup.course}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Users className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div>
                              <p className="font-medium">Professor</p>
                              <p className="text-sm text-slate-600">{studyGroup.professor}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-100 shadow-lg mt-6">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex gap-3 pb-4 border-b border-blue-50">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                              {getInitials(studyGroup.members[3].name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p>
                              <span className="font-medium">{studyGroup.members[3].name}</span>{" "}
                              <span className="text-slate-600">uploaded new practice problems</span>
                            </p>
                            <p className="text-xs text-slate-500">Yesterday at 3:45 PM</p>
                          </div>
                        </div>

                        <div className="flex gap-3 pb-4 border-b border-blue-50">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                              {getInitials(studyGroup.members[1].name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p>
                              <span className="font-medium">{studyGroup.members[1].name}</span>{" "}
                              <span className="text-slate-600">started a new discussion thread</span>
                            </p>
                            <p className="text-xs text-slate-500">2 days ago</p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                              {getInitials(studyGroup.members[0].name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p>
                              <span className="font-medium">{studyGroup.members[0].name}</span>{" "}
                              <span className="text-slate-600">scheduled a new study session</span>
                            </p>
                            <p className="text-xs text-slate-500">3 days ago</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="border-blue-100 shadow-lg">
                    <CardHeader>
                      <CardTitle>Schedule</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {studyGroup.schedule.map((session, index) => (
                          <div
                            key={index}
                            className="p-3 rounded-lg border border-blue-100 bg-blue-50 hover:bg-blue-100 transition-colors"
                          >
                            <div className="flex items-center gap-2 text-blue-600">
                              <Calendar className="h-4 w-4" />
                              <span className="font-medium">{session.day}</span>
                            </div>
                            <div className="mt-2 pl-6 space-y-1 text-sm">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-slate-500" />
                                <span>{session.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-slate-500" />
                                <span>{session.location}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <Plus className="h-4 w-4 mr-2" /> Add Study Session
                      </Button>
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
                          <FileText className="h-4 w-4 mr-2" /> View Course Syllabus
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Mail className="h-4 w-4 mr-2" /> Contact Professor
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Share2 className="h-4 w-4 mr-2" /> Share Group
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="mt-6">
              <Card className="border-blue-100 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Study Materials</CardTitle>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <FilePlus className="h-4 w-4 mr-2" /> Upload Resource
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studyGroup.resources.map((resource) => (
                      <div
                        key={resource.id}
                        className="flex items-center justify-between p-4 rounded-lg border border-blue-100 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">{resource.name}</p>
                            <div className="flex gap-3 text-xs text-slate-500">
                              <span>
                                {resource.type} • {resource.size}
                              </span>
                              <span>By {resource.author}</span>
                              <span>Added {resource.date}</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Discussion Tab */}
            <TabsContent value="discussion" className="mt-6">
              <Card className="border-blue-100 shadow-lg">
                <CardHeader>
                  <CardTitle>Group Discussions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {studyGroup.discussions.map((discussion) => (
                      <div key={discussion.id} className="border border-blue-100 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                              {getInitials(discussion.author)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">{discussion.author}</p>
                              <p className="text-xs text-slate-500">{discussion.time}</p>
                            </div>
                            <p className="mt-2 text-slate-600">{discussion.content}</p>
                            <div className="mt-3 flex items-center gap-4">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-auto p-1 text-slate-500 hover:text-blue-600"
                              >
                                <ThumbsUp className="h-4 w-4 mr-1" /> {discussion.likes}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-auto p-1 text-slate-500 hover:text-blue-600"
                              >
                                <MessageSquare className="h-4 w-4 mr-1" /> {discussion.replies}
                              </Button>
                            </div>
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
                            placeholder="Write your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className="min-h-[80px] border-blue-200 focus-visible:ring-blue-500"
                          />
                          <div className="mt-2 flex justify-end">
                            <Button
                              type="submit"
                              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                            >
                              <Send className="h-4 w-4 mr-2" /> Send Message
                            </Button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Members Tab */}
            <TabsContent value="members" className="mt-6">
              <Card className="border-blue-100 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Group Members</CardTitle>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Plus className="h-4 w-4 mr-2" /> Invite Members
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studyGroup.members.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center justify-between p-4 rounded-lg border border-blue-100 hover:bg-blue-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback
                              className={`text-white ${
                                member.role === "Admin"
                                  ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                                  : "bg-gradient-to-r from-slate-500 to-slate-600"
                              }`}
                            >
                              {getInitials(member.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{member.name}</p>
                              {member.role === "Admin" && <Badge className="bg-blue-100 text-blue-600">Admin</Badge>}
                            </div>
                            <p className="text-sm text-slate-500">
                              {member.major} • {member.year}
                            </p>
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

