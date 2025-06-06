"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Download, Wand2, Sparkles } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PRDData {
  productName: string
  productType: string
  targetAudience: string
  problemStatement: string
  objectives: string
  keyFeatures: string
  timeline: string
}

interface CreatePRDProps {
  onBack: () => void
}

export default function CreatePRD({ onBack }: CreatePRDProps) {
  const [formData, setFormData] = useState<PRDData>({
    productName: "",
    productType: "",
    targetAudience: "",
    problemStatement: "",
    objectives: "",
    keyFeatures: "",
    timeline: "",
  })
  const [generatedPRD, setGeneratedPRD] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [productIdea, setProductIdea] = useState("")
  const [isProcessingIdea, setIsProcessingIdea] = useState(false)

  const handleInputChange = (field: keyof PRDData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const processProductIdea = async () => {
    if (!productIdea.trim()) return

    setIsProcessingIdea(true)

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simulate AI extracting information from the product idea
    const extractedData = extractDataFromIdea(productIdea)

    // Update form with extracted data
    setFormData({
      productName: extractedData.productName,
      productType: extractedData.productType,
      targetAudience: extractedData.targetAudience,
      problemStatement: extractedData.problemStatement,
      objectives: extractedData.objectives,
      keyFeatures: extractedData.keyFeatures,
      timeline: extractedData.timeline,
    })

    setIsProcessingIdea(false)
  }

  // Function to simulate AI extraction of data from product idea
  const extractDataFromIdea = (idea: string) => {
    const words = idea.toLowerCase().split(" ")

    let productType = "Web Application"
    if (words.includes("mobile") || words.includes("app") || words.includes("phone")) {
      productType = "Mobile App"
    } else if (words.includes("desktop") || words.includes("software")) {
      productType = "Desktop Software"
    } else if (words.includes("api") || words.includes("service")) {
      productType = "API/Service"
    } else if (words.includes("saas")) {
      productType = "SaaS Platform"
    }

    const nameWords = idea.split(" ").slice(0, 3)
    const productName = nameWords
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replace(/[^\w\s]/gi, "")

    const featureKeywords = [
      "track",
      "manage",
      "analyze",
      "collaborate",
      "automate",
      "integrate",
      "monitor",
      "report",
      "secure",
      "optimize",
    ]

    const features = featureKeywords
      .filter((keyword) => words.includes(keyword))
      .map((keyword) => {
        switch (keyword) {
          case "track":
            return "Activity tracking and monitoring"
          case "manage":
            return "Comprehensive management dashboard"
          case "analyze":
            return "Data analysis and insights"
          case "collaborate":
            return "Team collaboration features"
          case "automate":
            return "Process automation"
          case "integrate":
            return "Third-party integrations"
          case "monitor":
            return "Real-time monitoring"
          case "report":
            return "Custom reporting and analytics"
          case "secure":
            return "Enterprise-grade security"
          case "optimize":
            return "Performance optimization"
          default:
            return keyword
        }
      })

    if (features.length === 0) {
      features.push(
        "User authentication and management",
        "Intuitive dashboard interface",
        "Data visualization and reporting",
      )
    }

    let audience = "Professionals and businesses"
    if (words.includes("consumer") || words.includes("individual")) {
      audience = "Individual consumers"
    } else if (words.includes("enterprise") || words.includes("corporate")) {
      audience = "Enterprise organizations"
    } else if (words.includes("small") && words.includes("business")) {
      audience = "Small business owners"
    }

    const problemStatement = `Users currently lack an effective solution to ${
      words.includes("track")
        ? "track and monitor"
        : words.includes("manage")
          ? "manage and organize"
          : words.includes("analyze")
            ? "analyze and understand"
            : "efficiently handle"
    } their ${
      words.includes("data")
        ? "data"
        : words.includes("process")
          ? "processes"
          : words.includes("task")
            ? "tasks"
            : "workflow"
    }. This leads to ${
      words.includes("time")
        ? "wasted time"
        : words.includes("cost")
          ? "increased costs"
          : words.includes("error")
            ? "frequent errors"
            : "reduced productivity"
    } and ${
      words.includes("frustration")
        ? "user frustration"
        : words.includes("inefficiency")
          ? "operational inefficiency"
          : "missed opportunities"
    }.`

    const objectives = `1. Provide ${audience} with a ${productType.toLowerCase()} that simplifies ${
      words.includes("track")
        ? "tracking"
        : words.includes("manage")
          ? "management"
          : words.includes("analyze")
            ? "analysis"
            : "handling"
    } of ${
      words.includes("data")
        ? "critical data"
        : words.includes("process")
          ? "key processes"
          : words.includes("task")
            ? "important tasks"
            : "daily workflows"
    }.\n2. Improve ${
      words.includes("efficiency") ? "efficiency" : words.includes("productivity") ? "productivity" : "effectiveness"
    } by at least 30% compared to existing solutions.\n3. Deliver a user-friendly experience that requires minimal training.`

    let timeline = "2-3 months"
    const complexityIndicators = ["enterprise", "integrate", "complex", "ai", "machine learning"]
    if (complexityIndicators.some((indicator) => words.includes(indicator))) {
      timeline = "6-12 months"
    } else if (words.length > 30) {
      timeline = "3-6 months"
    }

    return {
      productName,
      productType,
      targetAudience: audience,
      problemStatement,
      objectives,
      keyFeatures: features.join("\n"),
      timeline,
    }
  }

  const generatePRD = async () => {
    setIsGenerating(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const currentDate = new Date().toLocaleDateString()
    const author = "PRD Generator"

    const prd = `# ${formData.productName} Product Requirements Document (PRD)

**Author:** ${author}  
**Date:** ${currentDate}  
**Status:** Draft

---

## 1. Summary

**Objective:**  
${formData.problemStatement || `Develop ${formData.productName} to address key user needs in the ${formData.productType.toLowerCase()} space.`}

**Key Goals:**
- **Primary Outcome:** Deliver a ${formData.productType.toLowerCase()} that solves core user problems efficiently
- **User Experience:** Improve user satisfaction and engagement through intuitive design
- **Business Impact:** Achieve market penetration and sustainable growth within ${formData.timeline}

---

## 2. Context or State of the Union

**What is the current state?**  
${formData.targetAudience} currently face challenges that require a comprehensive ${formData.productType.toLowerCase()} solution. The market shows demand for innovative approaches to address these pain points.

**Relevant Data/Insights:**
- **User Behavior:** Target users are actively seeking solutions in this space
- **Market Opportunity:** Growing demand for ${formData.productType.toLowerCase()} solutions
- **Competitive Landscape:** Opportunity exists for differentiated approach

---

## 3. Problem

**Core Problems Being Addressed:**

${formData.problemStatement}

**Why is this important now?**
- **User Impact:** Current solutions don't adequately serve ${formData.targetAudience}
- **Market Timing:** Technology and user readiness align for this solution
- **Strategic Alignment:** Supports broader business objectives and growth strategy

---

## 4. Users and Jobs-to-be-Done (JTBDs)

**Primary Users:** ${formData.targetAudience}

**Key Use Cases:**
${formData.keyFeatures
  .split("\n")
  .map((feature) => feature.trim())
  .filter(Boolean)
  .map((feature, index) => `- **Use Case ${index + 1}:** ${feature}`)
  .join("\n")}

**User Journey:**
1. **Discovery:** User identifies need for solution
2. **Evaluation:** User assesses available options
3. **Onboarding:** User begins using the product
4. **Value Realization:** User achieves desired outcomes
5. **Advocacy:** User recommends solution to others

---

## 5. Hypothesis and Solution

**Hypothesis:**  
By providing ${formData.targetAudience} with ${formData.productName}, we can significantly improve their ability to ${formData.objectives || "achieve their goals efficiently"}.

**Proposed Solution:**

**Key Features:**
${formData.keyFeatures
  .split("\n")
  .map((feature) => feature.trim())
  .filter(Boolean)
  .map((feature) => `- ${feature}`)
  .join("\n")}

**Key Components:**
- **Frontend:** User-facing interface optimized for ${formData.targetAudience}
- **Backend:** Scalable architecture supporting core functionality
- **Integration:** APIs for third-party tool connectivity
- **Security:** Enterprise-grade security and privacy controls

---

## 6. Product Requirements

### Functional Requirements
- Core feature implementation as outlined above
- User authentication and authorization
- Data management and storage
- Real-time updates and notifications
- Cross-platform compatibility

### Non-Functional Requirements
- **Performance:** Response time < 2 seconds for core actions
- **Scalability:** Support for 10,000+ concurrent users
- **Availability:** 99.9% uptime SLA
- **Security:** SOC 2 compliance and data encryption
- **Usability:** Intuitive interface requiring minimal training

### Technical Requirements
- **Platform:** ${
      formData.productType === "Web Application"
        ? "Web-based (React/Next.js)"
        : formData.productType === "Mobile App"
          ? "Native mobile (iOS/Android)"
          : formData.productType === "Desktop Software"
            ? "Cross-platform desktop"
            : "Cloud-based service architecture"
    }
- **Database:** Scalable database solution (PostgreSQL/MongoDB)
- **APIs:** RESTful API design with comprehensive documentation
- **Monitoring:** Application performance monitoring and logging

---

## 7. Open Questions

- **Integration Dependencies:** What third-party services require integration?
- **Compliance Requirements:** Are there industry-specific regulations to consider?
- **Scalability Thresholds:** At what user volume do we need infrastructure scaling?
- **Localization:** Will international markets require localized versions?

---

## 8. Success Metrics

### Primary KPIs
- **User Adoption:** 1,000+ active users within first 3 months
- **User Engagement:** 70%+ monthly active user retention
- **User Satisfaction:** 4.5+ star average rating
- **Performance:** 99.9% uptime achievement

### Secondary Metrics
- **Feature Usage:** 80%+ of users engage with core features
- **Support Efficiency:** <24 hour average response time
- **Business Impact:** Measurable ROI within 6 months

---

## 9. Experiment Plan

**Hypothesis:** Users will adopt the core features quickly and show high engagement

**Control Group:** Current user behavior baseline  
**Test Group:** Users with access to new ${formData.productName} features  
**Success Criteria:** 25%+ improvement in key user outcomes

**Rollout Strategy:**
- **Phase 1:** Internal testing and feedback (Week 1-2)
- **Phase 2:** Beta testing with select users (Week 3-4)
- **Phase 3:** Gradual rollout to all users (Week 5-6)

---

## 10. Timeline

**Development Timeline:** ${formData.timeline}

**Key Milestones:**
- **Week 1-2:** Requirements finalization and technical design
- **Week 3-6:** Core feature development and testing
- **Week 7-8:** Integration testing and security review
- **Week 9-10:** Beta testing and user feedback incorporation
- **Week 11-12:** Final testing, documentation, and launch preparation

---

## 11. Risks & Mitigations

### Technical Risks
- **Risk:** Integration complexity with third-party services
- **Mitigation:** Early prototyping and technical validation
- **Probability:** Medium | **Impact:** High

### Market Risks
- **Risk:** Competitive response or market changes
- **Mitigation:** Continuous market research and agile development
- **Probability:** Low | **Impact:** Medium

### Resource Risks
- **Risk:** Timeline or budget constraints
- **Mitigation:** Phased development approach with MVP focus
- **Probability:** Medium | **Impact:** Medium

### Security & Privacy Risks
- **Risk:** Data breaches or privacy violations
- **Mitigation:** Security-first design and regular audits
- **Probability:** Low | **Impact:** High

---

## 12. Security Considerations

### Data Protection
- **Encryption:** All data encrypted at rest and in transit
- **Access Control:** Role-based permissions and least-privilege principles
- **Audit Trail:** Comprehensive logging of all user actions

### Privacy Compliance
- **GDPR/CCPA:** Full compliance with data protection regulations
- **User Consent:** Clear opt-in/opt-out mechanisms
- **Data Retention:** Defined policies for data lifecycle management

### Potential Abuse Cases
- **Insider Threats:** Monitoring and access controls for internal users
- **Data Exfiltration:** Alerts for unusual data access patterns
- **Social Engineering:** User education and verification processes

---

## 13. Appendices/References

### Supporting Documents
- User research findings and personas
- Technical architecture diagrams
- Competitive analysis report
- Security assessment and compliance checklist

---

*This PRD was generated on ${currentDate} using structured requirements analysis and industry best practices.*`

    setGeneratedPRD(prd)
    setIsGenerating(false)
  }

  const downloadPRD = () => {
    const element = document.createElement("a")
    const file = new Blob([generatedPRD], { type: "text/markdown" })
    element.href = URL.createObjectURL(file)
    element.download = `${formData.productName.replace(/\s+/g, "_")}_PRD.md`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center text-gray-600 hover:text-purple-600 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-playfair">
              Let's create something{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                amazing
              </span>{" "}
              ✨
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Turn your brilliant idea into a professional PRD that'll make stakeholders say "wow" 🤩
            </p>
          </div>
        </div>

        <Tabs defaultValue="idea" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 bg-white/80 backdrop-blur-sm">
            <TabsTrigger
              value="idea"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
            >
              ✨ Start with an Idea
            </TabsTrigger>
            <TabsTrigger
              value="form"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
            >
              📝 Fill Form Manually
            </TabsTrigger>
          </TabsList>

          <TabsContent value="idea">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-playfair">
                  Describe Your Product Idea 💡
                </CardTitle>
                <CardDescription className="text-base">
                  Just tell us what you're thinking, and we'll work our magic to create the perfect PRD structure for
                  you!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Textarea
                    value={productIdea}
                    onChange={(e) => setProductIdea(e.target.value)}
                    placeholder="Example: A mobile app that helps Gen Z track their carbon footprint through gamification, social challenges, and rewards for sustainable choices 🌱"
                    rows={5}
                    className="mb-4 border-2 border-purple-100 focus:border-purple-400 rounded-xl"
                  />
                  <Button
                    onClick={processProductIdea}
                    disabled={isProcessingIdea || !productIdea.trim()}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isProcessingIdea ? (
                      <>
                        <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                        Working our magic...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Generate PRD Details ✨
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="form">
            {/* Form content remains empty as we'll show the form below regardless of tab */}
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-playfair">
                Product Information 📋
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="productName" className="text-sm font-semibold text-gray-700">
                  Product Name
                </Label>
                <Input
                  id="productName"
                  value={formData.productName}
                  onChange={(e) => handleInputChange("productName", e.target.value)}
                  placeholder="e.g., EcoTracker Pro"
                  className="border-2 border-gray-100 focus:border-blue-400 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="productType" className="text-sm font-semibold text-gray-700">
                  Product Type
                </Label>
                <Select value={formData.productType} onValueChange={(value) => handleInputChange("productType", value)}>
                  <SelectTrigger className="border-2 border-gray-100 focus:border-blue-400 rounded-xl">
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Web Application">🌐 Web Application</SelectItem>
                    <SelectItem value="Mobile App">📱 Mobile App</SelectItem>
                    <SelectItem value="Desktop Software">💻 Desktop Software</SelectItem>
                    <SelectItem value="API/Service">⚡ API/Service</SelectItem>
                    <SelectItem value="Hardware Product">🔧 Hardware Product</SelectItem>
                    <SelectItem value="SaaS Platform">☁️ SaaS Platform</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="targetAudience" className="text-sm font-semibold text-gray-700">
                  Target Audience
                </Label>
                <Input
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                  placeholder="e.g., Environmentally conscious Gen Z users"
                  className="border-2 border-gray-100 focus:border-blue-400 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="problemStatement" className="text-sm font-semibold text-gray-700">
                  Problem Statement
                </Label>
                <Textarea
                  id="problemStatement"
                  value={formData.problemStatement}
                  onChange={(e) => handleInputChange("problemStatement", e.target.value)}
                  placeholder="What problem does your product solve?"
                  rows={3}
                  className="border-2 border-gray-100 focus:border-blue-400 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="objectives" className="text-sm font-semibold text-gray-700">
                  Product Objectives
                </Label>
                <Textarea
                  id="objectives"
                  value={formData.objectives}
                  onChange={(e) => handleInputChange("objectives", e.target.value)}
                  placeholder="What are the main goals of this product?"
                  rows={3}
                  className="border-2 border-gray-100 focus:border-blue-400 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="keyFeatures" className="text-sm font-semibold text-gray-700">
                  Key Features (one per line)
                </Label>
                <Textarea
                  id="keyFeatures"
                  value={formData.keyFeatures}
                  onChange={(e) => handleInputChange("keyFeatures", e.target.value)}
                  placeholder="Carbon footprint tracking&#10;Social challenges&#10;Gamification system&#10;Rewards marketplace"
                  rows={4}
                  className="border-2 border-gray-100 focus:border-blue-400 rounded-xl"
                />
              </div>

              <div>
                <Label htmlFor="timeline" className="text-sm font-semibold text-gray-700">
                  Development Timeline
                </Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                  <SelectTrigger className="border-2 border-gray-100 focus:border-blue-400 rounded-xl">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4-6 weeks">⚡ 4-6 weeks</SelectItem>
                    <SelectItem value="2-3 months">🚀 2-3 months</SelectItem>
                    <SelectItem value="3-6 months">📈 3-6 months</SelectItem>
                    <SelectItem value="6-12 months">🏗️ 6-12 months</SelectItem>
                    <SelectItem value="12+ months">🏛️ 12+ months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={generatePRD}
                disabled={
                  isGenerating ||
                  !formData.productName ||
                  !formData.productType ||
                  !formData.targetAudience ||
                  !formData.problemStatement
                }
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isGenerating ? (
                  <>
                    <Wand2 className="w-5 h-5 mr-2 animate-spin" />
                    Creating your PRD magic...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5 mr-2" />
                    Generate PRD 🎉
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated PRD */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border-0">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-playfair">
                  Your PRD ✨
                </CardTitle>
                {generatedPRD && (
                  <Button
                    onClick={downloadPRD}
                    variant="outline"
                    size="sm"
                    className="border-2 border-green-200 hover:bg-green-50 rounded-xl"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download 📥
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {generatedPRD ? (
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 max-h-96 overflow-y-auto border-2 border-gray-200">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">{generatedPRD}</pre>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <div className="mb-4">
                    <span className="text-6xl">🎯</span>
                  </div>
                  <p className="text-lg font-medium">Ready to create something amazing?</p>
                  <p className="text-sm">Fill out the form and let's make magic happen! ✨</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
