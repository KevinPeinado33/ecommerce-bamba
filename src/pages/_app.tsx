import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { ToastContainer } from 'react-toastify'

import { store } from '@/common/data/store'
import { lightTheme } from '@/common/themes'

import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={ store }>
    <QueryClientProvider client={ queryClient } >
      <ReactQueryDevtools />
      <ToastContainer />
      <ThemeProvider theme={ lightTheme } >
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  </Provider>
  )
}

export default App
