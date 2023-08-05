/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text_title: '#0E385D',
        text_desc: '#9D9D9D',
        btn_color_one: '#22AD60',
        btn_color_two: '#303E6D',
        text_subTitle: '#20527E',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", ],
  },
}

