import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { useCompaniesIdRelationshipsTable, getCompaniesIdRelationshipsColumn } from '@/tables/companies.generated.tsx'
import { CompanyRoleModel } from '@/schemas/index.ts'
import { companyRoleModelConfig } from '@/config/companyRoleModel.example.tsx'

const fieldNames = fieldsConfig<CompanyRoleModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  companyId: true,
  associatedType: true,
  associatedId: true,
  fromArchive: true,
})

export const CompaniesIdRelationships = () => {
  const columns: ColumnsList<CompanyRoleModel> = fieldNames.map((col) =>
    getCompaniesIdRelationshipsColumn(col, companyRoleModelConfig),
  )

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useCompaniesIdRelationshipsTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">CompaniesIdRelationships</Typography>
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
