import { useEnquiriesTable } from '@/tables/EnquiriesTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { EnquiryModel } from '@/schemas/enquiryModel.generated.tsx'

export const fieldNames = fieldsConfig<EnquiryModel>({
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
  const { rows } = useEnquiriesTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
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
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
