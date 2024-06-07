import React from 'react'
import { Template, TextHead, TextSubHead, ImageTool, Text } from './Template'

import cssImg from '../../assets/logo/css.webp'
import htmlImg from '../../assets/logo/html.webp'
import jsmg from '../../assets/logo/javascript.webp'
import cover from '../../assets/images/portofolio/whackamole-cover.webp'
import imgPreview from '../../assets/images/portofolio/whackamole-preview.webp'
import imgPreview2 from '../../assets/images/portofolio/whackamole.webp'

const WhackaMole = () => {
  return (
    <Template title='Whack A Mole' subtitle='Mini Game'>
      <div style={{ backgroundImage: `url(${cover})`, backgroundSize: '75% ' }} className='p-8 bg-orange-900 bg-contain bg-no-repeat bg-right-bottom'>
       
        <TextHead className='font-semibold'>Whack A Mole Web Game</TextHead>
        <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8 text-justify'>
          Whack-a-Mole is an arcade game that tests the player's reflexes and dexterity.
        </p>

        <p className='text-orange-200 text-lg mt-8 font-medium capitalize'>Programming Language I Used:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 w-fit mt-4">
          <ImageTool src={htmlImg} />
          <ImageTool src={cssImg} />
          <ImageTool src={jsmg} className='rounded-md' />
        </div>

      </div>

      <div className='text-gray-800 bg-white p-8'>
        <TextSubHead className='bg-orange-900'>About Project</TextSubHead>
        <Text>
          In this project, I designed and implemented the classic web-based game 'Whack-a-Mole'. Whack-a-Mole is an arcade game that tests the player's reflexes and dexterity. In this web version, I combined fun game elements with responsive design for an optimal user experience across devices.
        </Text>

        <TextSubHead className='bg-orange-900 mt-8'>Technology</TextSubHead>
        <Text><strong>📌 HTML, CSS, and JavaScript:</strong> Implement game logic and user interactions using a combination of basic web technologies.</Text>
        <Text><strong>📌 CSS Animations:</strong> Leverages CSS animations to create smooth character movements.</Text>
        
        <div className='mt-8'>
          <p>
            Some assets from:
            <a className='text-blue-600 hover:underline' href="https://www.freepik.com/free-vector/low-point-view-nature-landscape_24552494.htm#query=ground&position=1&from_view=search&track=sph&uuid=1a942c56-370e-4795-b5b2-0881f4772dd6" target='_blank'> Freepik</a>
          </p>
          <p>
            Demo link:
            <a className='text-blue-600 hover:underline' href="https://whack-a-mole.fandijsx.repl.co/" target='_blank'> whack-a-mole.fandijsx.repl.co</a>
          </p>
        </div>

      </div>

      <img src={imgPreview} alt="" className='w-full' />
      <img src={imgPreview2} alt="" className='w-full' />
    </Template>
  )
}

export default WhackaMole