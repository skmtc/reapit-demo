import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Root } from '@/components/Root'
import { Contacts } from '@/pages/Contacts'
import { CreateContact } from '@/pages/CreateContact'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'contacts',
        element: <Contacts />,
        children: [
          {
            path: 'new',
            element: <CreateContact />
          }
        ]
      }
    ]
  }
])

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
