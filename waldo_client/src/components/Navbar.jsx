import { Home, Gamepad2, EqualApproximately, LogIn } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-[80%] md:w-[70%] mx-auto my-12'>
      <div className='flex justify-between items-center'>
    <Link to='/' className='flex flex-col items-center'> <Home className='rounded-2xl bg-white shadow-md shadow-blue-400 font-light h-12 w-12 transition-transform transform hover:scale-110 cursor-pointer hover:shadow-lg' /> Home</Link>
        <ul className='flex space-x-8'>
            <Link className='flex flex-col items-center'><Gamepad2 className='rounded-2xl bg-white shadow-md shadow-blue-400 font-light h-12 w-12 transition-transform transform hover:scale-110 cursor-pointer hover:shadow-lg' /> Game</Link>
            <Link className='flex flex-col items-center' ><EqualApproximately className='rounded-2xl bg-white  shadow-blue-400 shadow-md font-light h-12 w-12 transition-transform transform hover:scale-110 cursor-pointer hover:shadow-lg' />About</Link>
            <Link className='flex flex-col items-center' ><LogIn className='rounded-2xl bg-white shadow-md shadow-blue-400 font-light h-12 w-12 transition-transform transform hover:scale-110 cursor-pointer hover:shadow-lg' />Register</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
