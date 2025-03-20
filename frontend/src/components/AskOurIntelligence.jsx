import React from 'react'

const AskOurIntelligence = () => {
  return (
    <div className='min-h-[100vh] w-full px-4 py-8 md:px-8 lg:px-24 overflow-hidden pt-[8vh] flex flex-col items-center justify-center'>
       
        <div className='rounded-3xl h-[55vh] w-[48vw] bg-white p-8 shadow-2xl transition-shadow hover:shadow-xl md:h-[55vh] flex items-center justify-center flex-col'>
            <h1 className='text-3xl font-bold tracking-wide'>Ask Our Intelligence</h1>
            <p className='text-sm text-[#374151] mt-4 font-semibold '>We’re here to help, Chat to our friendly team 24/7</p>

            <button className='bg-[#6E2CF6] text-white w-full h-[7.3vh] mt-[15vh] rounded-lg cursor-pointer'>
                Start Conversation
            </button>
        </div>
    </div>
  )
}

export default AskOurIntelligence
