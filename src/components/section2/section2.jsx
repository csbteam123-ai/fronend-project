import React, { useState } from "react";
import { 
  Globe, Store, Users, Tv, 
  Star, Mail, Phone, MapPin, 
  Award, ChevronRight, Zap,
  TrendingUp, Code, Palette,
  Users as UsersIcon, Sparkles,
  ExternalLink, MessageCircle,
  CheckCircle, ArrowRight
} from "lucide-react";

const PremiumTeamSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const teamMembers = [
    {
      id: 1,
      name: "MD Maruf Mursalin",
      role: "Lead Web Developer",
      expertise: "Full Stack Development",
      tagline: "Crafting Digital Excellence",
      image: "https://i.pinimg.com/736x/ff/a9/d7/ffa9d7bbf64e91260778fe572018637a.jpg",
      description: "Architecting scalable web solutions with cutting-edge technologies. Passionate about clean code and exceptional user experiences.",
      icon: <Code className="h-6 w-6" />,
      iconColor: "text-blue-500",
      bgColor: "from-blue-500 to-cyan-500",
      gradientOverlay: "from-blue-500/20 to-cyan-500/10",
      stats: { 
        projects: 42, 
        rating: 4.9, 
        experience: "5+ Years",
        clients: 128 
      },
      contact: {
        email: "maruf@devteam.com",
        phone: "+1 (555) 123-4567",
        location: "New York, USA"
      },
      skills: ["React/Next.js", "Node.js", "TypeScript", "AWS", "MongoDB"],
      achievements: ["AWS Certified", "React Expert", "Open Source Contributor"],
      availability: "Available for projects"
    },
    {
      id: 2,
      name: "MD Mustakin Soykot",
      role: "Digital Marketing Director",
      expertise: "Growth Marketing",
      tagline: "Driving Business Growth",
      image: "https://i.pinimg.com/736x/7b/b7/dd/7bb7dd708704d800d6f03fe909dcada7.jpg",
      description: "Strategic marketing expert focused on ROI-driven campaigns and digital transformation.",
      icon: <TrendingUp className="h-6 w-6" />,
      iconColor: "text-emerald-500",
      bgColor: "from-emerald-500 to-teal-500",
      gradientOverlay: "from-emerald-500/20 to-teal-500/10",
      stats: { 
        projects: 36, 
        rating: 4.8, 
        experience: "4+ Years",
        clients: 95 
      },
      contact: {
        email: "mustakin@devteam.com",
        phone: "+1 (555) 987-6543",
        location: "San Francisco, USA"
      },
      skills: ["SEO Strategy", "PPC Campaigns", "Social Media", "Analytics", "Conversion"],
      achievements: ["Google Ads Certified", "Facebook Blueprint", "HubSpot Accredited"],
      availability: "Taking new clients"
    },
    {
      id: 3,
      name: "MD Nishat Jahan",
      role: "Senior Project Manager",
      expertise: "Agile Leadership",
      tagline: "Delivering Excellence",
      image: "https://i.pinimg.com/736x/d0/d5/6b/d0d56b4093c1aef90dd2978c3b4d8bad.jpg",
      description: "Seasoned PMP certified professional specializing in agile methodologies and team leadership.",
      icon: <UsersIcon className="h-6 w-6" />,
      iconColor: "text-violet-500",
      bgColor: "from-violet-500 to-purple-500",
      gradientOverlay: "from-violet-500/20 to-purple-500/10",
      stats: { 
        projects: 58, 
        rating: 4.9, 
        experience: "6+ Years",
        clients: 142 
      },
      contact: {
        email: "nishat@devteam.com",
        phone: "+1 (555) 456-7890",
        location: "London, UK"
      },
      skills: ["Agile/Scrum", "Risk Management", "Stakeholder Comm", "Budget Control", "Team Leadership"],
      achievements: ["PMP Certified", "Scrum Master", "Prince2 Practitioner"],
      availability: "Leading teams"
    },
    {
      id: 4,
      name: "Ali Hosen",
      role: "Creative Director",
      expertise: "Visual Design",
      tagline: "Designing Experiences",
      image: "https://i.pinimg.com/736x/a9/29/50/a929503ab35543b7c1aa7bcb4bf87eb5.jpg",
      description: "Award-winning designer creating compelling visual narratives and brand identities.",
      icon: <Palette className="h-6 w-6" />,
      iconColor: "text-amber-500",
      bgColor: "from-amber-500 to-orange-500",
      gradientOverlay: "from-amber-500/20 to-orange-500/10",
      stats: { 
        projects: 47, 
        rating: 4.7, 
        experience: "3+ Years",
        clients: 89 
      },
      contact: {
        email: "ali@devteam.com",
        phone: "+1 (555) 234-5678",
        location: "Berlin, Germany"
      },
      skills: ["UI/UX Design", "Brand Identity", "Motion Graphics", "Illustration", "Prototyping"],
      achievements: ["Adobe Certified", "Awwwards Winner", "Behance Featured"],
      availability: "Creative consulting"
    }
  ];

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-black to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/10 mb-6">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Elite Team</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Dream Team</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collective of exceptional talents dedicated to transforming your vision into reality with precision and passion.
          </p>
        </div>

        {/* Team Grid - Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative group transition-all duration-500 ${
                hoveredCard && hoveredCard !== member.id ? 'opacity-60' : 'opacity-100'
              }`}
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} opacity-0 group-hover:opacity-30 blur-xl rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-3xl border border-gray-800 overflow-hidden backdrop-blur-sm">
                
                {/* Image Section with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-b ${member.gradientOverlay} z-10`}></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredCard === member.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Floating Expertise Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/20">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-br ${member.bgColor}`}>
                        {member.icon}
                      </div>
                      <span className="text-sm font-semibold text-white">{member.expertise}</span>
                    </div>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/20">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-bold text-white">{member.stats.rating}</span>
                    </div>
                  </div>
                  
                  {/* Tagline */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <p className="text-lg font-semibold text-white drop-shadow-lg">
                      {member.tagline}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Name and Role */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-gray-400 font-medium">{member.role}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">{member.description}</p>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1.5 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50 backdrop-blur-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-4 gap-2 mb-6">
                    <div className="text-center p-2 bg-gray-800/30 rounded-xl border border-gray-700/30">
                      <p className="text-lg font-bold text-white">{member.stats.projects}+</p>
                      <p className="text-xs text-gray-400">Projects</p>
                    </div>
                    <div className="text-center p-2 bg-gray-800/30 rounded-xl border border-gray-700/30">
                      <p className="text-lg font-bold text-white">{member.stats.rating}</p>
                      <p className="text-xs text-gray-400">Rating</p>
                    </div>
                    <div className="text-center p-2 bg-gray-800/30 rounded-xl border border-gray-700/30">
                      <p className="text-lg font-bold text-white">{member.stats.experience}</p>
                      <p className="text-xs text-gray-400">Experience</p>
                    </div>
                    <div className="text-center p-2 bg-gray-800/30 rounded-xl border border-gray-700/30">
                      <p className="text-lg font-bold text-white">{member.stats.clients}</p>
                      <p className="text-xs text-gray-400">Clients</p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="h-4 w-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-400">Achievements</span>
                    </div>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-emerald-500" />
                          <span className="text-xs text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="mb-6 flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${
                      member.availability.includes('Available') ? 'bg-emerald-500 animate-pulse' : 
                      member.availability.includes('Taking') ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <span className="text-sm text-gray-400">{member.availability}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 bg-gradient-to-r ${member.bgColor} text-white hover:shadow-lg hover:shadow-${member.bgColor.split('-')[1]}/30 flex items-center justify-center gap-2`}>
                      <MessageCircle className="h-4 w-4" />
                      Contact
                    </button>
                    <button className="px-4 py-3 rounded-xl font-medium bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50 transition-all duration-300">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats - Premium Design */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-b from-gray-900/80 to-black/80 rounded-3xl border border-gray-800/50 p-8 backdrop-blur-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Award className="h-8 w-8" />, value: "200+", label: "Projects Delivered", color: "text-blue-400" },
                { icon: <Star className="h-8 w-8" />, value: "4.8", label: "Avg Client Rating", color: "text-yellow-400" },
                { icon: <Zap className="h-8 w-8" />, value: "99.2%", label: "Success Rate", color: "text-emerald-400" },
                { icon: <Users className="h-8 w-8" />, value: "15+", label: "Countries Served", color: "text-purple-400" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's connect and discuss how our team can bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-3">
              Start Your Project
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent text-white text-lg font-semibold rounded-2xl border-2 border-gray-700 hover:border-gray-500 transition-all duration-300 flex items-center gap-3">
              <Phone className="h-5 w-5" />
              Schedule Call
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-800/50">
            <p className="text-gray-400 mb-4">Trusted by industry leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {["TechCorp", "InnovateCo", "GlobalSoft", "DigitalEdge", "FutureNet"].map((company, index) => (
                <div key={index} className="text-gray-300 font-medium">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumTeamSection;