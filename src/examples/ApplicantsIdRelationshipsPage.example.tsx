import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import {
  useApplicantsIdRelationshipsTable,
  getApplicantsIdRelationshipsColumn,
} from '@/tables/applicants.generated.tsx'
import { ApplicantContactRelationshipModel } from '@/schemas/index.ts'
import { applicantContactRelationshipModelConfig } from '@/config/applicantContactRelationshipModel.example.tsx'

const fieldNames = fieldsConfig<ApplicantContactRelationshipModel>({
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

export const ApplicantsIdRelationships = () => {
  const columns: ColumnsList<ApplicantContactRelationshipModel> = fieldNames.map((col) =>
    getApplicantsIdRelationshipsColumn(col, applicantContactRelationshipModelConfig),
  )

  const { table, dataQuery } = useApplicantsIdRelationshipsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">ApplicantsIdRelationships</Typography>
        <Button
          component={RouterLink}
          to="/applicants/{id}/relationshipsnew"
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
