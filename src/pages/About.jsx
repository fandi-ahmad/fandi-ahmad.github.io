import React from 'react'

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

          <p className='mb-4'>
            Feel free to contact me for further collaboration and discussion.
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