import React, {useEffect, useRef} from 'react'
import rapunzel from '../assets/rapunzel.png'
import cinderalla from '../assets/cin_shoe.png'
import xMas from '../assets/x-mas_hat.png'




const ImageModal = ({showModal, found, compareCoords}) => {


  return (
    <div className='absolute h-68 w-40 flex flex-col items-left pl-4 justify-evenly bg-white rounded-lg text-white' style={{left: showModal.x, top: showModal.y }} onClick={(e) => e.stopPropagation()}>
        <div className='flex items-center'>
        <img className='w-16 h-16 rounded-md' src={rapunzel} alt="" />
        {found.rapunzel && <p className='text-bold text-lg text-green-400'>found</p>}
        </div>
        <div className='flex items-center'>
        <img className='w-16 h-16 rounded-md' src={cinderalla} alt="" />
        {found.cinderalla && <p className='text-bold text-lg text-green-400'>found</p>}
        </div>

        <div className='flex items-center' onClick={compareCoords(3)} >
        <img className='w-16 h-16 rounded-md' src={xMas} alt="" />
        {found.xmas && <p className='text-bold text-lg text-green-400'>found</p>}
        </div>
    </div>
  )
}

export default ImageModal
