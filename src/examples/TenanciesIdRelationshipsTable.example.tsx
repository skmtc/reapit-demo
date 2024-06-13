import { useTenanciesIdRelationshipsTable } from '@/tables/TenanciesTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { TenancyContactRelationshipModel } from '@/schemas/tenancyContactRelationshipModel.generated.tsx'

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
  references: true,
})
export const TenanciesIdRelationshipsTable = () => {
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { rows } = useTenanciesIdRelationshipsTable({ fieldNames, id })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
