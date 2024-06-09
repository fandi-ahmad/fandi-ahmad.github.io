import React from 'react'

const About = () => {

  return (
    <div>
      <div>
        <div className="px-4 md:px-8 mt-8 font-light text-justify text-sm md:text-base">
          <p className='mb-4'>
            Hello! I'm Fandi, a passionate and dedicated Full Stack Web Developer with a strong background in both front-end and back-end development. With a keen eye for design and a meticulous attention to detail, I strive to create dynamic, user-friendly, and responsive websites and applications that deliver seamless experiences.
          </p>

          <p className='mb-4'>
            I believe that the best projects are built on strong collaborations. I enjoy working closely with clients and teams to bring their visions to life. My approach is client-centric, focusing on understanding their goals and providing tailored solutions that meet their unique needs.
          </p>

        </div>

        <div className='px-4 md:px-8 mt-8'>
          <h2 className="text-2xl font-bold mb-4">
            What I'm Doing
          </h2>

          {/* card */}
          <div className='flex flex-col md:flex-row'>
            <div className='bg-gray-600 mb-4 md:mb-0 md:mr-4 bg-opacity-50 w-full border border-gray-500 rounded-lg p-8 flex flex-col sm:flex-row items-center'>
              <div className='text-4xl text-blue-300'>
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <div className='sm:pl-4 text-center sm:text-start'>
                <h3 className='text-lg font-semibold pb-2'>Web Development</h3>
                <div className='text-sm md:text-base'>
                  Website design and development services, powered by modern technology.
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
                  Website-based application design and development.
                </div>
              </div>
            </div>
          </div>
        

        </div>

      </div>
    </div>
  )
}

export default About