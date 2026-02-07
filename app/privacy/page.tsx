"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  Users,
  Settings,
  Download,
  Trash2,
  AlertCircle,
  CheckCircle,
  MessageCircle
} from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  const dataTypes = [
    {
      icon: Users,
      title: "Profile Information",
      description: "Username, display name, bio, profile picture, and other profile details you choose to share.",
      retention: "Until account deletion"
    },
    {
      icon: MessageCircle,
      title: "Communication Data",
      description: "Messages, posts, comments, and other content you create on the platform.",
      retention: "Until you delete or account closure"
    },
    {
      icon: Eye,
      title: "Usage Analytics",
      description: "How you interact with the platform, pages visited, features used (anonymized when possible).",
      retention: "12 months"
    },
    {
      icon: Globe,
      title: "Technical Information",
      description: "IP address, browser type, device information, and connection details for security and functionality.",
      retention: "6 months"
    }
  ]

  const rights = [
    {
      icon: Eye,
      title: "Access Your Data",
      description: "Request a copy of all personal data we have about you in a portable format."
    },
    {
      icon: Settings,
      title: "Correct Information",
      description: "Update or correct any inaccurate personal information in your account."
    },
    {
      icon: Trash2,
      title: "Delete Your Data",
      description: "Request deletion of your account and associated personal data."
    },
    {
      icon: Download,
      title: "Data Portability",
      description: "Export your data to take with you if you leave our platform."
    },
    {
      icon: Lock,
      title: "Restrict Processing",
      description: "Limit how we use your data in certain circumstances."
    },
    {
      icon: AlertCircle,
      title: "Object to Processing",
      description: "Object to certain types of data processing, including marketing."
    }
  ]

  const security = [
    {
      title: "Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard protocols."
    },
    {
      title: "Access Controls",
      description: "Strict access controls ensure only authorized personnel can access user data."
    },
    {
      title: "Regular Audits",
      description: "We conduct regular security audits and vulnerability assessments."
    },
    {
      title: "Incident Response",
      description: "Comprehensive incident response plan for any potential security breaches."
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
                  Privacy Policy
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Your privacy matters to us. Learn how we protect and handle your personal information on Fazer.
              </p>

              <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <Shield className="w-6 h-6" />
                <span className="text-lg font-medium">Last Updated: December 2024</span>
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
                  <Lock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Privacy</h2>
                </div>
                
                <div className="max-w-4xl mx-auto text-lg text-slate-300 leading-relaxed space-y-4">
                  <p>
                    At Fazer, we believe privacy is a fundamental right. This policy explains how we collect, use, 
                    and protect your personal information when you use our platform to connect with the Y2K community.
                  </p>
                  
                  <p>
                    We're committed to transparency about our data practices and giving you control over your information. 
                    This policy applies to all Fazer services and is designed to be clear and understandable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Collection */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">What Information We Collect</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                We only collect information that's necessary to provide and improve our services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {dataTypes.map((type, i) => (
                <Card key={i} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mr-3">
                        <type.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <CardTitle className="text-white">{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 mb-4">{type.description}</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="border-slate-600 text-slate-300">
                        Retention: {type.retention}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Data */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 mb-12">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Database className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">How We Use Your Information</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Essential Services</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Provide and maintain Fazer platform features</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Enable communication between community members</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Authenticate users and prevent unauthorized access</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Process transactions and provide customer support</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Platform Improvement</h3>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>Analyze usage patterns to improve user experience</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>Develop new features and optimize existing ones</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>Ensure platform security and prevent abuse</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>Send important updates about service changes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-8 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Your Privacy Rights</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                You have control over your personal information. Here are your rights and how to exercise them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rights.map((right, i) => (
                <Card key={i} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mr-3">
                        <right.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{right.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{right.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <Card className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">Security Measures</h2>
                  <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    We implement robust security measures to protect your personal information.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {security.map((measure, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="p-2 bg-green-400/20 rounded-lg flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{measure.title}</h3>
                        <p className="text-slate-400">{measure.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Third Parties */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Globe className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">Third-Party Services</h2>
                </div>
                
                <div className="max-w-4xl mx-auto text-lg text-slate-300 leading-relaxed space-y-6">
                  <p>
                    We may use trusted third-party services to help operate Fazer, such as hosting providers, 
                    analytics services, and payment processors. These services are carefully selected and bound 
                    by strict data protection agreements.
                  </p>
                  
                  <p>
                    We do not sell, rent, or trade your personal information to third parties for marketing purposes. 
                    Any data sharing is limited to what's necessary to provide our services and is governed by 
                    appropriate safeguards.
                  </p>
                  
                  <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700/50">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-white font-semibold mb-2">Important Note</h3>
                        <p className="text-slate-400">
                          We will never share your personal information without your consent, except as required 
                          by law or to protect the safety and security of our users.
                        </p>
                      </div>
                    </div>
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
                <h2 className="text-3xl font-bold text-white mb-4">Questions About Privacy?</h2>
                <p className="text-lg text-slate-300 mb-4 max-w-2xl mx-auto">
                  We're here to help you understand how we protect your privacy. Contact us with any questions or concerns.
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
