import { useCompaniesIdRelationshipsTable, getuseCompaniesIdRelationshipsTableColumn } from '@/tables/Companies.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { companyRoleModelConfig } from '@/config/companyRoleModelConfigConfig.example.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { CompanyRoleModel } from '@/schemas/companyRoleModel.generated.tsx'

export const fieldNames = fieldsConfig<CompanyRoleModel>({
        _links: true,
_embedded: true,
id: true,
created: true,
modified: true,
companyId: true,
associatedType: true,
associatedId: true,
fromArchive: true
      });
export const CompaniesIdRelationshipsTable = () => {
  const columns: ColumnsList<CompanyRoleModel> = fieldNames.map((col) => getuseCompaniesIdRelationshipsTableColumn(col, companyRoleModelConfig))

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useCompaniesIdRelationshipsTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useCompaniesIdRelationshipsTable</Typography>
        <Button
          component={RouterLink}
          to={`/companies/${id}/relationships/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create companyRole
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;