import React, {useState, useRef, useEffect} from 'react'
import { Check } from 'lucide-react'
import ImageModal from './ImageModal'
import gameImg from "../assets/game_img.png"
import rapunzel from '../assets/rapunzel.png'
import cinderalla from '../assets/cin_shoe.png'
import xMas from '../assets/x-mas_hat.png'




const Game = () => {

const [showModal, setShowModal] = useState({
    visible: false,
    x: 0,
    y: 0
})

const [found, setFound] = useState({
    rapunzel: false,
    cinderalla: false,
    xmas: false
})

const [imageCoordinates, setImageCoordinates] = useState(null)
 
const [target, setTargetCoordinates] = useState([])



const divRef = useRef(null)

const handleClick = (e) => {
    const rect = divRef.current.getBoundingClientRect()
    const xPercent = e.clientX - rect.x
    const yPercent = e.clientY - rect.y

    const targetRect = e.target.getBoundingClientRect()
    const xCoords = e.clientX - targetRect.left
    const yCoords= e.clientY - targetRect.top

    const  yHeight= yCoords / rect.height
    const xWidth = xCoords / rect.width

    const yLength = 100
    const xLength = 240
    const padding = 50

    let postX = e.pageX
    let postY = e.pageY

    if(postX + xLength > window.innerWidth) {
        postX = window.innerWidth - xLength - padding
    }

    if(postY + yLength > window.scrollY + window.innerHeight) {
        postY = window.innerHeight + window.scrollY - yLength - padding
    }
    
    setImageCoordinates({
        width: postX,
        height: postY,
        x: xWidth, 
        y: yHeight
    })
  
    if(!showModal.visible) {
        setShowModal({
            visible: true,
            x: Math.floor(xPercent),
            y: Math.floor(yPercent)
        })
    }
    if(showModal.visible) {
        setShowModal((prev) => ({...prev, visible: false}))
    }

    console.log(imageCoordinates)

}

const compareCoords = (n) => {
  const targetCoords = target[n-1]
  const isXMatch = Math.abs(imageCoordinates.x - targetCoords.x) <= 0.07
  const isYMatch = Math.abs(imageCoordinates.y - targetCoords.y) <= 0.07
  if(isXMatch && isYMatch) {
    setFound((prev => ({...prev, xmas: true})))
    return
  }
}

// const compareCoords = (n) => {
//     const target = targetCoords[n - 1];
//     const isXMatch = Math.abs(selectedCoords.xPercent - target.x) <= 0.05;
//     const isYMatch = Math.abs(selectedCoords.yPercent - target.y) <= 0.05;
//     if (isXMatch && isYMatch) {
//       setTargetCoordinates((prev) => [...prev, n]);
//       return;
//     }
//   };

  


  return (
    <section className='flex flex-col items-center justify-evenly space-y-8 h-auto '>
      <nav className='flex justify-between items-center w-full  border-blue-500 mb-6  rounded-xl shadow-lg shadow-blue-300 p-6'>
        <p>time: 0:35</p>
        <p>characters found: 1/3</p>
      </nav>
      <div className='flex items-center space-x-12' >
        <div className={`relative text-center shadow-md shadow-blue-400 rounded-md  ${found.rapunzel && 'border border-green-200 inset-0 bg-black/40'}`} >
          <img className='h-24 w-24  rounded-md ' src={rapunzel} alt="" />
          {found.rapunzel && <Check className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 font-bold size-24'/>}
          <p>Rapunzel</p>
        </div>
        <div className={` relative text-center shadow-md shadow-blue-400 rounded-md ${found.xmas && 'border border-green-200 inset-0 bg-black/40'}`}>
          <img className=' h-24 w-24  rounded-md' src={xMas} alt="" />
          {found.xmas && <Check className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 font-bold size-24'/>}
          <p>XMas-Hat</p>
        </div>
        <div className={`relative text-center shadow-md shadow-blue-400 rounded-md ${found.cinderalla && 'border border-green-200 inset-0 bg-black/40'} `}>
        <img className='h-24 w-24  rounded-md' src={cinderalla} alt="" />
        {found.cinderalla && <Check className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 font-bold size-24'/>}
         <p>Cinderallas Shoe</p>
        </div>
      </div>
      <div ref={divRef} onClick={handleClick} className='relative cursor-crosshair' >
        <img className="rounded-lg" src={gameImg}  alt="" />
        {showModal.visible  && (
            <ImageModal showModal={showModal} found={found} compareCoords={compareCoords}/>
        )}
      </div>
    </section>
  )
}

export default Game
