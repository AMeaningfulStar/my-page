import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import '@styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}