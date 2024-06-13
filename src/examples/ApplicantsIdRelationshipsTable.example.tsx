import { useApplicantsIdRelationshipsTable } from '@/tables/ApplicantsTable.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { ApplicantContactRelationshipModel } from '@/schemas/applicantContactRelationshipModel.generated.tsx'

export const fieldNames = fieldsConfig<ApplicantContactRelationshipModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  applicantId: true,
  associatedType: true,
  associatedId: true,
  isMain: true,
  fromArchive: true,
})
export const ApplicantsIdRelationshipsTable = () => {
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { rows } = useApplicantsIdRelationshipsTable({ fieldNames, id })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useApplicantsIdRelationshipsTable</Typography>
        <Button
          component={RouterLink}
          to={`/applicants/${id}/relationships/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create applicantContactRelationship
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
