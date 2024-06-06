import { useTenanciesIdRelationshipsTable, getuseTenanciesIdRelationshipsTableColumn } from 'tables/Tenancies.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { TenancyContactRelationshipModel } from 'schemas/index.ts'
import { tenancyContactRelationshipModelConfig } from 'config/tenancyContactRelationshipModel.example.tsx'

export const fieldNames = fieldsConfig<TenancyContactRelationshipModel>({
        _links: true,
_embedded: true,
id: true,
created: true,
modified: true,
tenancyId: true,
associatedType: true,
associatedId: true,
isMain: true,
fromArchive: true,
guarantors: true,
references: true
      });
export const TenanciesIdRelationshipsTable = () => {
  const columns: ColumnsList<TenancyContactRelationshipModel> = fieldNames.map((col) => getuseTenanciesIdRelationshipsTableColumn(col, tenancyContactRelationshipModelConfig))

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useTenanciesIdRelationshipsTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useTenanciesIdRelationshipsTable</Typography>
        <Button
          component={RouterLink}
          to={`/tenancies/${id}/relationships/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create tenancyContactRelationship
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;