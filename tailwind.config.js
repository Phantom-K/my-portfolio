/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:"350px",
      md:"768px",
      lg:"1024px",
      "2xl":"1536px",
    },
    colors:{
      blackgreen:"#1A1A19",
      white: "#f1e1d9",
      black:"#1e1917",
      darkGreen:"#18230F",
      green:"#27391C",
      lightGreen:"#255F38",
      brightGreen:"#1F7D53",
      lightBrown:"#EED3B1",
      brownishWhite:"#F3CA52",
      grey:"#626965",
      darkGrey:"#3f4441",
      lightgrey:"#978580",
    },
    extend: {
      boxShadow:{
        goldShadow:'0px 0px 20px 0px rgba(243 202 82)',
        goldMediunshadow:'10px 10px 200px 150px  rgba(243 202 82)',
        greenMediunshadow:'10px 10px 200px 150px  rgba(31 125 83 )',

      }
    },
    fontFamily:{
      body:['Josefin Sans'],
      special:['Roboto'],
    }
  },
  plugins: [],
}

