// import React, { useState } from 'react';
// import ChatInterface from './ChatInterface'; // Import your existing chat component

// const AskOurIntelligence = () => {
//   const [showChat, setShowChat] = useState(false); // State to toggle chat interface

//   return (
//     <div className='min-h-[100vh] w-full px-4 py-8 md:px-8 lg:px-24 overflow-hidden pt-[8vh] flex flex-col items-center justify-center'>
//       {!showChat ? (
//         <div className='rounded-3xl h-[55vh] w-[48vw] bg-white p-8 shadow-2xl transition-shadow hover:shadow-xl md:h-[55vh] flex items-center justify-center flex-col'>
//           <h1 className='text-3xl font-bold tracking-wide'>Ask Our Intelligence</h1>
//           <p className='text-sm text-[#374151] mt-4 font-semibold'>We’re here to help, Chat to our friendly team 24/7</p>
//           <button 
//             className='bg-[#6E2CF6] text-white w-full h-[7.3vh] mt-[15vh] rounded-lg cursor-pointer'
//             onClick={() => setShowChat(true)} // Show ChatInterface on click
//           >
//             Start Conversation
//           </button>
//         </div>
//       ) : (
//         <ChatInterface /> // Show the chat interface when button is clicked
//       )}
//     </div>
//   );
// };

// export default AskOurIntelligence;




import React, { useState, useEffect } from 'react';
import ChatInterface from './ChatInterface'; // Import chat component

const AskOurIntelligence = () => {
  const [showChat, setShowChat] = useState(false); // State to toggle chat interface

  useEffect(() => {
    if (showChat) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when chat is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when chat is closed
    }
  }, [showChat]);

  return (
    <div className='min-h-[100vh] w-full px-4 py-8 md:px-8 lg:px-24 overflow-hidden pt-[8vh] flex flex-col items-center justify-center'>
      {!showChat ? (
        <div className='rounded-3xl h-[55vh] w-[48vw] bg-white p-8 shadow-2xl transition-shadow hover:shadow-xl md:h-[55vh] flex items-center justify-center flex-col'>
          <h1 className='text-3xl font-bold tracking-wide'>Ask Our Intelligence</h1>
          <p className='text-sm text-[#374151] mt-4 font-semibold'>We’re here to help, Chat to our friendly team 24/7</p>
          <button 
            className='bg-[#6E2CF6] text-white w-full h-[7.3vh] mt-[15vh] rounded-lg cursor-pointer'
            onClick={() => setShowChat(true)} // Show ChatInterface on click
          >
            Start Conversation
          </button>
        </div>
      ) : (
        <ChatInterface setShowChat={setShowChat} /> // Pass setShowChat to allow closing
      )}
    </div>
  );
};

export default AskOurIntelligence;
