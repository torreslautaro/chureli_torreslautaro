module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit' : 'repeat(auto-fit, minmax(200px,225px))',
        'custom' : '5rem 1fr',
        'custom-2' : '11rem 1fr'
      },
      
    },
  },  
  plugins: [],
}