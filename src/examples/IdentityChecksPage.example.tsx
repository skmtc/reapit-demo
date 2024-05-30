import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useIdentityChecksTable, getIdentityChecksColumn } from '@/tables/identitychecks.generated.tsx'
import { IdentityCheckModel } from '@/schemas/index.ts'
import { identityCheckModelConfig } from '@/config/identityCheckModel.example.tsx'

const fieldNames = fieldsConfig<IdentityCheckModel>({
  _links: true,
  _embedded: true,
  id: true,
  contactId: true,
  created: true,
  modified: true,
  checkDate: true,
  status: true,
  negotiatorId: true,
  identityDocument1: true,
  identityDocument2: true,
  metadata: true,
  _eTag: true,
})

export const IdentityChecks = () => {
  const columns: ColumnsList<IdentityCheckModel> = fieldNames.map((col) =>
    getIdentityChecksColumn(col, identityCheckModelConfig),
  )

  const { table, dataQuery } = useIdentityChecksTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">IdentityChecks</Typography>
        <Button
          component={RouterLink}
          to={`/identityChecks/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create identityCheck
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
