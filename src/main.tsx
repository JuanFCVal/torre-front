import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { darkTheme } from './theme/dark'
import './_style.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Provider store={store}>
      <App/>
      </Provider>
    </ThemeProvider>
   
    </BrowserRouter>
  </React.StrictMode>,
)
