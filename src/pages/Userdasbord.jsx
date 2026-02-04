import React, { useState, useEffect } from "react";

const UserDashboard = () => {
  // User state
  const [user, setUser] = useState({
    id: "USR-001",
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "👤",
    role: "Premium User",
    joinDate: "2024-01-15",
    status: "Active",
    location: "Dhaka, Bangladesh",
    phone: "+880 1234 567890"
  });

  // Dashboard stats
  const [stats, setStats] = useState({
    totalProjects: 12,
    completedProjects: 8,
    ongoingProjects: 3,
    pendingProjects: 1,
    totalHours: 156,
    avgRating: 4.7,
    totalEarnings: "$2,450",
    tasksCompleted: 42
  });

  // Recent activities
  const [activities, setActivities] = useState([
    { id: 1, action: "Project Completed", details: "E-commerce Website", time: "2 hours ago", icon: "✅" },
    { id: 2, action: "New Message", details: "From Client: Design Review", time: "5 hours ago", icon: "💬" },
    { id: 3, action: "Payment Received", details: "$450 for Web Development", time: "1 day ago", icon: "💰" },
    { id: 4, action: "Task Updated", details: "Added new features", time: "2 days ago", icon: "📝" },
    { id: 5, action: "Profile Updated", details: "Changed profile picture", time: "3 days ago", icon: "👤" },
  ]);

  // Projects data
  const [projects, setProjects] = useState([
    { id: 1, name: "E-commerce Website", client: "Tech Corp", status: "Completed", progress: 100, deadline: "2024-03-15", budget: "$1,200" },
    { id: 2, name: "Mobile App UI/UX", client: "Startup Inc", status: "Ongoing", progress: 75, deadline: "2024-03-25", budget: "$800" },
    { id: 3, name: "SEO Optimization", client: "Digital Agency", status: "Ongoing", progress: 45, deadline: "2024-04-05", budget: "$500" },
    { id: 4, name: "Logo Design", client: "Brand Studio", status: "Pending", progress: 20, deadline: "2024-03-30", budget: "$300" },
    { id: 5, name: "Content Writing", client: "Media House", status: "Completed", progress: 100, deadline: "2024-03-10", budget: "$400" },
  ]);

  // Tasks data
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design Homepage", project: "E-commerce", priority: "High", status: "In Progress", dueDate: "Today" },
    { id: 2, title: "Fix Mobile Bugs", project: "Mobile App", priority: "Medium", status: "Pending", dueDate: "Tomorrow" },
    { id: 3, title: "Write Blog Post", project: "Content", priority: "Low", status: "Completed", dueDate: "Yesterday" },
    { id: 4, title: "Client Meeting", project: "All", priority: "High", status: "Pending", dueDate: "Today" },
    { id: 5, title: "Update Portfolio", project: "Personal", priority: "Medium", status: "In Progress", dueDate: "This Week" },
  ]);

  // Notifications
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New message from client", time: "10 min ago", read: false, type: "message" },
    { id: 2, message: "Payment received successfully", time: "2 hours ago", read: true, type: "payment" },
    { id: 3, message: "Project deadline approaching", time: "1 day ago", read: false, type: "deadline" },
    { id: 4, message: "New project assigned", time: "2 days ago", read: true, type: "project" },
  ]);

  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Calculate unread notifications
  const unreadNotifications = notifications.filter(n => !n.read).length;

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  // Delete notification
  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get status color
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'completed': return 'bg-gray-800 text-white';
      case 'ongoing': return 'bg-gray-200 text-black';
      case 'pending': return 'bg-gray-500 text-white';
      case 'active': return 'bg-green-500 text-white';
      case 'inactive': return 'bg-red-500 text-white';
      default: return 'bg-gray-200 text-black';
    }
  };

  // Get priority color
  const getPriorityColor = (priority) => {
    switch(priority.toLowerCase()) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center font-bold mr-3">
                👤
              </div>
              <h1 className="text-xl font-bold hidden md:block">User Dashboard</h1>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <button className="p-2 hover:bg-gray-800 rounded-lg">
                  <span className="text-xl">🔔</span>
                  {unreadNotifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {unreadNotifications}
                    </span>
                  )}
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  {user.avatar}
                </div>
                <div className="hidden lg:block">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-gray-400 text-sm">{user.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Mobile/Tablet */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)}>
              <div className="absolute left-0 top-0 h-full w-64 bg-gray-900 border-r border-gray-800 p-4" onClick={e => e.stopPropagation()}>
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      {user.avatar}
                    </div>
                    <div>
                      <p className="font-bold">{user.name}</p>
                      <p className="text-gray-400 text-sm">{user.role}</p>
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <nav className="space-y-2">
                    {['overview', 'projects', 'tasks', 'profile', 'settings'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => {
                          setActiveTab(tab);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === tab ? 'bg-white text-black' : 'hover:bg-gray-800'}`}
                      >
                        <span className="mr-3">
                          {tab === 'overview' && '📊'}
                          {tab === 'projects' && '📁'}
                          {tab === 'tasks' && '✅'}
                          {tab === 'profile' && '👤'}
                          {tab === 'settings' && '⚙️'}
                        </span>
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          )}

          {/* Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl">
                    {user.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{user.name}</p>
                    <p className="text-gray-400">{user.role}</p>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs mt-1 ${getStatusColor(user.status)}`}>
                      {user.status}
                    </div>
                  </div>
                </div>
                
                {/* User Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-3">📧</span>
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-3">📱</span>
                    <span className="text-sm">{user.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-3">📍</span>
                    <span className="text-sm">{user.location}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-3">📅</span>
                    <span className="text-sm">Joined {formatDate(user.joinDate)}</span>
                  </div>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="space-y-2">
                {[
                  { id: 'overview', icon: '📊', label: 'Overview' },
                  { id: 'projects', icon: '📁', label: 'Projects' },
                  { id: 'tasks', icon: '✅', label: 'Tasks' },
                  { id: 'profile', icon: '👤', label: 'Profile' },
                  { id: 'settings', icon: '⚙️', label: 'Settings' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === item.id ? 'bg-white text-black' : 'hover:bg-gray-800'}`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Notifications Panel */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Notifications</h3>
                <button 
                  onClick={markAllAsRead}
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Mark all read
                </button>
              </div>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {notifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`p-3 rounded-lg border ${notification.read ? 'border-gray-800' : 'border-gray-700 bg-gray-800'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-sm">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                      </div>
                      <button 
                        onClick={() => deleteNotification(notification.id)}
                        className="text-gray-500 hover:text-white ml-2"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold capitalize">{activeTab}</h2>
                  <p className="text-gray-400 text-sm">
                    {activeTab === 'overview' && 'Welcome back! Here is your dashboard overview'}
                    {activeTab === 'projects' && 'Manage and track your projects'}
                    {activeTab === 'tasks' && 'Your current tasks and activities'}
                    {activeTab === 'profile' && 'Manage your profile information'}
                    {activeTab === 'settings' && 'Configure your account settings'}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <div className="relative md:hidden">
                    <button className="p-2 hover:bg-gray-800 rounded-lg">
                      <span className="text-xl">🔔</span>
                      {unreadNotifications > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {unreadNotifications}
                        </span>
                      )}
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200">
                    + New {activeTab === 'projects' ? 'Project' : activeTab === 'tasks' ? 'Task' : 'Item'}
                  </button>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Projects', value: stats.totalProjects, icon: '📁', color: 'bg-gray-800' },
                    { label: 'Completed', value: stats.completedProjects, icon: '✅', color: 'bg-gray-800' },
                    { label: 'Ongoing', value: stats.ongoingProjects, icon: '⏳', color: 'bg-gray-800' },
                    { label: 'Total Earnings', value: stats.totalEarnings, icon: '💰', color: 'bg-gray-800' },
                  ].map((stat, index) => (
                    <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                        </div>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                          <span className="text-xl">{stat.icon}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts & Projects */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Projects */}
                  <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold">Recent Projects</h3>
                      <button className="text-sm text-gray-400 hover:text-white">
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      {projects.slice(0, 3).map(project => (
                        <div key={project.id} className="flex items-center justify-between p-3 border border-gray-800 rounded-lg">
                          <div>
                            <p className="font-medium">{project.name}</p>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-sm text-gray-400">{project.client}</span>
                              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                                {project.status}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">{project.budget}</p>
                            <p className="text-sm text-gray-400">Deadline: {formatDate(project.deadline)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Activities */}
                  <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold">Recent Activities</h3>
                      <button className="text-sm text-gray-400 hover:text-white">
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      {activities.map(activity => (
                        <div key={activity.id} className="flex items-start space-x-3 p-3 border border-gray-800 rounded-lg">
                          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                            {activity.icon}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-gray-400 text-sm mt-1">{activity.details}</p>
                            <p className="text-gray-500 text-xs mt-2">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                  <h3 className="font-bold mb-6">Quick Stats</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Tasks Completed', value: stats.tasksCompleted, icon: '✅' },
                      { label: 'Total Hours', value: stats.totalHours, icon: '⏱️' },
                      { label: 'Avg Rating', value: stats.avgRating, icon: '⭐' },
                      { label: 'Pending Tasks', value: tasks.filter(t => t.status === 'Pending').length, icon: '📝' },
                    ].map((stat, index) => (
                      <div key={index} className="text-center p-4 border border-gray-800 rounded-lg">
                        <div className="text-3xl font-bold mb-2">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-6">
                {/* Projects Table */}
                <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-800">
                      <thead className="bg-gray-800">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Project</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Client</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Progress</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Deadline</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Budget</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        {projects.map(project => (
                          <tr key={project.id} className="hover:bg-gray-800">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-medium">{project.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-gray-400">{project.client}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                                {project.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="w-full bg-gray-800 rounded-full h-2">
                                <div 
                                  className="bg-white h-2 rounded-full" 
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                              <div className="text-xs text-gray-400 mt-1">{project.progress}%</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm">{formatDate(project.deadline)}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-bold">{project.budget}</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tasks' && (
              <div className="space-y-6">
                {/* Tasks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Pending', 'In Progress', 'Completed'].map(status => (
                    <div key={status} className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                      <h3 className="font-bold mb-6">{status} Tasks</h3>
                      <div className="space-y-4">
                        {tasks
                          .filter(task => task.status === status)
                          .map(task => (
                            <div key={task.id} className="p-4 border border-gray-800 rounded-lg">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-medium">{task.title}</h4>
                                <span className={`text-xs font-bold ${getPriorityColor(task.priority)}`}>
                                  {task.priority}
                                </span>
                              </div>
                              <div className="flex justify-between items-center mt-4">
                                <span className="text-sm text-gray-400">{task.project}</span>
                                <span className="text-sm text-gray-400">{task.dueDate}</span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                  <h3 className="font-bold mb-6">Profile Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                        <input 
                          type="text" 
                          value={user.name}
                          onChange={(e) => setUser({...user, name: e.target.value})}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Email</label>
                        <input 
                          type="email" 
                          value={user.email}
                          onChange={(e) => setUser({...user, email: e.target.value})}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Phone</label>
                        <input 
                          type="tel" 
                          value={user.phone}
                          onChange={(e) => setUser({...user, phone: e.target.value})}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Location</label>
                        <input 
                          type="text" 
                          value={user.location}
                          onChange={(e) => setUser({...user, location: e.target.value})}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Role</label>
                        <select 
                          value={user.role}
                          onChange={(e) => setUser({...user, role: e.target.value})}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
                        >
                          <option>Basic User</option>
                          <option>Premium User</option>
                          <option>Pro User</option>
                          <option>Admin</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Status</label>
                        <select 
                          value={user.status}
                          onChange={(e) => setUser({...user, status: e.target.value})}
                          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3"
                        >
                          <option>Active</option>
                          <option>Inactive</option>
                          <option>Busy</option>
                          <option>Away</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-4 mt-8">
                    <button className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800">
                      Cancel
                    </button>
                    <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                  <h3 className="font-bold mb-6">Account Settings</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-4">Privacy Settings</h4>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span>Show profile to other users</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span>Allow notifications</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          <span>Email notifications for new messages</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-4">Security</h4>
                      <button className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800">
                        Change Password
                      </button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-4">Data & Privacy</h4>
                      <button className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800">
                        Download Data
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;