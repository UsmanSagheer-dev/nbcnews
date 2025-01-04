/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-down': 'slideDown 0.5s ease-out', // Slide down animation ka duration
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        'ibm-plex': ['IBMPlexSerif-Regular', 'serif'], // Add custom font here
        'NunitoSans': ['NunitoSans_7pt_SemiCondensed-Regular', 'sans-serif'], // Add custom font here
      },
    },
  },
  plugins: [],
}
