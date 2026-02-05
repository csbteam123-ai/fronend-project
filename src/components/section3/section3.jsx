import React from "react";
import { Wallpaper, Server, Search, Store, Tv, Database } from "lucide-react";

const Section3 = () => {
  const services = [
    {
      icon: <Wallpaper className="h-16 w-16 md:h-20 md:w-20 lg:h-25 lg:w-25" />,
      title: "Frontend Development with React JS",
      description: "Modern, responsive websites using React.js"
    },
    {
      icon: <Server className="h-16 w-16 md:h-20 md:w-20 lg:h-25 lg:w-25" />,
      title: "Backend Development with Node.js",
      description: "Scalable server-side solutions"
    },
    {
      icon: <Search className="h-16 w-16 md:h-20 md:w-20 lg:h-25 lg:w-25" />,
      title: "SEO Optimization",
      description: "Using premium tools for better rankings"
    },
    {
      icon: <Store className="h-16 w-16 md:h-20 md:w-20 lg:h-25 lg:w-25" />,
      title: "Digital Marketing",
      description: "Page, video, website & product marketing"
    },
    {
      icon: <Tv className="h-16 w-16 md:h-20 md:w-20 lg:h-25 lg:w-25" />,
      title: "Graphic Design",
      description: "Logos, banners, posters & branding"
    },
    {
      icon: <Database className="h-16 w-16 md:h-20 md:w-20 lg:h-25 lg:w-25" />,
      title: "Backend with Django",
      description: "Python-based robust backend solutions"
    }
  ];

  return (
    <div className="w-full py-10 px-4 sm:px-8 md:px-12 lg:px-20 border-t-2 border-gray-800 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Professional digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 min-h-[280px]"
            >
              {/* Icon Container */}
              <div className="mb-6 p-4 rounded-full bg-blue-50 text-blue-600">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info/Call to Action */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl">
            Explore All Services
          </button>
          <p className="mt-4 text-gray-500 text-sm">
            Custom solutions available upon request
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;