/** @type {import('tailwindcss').Config} */
import ViteCompressionPlugin from 'vite-plugin-compress';

export default {
  assetsInclude: /\.(png|jpe?g|gif|svg|webp)$/i,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xs': '360px',
      },
      fontSize: {
        '2xs': '0.60rem'
      },
      backgroundImage: {
        webPenaCover: "url('./src/assets/images/portofolio/web-pena-cover.webp')"
      }
    }
  },
  plugins: [
    require("daisyui"),
    ViteCompressionPlugin({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  daisyui: {
    themes: ["dark"],
  },
}