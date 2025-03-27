import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Trophy, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-1.5 rounded-lg">
              <Users className="h-5 w-5" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              PeerConnectHub
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline" className="border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600 w-fit">
                  <span className="animate-pulse mr-1">●</span> Now Launching at 50+ Universities
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Connect with peers for study and sports
                  </h1>
                  <p className="max-w-[600px] text-slate-600 md:text-xl">
                    PeerConnectHub helps college students find study partners and sports teammates on campus. Build
                    connections, improve your grades, and stay active.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button
                      size="lg"
                      className="gap-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-200 transform hover:-translate-y-1"
                    >
                      Get Started <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex -space-x-3">
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-pink-500 to-rose-500"></div>
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-green-500 to-emerald-500"></div>
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  </div>
                  <div className="text-sm text-slate-600">
                    Join <span className="font-bold text-blue-600">5,000+</span> students already connected
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-2xl border border-blue-100 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/placeholder.svg?height=550&width=550"
                    width={550}
                    height={550}
                    alt="Students collaborating"
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm text-indigo-600">
                <span className="font-medium">Powerful Features</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Features You'll Love
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to connect with peers and succeed in college
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Study Groups</h3>
                  <p className="text-slate-600">
                    Create or join study groups for specific courses, subjects, or projects. Schedule sessions and track
                    progress together.
                  </p>
                </div>
                <div className="pt-2">
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Find groups by course or subject
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Schedule study sessions
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Share notes and resources
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Sports Activities</h3>
                  <p className="text-slate-600">
                    Find teammates for casual games, intramural sports, or workout partners. Organize events and reserve
                    campus facilities.
                  </p>
                </div>
                <div className="pt-2">
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Join teams for any sport
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Find workout partners
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Organize tournaments
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Peer Matching</h3>
                  <p className="text-slate-600">
                    Our smart algorithm matches you with compatible peers based on your courses, interests, schedule,
                    and goals.
                  </p>
                </div>
                <div className="pt-2">
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      AI-powered matching
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Find peers with similar goals
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Connect based on schedules
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50 transform -skew-y-6"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600">
                <span className="font-medium">Simple Process</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Getting started with PeerConnectHub is easy
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-bold shadow-lg mx-auto">
                  1
                </div>
                <div className="absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 hidden lg:block"></div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold mt-4">Create Your Profile</h3>
                  <p className="text-slate-600">
                    Sign up and build your profile with your courses, interests, schedule, and goals.
                  </p>
                </div>
                <div className="bg-white rounded-xl border border-blue-100 p-4 shadow-lg hover:shadow-xl transition-all duration-300 mt-4">
                  <div className="aspect-video bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      width={300}
                      height={200}
                      alt="Create profile"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-bold shadow-lg mx-auto">
                  2
                </div>
                <div className="absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 hidden lg:block"></div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold mt-4">Find or Create Groups</h3>
                  <p className="text-slate-600">
                    Browse existing study groups and sports activities or create your own to match your needs.
                  </p>
                </div>
                <div className="bg-white rounded-xl border border-blue-100 p-4 shadow-lg hover:shadow-xl transition-all duration-300 mt-4">
                  <div className="aspect-video bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      width={300}
                      height={200}
                      alt="Find groups"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold shadow-lg mx-auto">
                  3
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold mt-4">Connect and Collaborate</h3>
                  <p className="text-slate-600">
                    Meet up with your peers, study together, play sports, and build lasting connections.
                  </p>
                </div>
                <div className="bg-white rounded-xl border border-blue-100 p-4 shadow-lg hover:shadow-xl transition-all duration-300 mt-4">
                  <div className="aspect-video bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      width={300}
                      height={200}
                      alt="Connect"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm text-indigo-600">
                <span className="font-medium">Success Stories</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Student Success Stories
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how PeerConnectHub has helped students across campus
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500"></div>
                  <div>
                    <p className="font-medium">Mayank</p>
                    <p className="text-sm text-slate-600">Biology Major</p>
                  </div>
                  <div className="ml-auto flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 italic">
                  "I was struggling with Organic Chemistry until I found a study group through PeerConnectHub. We meet
                  twice a week and my grades have improved significantly! The platform made it so easy to find peers who
                  were taking the same challenging courses."
                </p>
                <div className="pt-4 border-t border-blue-50">
                  <div className="flex items-center text-sm text-blue-600">
                    <span className="font-medium">Improved GPA by 1.8 points</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  <div>
                    <p className="font-medium">Anchal</p>
                    <p className="text-sm text-slate-600">Computer Science Major</p>
                  </div>
                  <div className="ml-auto flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 italic">
                  "As a transfer student, I didn't know many people on campus. Through PeerConnectHub, I joined an
                  intramural basketball team and made some of my closest friends. The platform helped me feel at home on
                  campus almost immediately."
                </p>
                <div className="pt-4 border-t border-blue-50">
                  <div className="flex items-center text-sm text-blue-600">
                    <span className="font-medium">Made 12+ new friends in first semester</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border border-blue-100 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                  <div>
                    <p className="font-medium">Bhuvesh</p>
                    <p className="text-sm text-slate-600">Psychology Major</p>
                  </div>
                  <div className="ml-auto flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 italic">
                  "PeerConnectHub completely transformed my college experience. I created a study group for my Research
                  Methods class, and we've been meeting regularly for over a year now. Not only did we all ace the
                  course, but we've also started collaborating on research projects together. The connections I've made
                  through this platform will last well beyond graduation."
                </p>
                <div className="pt-4 border-t border-blue-50">
                  <div className="flex items-center text-sm text-blue-600">
                    <span className="font-medium">
                      Secured research assistant position through connections made on PeerConnectHub
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to connect with peers?</h2>
              <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of students already using PeerConnectHub to succeed in college.
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 transition-all"
                >
                  Log In
                </Button>
              </Link>
            </div>
            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold">5,000+</div>
                <div className="text-blue-100">Active Users</div>
              </div>
              {/* <div className="flex flex-col items-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-blue-100">Universities</div>
              </div> */}
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold">1,200+</div>
                <div className="text-blue-100">Study Groups</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-1.5 rounded-lg">
                <Users className="h-5 w-5" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                PeerConnectHub
              </span>
            </div>
            <p className="text-sm text-slate-600">
              Connecting college students for academic success and active lifestyles.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-slate-600 hover:text-blue-600 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Campus Partners
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-4 border-t py-6 md:flex-row md:items-center md:gap-6">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} PeerConnectHub. All rights reserved.</p>
          <div className="flex gap-4 md:ml-auto">
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-xs">
              Privacy
            </a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-xs">
              Terms
            </a>
            <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-xs">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

