import React, { useState } from "react";
import Navbar from "../components/section1/Navbar";
import { useEffect } from "react";
import { getAllServises } from "../api/servises.api";
import {user_find} from '../api/user.deta.find';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/Userslice';

// Service data in array format for future scalability

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const dispatch = useDispatch();
  const [servicesData, setservicesData] = useState([]);

  async function fetchAllServises() {
    const all_servises = await getAllServises();
    console.log(all_servises);
    setservicesData(all_servises.data.data);
  }

  useEffect(() => {
    fetchAllServises();
    const token = sessionStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await user_find(token);
        console.log(response.data);
        if (response.data?.bolien) {
          dispatch(setUser(response.data.data));
          console.log("data save sessucc");
        } else {
          console.log("User not found or token invalid.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 py-5">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gray-700">Digital Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We provide top-notch digital solutions to help your business grow in
            the modern online landscape.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-gray-800 transition">
            Explore Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a range of professional digital services to meet all your
              business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service._id}
                className={`bg-gray-50 rounded-lg p-6 shadow-sm border ${service.popular ? "border-black" : "border-gray-200"} hover:shadow-md transition-all cursor-pointer`}
                onClick={() => setSelectedService(service)}
              >
                {service.popular && (
                  <div className="inline-block bg-black text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-gray-800 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">${service.price}</span>
                    <span className="text-gray-600 ml-1">
                      /{service.priceType}
                    </span>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for all our services. Custom packages
              available for larger projects.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-sm rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-black text-white">
                  <th className="text-left p-4 font-medium">Service</th>
                  <th className="text-left p-4 font-medium">Starting Price</th>
                  <th className="text-left p-4 font-medium">Pricing Model</th>
                  <th className="text-left p-4 font-medium">Delivery Time</th>
                  <th className="text-left p-4 font-medium">Best For</th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service, index) => (
                  <tr
                    key={service._id}
                    className={`border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <td className="p-4 font-medium">{service.title}</td>
                    <td className="p-4">
                      <span className="text-xl font-bold">
                        ${service.price}
                      </span>
                      <span className="text-gray-600 ml-1">+</span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${service.priceType === "project" ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-white"}`}
                      >
                        {service.priceType === "project"
                          ? "Per Project"
                          : "Monthly"}
                      </span>
                    </td>
                    <td className="p-4">
                      {service.id === 1
                        ? "2-4 weeks"
                        : service.id === 2
                          ? "Ongoing"
                          : "1-2 weeks"}
                    </td>
                    <td className="p-4">
                      {service.id === 1
                        ? "Businesses & Startups"
                        : service.id === 2
                          ? "Brand Awareness"
                          : "Visual Identity"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us for tailored packages that fit your specific
              requirements and budget.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Selected Service Details Modal */}

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
                <h2 className="text-2xl font-bold">
                  Digital<span className="text-gray-300">Services</span>
                </h2>
              </div>
              <p className="text-gray-300">
                Professional digital solutions for modern businesses.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Graphic Design
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: info@digitalservices.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Business St, City</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} DigitalServices. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
