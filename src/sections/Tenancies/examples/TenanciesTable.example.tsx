import { useTenanciesTable } from '@/sections/Tenancies/tables/TenanciesTable.generated.tsx'
import { Table } from '@reapit/elements'
import { fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { TenancyModel } from '@/schemas/tenancyModel.generated.tsx'

export const fieldNames = fieldsConfig<TenancyModel>({
  _links: true,
  _embedded: true,
  id: true,
  created: true,
  modified: true,
  startDate: true,
  endDate: true,
  status: true,
  agentRole: true,
  rent: true,
  rentFrequency: true,
  endDateConfirmed: true,
  isPeriodic: true,
  rentInstalmentsFrequency: true,
  rentInstalmentsAmount: true,
  rentInstalmentsStart: true,
  meterReadingGas: true,
  meterReadingGasLastRead: true,
  meterReadingElectricity: true,
  meterReadingElectricityLastRead: true,
  meterReadingWater: true,
  meterReadingWaterLastRead: true,
  typeId: true,
  negotiatorId: true,
  propertyId: true,
  applicantId: true,
  managerId: true,
  groupPaymentReference: true,
  lettingFee: true,
  managementFee: true,
  source: true,
  deposit: true,
  related: true,
  fromArchive: true,
  metadata: true,
  feeNotes: true,
  legalStatusId: true,
  renewalOptions: true,
  arrears: true,
  _eTag: true,
})
export const TenanciesTable = () => {
  const { rows } = useTenanciesTable({ fieldNames })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useTenanciesTable</Typography>
        <Button
          component={RouterLink}
          to={`/tenancies/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create tenancy
        </Button>
      </Box>
      <Box sx={{ display: 'flex', minWidth: 0, overflowX: 'scroll', flexDirection: 'column' }}>
        <Table rows={rows} />
      </Box>
      <Outlet />
    </Box>
  )
}
