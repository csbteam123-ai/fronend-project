import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, Home, Settings, Bell, User as UserIcon, LogOut } from 'lucide-react';

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };


  

  // Login/Signup form
  const AuthForm = () => (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Left side - Illustration/Info */}
      <div className="md:w-1/2 bg-black text-white p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            {isLogin ? 'Welcome Back' : 'Join Our Community'}
          </h1>
          <p className="text-gray-300 mb-8">
            {isLogin 
              ? 'Sign in to access your personalized dashboard, saved preferences, and exclusive content.' 
              : 'Create an account to unlock all features, save your progress, and connect with others.'}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                <span className="text-lg font-bold">✓</span>
              </div>
              <p>Secure & encrypted authentication</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                <span className="text-lg font-bold">✓</span>
              </div>
              <p>Access across all your devices</p>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                <span className="text-lg font-bold">✓</span>
              </div>
              <p>24/7 customer support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Login to Your Account' : 'Create New Account'}
            </h2>
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={toggleForm}
                className="ml-2 font-semibold text-black hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={20} className="text-gray-500" />
                  </div>
                  <input 
                    type="text" 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={20} className="text-gray-500" />
                </div>
                <input 
                  type="email" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={20} className="text-gray-500" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                  placeholder="••••••••"
                  required
                />
                <button 
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={20} className="text-gray-500" />
                  ) : (
                    <Eye size={20} className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="remember"
                    className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                  />
                  <label htmlFor="remember" className="ml-2 text-gray-700">Remember me</label>
                </div>
                <a href="#" className="text-black font-medium hover:underline">Forgot password?</a>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-900 transition duration-300 shadow-md"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid ">
              <button 
                type="button"
                className="flex items-center w-full justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  // Future Sticky Dashboard
  const FutureStickyPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold">F</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">FutureSticky</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-black">
              <Bell size={22} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="relative p-2 text-gray-600 hover:text-black">
              <Settings size={22} />
            </button>
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-medium">JD</span>
              </div>
              <span className="font-medium">John Doe</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center text-gray-600 hover:text-black"
            >
              <LogOut size={20} className="mr-1" />
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block w-64 bg-white border-r min-h-[calc(100vh-72px)]">
          <nav className="p-6 space-y-2">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'home' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Home size={20} className="mr-3" />
              Dashboard Home
            </button>
            <button 
              onClick={() => setActiveTab('projects')}
              className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'projects' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              My Projects
            </button>
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'analytics' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Analytics
            </button>
            <button 
              onClick={() => setActiveTab('team')}
              className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'team' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <UserIcon size={20} className="mr-3" />
              Team Members
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'settings' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Settings size={20} className="mr-3" />
              Settings
            </button>
          </nav>

          {/* Sticky Notes Section */}
          <div className="mt-8 px-6">
            <h3 className="font-medium text-gray-700 mb-3">Sticky Notes</h3>
            <div className="space-y-3">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-gray-800">Meeting with team at 3 PM</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-gray-800">Finish project proposal</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-gray-800">Send report to client</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
            <p className="text-gray-600">Here's what's happening with your projects today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Active Projects</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Completed</p>
                  <p className="text-2xl font-bold">28</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Pending</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex items-center">
                <div className="p-3 bg-red-100 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Growth</p>
                  <p className="text-2xl font-bold">24%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Projects</h3>
              <div className="space-y-4">
                {['Website Redesign', 'Mobile App Development', 'Marketing Campaign', 'Product Launch'].map((project, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-3 ${index % 3 === 0 ? 'bg-green-500' : index % 3 === 1 ? 'bg-blue-500' : 'bg-yellow-500'}`}></div>
                      <span className="font-medium">{project}</span>
                    </div>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">New Project</span>
                </button>
                
                <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Upload File</span>
                </button>
                
                <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Invite Team</span>
                </button>
                
                <button className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return isLoggedIn ? <FutureStickyPage /> : <AuthForm />;
};

export default LoginSignupPage;