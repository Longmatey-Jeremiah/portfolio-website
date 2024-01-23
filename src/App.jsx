// eslint-disable-next-line no-unused-vars
import React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Router from './router'

export default function App () {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  )
}