module.exports = {
  content: ["./src/**/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          darker: '#11143A',
          normal: '#2B64F5',
          lighter: '#507DF0'
        },
        grey :{
          normal: '#525967'
        }
      },
      maxWidth: {
        mobile: '411px'
      }
    },
  },
  plugins: [],
}
