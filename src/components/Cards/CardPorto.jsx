import React, {useState} from 'react'

const CardPorto = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const classImage = `${isHovered ? 'opacity-75 scale-105' : ''} relative z-10 h-48 w-full object-cover transition-transform duration-300 ease-in-out`;
  const overlayClass = `${isHovered ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0 z-20 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 transition-opacity duration-300`;

  return (
    <div className='bg-gray-600 border border-gray-500 rounded-lg cursor-pointer' onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className='overflow-hidden rounded-tl-lg rounded-tr-lg relative'>
        <div className='bg-gray-800 relative'>

          {/* image */}
          <img src={props.src} alt="" className={classImage} />

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
        <div className='capitalize font-medium text-sm'>{props.title}</div>
        <div className='capitalize opacity-75 font-light text-sm'>{props.detail}</div>
      </div>
    </div>
  );
};

export default CardPorto