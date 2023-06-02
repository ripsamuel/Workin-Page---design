/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'passed':'#58D68D',
        'failed':'#EC7063',
        'skipped':'#4065F0',
        'pending':'#F7DC6F',
        'undefined':'#DC7633',
      },
    },
  },
  plugins: [],
}

