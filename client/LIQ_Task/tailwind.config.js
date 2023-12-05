// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         mf: "990px",
//       },
//       animation: {
//         'gradient': 'gradient 8s linear infinite',
//       },
//       keyframes: {
//         'gradient': {
//           to: { 'background-position': '200% center' },
//         }
//       }
//     },
//   },
//   plugins: [],
//   corePlugins: {
//     transitionProperty: ['responsive', 'hover', 'focus', 'group-hover'],
//   },
// }

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: true, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        'gradient': {
          to: { 'background-position': '200% center' },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        'gradient': 'gradient 8s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    transitionProperty: ['responsive', 'hover', 'focus', 'group-hover'],
  },
}

