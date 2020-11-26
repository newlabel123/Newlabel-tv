import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: (props) => ({
      '*': {
        boxSizing: 'border-box !important'
      },
      html: {
        fontSize: '62.5%'
      },
      body: {
        fontSize: '1.4rem',
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        fontFamily: "'Fira Sans', sans-serif",
        background: 'brand.white'
      }
    })
  },
  colors: {
    brand: {
      red: '#E50914',
      white: '#FAFAFC',
      black: '#030303',
      gray100: '#A1A4B1',
      gray200: '#8B90A0',
      gray300: '#505565',
      gray400: '#232735'
    }
  }
})

export { theme }
