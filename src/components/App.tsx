import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Root } from '@/components/Root'
import { Routes } from '@/components/Router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [...Routes],
  },
])

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
