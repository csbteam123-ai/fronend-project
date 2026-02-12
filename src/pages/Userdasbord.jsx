// App.jsx
import React, { useState, useEffect } from "react";
import {
  UserCircle,
  MessageCircle,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  Settings,
  Star,
  CheckCircle,
  Send,
  MoreVertical,
  Edit,
  MapPin,
  Mail,
  PhoneCall,
  Calendar,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { userLogout } from "../api/logout.api";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/Userslice";
import { user_find } from "../api/user.deta.find";

import { message_user_find } from "../api/message.api";
import { message_conv } from "../api/mess.conv.api";

// Message Component
const Message = ({ text, time, isOwn, isRead }) => {
  return (
    <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-xs lg:max-w-md rounded-2xl px-4 py-3 ${isOwn ? "bg-black text-white rounded-br-none" : "bg-gray-100 text-gray-900 rounded-bl-none"}`}
      >
        <p className="text-sm">{text}</p>
        <div
          className={`flex items-center justify-end gap-1 mt-1 ${isOwn ? "text-gray-300" : "text-gray-500"}`}
        >
          <span className="text-xs">{time}</span>
          {isOwn && (
            <CheckCircle
              size={12}
              className={isRead ? "text-blue-400" : "text-gray-400"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Chat Contact Component
const ChatContact = ({ name, lastMessage, time, unread, isOnline }) => {
  return (
    <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
      <div className="relative">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          <UserCircle size={20} className="text-gray-600" />
        </div>
        {isOnline && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-gray-900 truncate">{name}</h4>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{lastMessage}</p>
      </div>
      {unread > 0 && (
        <span className="w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
          {unread}
        </span>
      )}
    </div>
  );
};

// Profile Stats Component
const ProfileStat = ({ label, value, icon }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 rounded-lg">{icon}</div>
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const member = useSelector((state) => state.user.admin_mamber);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [messageInput, setMessageInput] = useState("");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [messagelist, setmessagelist] = useState([]);
  const [activeChat, setActiveChat] = useState(1);

  const token = sessionStorage.getItem("token");
  //serch inpue handel

  const [serch, setserch] = useState("");

  const serchhandel = (e) => {
    const v = e.target.value;
    setserch(v);
    fetchMessages(v);
  };

  const fetchMessages = async (p) => {
    if (token) {
      try {
        const res = await message_user_find(token, p);
        if (res.data) {
          setmessagelist(res.data);
        }
      } catch (error) {
        console.log("server error:" + error);
      }
    }
  };
  const create_conv = async (id) => {
    const member = await message_conv(token,user.id,id)
    console.log(user)
    console.log(member)
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          const res = await user_find(token);
          if (res.data?.bolien) {
            dispatch(setUser(res.data.data));
          } else {
            dispatch(setUser(null));
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          dispatch(setUser(null));
        }
      } else {
        dispatch(setUser(null));
      }
    };

    fetchMessages();
    fetchUserData();
  }, []);

  // Profile data
  const profileData = {
    name: user?.name || "John Smith",
    email: user?.email || "exm@gmail.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    memberSince: "March 2023",
    serviceRating: "4.8",
    completedServices: "24",
    responseTime: "2.4h",
    satisfactionRate: "96%",
  };

  // Chat messages for active chat
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi John! How is the design project going?",
      time: "10:30 AM",
      isOwn: false,
      isRead: true,
    },
    {
      id: 2,
      text: "Going well! I just finished the mockups.",
      time: "10:32 AM",
      isOwn: true,
      isRead: true,
    },
    {
      id: 3,
      text: "Great! Can you share them with me?",
      time: "10:33 AM",
      isOwn: false,
      isRead: true,
    },
    {
      id: 4,
      text: "Sure, I'll upload them in the next hour.",
      time: "10:35 AM",
      isOwn: true,
      isRead: true,
    },
    {
      id: 5,
      text: "Perfect! Looking forward to seeing them.",
      time: "10:36 AM",
      isOwn: false,
      isRead: true,
    },
  ]);

  // Chat contacts
  const chatContacts = [
    // {
    //   id: 1,
    //   name: "Sarah Johnson",
    //   time: "10:45",
    //   unread: 2,
    //   isOnline: true,
    // },
    // {
    //   id: 2,
    //   name: "Mike Chen",
    //   time: "09:20",
    //   unread: 0,
    //   isOnline: true,
    // },
    // {
    //   id: 3,
    //   name: "Design Team",
    //   time: "Yesterday",
    //   unread: 0,
    //   isOnline: false,
    // },
    // {
    //   id: 4,
    //   name: "Support Team",
    //   time: "Mar 12",
    //   unread: 0,
    //   isOnline: false,
    // },
  ];

  // Profile stats
  const profileStats = [
    { label: "Service Rating", value: "4.8", icon: <Star /> },
    { label: "Response Time", value: "2.4h", icon: <CheckCircle /> },
    { label: "Satisfaction Rate", value: "96%", icon: <TrendingUp /> },
    { label: "Member Since", value: "2023", icon: <Calendar /> },
  ];

  // Handle sending message
  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: messageInput,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isOwn: true,
        isRead: false,
      };
      setMessages([...messages, newMessage]);
      setMessageInput("");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const res = await userLogout(token);
        console.log(token);
        console.log(res);
        if (res.data?.sesuss) {
          sessionStorage.removeItem("token");
          dispatch(setUser(null));
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
    setShowLogoutConfirm(false);
  };

  // Handle Enter key press for sending message
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <LogOut className="text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Confirm Logout
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="flex-1 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-40">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-xl font-bold">USER DASHBOARD</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-900 text-white rounded-lg py-2 pl-10 pr-4 w-48 focus:outline-none"
              />
            </div>

            <button className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Simple Sidebar - Only Profile and Chat */}
      <aside
        className={`
        fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out z-30
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
      `}
      >
        {/* User Info */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <UserCircle size={40} className="text-gray-600" />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-black text-white rounded-full hover:bg-gray-800">
                <Edit size={16} />
              </button>
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              {profileData.name}
            </h2>
            <p className="text-gray-600 text-sm mt-1">Service Client</p>
          </div>
        </div>

        {/* Navigation - Only 2 Options */}
        <nav className="p-4">
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${
                  activeTab === "profile"
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <UserCircle size={20} />
              My Profile
            </button>

            <button
              onClick={() => setActiveTab("chat")}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${
                  activeTab === "chat"
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <MessageCircle size={20} />
              Messages
              <span className="ml-auto w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                4
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </nav>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="pt-16 lg:pl-64">
        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="p-4 md:p-6">
            {/* Profile Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>
              <p className="text-gray-600 mt-1">
                Manage your personal information
              </p>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-xl border border-gray-200 mb-6">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Personal Information
                  </h3>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    <Edit size={16} />
                    Edit Profile
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Mail className="text-gray-400" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Email Address</p>
                        <p className="font-medium text-gray-900">
                          {profileData.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <PhoneCall className="text-gray-400" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Phone Number</p>
                        <p className="font-medium text-gray-900">
                          {profileData.phone}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-gray-400" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-medium text-gray-900">
                          {profileData.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Calendar className="text-gray-400" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Member Since</p>
                        <p className="font-medium text-gray-900">
                          {profileData.memberSince}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Stats */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Profile Statistics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {profileStats.map((stat, index) => (
                  <ProfileStat key={index} {...stat} />
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Settings size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Account Settings
                      </p>
                      <p className="text-sm text-gray-600">
                        Update preferences
                      </p>
                    </div>
                  </div>
                </button>

                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Bell size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Notifications</p>
                      <p className="text-sm text-gray-600">Manage alerts</p>
                    </div>
                  </div>
                </button>

                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Go to Messages
                      </p>
                      <p className="text-sm text-gray-600">
                        Check conversations
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Chat Tab */}
        {activeTab === "chat" && (
          <div className="h-[calc(100vh-4rem)] flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveChat(null)}
                  className="lg:hidden mr-2"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="relative">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <UserCircle size={20} className="text-gray-600" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                  <p className="text-sm text-green-600">Online</p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreVertical size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="flex flex-1 overflow-hidden">
              {/* Chat Contacts Sidebar */}
              <div
                className={`${activeChat ? "hidden lg:block" : "block"} w-full lg:w-80 border-r border-gray-200 bg-white overflow-y-auto`}
              >
                <div className="p-4 border-b border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Messages</h4>
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      type="text"
                      placeholder="Search conversations..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                      value={serch}
                      onChange={serchhandel}
                    />
                  </div>
                </div>

                <div className="p-2">
                  {!serch &&
                    member.map((contact) => (
                      <div
                        key={contact._id}
                        onClick={() => {
                          setActiveChat(contact.id);
                          if (window.innerWidth < 1024) {
                            // On mobile, hide contacts sidebar when selecting a chat
                            // You could add logic here to switch views
                          }
                        }}
                      >
                        <ChatContact {...contact} />
                      </div>
                    ))}
                  {serch &&
                    messagelist.map((contact) => (
                      <div
                        key={contact.id}
                        onClick={() => {
                          setActiveChat(contact.id);
                          if (window.innerWidth < 1024) {
                            // On mobile, hide contacts sidebar when selecting a chat
                            // You could add logic here to switch views
                          }
                          console.log(contact._id)
                          create_conv(contact._id)
                        }}
                      >
                        <ChatContact {...contact} />
                      </div>
                    ))}
                </div>
              </div>

              {/* Chat Messages Area */}
              <div
                className={`${!activeChat ? "hidden lg:flex" : "flex"} flex-1 flex-col`}
              >
                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                  <div className="max-w-4xl mx-auto">
                    {messages.map((message) => (
                      <Message key={message.id} {...message} />
                    ))}
                  </div>
                </div>

                {/* Simple Message Input - No extra buttons */}
                <div className="border-t border-gray-200 bg-white p-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                          <input
                            type="text"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-3 focus:outline-none"
                          />
                          <button
                            onClick={handleSendMessage}
                            disabled={!messageInput.trim()}
                            className={`px-6 ${messageInput.trim() ? "bg-black hover:bg-gray-800" : "bg-gray-300 cursor-not-allowed"} text-white transition-colors`}
                          >
                            <Send size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Simple Footer */}
      <footer className="lg:pl-64 p-4 border-t border-gray-200 bg-white">
        <div className="text-center text-gray-500 text-sm">
          Simple Dashboard • {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default App;
