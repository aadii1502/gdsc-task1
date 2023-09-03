import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
    <div className=''>
      <div className='grid grid-cols-2 gap-x-8 my-12 mx-4'>
        <div className='container'>
            <img className='h-[300px] w-full rounded-xl glow-box1 border border-red-500' src="https://gdsc-djsce.netlify.app/static/media/Flutter.a659fdb8919161df7056.png" alt="" />
            
            <div className='-mt-72 text-white text-xl mx-6 hover:text-center cursor-pointer hover:w-[550px] relative hover:bg-blue-600 rounded-lg'><Link to='/flutter'>Getting Started With Flutter - Flutter Festival GDSC DJSCE</Link></div>
            <div className='-mt-[25px]'>
            <button className='ml-[600px] text-white bg-blue-400 px-4 rounded-xl cursor-none'>Featured</button>
            </div>
        </div>
        <div className='container'>
            <img className='h-[300px] w-full rounded-xl glow-box1 border border-red-500' src="	https://gdsc-djsce.netlify.app/static/media/CODESHASTRA_8.0.4d25d22736b04ea99f53.png" alt="" />
            <div className=' origin-top-left -mt-72 text-white cursor-pointer hover:w-[300px] hover:bg-blue-600 relative rounded-lg hover:text-center text-2xl mx-6 z-50'><Link to='code'>Code shastra 8.0</Link></div>
            <div className='-mt-[30px]'>
            <button className='ml-[580px] text-white bg-red-600 px-4 rounded-xl cursor-none'>Upcoming</button>
            </div>
        </div>
      </div> 
    </div>

    <div className='mt-[300px]'>
     <ul className='flex justify-between mx-10 bg-blue-50 border border-blue-900 shadow-2xl h-16 items-center px-32 text-xl rounded-xl font-serif text-gray-700'>
         <li>All</li>
         <li>Sessions</li>
         <li>Festivals</li>
     </ul>
   </div>

   <div className='grid grid-cols-3 grid-rows-2 my-12 mx-10 gap-x-28 gap-y-32'>
    <div className='h-[400px] w-[400px] bg-blue-50 hover:scale-105 hover:duration-700 rounded-xl glow-box'>
    <img className='w-[400px] h-[250px] rounded-xl' src="https://gdsc-djsce.netlify.app/static/media/CODESHASTRA_8.0.4d25d22736b04ea99f53.png" alt="" />
    <div className='bg-white flex flex-col justify-center items-center px-4 rounded-lg w-[250px] h-[100px] my-6 border border-black shadow-sm shadow-black mx-[78px]'>
        <p className=' hover:text-blue-400'><Link to='code'>Code Shastra 8.0</Link></p>
        <p>Mar 26-27, 2022</p>
    </div>
    </div>
    
    <div className='h-[400px] w-[400px] bg-blue-50 hover:scale-105 hover:duration-700 rounded-xl glow-box'>
    <img className='w-[400px] h-[250px] rounded-xl' src="https://gdsc-djsce.netlify.app/static/media/Flutter.a659fdb8919161df7056.png" alt="" />
    <div className='bg-white flex flex-col rounded-lg w-[250px] h-[120px] my-3 px-4 border border-black shadow-sm shadow-black mx-[78px]'>
        <p className=' hover:text-blue-400'><Link to='flutter'>Getting Started With Flutter - Flutter Festival GDSC DJSCE.</Link></p>
        <p>Mar 1, 2022.</p>
        <p>Speaker Session / Tech Talk - Virtual.</p>
    </div>
    </div>

    <div className='h-[400px] w-[400px] bg-blue-50 hover:scale-105 hover:duration-700 rounded-xl glow-box'>
    <img className='w-[400px] h-[250px] rounded-xl' src="https://i1.wp.com/www.goodworklabs.com/wp-content/uploads/2014/05/Android.jpg" alt="" />
    <div className='bg-white flex flex-col rounded-lg w-[250px] h-[125px] px-1 py-1 my-3 border border-black shadow-sm shadow-black mx-[78px]'>
        <p className=' hover:text-blue-400'><Link to='android3'>Android Study Jams 2021 - Session 3.</Link></p>
        <p>Dec 11, 2021</p>
        <p>Android Study Jams: Prior Programming Experience-Virtual.</p>
    </div>
    </div>

    <div className='h-[400px] w-[400px] bg-blue-50 hover:scale-105 hover:duration-700 rounded-xl glow-box'>
    <img className='w-[400px] h-[250px] rounded-xl' src="https://th.bing.com/th/id/OIP.F-4TdV2fj77-FPVTTBA1rQHaFj?w=202&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    <div className='bg-white flex flex-col rounded-lg w-[250px] h-[125px] px-1 my-3 py-1 border border-black shadow-sm shadow-black mx-[78px]'>
        <p className=' hover:text-blue-400'><Link to='android2'>Android Study Jam Session 2: Build app from scratch.</Link></p>
        <p>Dec 6, 2021</p>
        <p>Android Study Jams: New to Programming - Virtual.</p>
    </div>
    </div>

    <div className='h-[400px] w-[400px] bg-blue-50 hover:scale-105 hover:duration-700 rounded-xl glow-box'>
    <img className='w-[400px] h-[250px] rounded-xl' src="https://www.robosapi.com/assets/images/workshops/android-app-development.jpg
" alt="" />
    <div className='bg-white flex flex-col  rounded-lg w-[250px] h-[125px] my-3 py-1 border border-black px-1 shadow-sm shadow-black mx-[78px]'>
        <p className=' hover:text-blue-400'><Link to='android1'>Android Study Jams 2021 - Info Session</Link></p>
        <p>Dec 1, 2021</p>
        <p>Android Study Jams: New to Programming - Virtual</p>
    </div>
    </div>

    <div className='h-[400px] w-[400px] bg-blue-50 hover:scale-105 hover:duration-700 rounded-xl glow-box'>
    <img className='w-[400px] h-[250px] rounded-xl' src="https://gdsc-djsce.netlify.app/static/media/Cover_WMPMb81.0e7ad777d480dcacb949.png" alt="" />
    <div className='bg-white flex flex-col px-1 rounded-lg w-[250px] h-[100px] my-6 border border-black shadow-sm shadow-black mx-[78px]'>
        <p className=' hover:text-blue-400'>PixelHacks</p>
        <p>Nov 29, 2021</p>
        <p>Speaker Session / Tech Talk - Virtual</p>
    </div>
    </div>

   </div>
    </>
  )
}

export default Hero