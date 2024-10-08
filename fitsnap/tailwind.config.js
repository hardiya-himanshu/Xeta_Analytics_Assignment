/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customLight: '#F2F2F2',
        customDark: '#020202',
        customBlack: 'black',
        customWhite: 'white',
        customBlue: '#5E9ED7',
        customBlue2: '#13118F',
        custom1: '#7D8DC7',
        custom2: '#5E9ED7',
        custom3: '#C46DA0',
        custom4: '#69996A',
      },
    },
  },
  plugins: [],
}