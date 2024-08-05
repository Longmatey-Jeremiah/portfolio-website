import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './components/ui/theme.jsx'

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
)
