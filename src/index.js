import './index.css'
import theme from './theme/theme'
import { createRoot } from 'react-dom/client'
import App from './components/App'

import React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
)
// 2. Wrap ChakraProvider at the root of your app
