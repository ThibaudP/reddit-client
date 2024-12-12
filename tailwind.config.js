/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        upvote: '#ff8b60',
        downvote: '#9494ff',
      },
    },
  },
  plugins: [],
};
