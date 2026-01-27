// pages/ServicePage.jsx - Web Development Service Page
import React, { useEffect } from 'react';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Database, 
  Globe, 
  Shield,
  Rocket,
  CheckCircle,
  Clock,
  Users,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/section1/Navbar';
import { tokenvfy } from '../api/token.ck';

const ServicePage = () => {
  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    const fn = async ()=>{
      const res = await tokenvfy(token)
      // console.log(res) 
    }
    fn()
  },[])






  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "ফ্রন্টএন্ড ডেভেলপমেন্ট",
      description: "React.js, Vue.js, Angular দিয়ে মডার্ন ও ইন্টার‍্যাকটিভ UI",
      features: ["Responsive Design", "React Components", "State Management", "API Integration"]
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX ডিজাইন",
      description: "Figma, Adobe XD দিয়ে ইউজার-ফ্রেন্ডলি ইন্টারফেস",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "ব্যাকএন্ড ডেভেলপমেন্ট",
      description: "Node.js, Python, PHP দিয়ে স্কেলেবল সার্ভার সাইড",
      features: ["REST APIs", "Authentication", "Database Design", "Server Security"]
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "মোবাইল অ্যাপ",
      description: "React Native, Flutter দিয়ে ক্রস-প্ল্যাটফর্ম অ্যাপ",
      features: ["iOS & Android", "Native Features", "App Store Deployment", "Push Notifications"]
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "ফুল স্ট্যাক সলিউশন",
      description: "এন্ড-টু-এন্ড ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট",
      features: ["MERN Stack", "DevOps", "Cloud Deployment", "Maintenance"]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "ওয়েব সিকিউরিটি",
      description: "ওয়েবসাইট সিকিউরিটি অডিট এবং প্রোটেকশন",
      features: ["SSL Certificate", "Firewall Setup", "Security Audit", "Data Encryption"]
    }
  ];

  const technologies = [
    { name: "React", color: "bg-blue-500" },
    { name: "Next.js", color: "bg-black" },
    { name: "Node.js", color: "bg-green-600" },
    { name: "Python", color: "bg-yellow-500" },
    { name: "MongoDB", color: "bg-green-700" },
    { name: "Tailwind", color: "bg-cyan-500" },
    { name: "Firebase", color: "bg-orange-500" },
    { name: "AWS", color: "bg-yellow-600" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "পরামর্শ ও প্ল্যানিং",
      description: "প্রোজেক্ট রিকোয়ারমেন্ট এবং টাইমলাইন ফাইনাল করা"
    },
    {
      step: "02",
      title: "ডিজাইন ও প্রোটোটাইপ",
      description: "UI/UX ডিজাইন এবং ক্লায়েন্ট অ্যাপ্রুভাল"
    },
    {
      step: "03",
      title: "ডেভেলপমেন্ট",
      description: "কোডিং, টেস্টিং এবং ইটারেটিভ ইম্প্রুভমেন্ট"
    },
    {
      step: "04",
      title: "ডেলিভারি ও সাপোর্ট",
      description: "ডেপ্লয়মেন্ট, ট্রেনিং এবং মেইনটেন্যান্স"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Navbar />
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
          <Rocket className="w-4 h-4" />
          <span className="font-semibold">প্রফেশনাল ওয়েব ডেভেলপার</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          আপনার <span className="text-blue-600">ডিজিটাল প্রেজেন্স</span>
          <br />
          আমার <span className="text-blue-600">প্রফেশনাল কোডিং</span>
        </h1>
        
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          ৩+ বছর এক্সপেরিয়েন্স নিয়ে মডার্ন ওয়েব অ্যাপ্লিকেশন, ই-কমার্স সাইট, 
          এবং কাস্টম ওয়েব সলিউশন তৈরি করি। পারফরম্যান্স এবং ইউজার এক্সপেরিয়েন্স 
          আমার প্রায়োরিটি।
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/services_all">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300">
              <span>সার্ভিসেস দেখুন</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link to="/project">
            <button className="bg-gray-800 hover:bg-black text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              প্রোজেক্ট পোর্টফোলিও
            </button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          আমার <span className="text-blue-600">স্পেশাল সার্ভিস</span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          ফ্রন্টএন্ড থেকে ব্যাকএন্ড, মোবাইল অ্যাপ থেকে ওয়েব সিকিউরিটি - 
          সম্পূর্ণ ওয়েব ডেভেলপমেন্ট সলিউশন
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white rounded-3xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-12">
          টেকনোলজি <span className="text-blue-600">স্ট্যাক</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <div key={index} className={`${tech.color} text-white px-6 py-3 rounded-full font-semibold`}>
              {tech.name}
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">প্রোজেক্ট কমপ্লিট</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
            <div className="text-gray-600">ক্লায়েন্ট স্যাটিসফ্যাকশন</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">সাপোর্ট অ্যাভেইলেবল</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
            <div className="text-gray-600">বছর এক্সপেরিয়েন্স</div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          কাজের <span className="text-blue-600">প্রসেস</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-blue-300"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            আপনার প্রোজেক্ট শুরু করুন
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            একটি কথাবার্তা দিয়ে শুরু করুন। আপনার আইডিয়া শেয়ার করুন, 
            আমি সেটা রিয়েলিটিতে পরিণত করব।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              <MessageSquare className="w-5 h-5 inline mr-2" />
              ফ্রি কনসালটেশন
            </button>
            <Link to="/about">
              <button className="bg-transparent hover:bg-blue-700 border border-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                আমার সম্পর্কে জানুন
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;