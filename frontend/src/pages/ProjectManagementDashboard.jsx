
import {
  Search,
  Calendar,
  Bell,
  Home,
  MessageSquare,
  CheckSquare,
  Users,
  Settings,
  Plus,
  ChevronLeft,
  Edit3,
  Share2,
  Grid,
  ChevronDown,
  MessageCircle,
  FileText,
} from "lucide-react"

import revenue from "../assets/revenue.png"
import spend from "../assets/spend.png"
import time from "../assets/time.png"
import collab from "../assets/collab.png"

import collab1 from "../assets/collab1.png"
import collab2 from "../assets/collab2.png"
import collab3 from "../assets/collab3.png"
import collab4 from "../assets/collab4.png"

import research from "../assets/research.png"
import survey from "../assets/survey.png"
import proposals from "../assets/proposals.png"

import kate from "../assets/kate.png"
export default function ProjectManagementDashboard() {
  return (
    <div className="flex  bg-gray-100 relative ">
      {/* Left Sidebar */}
      <div className="w-[200px] bg-white border-r border-gray-200 flex flex-col h-[100vh] fixed ">
        <div className="p-4 border-b border-gray-200 flex items-center">
          <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center mr-2">
            <span className="text-white text-xs">⬡</span>
          </div>
          <span className="font-semibold text-gray-800">Project M.</span>
          <ChevronLeft className="w-5 h-5 text-gray-400 ml-auto" />
        </div>

        <div className="flex-1 overflow-auto">
          <div className="py-4">
            <div className="px-4 py-2 flex items-center text-gray-500 hover:bg-gray-50 rounded-lg mx-2">
              <Home className="w-5 h-5 mr-3" />
              <span>Home</span>
            </div>
            <div className="px-4 py-2 flex items-center text-gray-500 hover:bg-gray-50 rounded-lg mx-2">
              <MessageSquare className="w-5 h-5 mr-3" />
              <span>Messages</span>
            </div>
            <div className="px-4 py-2 flex items-center text-gray-500 hover:bg-gray-50 rounded-lg mx-2">
              <CheckSquare className="w-5 h-5 mr-3" />
              <span>Tasks</span>
            </div>
            <div className="px-4 py-2 flex items-center text-gray-500 hover:bg-gray-50 rounded-lg mx-2">
              <Users className="w-5 h-5 mr-3" />
              <span>Members</span>
            </div>
            <div className="px-4 py-2 flex items-center text-gray-500 hover:bg-gray-50 rounded-lg mx-2">
              <Settings className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </div>
          </div>

          <div className="mt-6 px-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-gray-500">KEY PROJECTS</span>
              <Plus className="w-4 h-4 text-gray-400" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center py-1">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-sm text-gray-700">Study Of Dopamine</span>
                <span className="text-gray-400 ml-1">...</span>
              </div>
              <div className="flex items-center py-1">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm text-gray-700">Proposal 1</span>
              </div>
              <div className="flex items-center py-1">
                <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
                <span className="text-sm text-gray-700">Survey1</span>
              </div>
              <div className="flex items-center py-1">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm text-gray-700">Survey 2</span>
              </div>
            </div>
          </div>

      
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-red-400 flex-1 flex flex-col ml-[30vh]">
        {/* Top Navigation */}
        <div className="bg-[#ffffff] border-b border-gray-200 py-[10px] px-6 flex items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-md text-sm focus:outline-none"
            />
          </div>

          <div className="flex items-center ml-auto">
            <Calendar className="w-5 h-5 text-gray-500 mx-3" />
            <Bell className="w-5 h-5 text-gray-500 mx-3" />

            <div className="flex items-center ml-4">
              <div className="mr-3 text-right">
                <div className="font-medium text-sm">Kate Russell</div>
                <div className="text-xs text-gray-500">Baku, Azerbaijan</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-red-100 overflow-hidden">
                <img src={kate} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 ml-1" />
            </div>
          </div>
        </div>

        {/* Main Dashboard */}

        <div className="flex gap-1 bg-[#ffffff]">
        <div className="flex-1 overflow-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Rise Of GDP In Central Africa</h1>
              <Edit3 className="w-5 h-5 text-gray-400 ml-3" />
              <div className="w-6 h-6 bg-gray-100 rounded-md flex items-center justify-center ml-2">
                <span className="text-xs">🔗</span>
              </div>
            </div>

            <div className="flex items-center">
             

             
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-4 ">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <img src={revenue} alt="" />
              </div>
              <div className="text-sm text-gray-500 mb-1">Total revenue</div>
              <div className="text-2xl font-bold mb-2">$53,00989</div>
              <div className="text-xs text-green-500">
                <span className="inline-block mr-1">↑</span>
                12% increase from last month
              </div>
            </div>

            <div className="bg-white rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                <img src={spend} alt="" />
              </div>
              <div className="text-sm text-gray-500 mb-1">Spend</div>
              <div className="text-2xl font-bold mb-2">$5,300</div>
              <div className="text-xs text-red-500">
                <span className="inline-block mr-1">↓</span>
                5% decrease from last month
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 ">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <img src={time} alt="" />
              </div>
              <div className="text-sm text-gray-500 mb-1">Time spent</div>
              <div className="text-2xl font-bold mb-2">
                1022 <span className="text-sm font-normal text-gray-400">/1300 Hrs</span>
              </div>
              <div className="text-xs text-green-500">
                <span className="inline-block mr-1">↑</span>
                8% increase from last month
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 ">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
              <img src={collab} alt="" />
              </div>
              <div className="text-sm text-gray-500 mb-1">Collaborators</div>
              <div className="text-2xl font-bold mb-2">10</div>
              <div className="text-xs text-green-500">
                <span className="inline-block mr-1">↑</span>
                2% increase from last month
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white rounded-xl p-4 shadow-sm mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium">No. of impressions</h3>
              <button className="flex items-center text-sm bg-indigo-50 text-indigo-600 px-3 py-1 rounded-md">
                This Month <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="h-64 relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400">
                <div>100K</div>
                <div>80K</div>
                <div>60K</div>
                <div>40K</div>
                <div>20K</div>
              </div>

              {/* Chart */}
              <div className="ml-10 h-full relative">
                {/* Peak marker */}
                <div className="absolute top-8 left-[60%] flex flex-col items-center">
                  <div className="bg-indigo-600 text-white text-xs px-2 py-1 rounded">82,924</div>
                  <div className="h-[180px] border-l border-dashed border-red-400"></div>
                </div>

                {/* Line chart (simplified) */}
                <svg className="w-full h-[80%]" viewBox="0 0 600 200" preserveAspectRatio="none">
                  <path
                    d="M0,150 L50,140 L100,80 L150,120 L200,100 L250,110 L300,20 L350,100 L400,80 L450,90 L500,70 L550,90 L600,80"
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="2"
                  />
                </svg>

                {/* X-axis labels */}
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                  <div className="text-indigo-600 font-medium">16</div>
                  <div>17</div>
                  <div>18</div>
                  <div>19</div>
                  <div>20</div>
                  <div>21</div>
                  <div>22</div>
                  <div>23</div>
                  <div>24</div>
                </div>
              </div>
            </div>
          </div>

          {/* Submissions Section */}
          <div className="mb-8">
            <h3 className="font-medium mb-4 border-b border-gray-200 pb-2">Submissions</h3>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center">
                <div className="w-24 h-24 mb-4">
                  <img
                    src={proposals}
                    alt="Proposal"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="font-medium">Proposal</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center">
                <div className="w-24 h-24 mb-4">
                  <img
                    src={survey}
                    alt="Survey"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="font-medium">Survey</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center">
                <div className="w-24 h-24 mb-4">
                  <img
                    src={research}
                    alt="Research"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="font-medium">Research</div>
              </div>
            </div>
          </div>

          {/* Research Section */}
          <div>

            

            <h3 className="font-medium mb-4 border-b border-gray-200 pb-2 flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              Research
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-gray-700 mb-2">1. Dopamine and Motivation, Not Just Pleasure</h4>
                <ul className="list-disc pl-6 space-y-3 text-gray-600">
                  <li>
                    Traditionally, dopamine was linked to pleasure and reward. However, newer research suggests it plays
                    a larger role in motivation.
                  </li>
                  <li>
                    A 2018 study found that dopamine increases when we anticipate a reward, not just when we receive it.
                    This helps drive effort and goal-directed behavior.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-700 mb-2">2. Dopamine and Habit Formation</h4>
                <ul className="list-disc pl-6 space-y-3 text-gray-600">
                  <li>Studies show that dopamine spikes when we form habits, whether good or bad.</li>
                  <li>A 2021 study revealed that compulsive behaviors (like gambling or...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        

         {/* Right Sidebar */}
      <div className="w-[250px] bg-[#ffffff] flex flex-col h-full overflow-y-hidden ">

      <button className="flex items-center text-indigo-600 rounded-md px-16 py-7 mr-3">
                <span className="text-sm mr-2">Invite</span>
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-purple-200">
                    <img src={collab1} alt="" />
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-orange-200">
                  <img src={collab2} alt="" />
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-green-200">
                  <img src={collab3} alt="" />
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-200">
                  <img src={collab4} alt="" />
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
                    <span className="text-xs text-[#D25B68] bg-[#F4D7DA] rounded-full">+2</span>
                  </div>
                </div>
              </button>

              <div className="flex px-16">
                <button className="border border-gray-200 rounded-l-md px-3 py-1.5">
                  <Share2 className="w-4 h-4 text-gray-500" />
                </button>
                <button className="bg-indigo-600 text-white rounded-r-md px-3 py-1.5 flex items-center">
                  <Grid className="w-4 h-4" />
                </button>
              </div>             

        <div className="p-4 flex flex-col space-y-4 px-14">
          <div className="flex items-center p-2 hover:bg-gray-50 rounded-md">
            <MessageCircle className="w-4 h-4 text-gray-500 mr-3" />
            <span className="text-gray-700 text-sm">Comments</span>
          </div>
          <div className="flex items-center p-2 hover:bg-gray-50 rounded-md">
            <FileText className="w-4 h-4 text-gray-500 mr-3" />
            <span className="text-gray-700">Notes</span>
          </div>
        </div>
      </div>


        </div>

       
      </div>

     
    </div>
  )
}

