/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width"
      },
      animation: {
        "show-toast": "show 200ms ease-in-out",
        "hide-toast": "hide 200ms ease",
        "toast-progress": "progress 5s linear"
      },
      keyframes: {
        show: {
          "0%": {
            transform: "translateX(100%)"
          },
          "100%": {
            transform: "translateX(0%)"
          }
        },
        hide: {
          "0%": {
            transform: "translateX(0%)"
          },
          "100%": {
            transform: "translateX(100%)"
          }
        },
        progress: {
          "0%": {
            width: "100%"
          },
          "100%": {
            width: "0%"
          }
        }
      }
    }
  },
  plugins: []
};
