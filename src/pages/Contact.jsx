import React from 'react'

const ContactForm = () => {
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Formulir Kontak</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Masukkan nama Anda"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Masukkan alamat email Anda"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Tulis pesan Anda di sini"
            required
          ></textarea>
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};


const Contact = () => {
  const uniqueAutoCompleteValue = `off-${new Date().getTime()}`;
  const classInput = 'mt-1 p-2 w-full border border-gray-500 focus:border-blue-400 text-sm outline-none rounded-md bg-transparent active:outline-none'

  return (
    <div className='mx-4 md:mx-8 mt-8'>
      <figure>
        <iframe className='w-full h-96 rounded-xl'  loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1410.44152350817!2d119.83975258753327!3d-0.8954569362188187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8beda71769a755%3A0x2823c409c4654061!2sJl.%20Tamako%20I%2C%20Donggala%20Kodi%2C%20Kec.%20Palu%20Bar.%2C%20Kota%20Palu%2C%20Sulawesi%20Tengah!5e0!3m2!1sid!2sid!4v1700373442307!5m2!1sid!2sid"></iframe>
      </figure>

      <div className='mt-8'>
        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>

        <div>
          <div className="mb-4 flex flex-col lg:flex-row gap-4">
            <input type="text" id="name" name="name" className={classInput} autoComplete={uniqueAutoCompleteValue} placeholder="Full Name" required />
            <input type="email" id="name" name="name" className={classInput} autoComplete={uniqueAutoCompleteValue} placeholder="Email Address" required />
          </div>
          <textarea name="" id="" cols="30" rows="8" placeholder='Your Message' className={classInput + ' resize-none'} required></textarea>

          <div className='flex justify-end mt-4'>
            <button className='bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-500 duration-200 transition-all'>
              Send Message
              <i className="fa-solid fa-paper-plane pl-2"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact