/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js}',
    './resources/**/*.blade.php',
    './resources/**/*.js',
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
}
