import { useConveyancingIdChainTable, getuseConveyancingIdChainTableColumn } from '@/tables/Conveyancing.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { ConveyancingModel } from '@/schemas/conveyancingModel.generated.tsx'

export const fieldNames = fieldsConfig<ConveyancingModel>({
        _links: true,
_embedded: true,
id: true,
created: true,
modified: true,
isExternal: true,
propertyId: true,
propertyAddress: true,
vendor: true,
vendorId: true,
vendorSolicitorId: true,
buyer: true,
buyerId: true,
buyerSolicitorId: true,
externalAgent: true,
externalAgentId: true,
upwardChainId: true,
downwardChainId: true,
fixturesAndFittingsCompleted: true,
deedsRequested: true,
deedsReceived: true,
enquiriesSent: true,
enquiriesAnswered: true,
searchesPaid: true,
searchesApplied: true,
searchesReceived: true,
contractSent: true,
contractReceived: true,
contractApproved: true,
contractVendorSigned: true,
contractBuyerSigned: true,
mortgageRequired: true,
mortgageLoanPercentage: true,
mortgageSubmitted: true,
mortgageOfferReceived: true,
mortgageLenderId: true,
mortgageBrokerId: true,
mortgageSurveyDate: true,
mortgageSurveyorId: true,
additionalSurveyRequired: true,
additionalSurveyDate: true,
additionalSurveyorId: true,
exchangedVendor: true,
exchangedBuyer: true,
completion: true,
checkListItems: true,
_eTag: true,
metadata: true
      });
export const ConveyancingIdChainTable = () => {
  const columns: ColumnsList<ConveyancingModel> = fieldNames.map((col) => getuseConveyancingIdChainTableColumn(col, conveyancingModelConfig))

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useConveyancingIdChainTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useConveyancingIdChainTable</Typography>
        <Button
          component={RouterLink}
          to={`/conveyancing/${id}/chain/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create conveyancing
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;