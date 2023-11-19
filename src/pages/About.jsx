import React from 'react'

// images
import cssImg from '../assets/logo/css.png'
import htmlImg from '../assets/logo/html.png'
import figmaImg from '../assets/logo/figma.png'
import jsmg from '../assets/logo/javascript.png'
import reactImg from '../assets/logo/reactjs.png'
import vueImg from '../assets/logo/vuejs.png'
import tailwindImg from '../assets/logo/tailwind.png'
import nodeImg from '../assets/logo/nodejs.png'

const About = () => {
  return (
    <div>
      <div className="px-8 mt-8">
        Hello, I'm Fandi, a Front-End Developer who has just started a career in the world of programming. I have knowledge in HTML, CSS, and JavaScript, as well as experience with frameworks such as React and Vue. I am passionate about creating engaging and interactive web experiences, and am always open to learning and developing further in this area.
      </div>

      <div className="px-8 mt-8">
        <h2 className="text-2xl font-bold mb-4">My Skills</h2>
        <div className="grid grid-cols-8 gap-4">
          <img src={htmlImg} alt="" className="w-12 h-12 object-contain" />
          <img src={cssImg} alt="" className="w-12 h-12 object-contain" />
          <img src={jsmg} alt="" className="w-12 h-12 object-contain" />
          <img src={tailwindImg} alt="" className="w-12 h-12 object-contain" />
          <img src={reactImg} alt="" className="w-12 h-12 object-contain" />
          <img src={vueImg} alt="" className="w-12 h-12 object-contain" />
          <img src={nodeImg} alt="" className="w-12 h-12 object-contain" />
          <img src={figmaImg} alt="" className="w-12 h-12 object-contain" />
        </div>
      </div>
    </div>
  )
}

export default About