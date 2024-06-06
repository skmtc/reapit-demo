import { useCompaniesIdStaffMembersTable, getuseCompaniesIdStaffMembersTableColumn } from 'tables/Companies.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { StaffModel } from 'schemas/index.ts'
import { staffModelConfig } from 'config/staffModel.example.tsx'

export const fieldNames = fieldsConfig<StaffModel>({
        name: true,
active: true,
jobTitle: true,
workPhone: true,
mobilePhone: true,
email: true,
salutation: true
      });
export const CompaniesIdStaffMembersTable = () => {
  const columns: ColumnsList<StaffModel> = fieldNames.map((col) => getuseCompaniesIdStaffMembersTableColumn(col, staffModelConfig))

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useCompaniesIdStaffMembersTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useCompaniesIdStaffMembersTable</Typography>
        <Button
          component={RouterLink}
          to={`/companies/${id}/staffMembers/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create staff
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;