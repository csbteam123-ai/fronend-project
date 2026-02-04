import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/section1/Navbar";

const SimpleChatApp = () => {
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState("");
  const [showNameInput, setShowNameInput] = useState(true);
  
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Start chat
  const startChat = () => {
    if (!userName.trim()) {
      alert("Please enter your name first");
      return;
    }
    
    setChatStarted(true);
    
    // Add welcome message
    const welcomeMessage = {
      id: 1,
      text: `Hello ${userName}! I'm here to listen. What would you like to share today?`,
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([welcomeMessage]);
  };

  // Send message
  const sendMessage = (e) => {
    e.preventDefault();
    
    if (!userMessage.trim()) return;

    // Add user message
    const userMsg = {
      id: messages.length + 1,
      text: userMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    setUserMessage("");
    setIsTyping(true);

    // Bot response after delay
    setTimeout(() => {
      const responses = [
        "I understand. Please continue...",
        "That's interesting. Tell me more.",
        "How did that make you feel?",
        "Thank you for sharing that with me.",
        "I'm here to listen. What else is on your mind?",
        "That sounds important. Would you like to elaborate?",
        "I appreciate you opening up about this.",
        "Your feelings are valid. Please continue.",
        "Take your time. I'm listening.",
        "That's quite insightful. Please go on.",
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Quick replies
  const quickReplies = [
    "I'm feeling sad today",
    "I want to share something happy",
    "I need someone to listen",
    "I have something on my mind",
    "Just wanted to talk"
  ];

  const handleQuickReply = (reply) => {
    setUserMessage(reply);
  };

  // End chat
  const endChat = () => {
    if (window.confirm("Are you sure you want to end the conversation?")) {
      const endMessage = {
        id: messages.length + 1,
        text: "Thank you for sharing. Take care!",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, endMessage]);
      setTimeout(() => {
        setChatStarted(false);
        setMessages([]);
        setShowNameInput(true);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-5">
      {/* Header */}
      <Navbar className=" text-white " buttonbg="bg-white text-black" mobile_btn_col="white"/>

      {/* Name Input Modal */}
      {showNameInput && !chatStarted && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                👂
              </div>
              <h2 className="text-2xl font-bold mb-2">Welcome</h2>
              <p className="text-gray-400">This is a safe space to share your thoughts</p>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (userName.trim()) {
                setShowNameInput(false);
              }
            }}>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="What should I call you?"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-gray-600"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition"
              >
                Enter Listening Space
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto p-4">
        {!chatStarted && !showNameInput ? (
          // Start Screen
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-8 text-center">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                👂
              </div>
              <h2 className="text-2xl font-bold mb-4">Hello {userName}</h2>
              <p className="text-gray-400 mb-8">
                This is a judgment-free zone where you can share anything on your mind. 
                I'm here to listen and provide a supportive space for you.
              </p>
              <button
                onClick={startChat}
                className="px-8 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition text-lg"
              >
                Start Sharing
              </button>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h3 className="font-bold mb-4">How this works:</h3>
                <ul className="text-gray-400 space-y-2 text-left max-w-md mx-auto">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Share whatever is on your mind</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>No judgment, just listening</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Take your time, there's no rush</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Your privacy is respected</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // Chat Interface
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 rounded-xl border border-gray-800 h-[calc(100vh-200px)] flex flex-col">
              {/* Chat Header */}
              <div className="border-b border-gray-800 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                      👂
                    </div>
                    <div>
                      <h3 className="font-bold">Listening Space</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-400 text-sm">Ready to listen</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={endChat}
                    className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition text-sm"
                  >
                    End Session
                  </button>
                </div>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-2 self-end">
                        👂
                      </div>
                    )}
                    
                    <div className="max-w-[70%]">
                      <div
                        className={`rounded-lg p-3 ${message.sender === "user" ? 'bg-white text-black rounded-br-none' : 'bg-gray-800 border border-gray-700 rounded-bl-none'}`}
                      >
                        <p className="break-words">{message.text}</p>
                        <div className={`text-xs mt-1 ${message.sender === "user" ? 'text-gray-600' : 'text-gray-400'}`}>
                          {message.timestamp}
                        </div>
                      </div>
                    </div>
                    
                    {message.sender === "user" && (
                      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center ml-2 self-end">
                        <span className="text-sm">👤</span>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-2">
                      👂
                    </div>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg rounded-bl-none p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="border-t border-gray-800 p-4">
                  <p className="text-gray-400 text-sm mb-2">Quick starters:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply)}
                        className="px-3 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message Input */}
              <div className="border-t border-gray-800 p-4">
                <form onSubmit={sendMessage} className="flex space-x-2">
                  <input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Share what's on your mind..."
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-600"
                  />
                  <button
                    type="submit"
                    disabled={!userMessage.trim()}
                    className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 disabled:bg-gray-800 disabled:text-gray-400"
                  >
                    Share
                  </button>
                </form>
              </div>
            </div>

            {/* Info Panel */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl mb-2">👂</div>
                  <h4 className="font-bold mb-1">Active Listening</h4>
                  <p className="text-gray-400 text-sm">Fully present and attentive</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">🔒</div>
                  <h4 className="font-bold mb-1">Private & Secure</h4>
                  <p className="text-gray-400 text-sm">Your thoughts stay here</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">💫</div>
                  <h4 className="font-bold mb-1">No Judgment</h4>
                  <p className="text-gray-400 text-sm">Safe space to express</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 p-4 mt-6">
        <div className="container mx-auto text-center text-gray-400 text-sm">
          <p>👂 Listening Space • A place to be heard • No judgment • Complete privacy</p>
        </div>
      </footer>
    </div>
  );
};

export default SimpleChatApp;