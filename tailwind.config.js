/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {

    extend: {
      fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
      colors:{
        black:'#000F15',
gradientRed:'#FF9082',
        red:'#FF1D00',
        green:'#00FF67'
      },
    },
  },
  plugins: [],
}

