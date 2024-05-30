import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { useVendorsTable, getVendorsColumn } from '@/tables/vendors.generated.tsx'
import { VendorModel } from '@/schemas/index.ts'
import { vendorModelConfig } from '@/config/vendorModel.example.tsx'

const fieldNames = fieldsConfig<VendorModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  lastCall: true,
  nextCall: true,
  typeId: true,
  sellingReasonId: true,
  solicitorId: true,
  propertyId: true,
  source: true,
  related: true,
  correspondenceAddressType: true,
  negotiatorId: true,
  officeIds: true,
  archivedOn: true,
  fromArchive: true,
  metadata: true,
  _eTag: true,
})

export const Vendors = () => {
  const columns: ColumnsList<VendorModel> = fieldNames.map((col) => getVendorsColumn(col, vendorModelConfig))

  const { table, dataQuery } = useVendorsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">Vendors</Typography>
        <Button
          component={RouterLink}
          to={`/vendors/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create vendor
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
