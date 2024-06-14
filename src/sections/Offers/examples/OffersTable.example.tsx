import { useOffersTable } from '@/sections/Offers/tables/OffersTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { OfferModel } from '@/schemas/offerModel.generated.tsx'

export const fieldNames = fieldsConfig<OfferModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  currency: true,
  applicantId: true,
  companyId: true,
  contactId: true,
  propertyId: true,
  negotiatorId: true,
  date: true,
  amount: true,
  status: true,
  inclusions: true,
  exclusions: true,
  conditions: true,
  related: true,
  metadata: true,
  _eTag: true,
})
export const OffersTable = () => {
  const { rows } = useOffersTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useOffersTable</Typography>
        <Button
          component={RouterLink}
          to={`/offers/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create offer
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
