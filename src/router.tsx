import { ApplicantsTable } from '@/sections/Applicants/examples/ApplicantsTable.example.tsx'
import { CreateApplicantsForm } from '@/sections/Applicants/examples/CreateApplicantsForm.example.tsx'

export const Routes = [
  {
    path: '/applicants/',
    element: <ApplicantsTable />,
  },
  {
    path: '/applicants/',
    element: <CreateApplicantsForm />,
  },
]
