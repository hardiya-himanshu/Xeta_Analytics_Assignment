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
        customDark: '#1A1A1A',
        customBlack: 'black',
        customWhite: 'white'
      },
    },
  },
  plugins: [],
}