import React from 'react'
import { Template, TextHead, TextSubHead, ImageTool, Text } from './Template'

import cssImg from '../../assets/logo/css.webp'
import htmlImg from '../../assets/logo/html.webp'
import jsmg from '../../assets/logo/javascript.webp'
import cover from '../../assets/images/portofolio/todolist-app-cover.webp'
import imgPreview from '../../assets/images/portofolio/todolist-app.webp'

const Todolist = () => {
  return (
    <Template title='To Do List' subtitle='Tools App'>
      <div style={{ backgroundImage: `url(${cover})`, backgroundSize: '75% ' }} className='p-8 bg-blue-500 bg-contain bg-no-repeat bg-right-bottom'>
       
        <TextHead>Simple To-Do List Application With Local Storage</TextHead>
        <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8 text-justify'>
          The app allows users to create, mark as complete, and delete to-do lists quickly and easily.
        </p>

        <p className='text-blue-950 text-lg mt-8 font-medium capitalize'>Programming Language I Used:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 w-fit mt-4">
          <ImageTool src={htmlImg} />
          <ImageTool src={cssImg} />
          <ImageTool src={jsmg} className='rounded-md' />
        </div>

      </div>

      <div className='text-gray-800 bg-white p-8'>
        <TextSubHead className='bg-blue-500'>About Project</TextSubHead>
        <Text>
          In this project, I created a simple yet effective web-based To-Do List application. The app allows users to create, mark as complete, and delete to-do lists quickly and easily. One of the key features I implemented was the use of Local Storage to store task data locally on the user's device, allowing users to save their task list even after closing or refreshing the page.
        </Text>

        <TextSubHead className='bg-blue-500 mt-8'>Main Feature</TextSubHead>
        <Text><strong>📌 To-Do List Creation:</strong> Users can easily add new tasks with relevant titles and descriptions.</Text>
        <Text><strong>📌 Marking Completed:</strong> Any task can be marked as complete.</Text>
        <Text><strong>📌 Task Deletion:</strong> Facility to delete completed or no longer relevant tasks.</Text>

        <div className='mt-8'>
          <p>
            Demo link:
            <a className='text-blue-600 hover:underline' href="https://todolist.fandijsx.repl.co/" target='_blank'> todolist.fandijsx.repl.co</a>
          </p>
        </div>
      </div>

    </Template>
  )
}

export default Todolist