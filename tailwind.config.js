/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-down": "slideDown 0.5s ease-out",
        loading: "loading 4s ease-out infinite",
        blink: "blink 1.5s infinite",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        loading: {
          "0%": { width: "0" },
          "80%": { width: "100%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      colors: {
        primary: "#C31815", // Replace with your main theme color
        secondary: "#2A2A2A",
        accent: "#333333",
        light:'#a97e7d',
        white: "#FFFFFF",
        borderblue:'#1A73E8'
     
      },
      fontFamily: {
        "ibm-plex": ["IBMPlexSerif-Regular"],
        NunitoSans: ["NunitoSans_7pt_SemiCondensed-Regular", "sans-serif"],
        Poppins: ["Poppins-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
