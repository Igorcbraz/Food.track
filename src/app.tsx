import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/themeProvider'
import { queryClient } from './lib/reactQuery'
import { router } from './Routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="food.track-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | food.track" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
