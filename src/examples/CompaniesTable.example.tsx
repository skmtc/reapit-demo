import { useCompaniesTable } from '@/tables/CompaniesTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { CompanyModel } from '@/schemas/companyModel.generated.tsx'

export const fieldNames = fieldsConfig<CompanyModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  name: true,
  branch: true,
  notes: true,
  active: true,
  marketingConsent: true,
  vatRegistered: true,
  typeIds: true,
  supplierTypeId: true,
  workPhone: true,
  mobilePhone: true,
  email: true,
  archivedOn: true,
  fromArchive: true,
  address: true,
  payments: true,
  additionalContactDetails: true,
  officeIds: true,
  negotiatorIds: true,
  communicationPreferenceLetter: true,
  communicationPreferenceEmail: true,
  communicationPreferencePhone: true,
  communicationPreferenceSms: true,
  metadata: true,
  _eTag: true,
  relationships: true,
})
export const CompaniesTable = () => {
  const { rows } = useCompaniesTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useCompaniesTable</Typography>
        <Button
          component={RouterLink}
          to={`/companies/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create company
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
