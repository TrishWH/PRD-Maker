"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import CreatePRD from "@/components/create-prd"
import ImprovePRD from "@/components/improve-prd"

const rotatingWords = ["create", "build", "ship", "launch", "design"]

type Page = "home" | "create" | "improve"

export default function HomePage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [currentPage, setCurrentPage] = useState<Page>("home")

  // Rotate words every 2 seconds using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsAnimating(false)
      }, 250)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Handle navigation without changing URL
  const navigateTo = (page: Page) => {
    setCurrentPage(page)
    // Scroll to top when navigating
    window.scrollTo(0, 0)
  }

  // Render the appropriate page based on state
  if (currentPage === "create") {
    return <CreatePRD onBack={() => navigateTo("home")} />
  }

  if (currentPage === "improve") {
    return <ImprovePRD onBack={() => navigateTo("home")} />
  }

  // Home page
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <span className="text-7xl md:text-9xl relative z-10 animate-bounce" role="img" aria-label="rocket">
              🚀
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4 font-playfair">
            What will you{" "}
            <span
              className={`bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent font-bold transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {rotatingWords[currentWordIndex]}
            </span>{" "}
            today?
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Turn your wildest product ideas into professional PRDs ✨
          </p>
        </header>

        {/* Main Cards */}
        <main>
          <Card className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden border-0 hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100/50">
                {/* Create PRD Card */}
                <button onClick={() => navigateTo("create")} className="block group w-full text-left">
                  <div className="flex items-center p-8 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors font-playfair">
                        I want to create a PRD
                      </h3>
                      <p className="text-gray-600 font-medium">Generate a fire 🔥 Product Requirements Document</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </button>

                {/* Improve PRD Card */}
                <button onClick={() => navigateTo("improve")} className="block group w-full text-left">
                  <div className="flex items-center p-8 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">💪</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors font-playfair">
                        I want to level up my PRD
                      </h3>
                      <p className="text-gray-600 font-medium">Get AI-powered feedback that actually slaps 💯</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </button>

                {/* Build Prototype Card */}
                <a
                  href="https://morphi.azurewebsites.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center p-8 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 cursor-pointer">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors font-playfair">
                        I want to build a prototype
                      </h3>
                      <p className="text-gray-600 font-medium">Vibe code your idea with Wigit ⚡</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Fun stats or social proof */}
          <div className="mt-12 text-center">
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span className="text-lg">⚡</span>
                <span>Generate PRDs in seconds</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">🎯</span>
                <span>AI-powered insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">🔥</span>
                <span>Industry-standard templates</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
