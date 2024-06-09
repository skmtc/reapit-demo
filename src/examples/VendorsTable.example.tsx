import { useVendorsTable, getuseVendorsTableColumn } from '@/tables/VendorsTable.generated.tsx'
import { vendorModelConfig } from '@/config/vendorModelConfig.example.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { VendorModel } from '@/schemas/vendorModel.generated.tsx'

export const fieldNames = fieldsConfig<VendorModel>({
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
export const VendorsTable = () => {
  const columns: ColumnsList<VendorModel> = fieldNames.map((col) => getuseVendorsTableColumn(col, vendorModelConfig))

  const { table, dataQuery } = useVendorsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useVendorsTable</Typography>
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
