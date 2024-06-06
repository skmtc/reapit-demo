import { useApplicantsIdRelationshipsTable, getuseApplicantsIdRelationshipsTableColumn } from 'tables/Applicants.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { ApplicantContactRelationshipModel } from 'schemas/index.ts'
import { applicantContactRelationshipModelConfig } from 'config/applicantContactRelationshipModel.example.tsx'

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
fromArchive: true
      });
export const ApplicantsIdRelationshipsTable = () => {
  const columns: ColumnsList<ApplicantContactRelationshipModel> = fieldNames.map((col) => getuseApplicantsIdRelationshipsTableColumn(col, applicantContactRelationshipModelConfig))

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useApplicantsIdRelationshipsTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;