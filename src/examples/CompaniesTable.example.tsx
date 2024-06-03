import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useCompaniesTable, getuseCompaniesTableColumn } from '@/tables/companies.generated.tsx'
import { CompanyModel } from '@/schemas/index.ts'
import { companyModelConfig } from '@/config/companyModel.example.tsx'

const fieldNames = fieldsConfig<CompanyModel>({
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
  const columns: ColumnsList<CompanyModel> = fieldNames.map((col) =>
    getuseCompaniesTableColumn(col, companyModelConfig),
  )

  const { table, dataQuery } = useCompaniesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
