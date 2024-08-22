// images
import jsImg from '../assets/logo/javascript.webp'
import tsImg from '../assets/logo/typescript.webp'
import reactImg from '../assets/logo/react_js.webp'
import vueImg from '../assets/logo/vue_js.webp'
import tailwindImg from '../assets/logo/tailwind_CSS.webp'
import bootstrap from '../assets/logo/bootstrap.webp'
import nextjs from '../assets/logo/next_js.webp'
import mu from '../assets/logo/material_UI.webp'
import supabase from '../assets/logo/supabase.png'
import express from '../assets/logo/express_js.webp'
import viteImg from '../assets/logo/vite.webp'
import htmlImg from '../assets/logo/HTML.webp'
import cssImg from '../assets/logo/CSS.webp'
import laravel from '../assets/logo/laravel.png'
import jquery from '../assets/logo/jquery.webp'
import socketio from '../assets/logo/socket_io.png'
import prisma from '../assets/logo/prisma.webp'

import nodeChatFull from '../assets/images/portofolio/node-chat-full.webp'
import nextWriteFull from '../assets/images/portofolio/next-write-full.webp'
import webPenaFull from '../assets/images/portofolio/web-pena-full.webp'
import honeyProductionFull from '../assets/images/portofolio/honey-production-full.webp'
import PersonalWebFull from '../assets/images/portofolio/personal-web-full.webp'
import sipsAppFull from '../assets/images/portofolio/sips-app-full.webp'
import todolistFull from '../assets/images/portofolio/todolist-full.webp'
import whackAMoleFull from '../assets/images/portofolio/whackamole-full.webp'
import weatherAppFull from '../assets/images/portofolio/weather-app-full.webp'
import paertecodeFull from '../assets/images/portofolio/paertecode-full.jpeg'
import simadoFull from '../assets/images/portofolio/simado-full.png'
import etailorFull from '../assets/images/portofolio/etailor-full.png'
import catatanKas from '../assets/images/portofolio/catatan-kas.png'
import roastingYourCv from '../assets/images/portofolio/roasting-your-cv.png'

const projectLists = [
  {
    name: 'roastYourCv',
    category: 'react',
    imageSrcFull: roastingYourCv,
    title: 'Roasting Your CV',
    detail: 'Web App',
    time: 'Aug 2024',
    stackImage: [reactImg, viteImg, tsImg, tailwindImg],
    demo: 'https://roasting-your-cv.vercel.app/',
    source: 'https://github.com/fandi-ahmad/roasting-your-cv'
  },
  {
    name: 'catatanKas',
    category: 'react',
    imageSrcFull: catatanKas,
    title: 'Catatan Kas',
    detail: 'Web App',
    time: 'Aug 2024',
    stackImage: [reactImg, viteImg, tsImg, tailwindImg],
    demo: 'https://catatan-kas-web.vercel.app/',
    source: 'https://github.com/fandi-ahmad/catatan-kas-web'
  },
  {
    name: 'nodeChat',
    category: 'express js',
    imageSrcFull: nodeChatFull,
    title: 'Node Chat',
    detail: 'Web App',
    time: 'Jul 2024',
    stackImage: [express, socketio, prisma, tailwindImg],
    source: 'https://github.com/fandi-ahmad/node-chat'
  },
  {
    name: 'nextWrite',
    category: 'next js',
    imageSrcFull: nextWriteFull,
    title: 'Next Write',
    detail: 'Web App',
    time: 'Jun 2024',
    stackImage: [nextjs, tsImg, tailwindImg, mu, supabase],
    source: 'https://github.com/fandi-ahmad/next-write'
  },
  {
    name: 'simado',
    category: 'react express',
    imageSrcFull: simadoFull,
    title: 'SIMADO - E-Document Management System',
    detail: 'Web App',
    time: 'May 2024',
    stackImage: [reactImg, viteImg, tailwindImg, express],
    source: 'https://github.com/fandi-ahmad/simado-web'
  },
  {
    name: 'paertecode',
    category: 'react',
    imageSrcFull: paertecodeFull,
    title: 'Paerte Code Landing Page',
    detail: 'Landing Page',
    time: 'Feb 2024',
    stackImage: [reactImg, viteImg, tailwindImg],
    demo: 'https://paertecode.vercel.app/'
  },
  {
    name: 'eTailor',
    category: '',
    imageSrcFull: etailorFull,
    title: 'E-Tailor',
    detail: 'Web App',
    time: 'Jan 2024',
    stackImage: [laravel, jquery, tailwindImg]
  },
  {
    name: 'sipsApp',
    category: 'react express',
    imageSrcFull: sipsAppFull,
    title: 'SIPS App - Application Automatic Letters',
    detail: 'Web App',
    time: 'Sep 2023',
    stackImage: [reactImg, viteImg, tailwindImg, express],
    source: 'https://github.com/fandi-ahmad/sips-app-admin'
  },
  {
    name: 'personalWeb',
    category: 'html css js',
    imageSrcFull: PersonalWebFull,
    title: 'Personal Web',
    detail: 'Landing Page',
    time: 'Aug 2023',
    stackImage: [htmlImg, cssImg, jsImg, tailwindImg],
    demo: 'https://static-personal-web-two.vercel.app/',
    source: 'https://github.com/fandi-ahmad/static-personal-web'
  },
  {
    name: 'weatherApp',
    category: 'vue',
    imageSrcFull: weatherAppFull,
    title: 'Weather App',
    detail: 'Web App',
    time: 'Jan 2023',
    stackImage: [vueImg, viteImg, bootstrap],
    demo: 'https://fandi-ahmad.github.io/weather-app/',
    source: 'https://github.com/fandi-ahmad/weather-app'
  },
  {
    name: 'whackAMole',
    category: 'html css js',
    imageSrcFull: whackAMoleFull,
    title: 'Whack a Mole',
    detail: 'Mini Game',
    time: 'Jan 2023',
    stackImage: [htmlImg, cssImg, jsImg],
    demo: 'https://whack-a-mole-bice-two.vercel.app/',
    source: 'https://github.com/fandi-ahmad/whack-a-mole'
  },
  {
    name: 'toDoList',
    category: 'html css js',
    imageSrcFull: todolistFull,
    title: 'To Do List',
    detail: 'Web App',
    time: 'Dec 2022',
    stackImage: [htmlImg, cssImg, jsImg],
    demo: 'https://to-do-list-theta-indol.vercel.app/',
    source: 'https://github.com/fandi-ahmad/to-do-list'
  },
  {
    name: 'penaWeb',
    category: 'html css js',
    imageSrcFull: webPenaFull,
    title: 'PENA Website 2022-2023',
    detail: 'Company Profile',
    time: 'Sep 2022',
    stackImage: [htmlImg, cssImg, jsImg, bootstrap],
    demo: 'https://pena-web-2022.vercel.app/',
    source: 'https://github.com/fandi-ahmad/pena-web-2022'
  },
  {
    name: 'honeyProduction',
    category: 'html css js',
    imageSrcFull: honeyProductionFull,
    title: 'Honey Production Website',
    detail: 'Landing Page',
    time: 'Jul 2022',
    stackImage: [htmlImg, cssImg, jsImg, bootstrap],
    source: 'https://github.com/fandi-ahmad/honey-production-website'
  },
]

export default projectLists