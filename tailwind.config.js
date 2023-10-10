/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bluelight': '#24aac2',
      },
      animation: {
        'newpulse': 'newpulse 1s ease-in infinite',
        'audioanimate': 'audioanimate 2s ease-in-out infinite',
        'audioanimates': 'audioanimates 3s ease-in-out infinite',
      },
      keyframes: {
        audioanimate: {
          '0%': {
            transform: 'scaleY(100%)',
          },
          '25%':{
            transform: 'scaleY(150%)'
          },
          '50%':{
            transform: 'scaleY(90%)'
          },
          '75%':{
            transform: 'scaleY(120%)'
          },
          '100%':{
            transform: 'scaleY(100%)'
          }
        },
        audioanimates: {
          '0%': {
            transform: 'scaleY(100%)',
          },
          '25%':{
            transform: 'scaleY(160%)'
          },
          '50%':{
            transform: 'scaleY(80%)'
          },
          '75%':{
            transform: 'scaleY(110%)'
          },
          '100%':{
            transform: 'scaleY(100%)'
          }
        },
        newpulse: {
          '0%, 100%': {
            opacity: 0
          },
          '50%':{
            opacity: 0.1
          }
        },
      },
    },
  },
  plugins: [],
}