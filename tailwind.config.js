module.exports = {
  content: [
    "index.html",
    "./src/**/*.{jsx,tsx,js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#bfbaba",
        "secondary":"#f4bb4a",
        'custom-pink-light': '#ff9595',
        'custom-pink': '#ff4747',
        'custom-pink-dark': '#ff3838',
         
      },
      fontFamily:{
        inter: ["Inter", "sans-serif"],
        poppins:["Poppins","serif"],
        ubuntu:["Ubuntu","sans-serif"]
      },
      boxShadow:{
        cardShadow:"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;",
        circleShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      animation:{
        fastPulse:"pulse 0.5s linear infinite",
      },
    },
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};