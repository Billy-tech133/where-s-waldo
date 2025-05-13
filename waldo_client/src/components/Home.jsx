import React from 'react'
import bgImage from '../assets/header_img3.avif'
import bgImage2 from '../assets/image4.avif'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section>
      <header className="relative bg-cover h-100 w-full rounded-4xl shadow-2xl shadow-blue-300 -z-0" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className='absolute flex h-[100%] items-center inset-0 bg-black/40 rounded-4xl'>
            <div className='ml-8 w-[50%]'>
            <h1 className='fond-bold text-white text-5xl w-[50%'>
                Welcome to my photo tagging application.
            </h1>
            </div>
        </div>
      </header>
      <hr className='my-4 border-t border-gray-300'/>
      <div className="relative bg-cover h-100 w-full rounded-4xl shadow-2xl shadow-blue-300 -z-0 translate-transform transform hover:scale-103" style={{ backgroundImage: `url(${bgImage2})` }}>
        <div className='absolute flex h-[100%] items-center inset-0 bg-black/40 rounded-4xl'>
            <div className='ml-8 w-[50%]'>
            <Link className='fond-bold text-white text-5xl w-[50%] cursor-pointer hover:underline'>
                Click to play game.
            </Link>
            </div>
        </div>
      </div>
      <hr className='my-4 border-t border-gray-300'/>
    </section>

  )
}

export default Home
