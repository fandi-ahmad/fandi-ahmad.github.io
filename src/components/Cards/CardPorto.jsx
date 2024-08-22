import React, {useState} from 'react'
import ButtonLink from '../Button/ButtonLink';

// images
import mysqlImg from '../../assets/logo/mysql-icon.png'

const CardPorto = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const classImage = `${isHovered ? 'scale-105' : ''} relative z-10 h-48 w-full object-cover object-top transition-transform duration-300 ease-in-out`;
  const overlayClass = `${isHovered ? 'opacity-0' : 'opacity-0'} absolute top-0 left-0 z-20 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 transition-opacity duration-300`;

  return (
    <div className='bg-gray-600 border border-gray-500 rounded-lg'>
      <div className='overflow-hidden rounded-tl-lg rounded-tr-lg relative'>
        <div className='bg-gray-800 relative cursor-pointer'
          onClick={props.onClick}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

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

            {/* stack */}
            {props.stackImage ? props.stackImage.map((stackItem, index) => {
              let fileName = stackItem.split('/').pop();                  // "express_js.webp"
              let baseName = fileName.split('.').slice(0, -1).join('.');  // "express_js"
              let formattedName = baseName.replace(/_/g, " ");            // "express js"
              return (
                <div className='tooltip tooltip-top me-3' data-tip={formattedName}>
                  <img
                    key={index}
                    src={stackItem}
                    alt={stackItem}
                    className={`${stackItem === mysqlImg ? 'filter invert' : null} h-6 object-contain`}
                  />
                </div>
              )
            }) : null}
          </div>
        </div>

        <div>
          { props.demo ?
            <ButtonLink to={props.demo} className='mt-6 mr-2'>
              <i className="fa-solid fa-play"></i>
              <span className='text-xs sm:text-sm ml-2'>Demo</span>
            </ButtonLink>
          : null }

          { props.source ?
            <ButtonLink to={props.source} className='mt-6'>
              <i className="fa-brands fa-github"></i>
              <span className='text-xs sm:text-sm ml-2'>Source Code</span>
            </ButtonLink>
          : null}

        </div>
      </div>
    </div>
  );
};

export default CardPorto