import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: (props) => {
      return {
        '*': {
          boxSizing: 'border-box !important',
        },
        html: {
          fontSize: '62.5%',
        },
        body: {
          fontSize: '1.4rem',
          color: props.colorMode === 'light' ? 'brand.gray300' : 'brand.white2',
          fontFamily: "'Fira Sans', sans-serif",
          background: props.colorMode === 'light' ? 'brand.white' : '#14142B',
          transition: 'background .5s',
        },
        '.active': {
          '&.icon-box': {
            background: 'rgba(27,185,84, 0.2)',
            svg: {
              stroke: 'rgba(0, 0, 0, 0.0)',
              fill: '#1BB954',
            },
          },
          '.navlnk-wrapper': {
            background: 'rgba(27,185,84, 0.2)',

            '.link-text': {
              p: {
                opacity: 1,
                color: '#1BB954',
              },
            },

            svg: {
              stroke: 'rgba(0, 0, 0, 0.0)',
              fill: '#1BB954',
            },
          },
        },
        '::placeholder': {
          color: props.colorMode === 'light' ? 'brand.gray300' : 'brand.white2',
        },
        '.Toastify__progress-bar--dark': {
          background: '#1BB954 !important',
        },
      }
    },
  },
  colors: {
    brand: {
      red: '#1BB954',
      green: '#1BB954',
      white: '#FAFAFC',
      white2: '#D3D4D8',
      black: '#030303',
      gray100: '#A1A4B1',
      gray200: '#8B90A0',
      gray300: '#505565',
      gray400: '#232735',
      gray500: '#F0F1F3',
    },
  },
})

export { theme }
