import React from 'react'
import { Template, TextHead, TextSubHead, ImageTool, Text } from './Template'

import bootstrapImg from '../../assets/logo/bootstrap.webp'
import viteImg from '../../assets/logo/vite.webp'
import vueImg from '../../assets/logo/vuejs.webp'
import axiosImg from '../../assets/logo/axios.webp'
import owmImg from '../../assets/logo/open-weather-map.png'
import cover from '../../assets/images/portofolio/weather-app-cover.webp'

const WeatherApp = () => {

  return (
    <Template title='Weather App' subtitle='Weather Forecast'  >
      <div style={{ backgroundImage: `url(${cover})`, backgroundSize: '75% ' }} className='p-8 bg-blue-500 bg-contain bg-no-repeat bg-right-bottom'>
       
        <TextHead>Web Based Weather Application</TextHead>
        <p className='text-sm font-light w-full md:w-2/3 lg:w-1/3 mt-8 text-justify'>
          A simple and efficient web-based weather application, allowing users to quickly get up-to-date weather information by city or country.
        </p>

        <p className='text-blue-950 text-lg mt-8 font-medium capitalize'>Technology:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 w-fit mt-4">
          <ImageTool src={viteImg} />
          <ImageTool src={vueImg} />
          <ImageTool src={axiosImg} />
          <ImageTool src={bootstrapImg} />
          <ImageTool src={owmImg} className='rounded-md' />
        </div>

      </div>

      <div className='text-gray-800 bg-white p-8'>
        <TextSubHead className='bg-blue-500'>About Project</TextSubHead>
        <Text>
          In this project, I created a simple and efficient web-based weather application, allowing users to quickly get up-to-date weather information based on the city or country they type in a search. I utilize the OpenWeatherMap API service to get accurate real-time weather data.
        </Text>

        <TextSubHead className='bg-blue-500 mt-8'>Main Feature</TextSubHead>
        <Text><strong>📌 Location Search:</strong> Users can enter the city or country name to get the latest weather information.</Text>
        <Text><strong>📌 Weather Details View:</strong> Displays weather details such as temperature, humidity, wind speed and weather conditions in a visual and informative manner.</Text>
        <Text><strong>📌 Responsive Design:</strong> Ensures the user interface can be conveniently accessed across devices, from desktop to mobile devices.</Text>

        <TextSubHead className='bg-blue-500 mt-8'>Technology</TextSubHead>
        <Text><strong>📌 ViteJS + VueJS:</strong> Uses ViteJS as a rapid web development framework, along with VueJS to manage application components and state.</Text>
        <Text><strong>📌 Axios:</strong> Use Axios to make HTTP requests to the OpenWeatherMap API and get weather data.</Text>
        <Text><strong>📌 Bootstrap:</strong> Implemented Bootstrap for responsive design and clean user interface components.</Text>
        
        <TextSubHead className='bg-blue-500 mt-8'>Open Weather Map API Integration</TextSubHead>
        <Text><strong>📌 Real-Time Weather Data:</strong> Integrates OpenWeatherMap API to get up-to-date weather data based on user-entered location.</Text>
        <Text><strong>📌 Short-Term Forecast:</strong> Provides short-term weather forecasts to help users prepare for their daily activities.</Text>
        
        <TextSubHead className='bg-blue-500 mt-8'>User Experience</TextSubHead>
        <Text>
          The Weather App was designed with a focus on ease of use and accessibility of up-to-date weather information. With an intuitive display and efficient search features, users can quickly get the weather information they need.
        </Text>


        <div className='mt-8'>
          <p>
            Demo link:
            <a className='text-blue-600 hover:underline' href="https://fandi-ahmad.github.io/weather-app/" target='_blank'> fandi-ahmad.github.io/weather-app/</a>
          </p>
        </div>
      </div>

    </Template>
  )
}

export default WeatherApp