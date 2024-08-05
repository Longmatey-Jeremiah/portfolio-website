// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Router from './router'
import theme from './components/ui/theme'
import { BrowserRouter } from 'react-router-dom'

export default function App () {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  )
}