import React, { useState, useRef, useEffect } from "react";
import Bot from "../assets/Bot.png"
import Kate from "../assets/Kate.png"
const ResearchAI = () => {
  // State for conversations
  const [conversations, setConversations] = useState([
    
    { id: 1, title: "Research Paper 1", active: true, messages: [
      { text: "Hey there! Looks like you're checking out this research paper.", sender: "bot" },
      { text: "What would you like to know about it?", sender: "bot" }
    ] },
  ]);
  
  // State for current message
  const [currentMessage, setCurrentMessage] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    scrollToBottom();
  }, [conversations]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const updatedConversations = conversations.map(conv => {
      if (conv.active) {
        return {
          ...conv,
          messages: [
            ...conv.messages,
            { text: currentMessage, sender: "user" },
            { text: "I'm a simulated response. In a real app, this would come from your backend.", sender: "bot" }
          ]
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    setCurrentMessage("");
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        alert("Please upload a PDF file");
        return;
      }
      
      setUploadedFileName(file.name);
      
      // Create a new conversation for the uploaded PDF
      const newConversation = {
        id: Date.now(),
        title: file.name.length > 20 ? `${file.name.substring(0, 20)}...` : file.name,
        active: true,
        messages: [
          { text: `You've uploaded: ${file.name}`, sender: "bot" },
          { text: "What would you like to know about this document?", sender: "bot" }
        ]
      };
      
      // Deactivate all other conversations
      const updatedConversations = conversations.map(conv => ({
        ...conv,
        active: false
      }));
      
      setConversations([...updatedConversations, newConversation]);
    }
  };

  // Handle creating a new chat
  const handleNewChat = () => {
    const newConversation = {
      id: Date.now(),
      title: `New Chat ${conversations.length + 1}`,
      active: true,
      messages: [
        { text: "Hello! Upload a PDF to start chatting about it.", sender: "bot" }
      ]
    };
    
    // Deactivate all other conversations
    const updatedConversations = conversations.map(conv => ({
      ...conv,
      active: false
    }));
    
    setConversations([...updatedConversations, newConversation]);
    setUploadedFileName("");
  };

  // Handle switching conversations
  const switchConversation = (id) => {
    const updatedConversations = conversations.map(conv => ({
      ...conv,
      active: conv.id === id
    }));
    setConversations(updatedConversations);
  };

  // Handle clearing all conversations
  const clearAllConversations = () => {
    if (window.confirm("Are you sure you want to clear all conversations?")) {
      setConversations([]);
      setUploadedFileName("");
    }
  };

  // Get active conversation
  const activeConversation = conversations.find(conv => conv.active) || { messages: [] };

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left Sidebar */}
      <div className="w-64 flex flex-col border-r border-gray-200 p-4">
        <div className="font-bold text-lg mb-6">PRATISHAT AI</div>
        
        {/* New Chat Button */}
        <button 
          onClick={handleNewChat}
          className="bg-indigo-500 text-white rounded-full py-2 px-4 flex items-center justify-center mb-6 hover:bg-indigo-600 transition-colors"
        >
          <span className="mr-2">+</span>
          New chat
        </button>
        
        {/* PDF Upload Button */}
        <label className="">
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".pdf"
            className="hidden"
          />
          
          
        </label>
        
        {uploadedFileName && (
          <div className="">
            
          </div>
        )}
        
        <div className="flex justify-between items-center mb-4 text-xs">
          <span className="text-gray-500">Your conversations</span>
          <button 
            onClick={clearAllConversations}
            className="text-indigo-500 hover:text-indigo-700"
          >
            Clear All
          </button>
        </div>
        
        {/* Conversation List */}
        <div className="flex-1 overflow-auto">
          {conversations.map((conv) => (
            <div 
              key={conv.id}
              onClick={() => switchConversation(conv.id)}
              className={`flex items-center py-2 px-2 text-sm rounded-md cursor-pointer ${conv.active ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100'}`}
            >
              <div className={`mr-3 ${conv.active ? 'text-indigo-500' : 'text-gray-500'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="truncate flex-1">{conv.title}</span>
              {conv.active && (
                <div className="ml-auto flex">
                  <button className="text-gray-400 hover:text-gray-600 mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
          
          {/* Sample archived conversations */}
          <div className="text-xs text-gray-500 py-2">Past 7 Days</div>
          
          <div className="flex items-center py-2 px-2 text-sm rounded-md hover:bg-gray-100 cursor-pointer">
            <div className="mr-3 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Research Paper 4</span>
          </div>
        </div>
        
        {/* Settings */}
        <div className="mt-auto">
          <div className="flex items-center py-2 text-sm hover:bg-gray-100 rounded-md px-2 cursor-pointer">
            <div className="mr-3 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Settings</span>
          </div>
          
          <div className="flex items-center py-2 text-sm mt-4 hover:bg-gray-100 rounded-md px-2 cursor-pointer">
            <img src={Kate} alt="" className="mr-2"/>
            <span>Kate Williamson</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* PDF Viewer Area - You can implement PDF viewer here later */}
        <div className="flex-1 overflow-auto p-4 bg-gray-50 flex items-center justify-center">
          {uploadedFileName ? (
            <div className="text-center">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="text-lg font-medium mb-2">{uploadedFileName}</h3>
              <p className="text-gray-500">PDF viewer would be implemented here</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-lg font-medium mb-2">No PDF uploaded</h3>
              <p className="text-gray-500">Upload a PDF to start chatting about it</p>
              <button 
                onClick={() => fileInputRef.current.click()}
                className="mt-4 bg-indigo-500 text-white rounded-full py-2 px-6 hover:bg-indigo-600 transition-colors"
              >
                Upload PDF
              </button>
            </div>
          )}
        </div>
        
        {/* Chat Interface */}
        <div className="w-96 border-l border-gray-200 flex flex-col">
          <div className="flex-1 overflow-auto p-4">
            {activeConversation.messages.length > 0 ? (
              activeConversation.messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex mb-6 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full  flex items-center justify-center text-white mr-3 flex-shrink-0">
                      <img src={Bot} alt="" />
                    </div>
                  )}
                  <div className={`max-w-xs ${message.sender === 'user' ? 'bg-indigo-500 text-white rounded-l-lg rounded-br-lg' : 'bg-gray-100 rounded-r-lg rounded-bl-lg'} p-3`}>
                    <div className="text-sm">{message.text}</div>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white ml-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                Start a conversation by sending a message
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <button 
                onClick={() => fileInputRef.current.click()}
                className="mr-2 text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask something about the PDF..."
                className="bg-transparent flex-1 focus:outline-none text-sm"
              />
             <button 
  onClick={handleSendMessage}
  disabled={!currentMessage.trim()}
  className={`ml-2 w-8 h-8 rounded-full flex items-center justify-center ${currentMessage.trim() ? 'bg-indigo-500 text-white hover:bg-indigo-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 rotate-90" 
    viewBox="0 0 20 20" 
    fill="currentColor"
  >
    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
  </svg>
</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchAI;