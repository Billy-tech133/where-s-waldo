import React from 'react'

const About = () => {
  return (
    <section>
      <div className='flex items-center h-8 w-full  border-blue-500 mb-6  rounded-xl shadow-lg shadow-blue-300 p-8'>
        <h2 className='text-2xl'>About Game</h2>
      </div>
      <div className='flex justify-between items-center h-[100vh] w-full  border-blue-500 mb-6  rounded-xl shadow-lg shadow-blue-300 p-12'>
        <p>
        What is Lorem Ipsum?
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div>
    </section>
  )
}

export default About
