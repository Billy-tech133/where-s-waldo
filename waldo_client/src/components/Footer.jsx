import React from 'react'
import { LinkedinIcon, Twitter, GithubIcon, TwitchIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='flex justify-between items-center h-24 w-full  border-blue-500 mb-6  rounded-xl shadow-lg shadow-blue-300 p-12'>
      <div >
        <h2>CopyWrite 2025</h2>
      </div>
      <div className='flex space-x-4'>
        <Link>
        <LinkedinIcon />
        </Link>
        <Link>
        <Twitter />
        </Link>
        <Link>
        <GithubIcon />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
