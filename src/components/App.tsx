import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Root } from '@/components/Root'
import { Contacts } from '@/examples/ContactsPage.example'
import { CreateContactsForm } from '@/examples/CreateContacts.example'
import { Offices } from '@/examples/OfficesPage.example'
import { CreateOfficesForm } from '@/examples/CreateOffices.example'

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
            element: <CreateContactsForm />,
          },
        ],
      },
      {
        path: 'offices',
        element: <Offices />,
        children: [
          {
            path: 'new',
            element: <CreateOfficesForm />,
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
