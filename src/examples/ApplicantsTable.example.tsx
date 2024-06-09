import { useApplicantsTable, getuseApplicantsTableColumn } from '@/tables/ApplicantsTable.generated.tsx'
import { applicantModelConfig } from '@/config/applicantModelConfig.example.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { ApplicantModel } from '@/schemas/applicantModel.generated.tsx'

export const fieldNames = fieldsConfig<ApplicantModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  marketingMode: true,
  currency: true,
  active: true,
  notes: true,
  sellingStatus: true,
  sellingPosition: true,
  statusId: true,
  lastCall: true,
  nextCall: true,
  departmentId: true,
  solicitorId: true,
  potentialClient: true,
  type: true,
  style: true,
  situation: true,
  parking: true,
  age: true,
  locality: true,
  specialFeatures: true,
  unmappedRequirements: true,
  bedroomsMin: true,
  bedroomsMax: true,
  receptionsMin: true,
  receptionsMax: true,
  bathroomsMin: true,
  bathroomsMax: true,
  parkingSpacesMin: true,
  parkingSpacesMax: true,
  locationType: true,
  locationOptions: true,
  archivedOn: true,
  fromArchive: true,
  buying: true,
  renting: true,
  externalArea: true,
  internalArea: true,
  source: true,
  commercial: true,
  regional: true,
  officeIds: true,
  negotiatorIds: true,
  related: true,
  metadata: true,
  _eTag: true,
})
export const ApplicantsTable = () => {
  const columns: ColumnsList<ApplicantModel> = fieldNames.map((col) =>
    getuseApplicantsTableColumn(col, applicantModelConfig),
  )

  const { table, dataQuery } = useApplicantsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useApplicantsTable</Typography>
        <Button
          component={RouterLink}
          to={`/applicants/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create applicant
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
