import React from 'react'

// images
import cssImg from '../assets/logo/css.png'
import htmlImg from '../assets/logo/html.png'
import figmaImg from '../assets/logo/figma.png'
import jsmg from '../assets/logo/javascript.png'
import reactImg from '../assets/logo/reactjs.png'
import vueImg from '../assets/logo/vuejs.png'
import tailwindImg from '../assets/logo/tailwind.png'
import bootstrap from '../assets/logo/bootstrap.png'
import nodeImg from '../assets/logo/nodejs.png'
import expressJs from '../assets/logo/express.png'

const About = () => {
  return (
    <div>
      <div className="px-4 md:px-8 mt-8 font-light text-justify text-sm">
        <p className='mb-4'>
          Hello, I'm Fandi, a Full Stack Web Developer with a passion for creating web experiences that are not only functional, but also stunning. In the front-end world, I have expertise in implementing designs using HTML, CSS, and JavaScript, and I believe that the use of modern frameworks such as React and Vue brings a new dimension to interactivity and visual appeal.
        </p>

        <p className='mb-4'>
          In back-end development, I rely on Express to ensure optimal performance and security. I don't just see web development as a job, but as an opportunity to embrace challenges and continue learning. I believe that innovation comes through the desire to continually grow, and I'm always open to digging deeper into the world of web development.
        </p>

        <p className='mb-4'>
          With my combination of technical expertise and spirit of exploration, I'm ready to take your web projects to the next level. Let's create unforgettable and stimulating web experiences together!
        </p>
      </div>

      <div className='px-4 md:px-8 mt-8 w-full sm:w-4/6 md:w-3/6 '>
        <h2 className="text-2xl font-bold mb-4">What I'm Doing</h2>

        {/* card */}
        <div className='bg-gray-600 bg-opacity-50 border border-gray-500 rounded-lg p-8 flex flex-col sm:flex-row items-center'>
          <div className='text-4xl text-blue-300'>
            <i className="fa-solid fa-laptop-code"></i>
          </div>
          <div className='sm:pl-4 text-center sm:text-start'>
            <h3 className='text-lg font-semibold pb-2'>Web Development</h3>
            <div className='text-sm'>
              I offer stunning website design and development services, powered by modern technology.
            </div>
          </div>
        </div>

      </div>

      <div className="px-4 md:px-8 mt-8">
        <h2 className="text-2xl font-bold mb-4">My Skills</h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-4">
          <img src={htmlImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={cssImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={jsmg} alt="" loading='lazy' className="w-12 h-12 object-contain rounded-md" />
          <img src={bootstrap} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={tailwindImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={reactImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={vueImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={nodeImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
          <img src={expressJs} alt="" loading='lazy' className="w-12 h-12 object-contain rounded-md" />
          <img src={figmaImg} alt="" loading='lazy' className="w-12 h-12 object-contain" />
        </div>
      </div>
    </div>
  )
}

export default About