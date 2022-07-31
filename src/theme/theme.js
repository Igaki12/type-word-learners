import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'blackAlpha.800',
        color: 'white',
      },
      p: {
        fontSize: { base: 'md', md: 'lg' },
        lineHeight: 'tall',
      },
    },
  },
})
export default theme
