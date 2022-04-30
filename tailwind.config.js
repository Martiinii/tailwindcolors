module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    'bg-red-400'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
