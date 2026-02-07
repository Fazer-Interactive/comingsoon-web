"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Scale, 
  Shield, 
  Users, 
  AlertTriangle, 
  CheckCircle,
  Gavel,
  Globe,
  Clock,
  MessageCircle,
  Lock,
  Zap
} from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  const sections = [
    {
      icon: Users,
      title: "User Accounts",
      content: [
        "You must be at least 13 years old to create an account",
        "Provide accurate and complete information during registration",
        "Maintain the security of your account credentials",
        "You are responsible for all activities under your account",
        "One account per person; multiple accounts are not permitted"
      ]
    },
    {
      icon: MessageCircle,
      title: "Content & Conduct",
      content: [
        "You retain ownership of content you create and share",
        "Grant Fazer license to display and distribute your content",
        "Follow our Community Guidelines in all interactions",
        "Respect intellectual property rights of others",
        "No illegal, harmful, or inappropriate content"
      ]
    },
    {
      icon: Shield,
      title: "Platform Usage",
      content: [
        "Use Fazer for its intended purpose as a social platform",
        "Do not attempt to hack, disrupt, or damage the platform",
        "No automated tools or bots without permission",
        "Respect rate limits and technical restrictions",
        "Report bugs and security issues responsibly"
      ]
    },
    {
      icon: Lock,
      title: "Privacy & Data",
      content: [
        "Your privacy is protected under our Privacy Policy",
        "We collect and use data as described in our privacy terms",
        "You can control your privacy settings and data sharing",
        "We implement security measures to protect your information",
        "Data retention follows our published retention policies"
      ]
    }
  ]

  const restrictions = [
    "Harassment, bullying, or threatening behavior",
    "Spam, scams, or fraudulent activities", 
    "Hate speech or discriminatory content",
    "Illegal activities or content",
    "Impersonation of others",
    "Sharing private information without consent",
    "Copyright or trademark infringement",
    "Malware, viruses, or harmful code"
  ]

  const termination = [
    {
      title: "Voluntary Termination",
      description: "You may delete your account at any time through your account settings."
    },
    {
      title: "Policy Violations",
      description: "We may suspend or terminate accounts that violate our terms or community guidelines."
    },
    {
      title: "Service Discontinuation", 
      description: "We reserve the right to discontinue the service with appropriate notice to users."
    },
    {
      title: "Data After Termination",
      description: "Account data will be deleted according to our data retention policy after termination."
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
                  Terms of Service
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                The rules and guidelines that govern your use of the Fazer platform and community.
              </p>

              <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <FileText className="w-6 h-6" />
                <span className="text-lg font-medium">Effective: December 2024</span>
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
                  <Scale className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                </div>
                
                <div className="max-w-4xl mx-auto text-lg text-slate-300 leading-relaxed space-y-4">
                  <p>
                    Welcome to Fazer! By accessing or using our platform, you agree to be bound by these Terms of Service 
                    and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
                    from using or accessing this site.
                  </p>
                  
                  <p>
                    These terms constitute a legally binding agreement between you and Fazer. We may update these terms 
                    from time to time, and your continued use of the platform constitutes acceptance of any changes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Terms Sections */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Terms & Conditions</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Key terms that govern your use of Fazer and your responsibilities as a community member.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sections.map((section, i) => (
                <Card key={i} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mr-3">
                        <section.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <CardTitle className="text-white">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, j) => (
                        <li key={j} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prohibited Activities */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 mb-12">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">Prohibited Activities</h2>
                  <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    The following activities are strictly prohibited on Fazer and may result in account suspension or termination.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {restrictions.map((restriction, i) => (
                    <div key={i} className="flex items-start space-x-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{restriction}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Service Availability */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <Card className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">Service Availability</h2>
                </div>
                
                <div className="max-w-4xl mx-auto text-lg text-slate-300 leading-relaxed space-y-6">
                  <p>
                    Fazer is provided "as is" and "as available." While we strive to maintain high uptime and reliability, 
                    we cannot guarantee uninterrupted access to the platform. We may need to perform maintenance, updates, 
                    or address technical issues that could temporarily affect service availability.
                  </p>
                  
                  <p>
                    We reserve the right to modify, suspend, or discontinue any aspect of Fazer at any time, with or 
                    without notice. We are not liable for any modification, suspension, or discontinuation of the service.
                  </p>
                  
                  <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700/50">
                    <div className="flex items-start space-x-3">
                      <Clock className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-white font-semibold mb-2">Planned Maintenance</h3>
                        <p className="text-slate-400">
                          We will provide advance notice of planned maintenance whenever possible through our 
                          official communication channels.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Account Termination */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Account Termination</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Information about how accounts may be terminated and what happens to your data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {termination.map((item, i) => (
                <Card key={i} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Information */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Gavel className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">Legal Information</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h3>
                    <p className="text-slate-400 mb-4">
                      Fazer and its operators shall not be liable for any indirect, incidental, special, 
                      consequential, or punitive damages resulting from your use of the platform.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">Indemnification</h3>
                    <p className="text-slate-400">
                      You agree to indemnify and hold harmless Fazer from any claims, damages, or expenses 
                      arising from your use of the platform or violation of these terms.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Governing Law</h3>
                    <p className="text-slate-400 mb-4">
                      These terms are governed by and construed in accordance with applicable laws. 
                      Any disputes will be resolved through appropriate legal channels.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">Severability</h3>
                    <p className="text-slate-400">
                      If any provision of these terms is found to be unenforceable, the remaining 
                      provisions will continue to be valid and enforceable.
                    </p>
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
                <h2 className="text-3xl font-bold text-white mb-4">Questions About These Terms?</h2>
                <p className="text-lg text-slate-300 mb-4 max-w-2xl mx-auto">
                  If you have questions about these Terms of Service, please contact our legal team for clarification.
                </p>
                <p className="text-slate-300">
                  Contact us at{" "}
                  <a
                    href="mailto:moderation@fazersocial.com"
                    className="text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-2"
                  >
                    moderation@fazersocial.com
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
