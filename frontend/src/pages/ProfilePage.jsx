import { useState } from 'react';
import Kate from "../assets/Kate.png"
import { Plus, Search, ChevronDown, MessageCircle, Share2, Send } from "lucide-react";
import follow from '../assets/follow.svg'
import Retweet from "../assets/retweet.png";
import { useEffect,useRef} from 'react';

function ProfilePage() {
  const [userData, setUserData] = useState(null);

  const [showMore, setShowMore] = useState(false);

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
  
      if (!userId || !token) {
        console.error("User ID or token missing");
        return;
      }
  
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
  
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
  }, []);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    window.location.href = '/login'; // or use navigate
  };

  return (
    <div className="font-sans max-w-screen-xl mx-auto">
      {/* Header */}
      <header className="h-16 border-b border-gray-100 flex items-center justify-between gap-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-[#2d4b6d]">Prati</span>
          <span className="text-[#a3d9c9]">Shat</span>
        </h1>
      </div>

      <div className="flex items-center justify-between gap-4 relative" ref={menuRef}>
        <button className="text-gray-400 hover:text-gray-600">
          <Search size={20} />
        </button>
        <button className="text-[#000000] hover:text-gray-600 font-extrabold cursor-pointer">
          <Plus size={23} />
        </button>
        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex items-center gap-2 cursor-pointer border border-gray-100 rounded-md p-1"
        >
          <img src={Kate} alt="" className="h-8" />
          <div className="w-9 h-9 flex items-center justify-center text-[#000000]">KR</div>
          <ChevronDown size={16} className="text-[#000000]" />
        </div>

        {menuOpen && (
          <div className="absolute top-14 right-0 w-40 bg-white shadow-md rounded-md border z-10">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>

      {/* Profile Section */}
      <div className="border-b border-gray-200">
        {/* Banner */}
        <div className="h-36 bg-gray-200 relative">
          {/* Profile Picture */}
          <div className="absolute -bottom-16 left-8">
            <div className="h-32 w-32 rounded-full bg-[#f8a7a1] border-4 border-white overflow-hidden">
              <img src={userData?.profile_image_url} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 px-8 pb-6">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-bold">{userData?.userName}</h2>
                <span className="text-gray-500 text-sm">
  ({userData?.gender === 'Male' ? 'He/Him' : userData?.gender === 'Female' ? 'She/Her' : ''})
</span>

              </div>
              <p className="text-gray-700">{userData?.profession} <span>(<span>{userData?.experience}</span> <span>years</span>)</span></p>
              <div className="flex items-center mt-1 text-sm">
                <span className="text-gray-500">{userData?.nationality}</span>
                <span className="mx-1">·</span>
                <a href="#" className="text-blue-500">
                  Know More
                </a>
              </div>
              <button className="mt-3 flex items-center space-x-1 border border-gray-300 rounded-full px-4 py-1 text-sm cursor-pointer">
                <img src={follow} alt="" className="h-4 cursor-pointer" />
                <span>Follow</span>
              </button>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center space-x-2">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-1">
                    <div className="h-6 w-6 rounded-full bg-orange-400"></div>
                    <span className="text-sm">Overlanding</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full bg-red-400"></div>
                    </div>
                    <span className="text-sm">Media Growth Inc.</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button className="bg-blue-500 text-white rounded-md px-3 py-1 text-sm flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Message
                </button>

                <button 
                  className="text-black border-black border rounded-md px-3 py-1 text-sm flex items-center gap-2 cursor-pointer"
                  onClick={handleToggleMore}
                >
                  More
                </button>
              </div>
            </div>
          </div>

          {/* Slide Down Info */}
          <div className={`overflow-hidden transition-all duration-500 ${showMore ? "max-h-40" : "max-h-0"}`}>
            <div className="mt-4 p-4 border rounded-md bg-gray-50 shadow-sm space-y-2">
            <p>
  <span className="font-semibold">Age:</span>{' '}
  {userData?.dob ? Math.floor((new Date() - new Date(userData.dob)) / (1000 * 60 * 60 * 24 * 365.25)) : 'N/A'}
</p>

<p>
  <span className="font-semibold">Interests:</span>{' '}
  {userData?.interests && userData?.interests.length > 0
    ? userData?.interests.join(', ')
    : 'None'}
</p>
              <p><span className="font-semibold">Experience:</span> 6 years in Media and Research</p>
            </div>
          </div>

        </div>

        {/* Tabs */}
        <div className="flex justify-between border-t border-black pl-40 pr-40">
          <button className="px-6 py-3 font-small border-b-2 border-gray-900 cursor-pointer">PROJECTS</button>
          <button className="px-6 py-3 font-medium text-gray-500 cursor-pointer">CONTRIBUTIONS</button>
          <button className="cursor-pointer px-6 py-3 font-medium text-gray-500">ONGOING PROJECTS</button>
        </div>
      </div>

      {/* Post */}
      <div className="max-w-2xl mx-auto my-6 border border-gray-200 rounded-lg overflow-hidden">
        {/* Post Header */}
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-[#f8a7a1] overflow-hidden">
              <img src={Kate} alt="Kate Williamson" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-medium">Kate Williamson</h3>
              <p className="text-sm text-gray-500">Researcher, Media Growth Inc.</p>
            </div>
          </div>
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>

        {/* Post Title */}
        <div className="px-4 pb-2">
          <h2 className="text-xl font-bold">Smoking Consumption Among Teenagers</h2>
        </div>

        {/* Post Image */}
        <div className="bg-gray-200 h-60 w-full"></div>

        {/* Post Actions */}
        <div className="flex justify-between p-4 border-t border-gray-200">
          <button className="flex items-center text-gray-700 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            25k Upvoted
          </button>
          <button className="flex items-center text-gray-700 text-sm">
            <img src={Retweet} alt="" />
            2.8k Supported
          </button>
          <button className="flex items-center text-gray-700 text-sm">
            <MessageCircle className="text-gray-700" size={18} />
            4k
          </button>
          <button className="flex items-center text-gray-700 text-sm gap-1">
            <Share2 className="text-gray-700" size={18} />
            2k
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;
