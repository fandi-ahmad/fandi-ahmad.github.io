import React, { useState } from 'react'

const Contact = () => {
  const uniqueAutoCompleteValue = `off-${new Date().getTime()}`;
  const classInput = 'mt-1 p-2 w-full border border-gray-500 focus:border-blue-400 text-sm outline-none rounded-md bg-transparent active:outline-none'

  const [alertEmailText, setAlertEmailText] = useState('Email is required')
  const getId = id => document.getElementById(id)

  const checkInput = (idInput, idText) => {
    const inputValue = getId(idInput).value
    inputValue !== '' ? getId(idInput).classList.remove('border-red-400') : null
    inputValue !== '' ? getId(idText).classList.add('hidden') : null
  }

  const dangerStyle = (idInput, idText) => {
    getId(idInput).classList.add('border-red-400')
    getId(idText).classList.remove('hidden')
  }

  const sendMail = async () => {

    const fullname = getId('fullname').value
    const email = getId('email').value
    const message = getId('message').value

    fullname === '' ? dangerStyle('fullname', 'alertName') : null
    message === '' ? dangerStyle('message', 'alertMessage') : null

    email === '' || !email.includes("@gmail.com") ? dangerStyle('email', 'alertEmail') : null
    email === '' ? setAlertEmailText('Email is required') :
    !email.includes("@gmail.com") ? setAlertEmailText('Invalid email') : null

    if (fullname !== '' && email !== '' && email.includes('@gmail.com') && message !== '') {
      getId('loader').classList.remove('hidden')
      try {
        (function(){
          emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY); // Account Public Key
        })();

        const params = {
          fullname: fullname,
          email: email,
          message: message,
        };
    
        const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID; // Email Service ID
        const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID; // Email Template ID
    
        await emailjs.send(serviceID, templateID, params)
        getId('fullname').value = ''
        getId('email').value = ''
        getId('message').value = ''
        getId('loader').classList.add('hidden')
        getId('successSend').classList.remove('hidden')
        setTimeout(() => {
          getId('successSend').classList.add('hidden')
        }, 10000);
      } catch (error) {
        getId('failedSend').classList.remove('hidden')
        setTimeout(() => {
          getId('failedSend').classList.add('hidden')
        }, 10000);
      }
    }
    
  }

  return (
    <div className='mx-4 md:mx-8 mt-8'>
      <figure>
        <iframe className='w-full h-96 rounded-xl' loading='lazy' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3400383265457!2d119.85852747408339!3d-0.8871711991042295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x554401014ed6861%3A0xefb9e810bc2e151b!2sSTMIK%20Adhi%20Guna!5e0!3m2!1sid!2sid!4v1709878429469!5m2!1sid!2sid"></iframe>
      </figure>

      <div className='mt-8'>
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

        <div>
          <div className="mb-4 flex flex-col lg:flex-row gap-4">
            <div className='w-full'>
              <input type="text" id="fullname" name="fullname" onKeyUp={() => checkInput('fullname', 'alertName')} className={classInput} autoComplete={uniqueAutoCompleteValue} placeholder='Full Name' required />
              <small id='alertName' className='text-xs text-red-400 hidden'>Name is required</small>
            </div>
            <div className='w-full'>
              <input type="email" id="email" name="email" onKeyUp={() => checkInput('email', 'alertEmail')} className={classInput} autoComplete={uniqueAutoCompleteValue} placeholder='Email Adress' required />
              <small id='alertEmail' className='text-xs text-red-400 hidden'>{alertEmailText}</small>
            </div>
          </div>
          <div className='w-full'>
            <textarea id="message" onKeyUp={() => checkInput('message', 'alertMessage')} cols="30" rows="8" placeholder='Your Message' className={classInput + ' resize-none'} required></textarea>
            <small id='alertMessage' className='text-xs text-red-400 hidden'>Message is required</small>
          </div>

          <div className='flex justify-end items-center mt-4'>
            <div className='mr-8 text-sm text-red-400 hidden' id='failedSend'>Failed to send, something wrong!!</div>
            <div className='mr-8 text-sm text-green-400 hidden' id='successSend'>Email sent successfully!!</div>
            <button onClick={sendMail} className='bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-500 duration-200 transition-all flex flex-row items-center'>
              <div className='loader mr-2 hidden' id='loader'></div>
              <div>Send Message</div>
              <i className="fa-solid fa-paper-plane pl-2"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact