import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useEnquiriesTable, getuseEnquiriesTableColumn } from '@/tables/enquiries.generated.tsx'
import { EnquiryModel } from '@/schemas/index.ts'
import { enquiryModelConfig } from '@/config/enquiryModel.example.tsx'

const fieldNames = fieldsConfig<EnquiryModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  title: true,
  forename: true,
  surname: true,
  enquiryType: true,
  message: true,
  status: true,
  marketingConsent: true,
  position: true,
  officeId: true,
  applicantId: true,
  negotiatorId: true,
  sourceName: true,
  homePhone: true,
  workPhone: true,
  mobilePhone: true,
  email: true,
  address: true,
  buying: true,
  renting: true,
  bedrooms: true,
  propertyIds: true,
  _eTag: true,
})

export const EnquiriesTable = () => {
  const columns: ColumnsList<EnquiryModel> = fieldNames.map((col) =>
    getuseEnquiriesTableColumn(col, enquiryModelConfig),
  )

  const { table, dataQuery } = useEnquiriesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useEnquiriesTable</Typography>
        <Button
          component={RouterLink}
          to={`/enquiries/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create enquiry
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
