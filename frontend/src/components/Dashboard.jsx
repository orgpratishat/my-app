import React from 'react'
import { Bell, Plus, Search, Settings, HelpCircle, Moon,  MessageCircle, Share2, ChevronDown,Heart, ChevronRight } from "lucide-react"
import Finance from "../assets/finance.png";

import Home from "../assets/Home.png";
import Inbox from "../assets/Inbox.png";
import Notification from "../assets/Notification.png";
import Kate from "../assets/Kate.png";
import Eco from "../assets/Eco.png";
import Miro from "../assets/Miro.png";
import Abode from "../assets/Abode.png";
import Canvas from "../assets/Canvas.png";
import comment from "../assets/comment.png";
import share from "../assets/share.png";
import illustration from "../assets/illustration.png";
import Icon from "../assets/Icons.png";
import Retweet from "../assets/retweet.png";

import { useState } from "react";

const Dashboard = () => {

    const [isOn, setIsOn] = useState(true);

  return (
    <>
    
    <div className="flex h-screen bg-white overflow-y-hidden">
      {/* Sidebar */}
      <div className="w-64  border-r border-gray-100 p-6 flex flex-col overflow-y-auto scrollbar-hide">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-[#2d3e50]">
            Prati<span className="text-[#a8d5ba]">Shat</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-4 ">
          <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 cursor-pointer">
            <img src={Home} alt="" className='h-[20px]'/>
            <span className="font-medium">Home</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 cursor-pointer">
          <img src={Inbox} alt="" className='h-[13.5px]'/>
            <span className="font-medium">Inbox</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 cursor-pointer">
          <img src={Notification} alt="" className='h-[16.5px]'/>
            <span className="font-medium">Notifications</span>
          </div>
        </nav>

        {/* Topics */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">Topics</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Plus size={18} />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 bg-blue-900 rounded-md flex items-center justify-center text-white text-xs">
                <img src={Eco} alt="" />
              </div>
              <span className="text-black text-sm font-semibold">Economics</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 bg-yellow-500 rounded-md flex items-center justify-center text-white text-xs">
              <img src={Miro} alt="" />
              </div>
              <span className="text-black text-sm font-semibold">Politics</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 bg-red-500 rounded-md flex items-center justify-center text-white text-xs">
              <img src={Abode} alt="" />
              </div>
              <span className="text-black text-sm font-semibold">Health</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs">
              <img src={Canvas} alt="" />
              </div>
              <span className="text-black text-sm font-semibold">Lifestyle</span>
            </div>
          </div>
        </div>

        {/* Groups */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">Groups</span>
            <button className="text-gray-400 hover:text-gray-600">
              <Plus size={18} />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 bg-blue-900 rounded-md flex items-center justify-center text-white text-xs">
                <img src={Eco} alt="" />
              </div>
              <span className="text-black text-sm font-semibold">Figma</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 bg-yellow-500 rounded-md flex items-center justify-center text-white text-xs">
              <img src={Miro} alt="" />
              </div>
              <span className="text-black text-sm font-semibold">Miro</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 bg-red-500 rounded-md flex items-center justify-center text-white text-xs">
              <img src={Abode} alt="" />
              </div>
              <span className="text-black text-sm font-semibold">Adobe</span>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs">
              <img src={Canvas} alt="" />
              </div>
              <span className="text-black text-sm font-semibold">Canva</span>
            </div>
          </div>
          
        </div>

        {/* Bottom items */}
        <div className="mt-10 space-y-4">
          <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 cursor-pointer">
            <Settings size={20} />
            <span className="text-sm font-semibold">Settings</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 hover:text-gray-900 cursor-pointer">
            <HelpCircle size={20} />
            <span className="text-sm font-semibold">Help & support</span>
          </div>

          {/* Dark mode toggle */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Moon size={20} className="text-gray-500" />
              <span className="text-gray-600 text-sm font-semibold">Dark Mode</span>
            </div>
          

<div
      className={`w-12 h-6 flex items-center px-1 rounded-full cursor-pointer transition-all ${
        isOn ? "bg-blue-500" : "bg-gray-400"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transition-all ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
   
    </div>

          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="h-16 border-b border-gray-100 flex items-center justify-end px-6 gap-4">
          <button className="text-gray-400 hover:text-gray-600">
            <Search size={20} />
          </button>
          <button className="text-[#000000] hover:text-gray-600 font-extrabold cursor-pointer">
            <Plus size={23} />
          </button>
          <div className="flex items-center gap-2 cursor-pointer border border-gray-100 rounded-md p-1">
            <img src={Kate} alt="" className='h-8'/>
            <div className="w-9 h-9 flex items-center justify-center text-[#000000]">KR</div>
            <ChevronDown size={16} className="text-[#000000]" />
          </div>
        </header>

      
        <main className="pr-6 shadow-md mt-8 pb-1 ml-1 mr-1 rounded-md">
  <div className="flex flex-col items-center mb-4">
    <h2 className="text-lg font-semibold text-center mb-3">Rise of GDP in Central Africa</h2>

    <div className="w-full flex flex-col md:flex-row gap-4">
      {/* Left side - Chart Image */}
      <div className="w-full md:w-1/4 flex justify-center">
        <img src={illustration} alt="GDP Chart" className="w-full max-w-xs" />
      </div>

      {/* Right side - Progress and Info */}
      <div className="w-full md:w-3/4">
        {/* Progress Steps */}
        <div className="flex flex-col mb-4">
          {/* Proposal Step */}
          <div className="flex mb-2">
            <div className="flex flex-col items-center mr-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
              <div className="h-10 w-0.5 bg-blue-600 mt-1"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-xs font-medium text-gray-500">Proposal</h3>
              <p className="text-gray-500 text-xs mt-1">
                Accepted: Experts in banking, finance, and economics.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                <strong>Domains:</strong> Statisticians, Data Scientists, Demographers.
              </p>
              <div className="text-right">
                <button className="text-gray-500 cursor-pointer text-xs">Read More...</button>
              </div>
            </div>
          </div>

          {/* Survey Step */}
          <div className="flex mb-2">
            <div className="flex flex-col items-center mr-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">✓</div>
              <div className="h-10 w-0.5 bg-blue-600 mt-1"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-xs font-medium text-gray-500">Survey</h3>
              <p className="text-gray-500 text-xs mt-1">
                <strong>GDP Growth:</strong> Central Africa's GDP rose to <span className="text-blue-600">5.0%</span> in 2022
                from <span className="text-blue-600">3.4%</span> in 2021.
              </p>
              <div className="text-right">
                <button className="text-gray-500 text-xs cursor-pointer">Read More...</button>
              </div>
            </div>
          </div>

          {/* Research Step */}
          <div className="flex">
            <div className="flex flex-col items-center mr-2">
              <img src={Icon} alt="" />
            </div>
            <div className="flex-1">
              <h3 className="text-xs font-medium text-gray-500">Research</h3>
              <p className="text-gray-500 text-xs mt-1">Ongoing study.</p>
            </div>
          </div>
        </div>
        

     <div className='flex justify-center md:justify-end mb-3 gap-2'>
         {/* Contribution Button */}
         <div className="relative group">
  <button className="flex items-center justify-center px-3 py-1 text-gray-800 text-xs font-medium cursor-pointer relative">
    Contribute
    <ChevronRight size={15} className="ml-1 transform opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
  </button>
  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></div>
</div>



        {/* View Post Button */}
        <div className="relative group">
  <button className="flex items-center justify-center px-3 py-1 text-gray-800 text-xs font-medium cursor-pointer relative">
    View Post
    <ChevronRight size={15} className="ml-1 transform opacity-100 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
  </button>
 
</div>

     </div>
      </div>
    </div>
  </div>

  {/* Engagement Stats */}
  <div className="flex justify-around items-center text-xs mb-2">
    <div className="flex items-center space-x-1">
      <Heart className="text-gray-500" size={18} fill='red' color='red'/>
      <span className="text-gray-700">25k Upvoted</span>
    </div>
    <div className="flex items-center space-x-1">
      <img src={Retweet} alt="" className='h-5'/>
      <span className="text-gray-700">2.4k Supoorted</span>
    </div>
    <div className="flex items-center space-x-1">
      <MessageCircle className="text-gray-500" size={18} />
      <span className="text-gray-700">4.4k</span>
    </div>
    <div className="flex items-center space-x-1">
      <Share2 className="text-gray-500" size={18} />
      <span className="text-gray-700">1.5k</span>
    </div>
  </div>
</main>



      </div>
    </div>

    </>
  )
}

export default Dashboard
