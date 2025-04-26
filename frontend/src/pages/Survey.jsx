import React, { useState } from 'react';
import { 
  PencilIcon, 
  XMarkIcon, 
  ChevronUpIcon, 
  ChevronDownIcon, 
  PlusIcon, 
  InboxIcon, 
  QuestionMarkCircleIcon 
} from '@heroicons/react/24/outline';
import  chart from "../assets/chart.png"
import create_research_paper from "../assets/create-research-paper.png"
import profile from "../assets/profile.png"
import participants from "../assets/participants.png"
import submissions from "../assets/submissions.png"
const Survey = () => {
  return (
    <div className="flex h-screen bg-white ">
      {/* Left Sidebar */}
      <div className="w-64 border-r border-gray-200 flex flex-col ">
              <div className="p-4 border-b border-gray-200 flex items-center">
                <div className="w-8 h-4 bg-gray-200 flex items-center justify-center rounded">
                  <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <span className="ml-3 text-sm font-bold text-gray-700">Project Name</span>
                <PencilIcon className="w-4 h-4 ml-auto text-gray-500" />
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 bg-emerald-100 rounded-sm flex items-center justify-center">
                  <img src={chart} alt="" />
                  </div>
                  <span className="ml-3 text-xs font-medium text-gray-700">Create Proposal</span>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 bg-[#4fd1c5] rounded-full flex items-center justify-center">
                    <PlusIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="ml-3 text-xs font-medium text-gray-500">Create Survey</span>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 bg-gray-100 rounded-sm flex items-center justify-center">
                   <img src={create_research_paper} alt="" />
                  </div>
                  <span className="ml-3 text-xs font-medium text-gray-500">Create Research Paper</span>
                </div>
      
                
              </div>
      
              
              
              <div className="mt-2 px-4">
                <h3 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">ACCOUNT PAGES</h3>
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img src={profile} alt="" />
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-500">Profile</span>
                </div>
              </div>
              
              <div className="mt-4 px-4">
                <h3 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">INSIGHTS</h3>
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#5ad4c8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 12H7L10 19L14 5L17 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-500">Performance</span>
                </div>
      
              
      
             
              </div>
      
      
              <div className="mt-4 px-4">
                <h3 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">Share</h3>
               
      
                
              </div>
              
            
            </div>
      
      {/* Main Content */}
      <div className="flex-1 flex overflow-y-auto s">
        <div className="flex-1 overflow-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between ">
              <div className="relative w-full mt-7">
                <input 
                  type="text" 
                  className="w-full text-xs border border-gray-300 rounded-lg py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Survey Name"
                 
                />
                <PencilIcon className="w-3 h-3 text-gray-800 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
             
            </div>
            
            <div className="mt-8">
              <h2 className="text-sm font-medium text-gray-700 mb-2">Statement Of Purpose</h2>
              <div className="border border-gray-300 rounded-lg p-4 mb-2">
                <textarea 
                  className="w-full text-sm h-40 resize-none focus:outline-none text-gray-700" 
                  placeholder="Description of the survey"
                ></textarea>
                <div className="flex items-center border-t border-gray-200 pt-3 mt-2">
                  <button className="p-1 text-gray-500 mr-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  </button>
                  <button className="p-1 text-gray-500 mr-1 font-bold">B</button>
                  <button className="p-1 text-gray-500 mr-1 italic">I</button>
                  <button className="p-1 text-gray-500 mr-1 underline">U</button>
                  <button className="p-1 text-gray-500 mr-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                    </svg>
                  </button>
                  <button className="p-1 text-gray-500 mr-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </button>
                  <button className="p-1 text-gray-500 mr-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <button className="p-1 text-gray-500 mr-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8M4 18h8" />
                    </svg>
                  </button>
                  <button className="p-1 text-gray-500 mr-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              <button className="text-purple-600 text-sm flex items-center">
                <PlusIcon className="w-4 h-4 mr-1" />
                Add preferences
              </button>
            </div>
            
            <div className="mt-8">
              <h2 className="text-sm font-medium text-gray-700 mb-4">External Links</h2>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="mt-4">
              <h2 className="text-sm font-medium text-gray-700 mb-2">Add Youtube Video Link</h2>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="mt-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-medium text-gray-700">Upload Thumbnail</h2>
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              </div>
              <div className="border border-gray-300 border-dashed rounded-lg p-6 mb-6 flex items-center justify-center">
                <p className="text-gray-500">Drag & Drop thumbnail for survey</p>
              </div>
            </div>
            
            <div className="mt-4">
              <h2 className="text-sm font-medium text-gray-700 mb-2">Add collaborators / invitation</h2>
              <input 
                type="text" 
                className="w-full text-sm border border-gray-300 rounded-lg py-2 px-4 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add collaborators"
              />
            </div>
            
            <div className="mt-8 flex justify-center">
              <button className="bg-emerald-400 text-white rounded-lg px-16 py-3 font-medium">
                Create Questionnaire
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="w-64 border-l border-gray-200 p-4" >

        <div className="flex items-center mb-6 ">
                <button className="text-xs border border-gray-300 rounded-lg px-4 py-1 text-gray-700 mr-2">
                                 Draft
                               </button>
                               <button className="text-xs bg-purple-500 text-white rounded-lg px-6 py-1 ml-2">
                                 Publish
                               </button>
                               <button className="ml-10 text-gray-400">
                                 <XMarkIcon className="w-6 h-6" />
                               </button>
              </div>

          <div className="flex items-center mb-6">
            <InboxIcon className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-700 text-xs">Inbox</span>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-4">Add members</p>
            
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm mr-2">
                    W
                  </div>
                  <span className="text-sm">William Henry</span>
                </div>
                <button className="text-gray-400">
                  <PlusIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm mr-2">
                    J
                  </div>
                  <span className="text-sm">James Douglas</span>
                </div>
                <button className="text-gray-400">
                  <PlusIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm mr-2">
                    A
                  </div>
                  <span className="text-sm">Alexander Mathew</span>
                </div>
                <button className="text-gray-400">
                  <PlusIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-2">
                    R
                  </div>
                  <span className="text-sm">Robert Phillips</span>
                </div>
                <button className="text-gray-400">
                  <PlusIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-4">Eligibility</p>
            
            <div className="mb-3">
              <div className="flex items-center justify-between py-2">
                <span className="text-xs font-bold ">Gender</span>
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            <div className="mb-3">
              <div className="flex items-center justify-between py-2">
                <span className="text-xs font-bold">Region</span>
                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-4">Limits</p>
              
              <div className="mb-3">
                <div className="flex items-center justify-between py-2">
                  <span className="text-xs font-bold">Days</span>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex items-center justify-between py-2">
                  <span className="text-xs font-bold">No. of users</span>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center justify-between py-2">
                <span className="text-xs font-bold">Tags</span>
                <PlusIcon className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;