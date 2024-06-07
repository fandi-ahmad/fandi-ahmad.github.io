import React from 'react'

const About = () => {

  return (
    <div>
      <div>
        <div className="px-4 md:px-8 mt-8 font-light text-justify text-sm">
          <p className='mb-4'>
            Hello, I'm Fandi, a Full Stack Web Developer with a passion for creating web experiences that are not only functional, but also stunning. In the front-end world, I have expertise in implementing designs using HTML, CSS, and JavaScript, and I believe that the use of modern frameworks such as React and Vue brings a new dimension to interactivity and visual appeal.
          </p>

          <p className='mb-4'>
            In back-end development, I rely on Express to ensure optimal performance and security. I don't just see web development as a job, but as an opportunity to embrace challenges and continue learning. I believe that innovation comes through the desire to continually grow, and I'm always open to digging deeper into the world of web development.
          </p>

          <p className='mb-4'>
            With a combination of technical expertise and a spirit of exploration, I'm ready to take your web project to the next level. Let's create an unforgettable web experience together!
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
                <div className='text-sm'>
                  I offer stunning website design and development services, powered by modern technology.
                </div>
              </div>
            </div>

            <div className='bg-gray-600 bg-opacity-50 w-full border border-gray-500 rounded-lg p-8 flex flex-col sm:flex-row items-center'>
              <div className='text-4xl text-blue-300'>
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <div className='sm:pl-4 text-center sm:text-start'>
                <h3 className='text-lg font-semibold pb-2'>Web Based Application</h3>
                <div className='text-sm'>
                  offer website-based application design and development.
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