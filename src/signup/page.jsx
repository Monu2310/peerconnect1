"use client"

import { useState } from "react"
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Checkbox } from '../components/ui/checkbox'
import { Users, CheckCircle, ArrowLeft, BookOpen, Trophy } from "lucide-react"


export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    major: "",
    year: "",
    interests: {
      study: false,
      sports: false,
    },
    agreeToTerms: false,
  })

  const [errors, setErrors] = useState({})
  const [formStep, setFormStep] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (name, checked) => {
    if (name === "agreeToTerms") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        interests: {
          ...prev.interests,
          [name]: checked,
        },
      }))
    }
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateStep = (step) => {
    const newErrors = {}

    if (step === 0) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"

      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid"
      }

      if (!formData.password) {
        newErrors.password = "Password is required"
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters"
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match"
      }
    } else if (step === 1) {
      if (!formData.major) newErrors.major = "Major is required"
      if (!formData.year) newErrors.year = "Year is required"

      if (!formData.interests.study && !formData.interests.sports) {
        newErrors.interests = "Select at least one interest"
      }

      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = "You must agree to the terms and conditions"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(formStep)) {
      setFormStep((prev) => prev + 1)
    }
  }

  const prevStep = () => {
    setFormStep((prev) => prev - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateStep(formStep)) {
      console.log("Form submitted:", formData)
      router.push("/dashboard")
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-1.5 rounded-lg">
              <Users className="h-5 w-5" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              PeerConnectHub
            </span>
          </Link>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container grid gap-6 px-4 md:gap-10 md:px-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Join PeerConnectHub
              </h1>
              <p className="max-w-[600px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create your account to connect with peers for study groups and sports activities.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${formStep >= 0 ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "bg-blue-100 text-blue-600"}`}
                >
                  {formStep > 0 ? <CheckCircle className="h-5 w-5" /> : <span className="text-sm font-bold">1</span>}
                </div>
                <p className={`font-medium ${formStep >= 0 ? "text-blue-600" : "text-slate-600"}`}>
                  Create your account
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${formStep >= 1 ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "bg-blue-100 text-blue-600"}`}
                >
                  {formStep > 1 ? <CheckCircle className="h-5 w-5" /> : <span className="text-sm font-bold">2</span>}
                </div>
                <p className={`font-medium ${formStep >= 1 ? "text-blue-600" : "text-slate-600"}`}>
                  Set up your profile
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${formStep >= 2 ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" : "bg-blue-100 text-blue-600"}`}
                >
                  <span className="text-sm font-bold">3</span>
                </div>
                <p className={`font-medium ${formStep >= 2 ? "text-blue-600" : "text-slate-600"}`}>Start connecting</p>
              </div>
            </div>
            <div className="hidden lg:block mt-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-blue-100">
                  <div className="aspect-square bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center">
                    <img src="/placeholder.svg?height=400&width=400" alt="Students connecting" className="rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Card className="border-blue-100 shadow-xl">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {formStep === 0 ? "Create Your Account" : "Complete Your Profile"}
                </CardTitle>
                <CardDescription>
                  {formStep === 0
                    ? "Fill out the form below to get started"
                    : "Tell us more about yourself to find the perfect peers"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStep === 0 ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            className={errors.firstName ? "border-red-300 focus-visible:ring-red-300" : ""}
                          />
                          {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                            className={errors.lastName ? "border-red-300 focus-visible:ring-red-300" : ""}
                          />
                          {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john.doe@university.edu"
                          className={errors.email ? "border-red-300 focus-visible:ring-red-300" : ""}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? "border-red-300 focus-visible:ring-red-300" : ""}
                          />
                          {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm Password</Label>
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={errors.confirmPassword ? "border-red-300 focus-visible:ring-red-300" : ""}
                          />
                          {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                        </div>
                      </div>

                      <Button
                        type="button"
                        onClick={nextStep}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all"
                      >
                        Continue
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="major">Major</Label>
                          <Select value={formData.major} onValueChange={(value) => handleSelectChange("major", value)}>
                            <SelectTrigger
                              id="major"
                              className={errors.major ? "border-red-300 focus-visible:ring-red-300" : ""}
                            >
                              <SelectValue placeholder="Select major" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="computer-science">Computer Science</SelectItem>
                              <SelectItem value="biology">Biology</SelectItem>
                              <SelectItem value="business">Business</SelectItem>
                              <SelectItem value="engineering">Engineering</SelectItem>
                              <SelectItem value="psychology">Psychology</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.major && <p className="text-sm text-red-500">{errors.major}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="year">Year</Label>
                          <Select value={formData.year} onValueChange={(value) => handleSelectChange("year", value)}>
                            <SelectTrigger
                              id="year"
                              className={errors.year ? "border-red-300 focus-visible:ring-red-300" : ""}
                            >
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="freshman">Freshman</SelectItem>
                              <SelectItem value="sophomore">Sophomore</SelectItem>
                              <SelectItem value="junior">Junior</SelectItem>
                              <SelectItem value="senior">Senior</SelectItem>
                              <SelectItem value="graduate">Graduate</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.year && <p className="text-sm text-red-500">{errors.year}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>I'm interested in:</Label>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <div
                            className={`flex flex-col items-center justify-center p-4 rounded-lg border ${formData.interests.study ? "border-blue-300 bg-blue-50" : "border-slate-200"} hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer`}
                            onClick={() => handleCheckboxChange("study", !formData.interests.study)}
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white mb-2">
                              <BookOpen className="h-5 w-5" />
                            </div>
                            <p className="font-medium">Study Groups</p>
                            <div className="mt-2">
                              <Checkbox
                                id="study"
                                checked={formData.interests.study}
                                onCheckedChange={(checked) => handleCheckboxChange("study", checked)}
                                className="data-[state=checked]:bg-blue-600"
                              />
                            </div>
                          </div>
                          <div
                            className={`flex flex-col items-center justify-center p-4 rounded-lg border ${formData.interests.sports ? "border-blue-300 bg-blue-50" : "border-slate-200"} hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer`}
                            onClick={() => handleCheckboxChange("sports", !formData.interests.sports)}
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white mb-2">
                              <Trophy className="h-5 w-5" />
                            </div>
                            <p className="font-medium">Sports Activities</p>
                            <div className="mt-2">
                              <Checkbox
                                id="sports"
                                checked={formData.interests.sports}
                                onCheckedChange={(checked) => handleCheckboxChange("sports", checked)}
                                className="data-[state=checked]:bg-blue-600"
                              />
                            </div>
                          </div>
                        </div>
                        {errors.interests && <p className="text-sm text-red-500">{errors.interests}</p>}
                      </div>

                      <div className="flex items-center space-x-2 border border-blue-100 p-3 rounded-lg bg-blue-50">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => handleCheckboxChange("agreeToTerms", checked)}
                          className="data-[state=checked]:bg-blue-600"
                        />
                        <Label htmlFor="terms" className="font-normal text-sm">
                          I agree to the{" "}
                          <Link href="#" className="text-blue-600 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                      {errors.agreeToTerms && <p className="text-sm text-red-500">{errors.agreeToTerms}</p>}

                      <div className="flex gap-2">
                        <Button
                          type="button"
                          onClick={prevStep}
                          variant="outline"
                          className="flex-1 border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all"
                        >
                          <ArrowLeft className="h-4 w-4 mr-2" /> Back
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all"
                        >
                          Create Account
                        </Button>
                      </div>
                    </>
                  )}
                </form>
              </CardContent>
              <CardFooter className="flex flex-col items-center gap-2 border-t pt-6">
                <div className="text-sm text-slate-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-600 hover:underline font-medium">
                    Log in
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t bg-white">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} PeerConnectHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

