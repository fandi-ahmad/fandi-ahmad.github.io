import React, {useState} from 'react'

// images
import mysqlImg from '../../assets/logo/mysql-icon.png'
import nextjs from '../../assets/logo/nextjs.png'
import express from '../../assets/logo/express-js.png'

const CardPorto = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const classImage = `${isHovered ? 'scale-105' : ''} relative z-10 h-48 w-full object-cover object-top transition-transform duration-300 ease-in-out`;
  // const overlayClass = `${isHovered ? 'opacity-50' : 'opacity-0'} absolute top-0 left-0 z-20 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 transition-opacity duration-300`;
  const overlayClass = `${isHovered ? 'opacity-0' : 'opacity-0'} absolute top-0 left-0 z-20 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 transition-opacity duration-300`;

  return (
    <div className='bg-gray-600 border border-gray-500 rounded-lg cursor-pointer' 
      onClick={props.onClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='overflow-hidden rounded-tl-lg rounded-tr-lg relative'>
        <div className='bg-gray-800 relative'>

          {/* image */}
          <img src={props.src} alt="" loading='lazy' className={classImage} />

          {/* overlay hover */}
          <div className={overlayClass}>
            <div className='text-4xl text-white drop-shadow-md'>
              <i className="fa-solid fa-eye"></i>
            </div>
          </div>

        </div>
      </div>
      
      {/* text */}
      <div className='p-2'>
        <div className='capitalize'>{props.title}</div>
        <div className='text-xs mt-1 text-blue-300'>
          <i className='fa-solid fa-calendar-days'></i>
          <span className='ml-1'>{props.time}</span>
        </div>
        <div className='capitalize font-light text-sm flex flex-row mt-3'>
          <span className='opacity-75'>{props.detail}</span>
          <span className='mx-2'>•</span>
          <div className='flex flex-row'>
            {props.stackImage ? props.stackImage.map((stackItem, index) => (
              <img
                key={index}
                src={stackItem}
                alt={stackItem}
                className={`${stackItem === express || stackItem === nextjs || stackItem === mysqlImg ? 'filter invert' : null} w-12 max-w-fit h-6 object-contain mr-3`}
              />
            )) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPorto