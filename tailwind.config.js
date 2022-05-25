module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        k_open: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' }
        },
        k_dim: {
          '0%': { transition: 'opacity(0)'},
          '100%': { transition: 'opacity(1)'},
        }
      },
      animation: {
        open: 'k_open .1s ease-in-out',
        dim: 'k_dim 1s ease-in-out',
      }
    },
  },
  plugins: [],
}
