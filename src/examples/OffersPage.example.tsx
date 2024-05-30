import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useOffersTable, getOffersColumn } from '@/tables/offers.generated.tsx'
import { OfferModel } from '@/schemas/index.ts'
import { offerModelConfig } from '@/config/offerModel.example.tsx'

const fieldNames = fieldsConfig<OfferModel>({
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

export const Offers = () => {
  const columns: ColumnsList<OfferModel> = fieldNames.map((col) => getOffersColumn(col, offerModelConfig))

  const { table, dataQuery } = useOffersTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">Offers</Typography>
        <Button
          component={RouterLink}
          to="/offers/new"
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
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
