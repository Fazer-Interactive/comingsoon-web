import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Heart, 
  Users, 
  MessageCircle, 
  AlertTriangle, 
  CheckCircle,
  Star,
  Flag,
  Lock,
  Globe
} from "lucide-react"
import Link from "next/link"

export default function CommunityGuidelinesPage() {
  const guidelines = [
    {
      icon: Heart,
      title: "Be Kind & Respectful",
      description: "Treat all community members with respect and kindness. We're all here to celebrate music and art culture together.",
      rules: [
        "Use respectful language in all interactions",
        "Be welcoming to new members",
        "Respect different opinions and perspectives",
        "No personal attacks or harassment"
      ]
    },
    {
      icon: Users,
      title: "Foster Inclusive Community",
      description: "Fazer is a space for everyone who loves music and other forms of art, regardless of background or experience level.",
      rules: [
        "Welcome newcomers and help them feel included",
        "Avoid gatekeeping music and art culture or knowledge",
        "Celebrate diversity in our community",
        "Use inclusive language"
      ]
    },
    {
      icon: MessageCircle,
      title: "Quality Content & Discussions",
      description: "Share meaningful content and engage in thoughtful discussions about music, art, and the culture that surrounds it.",
      rules: [
        "Stay on-topic in themed groups and discussions",
        "Share original content when possible",
        "Give credit to original creators",
        "Avoid spam or repetitive posting"
      ]
    },
    {
      icon: Shield,
      title: "Respect Privacy & Safety",
      description: "Protect your privacy and respect others' boundaries in our digital space.",
      rules: [
        "Don't share personal information without consent",
        "Respect others' privacy settings",
        "Report suspicious or harmful behavior",
        "Keep private conversations private"
      ]
    },
    {
      icon: Star,
      title: "Authentic Spirit",
      description: "Embrace the optimistic, creative, and innovative spirit that defines our community.",
      rules: [
        "Share genuine appreciation for music, art, and the culture that surrounds it",
        "Encourage creativity and self-expression",
        "Support fellow artists and creators",
        "Maintain the positive vibe of our community"
      ]
    },
    {
      icon: Globe,
      title: "Legal & Platform Rules",
      description: "Follow all applicable laws and platform-specific rules to keep our community safe.",
      rules: [
        "No illegal content or activities",
        "Respect intellectual property rights",
        "Follow age restrictions and content guidelines",
        "Report violations to moderators"
      ]
    }
  ]

  const violations = [
    {
      level: "Minor",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      examples: ["Off-topic posting", "Minor spam", "Unintentional rule breaking"],
      consequences: ["Friendly reminder", "Content removal", "Temporary mute"]
    },
    {
      level: "Moderate",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      examples: ["Repeated rule violations", "Disrespectful behavior", "Inappropriate content"],
      consequences: ["Warning", "Temporary suspension", "Content restrictions"]
    },
    {
      level: "Severe",
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      examples: ["Harassment", "Hate speech", "Doxxing", "Illegal content"],
      consequences: ["Immediate suspension", "Permanent ban", "Report to authorities"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Subtle starfield background */}
      <div className="fixed inset-0 z-0 opacity-30">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-black leading-none mb-6">
                <span className="bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Community Guidelines
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Building a positive, inclusive space where unique personalities, creativity, and art thrive, and everyone feels welcome.
              </p>

              <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <Shield className="w-6 h-6" />
                <span className="text-lg font-medium">Updated: December 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border-slate-700/50 mb-12">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-4">Welcome to Fazer</h2>
                </div>
                
                <div className="max-w-4xl mx-auto text-lg text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Fazer is more than just a platform - it's a community united by our shared love for music, art, and the culture that surrounds it. 
                    These guidelines help us maintain the positive, creative, and inclusive spirit that makes our community special.
                  </p>
                  
                  <p>
                    By participating in Fazer, you agree to follow these guidelines and help create an environment where 
                    everyone can express themselves, share their passion for music and other forms of art, and build meaningful connections.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Guidelines Grid */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Community Standards</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                These guidelines reflect the values that make Fazer a welcoming space for all. We believe in a world where the things that make us unique deserve to be celebrated.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {guidelines.map((guideline, i) => (
                <Card key={i} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mr-3">
                        <guideline.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <CardTitle className="text-white">{guideline.title}</CardTitle>
                    </div>
                    <p className="text-slate-400">{guideline.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {guideline.rules.map((rule, j) => (
                        <li key={j} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enforcement Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Enforcement & Consequences</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                We believe in fair and transparent moderation that helps maintain our community standards.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {violations.map((violation, i) => (
                <Card key={i} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
                  <CardHeader>
                    <div className="text-center">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${violation.bgColor} ${violation.color} mb-3`}>
                        {violation.level} Violations
                      </div>
                      <CardTitle className="text-white text-lg">{violation.level} Issues</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-slate-300 mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {violation.examples.map((example, j) => (
                          <li key={j} className="text-xs text-slate-400">• {example}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-slate-300 mb-2">Consequences:</h4>
                      <ul className="space-y-1">
                        {violation.consequences.map((consequence, j) => (
                          <li key={j} className="text-xs text-slate-400">• {consequence}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reporting Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <Card className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Flag className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">Reporting Issues</h2>
                  <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Help us maintain a safe and welcoming community by reporting violations when you see them.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">How to Report</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Use the report button on posts, comments, or profiles</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Contact moderators directly through private message</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Email support@fazersocial.com for serious violations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Provide specific details and evidence when possible</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">What Happens Next</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>Reports are reviewed by our moderation team</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>Action is taken based on our guidelines</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>You'll receive a follow-up when appropriate</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>Appeals can be submitted for disputed actions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto text-center">
            <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Questions or Concerns?</h2>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  Our community team is here to help. Reach out if you have questions about these guidelines or need support.
                </p>
                
                <p className="text-slate-300">
                  Contact us at{" "}
                  <a
                    href="mailto:support@fazersocial.com"
                    className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-2"
                  >
                    support@fazersocial.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
