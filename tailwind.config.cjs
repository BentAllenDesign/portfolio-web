const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false
  },
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  important: '#root',
  variants: {
    extend: {
      padding: ['first', 'last'],
      margin: ['first', 'last'],
    },
  },
  theme: {
    extend: {
      screens: {
        xs: '450px',
      },
      fontFamily: {
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
        logo: ['Permanent Marker'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        accent: '#1C3A6B',
        primary: {
          50: '#F8F9FD',
          100: '#d4e6fc',
          200: '#B0D5FF',
          300: '#75B6FF',
          400: '#3B98FF',
          500: '#007AFF',
          600: '#0061CC',
          700: '#004899',
          800: '#002F66',
          900: '#001733',
        },
        secondary: {
          100: '#FFF8EB',
          200: '#FFE3B0',
          300: '#FFCC75',
          400: '#FFB23B',
          500: '#FF9500',
          600: '#CC7C00',
          700: '#996000',
          800: '#664200',
          900: '#332200',
        },
        neutral: {
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      animation: {
        'load': 'load 5s ease-in-out infinite',
        'load-inner': 'load-inner 2s ease-out infinite',
        'gradient-x': 'gradient-x 14s ease infinite',
        'gradient-x-fast': 'gradient-x 9s ease infinite',
        'gradient-x-faster': 'gradient-x 5s ease infinite',
        'gradient-x-fastest': 'gradient-x 2s ease infinite',
        'gradient-x-toofast': 'gradient-x 1s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-y-fast': 'gradient-y 9s ease infinite',
        'gradient-y-faster': 'gradient-y 5s ease infinite',
        'gradient-y-fastest': 'gradient-y 2s ease infinite',
        'gradient-y-toofast': 'gradient-y 1s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        blob: 'blob 7s infinite',
        'blob-slow': 'blob 10s infinite',
        marquee: 'marquee linear infinite',
        marquee2: 'marquee2 linear infinite',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(80px, -50px) scale(1.1) rotate(15deg)",
          },
          "66%": {
            transform: "translate(-50px, 20px) scale(0.9) rotate(-10deg)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        load: {
          '0%': {
            transform: 'rotate(0deg)',
            'border-radius': '44px',

          },
          '50%': {
            transform: 'rotate(1080deg)',
            'border-radius': '30px'
          },
          '100%': {
            transform: 'rotate(0deg)',
            'border-radius': '44px'
          }
        },
        'load-inner': {
          '0%': {
            transform: 'rotate(180deg) scale(1)',
            'border-radius': '8px',

          },
          '25%': {
            transform: 'rotate(90deg) scale(1.3)',
            'border-radius': '20px'
          },
          '50%': {
            transform: 'rotate(0deg) scale(1)',
            'border-radius': '12px'
          },
          '75%': {
            transform: 'rotate(90deg) scale(1.3)',
            'border-radius': '20px'
          },
          '100%': {
            transform: 'rotate(180deg) scale(1)',
            'border-radius': '8px'
          }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), 
    // require('@tailwindcss/aspect-ratio'), 
    // require('@tailwindcss/typography'), 
    // require('@tailwindcss/line-clamp'),
    // require('tailwindcss-textshadow'),
  ],
}
