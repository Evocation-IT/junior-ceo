/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'jc-yellow': '#FFC629',
        'jc-cyan': '#00B4D8',
        'jc-magenta': '#E63975',
        'jc-blue': '#2D4EF5',
        'jc-ink': '#14161B',
        'jc-slate': '#3A3F4B',
        'jc-cloud': '#F7F8FA',
        'jc-white': '#FFFFFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-magenta-blue': 'linear-gradient(135deg, #E63975 0%, #2D4EF5 100%)',
        'gradient-yellow-cyan': 'linear-gradient(135deg, #FFC629 0%, #00B4D8 100%)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
