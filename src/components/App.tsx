import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Root } from '@/components/Root'
import { Contacts } from '@/pages/Contacts'
import { CreateContact } from '@/pages/CreateContact'
import { Offices } from '@/pages/Offices'
import { CreateOffice } from '@/pages/CreateOffice'

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
            element: <CreateContact />,
          },
        ],
      },
      {
        path: 'offices',
        element: <Offices />,
        children: [
          {
            path: 'new',
            element: <CreateOffice />,
          },
        ],
      },
    ],
  },
])

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
