/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'msn-blue': '#0078D7',
          'xp-start': '#235ADC',
          'xp-taskbar': '#245EDC',
          'msn-header': '#195BBF',
        },
        boxShadow: {
          'win98': 'inset -1px -1px #0a0a0a,inset 1px 1px #dfdfdf,inset -2px -2px grey,inset 2px 2px #fff',
        }
      },
    },
    plugins: [],
  }