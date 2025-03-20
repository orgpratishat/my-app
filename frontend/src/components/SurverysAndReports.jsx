import React from 'react'
import Finance from '../assets/finance.png'
import Power from '../assets/power.png'
import Health from '../assets/health.png'
import { Heart } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Share2 } from 'lucide-react';
const SurverysAndReports = () => {
  return (
    <div className='min-h-[100vh] w-full px-4 py-8 md:px-8 lg:px-24 overflow-hidden pt-[8vh] flex flex-col items-center'>
      <h1 className='text-2xl font-bold tracking-wide'>Surveys And Reports</h1>

      <div className='flex gap-10 mt-[15vh]'>
        <div className='w-[325px]'>
            <img className='h-[200px] bg-gray-100 w-full rounded-xl' src={Finance} alt='Survey 1' />
            <p className='mt-4 text-sm '>Finance</p>
            <h1 className='font-semibold text-lg'>Lorem ipsum dolor sit am
            consectetur adipiscing elit</h1>
           
          <div className='flex items-center gap-8 mt-2'>
          <div className='flex items-center gap-2'>
            <Heart size={18} />
            <p className='text-sm'>25K supported</p>
            </div>

            <div className='flex items-center gap-2'>
            <MessageSquare size={18} />
            <p className='text-sm'>4.5K </p>
            </div>

            <div className='flex items-center gap-2'>
            <Share2 size={18} />
            <p className='text-sm'>1.5K </p>
            </div>
          </div>
        </div>

        <div className='w-[325px]'>
            <img className='h-[200px] bg-gray-100 w-full rounded-xl' src={Power} alt='Survey 1' />
            <p className='mt-4 text-sm '>Finance</p>
            <h1 className='font-semibold text-lg'>Lorem ipsum dolor sit am
            consectetur adipiscing elit</h1>

            <div className='flex items-center gap-8 mt-2'>
          <div className='flex items-center gap-2'>
            <Heart size={18} />
            <p className='text-sm'>25K supported</p>
            </div>

            <div className='flex items-center gap-2'>
            <MessageSquare size={18} />
            <p className='text-sm'>4.5K </p>
            </div>

            <div className='flex items-center gap-2'>
            <Share2 size={18} />
            <p className='text-sm'>1.5K </p>
            </div>
          </div>
        </div>

        <div className='w-[325px]'>
            <img className='h-[200px] bg-gray-100 w-full rounded-xl' src={Health} alt='Survey 1' />
            <p className='mt-4 text-sm '>Finance</p>
            <h1 className='font-semibold text-lg'>Lorem ipsum dolor sit am
            consectetur adipiscing elit</h1>

            <div className='flex items-center gap-8 mt-2'>
          <div className='flex items-center gap-2'>
            <Heart size={18} />
            <p className='text-sm'>25K supported</p>
            </div>

            <div className='flex items-center gap-2'>
            <MessageSquare size={18} />
            <p className='text-sm'>4.5K </p>
            </div>

            <div className='flex items-center gap-2'>
            <Share2 size={18} />
            <p className='text-sm'>1.5K </p>
            </div>
          </div>

        </div>

        

      </div>

      <button className=" rounded-sm text-gray-900 hover:text-purple-900  px-8 py-3 font-medium underline  cursor-pointer mt-[15vh] hover:scale-105 transition-transform ">
                    View All
                  </button>


    </div>
  )
}

export default SurverysAndReports
