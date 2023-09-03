import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-white -z-50 border-b border-black'>
     <div className='flex'>
        <img className='h-8 w-auto my-4 mx-6' src="https://gdsc-djsce.netlify.app/static/media/GDSC___DJSCE.1f798331d8f44334dca6.png" alt="" />
        <div>
            <ul className='flex gap-x-20 my-4 ml-[600px] text-lg font-serif z-50'>
                <li className=' text-red-600 hover:cursor-pointer hover:bg-gray-200 px-2'><Link to='/home'>Home</Link></li>
                <li className=' text-blue-600 hover:cursor-pointer hover:bg-gray-200 px-2'><Link to='/event'>Events</Link></li>
                <li className=' text-green-600 hover:cursor-pointer hover:bg-gray-200 px-2'><Link to='/team'>Team</Link></li>
                <li className=' text-yellow-500 hover:cursor-pointer hover:bg-gray-200 px-2'><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        <div>
            <img className='z-50 h-8 my-4 ml-12 hover:bg-gray-200 hover:cursor-pointer' src="data:image/png;base64,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" alt="" />
        </div>
     </div>
    
    </div>
  )
}

export default Navbar