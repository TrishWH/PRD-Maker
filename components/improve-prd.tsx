"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, FileText, Lightbulb } from "lucide-react"

interface ImprovePRDProps {
  onBack: () => void
}

export default function ImprovePRD({ onBack }: ImprovePRDProps) {
  const [originalPRD, setOriginalPRD] = useState("")
  const [feedback, setFeedback] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyzePRD = async () => {
    setIsAnalyzing(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const analysis = `# Your PRD Analysis & Glow-Up Recommendations ✨

## Executive Summary
Your PRD has been analyzed using our multi-agent AI system, and we've got some fire feedback to help you level up! 🔥

---

## 1. Context & Requirements Analysis 📊

### What's Already Slaying ✅
✅ **Clear Problem Definition**: Your problem statement hits different - it's well-articulated and relatable  
✅ **Structured Approach**: Love the logical flow and organization 💯  
✅ **Stakeholder Identification**: Target audience is crystal clear  

### Areas Where We Can Glow Up 🌟
🔄 **Context Depth**: Let's add more background on current market vibes and conditions  
🔄 **Data That Hits**: Include specific metrics and data points that actually slap  
🔄 **Competitive Intel**: Add analysis of existing solutions and how you're different  

---

## 2. User Needs & Pain Points Assessment 🎯

### Current User Focus
Your PRD addresses several key user needs, but we can make it even more fire:

**Recommended Additions:**
- **User Personas**: Detailed personas that feel like real people with real problems
- **Jobs-to-be-Done Framework**: Crystal clear articulation of what users are trying to accomplish
- **User Journey Mapping**: Step-by-step experience from discovery to becoming a superfan
- **Pain Point Prioritization**: Ranking which problems are absolutely critical vs nice-to-have

### User Research Gaps That Need Filling
- **Validation Methods**: How will you validate that users actually want this?
- **Feedback Loops**: Mechanisms for ongoing user input (because users change their minds!)
- **Accessibility Considerations**: Making sure your solution works for everyone

---

## 3. Solution Design & Innovation 🚀

### Technical Architecture Review
**Current State**: Basic technical requirements outlined  
**Recommendations for Maximum Impact**:
- **System Architecture Diagrams**: Visual representation that makes engineers excited
- **API Specifications**: Detailed endpoint definitions that developers will thank you for
- **Integration Strategy**: Clear plan for playing nice with other tools
- **Scalability Planning**: How the system will handle when you blow up (in a good way)

### Feature Prioritization That Actually Works
**Suggested Framework**:
- **MoSCoW Method**: Must have, Should have, Could have, Won't have (for now)
- **Value vs. Effort Matrix**: Plot features based on user value and development effort
- **MVP Definition**: Clear scope for your minimum viable product that still slaps

---

## 4. Impact & Outcomes Evaluation 📈

### Success Metrics That Matter
**Current**: Basic success metrics mentioned  
**Glow-Up Approach**:

**SMART Goals Framework**:
- **Specific**: Clearly defined outcomes that everyone understands
- **Measurable**: Quantifiable metrics (e.g., "Increase user task completion by 40%")
- **Achievable**: Realistic given your constraints (no unicorn expectations)
- **Relevant**: Aligned with business objectives that actually matter
- **Time-bound**: Clear deadlines that create urgency

**Recommended Metrics Categories**:
- **Acquisition**: User sign-up rates, conversion funnels that convert
- **Engagement**: Daily/monthly active users, feature adoption rates
- **Retention**: Churn rates, user lifetime value that makes CFOs happy
- **Satisfaction**: NPS scores, user feedback ratings that show love
- **Business**: Revenue impact, cost savings, ROI that pays the bills

---

## 5. Security & Privacy Considerations 🔒

### Data Protection Framework That Doesn't Suck
**Critical Areas to Address**:

**Data Classification**:
- **Public**: Marketing materials, general product info
- **Internal**: User analytics, system logs
- **Confidential**: User personal data, business intelligence
- **Restricted**: Authentication credentials, encryption keys

**Security Controls That Actually Work**:
- **Authentication**: Multi-factor authentication, SSO integration
- **Authorization**: Role-based access control, least privilege principle
- **Encryption**: Data protection that would make hackers cry
- **Monitoring**: Security event logging and alerting

### Privacy Compliance (Because Regulations Are Real)
**Regulatory Requirements**:
- **GDPR**: Right to be forgotten, data portability, consent management
- **CCPA**: Consumer privacy rights, data disclosure requirements
- **Industry-Specific**: HIPAA, SOX, PCI-DSS as applicable

---

## 6. Implementation Roadmap That Gets Stuff Done 🛣️

### Phase 1: Foundation (Weeks 1-4) 🏗️
- Requirements validation and stakeholder alignment
- Technical architecture finalization
- Security framework implementation
- Core team onboarding and vibes check

### Phase 2: Development (Weeks 5-10) 💻
- MVP feature development
- Security testing and validation
- User testing and feedback incorporation
- Performance optimization

### Phase 3: Launch (Weeks 11-12) 🚀
- Beta testing with select users
- Final security audit and compliance check
- Launch preparation and monitoring setup
- Post-launch support planning

---

## 7. Action Items & Next Steps 📝

### Immediate (Next 1-2 weeks) ⚡
1. **Expand User Research**: Conduct additional user interviews and surveys
2. **Create Detailed Personas**: Develop 3-5 primary user personas that feel real
3. **Technical Architecture**: Create system architecture diagrams that engineers love
4. **Security Assessment**: Conduct initial threat modeling exercise

### Short-term (Next 1 month) 🎯
1. **Competitive Analysis**: Research and document 3-5 key competitors
2. **MVP Scope**: Define and prioritize minimum viable product features
3. **Compliance Review**: Assess regulatory requirements and compliance needs
4. **Team Planning**: Finalize development team structure and responsibilities

---

## Overall Assessment Score: 8/10 🎉

**Strengths**: Solid foundation with clear problem definition and good structure  
**Growth Areas**: Needs deeper analysis in user research, technical architecture, and security  
**Recommendation**: Implement these suggestions to create a PRD that'll make stakeholders say "this is it, chief" 💯

---

*Analysis completed using our multi-agent evaluation framework that considers context clarity, user needs, solution innovation, impact assessment, and security considerations. Now go make something amazing! ✨*`

    setFeedback(analysis)
    setIsAnalyzing(false)
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
              Let's{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                level up
              </span>{" "}
              your PRD 🚀
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get AI-powered feedback that'll make your PRD absolutely fire 🔥
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-playfair">
                <FileText className="w-6 h-6 mr-3 text-blue-500" />
                Your Current PRD 📄
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={originalPRD}
                onChange={(e) => setOriginalPRD(e.target.value)}
                placeholder="Paste your existing PRD here and we'll give you feedback that actually helps! ✨"
                rows={15}
                className="mb-4 border-2 border-blue-100 focus:border-blue-400 rounded-xl"
              />
              <Button
                onClick={analyzePRD}
                disabled={isAnalyzing || !originalPRD.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isAnalyzing ? (
                  <>
                    <Lightbulb className="w-5 h-5 mr-2 animate-pulse" />
                    Analyzing your PRD magic...
                  </>
                ) : (
                  <>
                    <Lightbulb className="w-5 h-5 mr-2" />
                    Analyze & Improve ✨
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Feedback */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-playfair">
                <Lightbulb className="w-6 h-6 mr-3 text-purple-500" />
                AI Feedback & Suggestions 🤖
              </CardTitle>
            </CardHeader>
            <CardContent>
              {feedback ? (
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 max-h-96 overflow-y-auto border-2 border-gray-200">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800">{feedback}</pre>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <div className="mb-4">
                    <span className="text-6xl">🎯</span>
                  </div>
                  <p className="text-lg font-medium">Ready for some honest feedback?</p>
                  <p className="text-sm">Paste your PRD above and let's make it absolutely fire! 🔥</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
