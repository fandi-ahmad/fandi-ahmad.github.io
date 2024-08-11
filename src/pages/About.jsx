import React from 'react'
import gmailImg from './../assets/logo/gmail.png'

const About = () => {

  return (
    <div>
      <div>
        <div className="px-4 md:px-8 mt-8 font-light text-justify text-sm md:text-base">
          <p className='mb-4'>
            Hi there! I'm Fandi Ahmad, a passionate and dedicated Full Stack Web Developer with a strong background in front-end and back-end development. Some of the projects I create, are created with JavaScript.
          </p>

          <p className='mb-4'>
            I believe that the best projects are built through strong collaboration. I enjoy working with clients and teams to bring their vision to life.
          </p>

        </div>

        <div className='px-4 md:px-8 mt-8'>
          <h2 className="text-2xl font-bold mb-4">What I Can Do For You</h2>

          {/* card */}
          <div className='flex flex-col md:flex-row'>
            <div className='bg-gray-600 mb-4 md:mb-0 md:mr-4 bg-opacity-50 w-full border border-gray-500 rounded-lg p-8 flex flex-col sm:flex-row items-center'>
              <div className='text-4xl text-blue-300'>
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <div className='sm:pl-4 text-center sm:text-start'>
                <h3 className='text-lg font-semibold pb-2'>Web Development</h3>
                <div className='text-sm md:text-base'>
                  website development, suitable for company or individual profiles supported by modern technology.
                </div>
              </div>
            </div>

            <div className='bg-gray-600 bg-opacity-50 w-full border border-gray-500 rounded-lg p-8 flex flex-col sm:flex-row items-center'>
              <div className='text-4xl text-blue-300'>
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <div className='sm:pl-4 text-center sm:text-start'>
                <h3 className='text-lg font-semibold pb-2'>Web Based Application</h3>
                <div className='text-sm md:text-base'>
                  Design and development of website-based applications, such as archive systems, data management, cashiers, sales, and many more.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8 mt-8 font-light text-justify text-sm md:text-base">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className='mb-4'>Feel free to contact me for collaboration, paste your message and let's discuss further.</p>
          <a href="mailto:fandi4160@gmail.com" className='flex w-fit'>
            <button className='bg-gray-600 hover:bg-gray-500 duration-300 px-4 py-3 rounded-md flex flex-row items-center'>
              <img src={gmailImg} alt="gmail" className='w-6 h-6 object-contain' />
              <span className='ps-2'>Send Message on Gmail</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About