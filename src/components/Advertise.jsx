import React from 'react'

const Advertise = ({brands}) => {
  return (
    <>
        <div className='travigo-container'>
            <div className='my-16 lg:my-7 w-9/2 lg:w-[85vw]
            m-auto flex item-center justify-between xl:gap-7
            overflow-x-scroll scroll-smooth scroll-hidden'>
                {brands?.map((val, index) =>(
                    <img key={index} src={val.iconSrc} alt='brands/icon'
                    className='w-44 h-auto object-fill xl:w-38 lg:w-32
                    hover:scale-105 transition-all duration-300 filter
                    drop-shadow-medium' />
                ))}
            </div>
        </div>
    </>
  )
}

export default Advertise