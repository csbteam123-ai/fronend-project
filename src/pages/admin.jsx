import React, { useState, useEffect } from "react";
import { allUserSee, userUpdate, userDelete } from "../api/admin.user.see";
import {
  createservises,
  getAllServises,
  updateservises,
} from "../api/servises.api";

const AdminPanel = () => {
  // State for users
  const [users, setUsers] = useState([]);
  async function fetchAllUser() {
    const all_user = await allUserSee();
    console.log(all_user);
    setUsers(all_user.data.data);
  }
  async function fetchAllServises() {
    const all_servises = await getAllServises();
    console.log(all_servises);
    setServices(all_servises.data.data);
  }
  useEffect(() => {
    fetchAllUser();
    fetchAllServises();
  }, []);
  // State for services
  const [services, setServices] = useState([]);

  // State for form inputs
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active",
  });
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    features: [""],
    price: 0,
    priceType: "project",
    popular: false,
  });
  const token = sessionStorage.getItem("token");

  const [udereditid, setudereditid] = useState(null);

  // State for editing
  const [editingUserId, setEditingUserId] = useState(null);
  const [editingServiceId, setEditingServiceId] = useState(false);

  // State for active tab
  const [activeTab, setActiveTab] = useState("users");

  // State for search
  const [searchTerm, setSearchTerm] = useState("");

  // State for sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter users based on search
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Filter services based on search
  const filteredServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Handle user form submission
  const handleUserSubmit = async (e) => {
    e.preventDefault();

    if (editingUserId) {
      // Update existing user
      const res = await userUpdate(udereditid, newUser);
      console.log(res);
      setUsers(
        users.map((user) =>
          user._id === udereditid ? { ...user, ...newUser } : user,
        ),
      );
      setEditingUserId(null);
    } else {
      // Add new user
      const newId =
        users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
      setUsers([...users, { ...newUser, id: newId }]);
    }

    // Reset form
    setNewUser({ name: "", email: "", role: "User" });
  };

  // Handle service form submission
  const handleServiceSubmit = async (e) => {
    e.preventDefault();

    if (editingServiceId) {
      const res = await updateservises(token, servisesupid, newService);
      console.log(res);
      setServices(
        services.map((service) =>
          servisesupid === service._id
            ? { ...newService, _id: servisesupid }
            : service,
        ),
      );
      setEditingServiceId(false);
    } else {
      const res = await createservises(token, newService);
      console.log(res);
    }

    // Reset form
    setNewService({
      title: "",
      description: "",
      features: [""],
      price: 0,
      priceType: "project",
      popular: false,
    });
  };

  // Edit user
  const handleEditUser = (user) => {
    setNewUser(user);
    setudereditid(user._id);
    setEditingUserId(true);
  };

  // Edit service
  const [servisesupid, setservisesupid] = useState(null);
  const handleEditService = (service) => {
    setNewService(service);
    setservisesupid(service._id);
    setEditingServiceId(true);
  };

  // Delete user
  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const res = await userDelete(id);
      if (res.data.success) {
        setUsers(users.filter((user) => user._id !== id));
      }
    }
  };

  // Delete service
  const handleDeleteService = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter((service) => service.id !== id));
    }
  };

  // Add feature field to service form
  const addFeatureField = () => {
    setNewService({
      ...newService,
      features: [...newService.features, ""],
    });
  };

  // Update feature in service form
  const updateFeature = (index, value) => {
    const updatedFeatures = [...newService.features];
    updatedFeatures[index] = value;
    setNewService({
      ...newService,
      features: updatedFeatures,
    });
  };

  // Remove feature from service form
  const removeFeature = (index) => {
    const updatedFeatures = [...newService.features];
    updatedFeatures.splice(index, 1);
    setNewService({
      ...newService,
      features: updatedFeatures,
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"} bg-gray-800 text-white transition-all duration-300 fixed md:relative h-full z-40 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-4 flex items-center justify-between">
          <h1
            className={`text-xl font-bold ${sidebarOpen ? "block" : "hidden"}`}
          >
            Admin Panel
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 hidden md:block"
          >
            {sidebarOpen ? "«" : "»"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden p-2 rounded-md bg-gray-700 hover:bg-gray-600"
          >
            ✕
          </button>
        </div>

        <nav className="mt-8">
          <ul>
            <li>
              <button
                onClick={() => {
                  setActiveTab("users");
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-3 px-4 flex items-center ${activeTab === "users" ? "bg-gray-900" : "hover:bg-gray-700"}`}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.67 3.623a10 10 0 01-.67 3.623m0 0a10 10 0 01-13.67-3.623m13.67 0a10 10 0 00-13.67 3.623"
                  ></path>
                </svg>
                <span className={`${sidebarOpen ? "block" : "hidden"}`}>
                  User Management
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab("services");
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-3 px-4 flex items-center ${activeTab === "services" ? "bg-gray-900" : "hover:bg-gray-700"}`}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span className={`${sidebarOpen ? "block" : "hidden"}`}>
                  Services
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab("dashboard");
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-3 px-4 flex items-center ${activeTab === "dashboard" ? "bg-gray-900" : "hover:bg-gray-700"}`}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <span className={`${sidebarOpen ? "block" : "hidden"}`}>
                  Dashboard
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto md:ml-0">
        <header className="bg-white shadow p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 capitalize">
              {activeTab === "users" && "User Management"}
              {activeTab === "services" && "Services Management"}
              {activeTab === "dashboard" && "Dashboard"}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-stretch md:items-center w-full md:w-auto gap-4">
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full md:w-auto">
              Logout
            </button>
          </div>
        </header>

        <main className="p-3 md:p-6">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
                Admin Dashboard Overview
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                  <h4 className="text-base md:text-lg font-medium text-gray-700">
                    Total Users
                  </h4>
                  <p className="text-2xl md:text-3xl font-bold text-blue-600 mt-1 md:mt-2">
                    {users.length}
                  </p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                  <h4 className="text-base md:text-lg font-medium text-gray-700">
                    Total Services
                  </h4>
                  <p className="text-2xl md:text-3xl font-bold text-green-600 mt-1 md:mt-2">
                    {services.length}
                  </p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                  <h4 className="text-base md:text-lg font-medium text-gray-700">
                    Popular Services
                  </h4>
                  <p className="text-2xl md:text-3xl font-bold text-purple-600 mt-1 md:mt-2">
                    {services.filter((s) => s.popular).length}
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                <h4 className="text-base md:text-lg font-medium text-gray-700 mb-3 md:mb-4">
                  Recent Activities
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full mr-2 md:mr-3"></div>
                    <span className="text-sm md:text-base">
                      User "John Doe" was added
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full mr-2 md:mr-3"></div>
                    <span className="text-sm md:text-base">
                      Service "Web Development" was updated
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full mr-2 md:mr-3"></div>
                    <span className="text-sm md:text-base">
                      User "Bob Johnson" was edited
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <div className="space-y-6 md:space-y-8">
              {/* User Form */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  {editingUserId ? "Edit User" : "Create New User"}
                </h3>
                <form
                  onSubmit={handleUserSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
                >
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newUser.name}
                      onChange={(e) =>
                        setNewUser({ ...newUser, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newUser.email}
                      onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1 w-full">
                      Role
                    </label>
                    <select
                      className="w-full p-2 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newUser.role}
                      onChange={(e) =>
                        setNewUser({ ...newUser, role: e.target.value })
                      }
                    >
                      <option value="User">User</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 flex flex-col sm:flex-row gap-2">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    >
                      {editingUserId ? "Update User" : "Create User"}
                    </button>
                    {editingUserId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingUserId(null);
                          setNewUser({
                            name: "",
                            email: "",
                            role: "User",
                            status: "Active",
                          });
                        }}
                        className="bg-gray-300 text-gray-700 px-4 md:px-6 py-2 rounded hover:bg-gray-400 text-sm md:text-base"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Users List */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  All Users ({filteredUsers.length})
                </h3>
                {filteredUsers.length > 0 ? (
                  <div className="overflow-x-auto -mx-4 md:mx-0">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                          </th>
                          <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                            Email
                          </th>
                          <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Role
                          </th>
                          <th className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredUsers.map((user, index) => (
                          <tr key={user._id + index}>
                            <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-sm">
                              {user._id.substring(0, 6)}...
                            </td>
                            <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap font-medium text-sm">
                              {user.name}
                            </td>
                            <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-sm hidden md:table-cell">
                              {user.email}
                            </td>
                            <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap">
                              <span
                                className={`px-2 py-1 text-xs rounded-full ${
                                  user.role === "Admin"
                                    ? "bg-purple-100 text-purple-800"
                                    : user.role === "Editor"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-green-100 text-green-800"
                                }`}
                              >
                                {user.role}
                              </span>
                            </td>

                            <td className="px-3 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium">
                              <button
                                onClick={() => handleEditUser(user)}
                                className="text-blue-600 hover:text-blue-900 mr-2 md:mr-4"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteUser(user._id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm md:text-base">
                    No users found. Try a different search term or create a new
                    user.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === "services" && (
            <div className="space-y-6 md:space-y-8">
              {/* Service Form */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  {editingServiceId ? "Edit Service" : "Add New Service"}
                </h3>
                <form
                  onSubmit={handleServiceSubmit}
                  className="space-y-3 md:space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newService.title}
                        onChange={(e) =>
                          setNewService({
                            ...newService,
                            title: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Price ($)
                      </label>
                      <input
                        type="number"
                        className="w-full p-2 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newService.price}
                        onChange={(e) =>
                          setNewService({
                            ...newService,
                            price: parseInt(e.target.value) || 0,
                          })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      className="w-full p-2 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="2"
                      value={newService.description}
                      onChange={(e) =>
                        setNewService({
                          ...newService,
                          description: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Features
                    </label>
                    {newService.features.map((feature, index) => (
                      <div key={index} className="flex mb-2">
                        <input
                          type="text"
                          className="flex-1 p-2 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={feature}
                          onChange={(e) => updateFeature(index, e.target.value)}
                          placeholder={`Feature ${index + 1}`}
                        />
                        {newService.features.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeFeature(index)}
                            className="ml-2 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addFeatureField}
                      className="mt-2 px-3 md:px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm md:text-base"
                    >
                      + Add Feature
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Price Type
                      </label>
                      <select
                        className="w-full p-2 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newService.priceType}
                        onChange={(e) =>
                          setNewService({
                            ...newService,
                            priceType: e.target.value,
                          })
                        }
                      >
                        <option value="project">Per Project</option>
                        <option value="hourly">Hourly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="popular"
                        className="h-4 w-4 md:h-5 md:w-5 text-blue-600 rounded"
                        checked={newService.popular}
                        onChange={(e) =>
                          setNewService({
                            ...newService,
                            popular: e.target.checked,
                          })
                        }
                      />
                      <label
                        htmlFor="popular"
                        className="ml-2 text-sm font-medium text-gray-700"
                      >
                        Mark as Popular
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    >
                      {editingServiceId ? "Update Service" : "Add Service"}
                    </button>
                    {editingServiceId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingServiceId(null);
                          setNewService({
                            title: "",
                            description: "",
                            features: [""],
                            price: 0,
                            priceType: "project",
                            popular: false,
                          });
                        }}
                        className="bg-gray-300 text-gray-700 px-4 md:px-6 py-2 rounded hover:bg-gray-400 text-sm md:text-base"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Services List */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                  All Services ({filteredServices.length})
                </h3>
                {filteredServices.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {filteredServices.map((service) => (
                      <div
                        key={service._id}
                        className={`border rounded-lg p-4 md:p-5 ${service.popular ? "border-blue-500 shadow-md" : "border-gray-200"}`}
                      >
                        {service.popular && (
                          <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2 md:mb-3">
                            Popular
                          </div>
                        )}
                        <h4 className="text-lg md:text-xl font-bold mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base line-clamp-2">
                          {service.description}
                        </p>

                        <div className="mb-3 md:mb-4">
                          <h5 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                            Features:
                          </h5>
                          <ul className="list-disc pl-4 md:pl-5 space-y-1">
                            {service.features
                              .slice(0, 3)
                              .map((feature, index) => (
                                <li
                                  key={index}
                                  className="text-gray-700 text-sm"
                                >
                                  {feature.length > 50
                                    ? `${feature.substring(0, 50)}...`
                                    : feature}
                                </li>
                              ))}
                            {service.features.length > 3 && (
                              <li className="text-gray-500 text-sm">
                                +{service.features.length - 3} more features
                              </li>
                            )}
                          </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 md:gap-0 mt-3 md:mt-4">
                          <div className="mb-2 sm:mb-0">
                            <span className="text-xl md:text-2xl font-bold">
                              ${service.price}
                            </span>
                            <span className="text-gray-600 ml-1 md:ml-2 text-sm md:text-base">
                              /{service.priceType}
                            </span>
                          </div>
                          <div className="flex gap-2 w-full sm:w-auto">
                            <button
                              onClick={() => handleEditService(service)}
                              className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm md:text-base flex-1 sm:flex-none"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteService(service.id)}
                              className="px-3 md:px-4 py-1.5 md:py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 text-sm md:text-base flex-1 sm:flex-none"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm md:text-base">
                    No services found. Try a different search term or add a new
                    service.
                  </p>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
