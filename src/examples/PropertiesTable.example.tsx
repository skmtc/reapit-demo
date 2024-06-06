import { usePropertiesTable, getusePropertiesTableColumn } from 'tables/Properties.generated.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { PropertyModel } from 'schemas/index.ts'
import { propertyModelConfig } from 'config/propertyModel.example.tsx'

export const fieldNames = fieldsConfig<PropertyModel>({
        _embedded: true,
id: true,
created: true,
modified: true,
lastCall: true,
nextCall: true,
marketingMode: true,
currency: true,
alternateId: true,
address: true,
areaId: true,
strapline: true,
description: true,
longDescription: true,
localAuthorityCompanyId: true,
localAuthorityCompanyName: true,
summary: true,
departmentId: true,
negotiatorId: true,
bedrooms: true,
bedroomsMax: true,
receptions: true,
receptionsMax: true,
bathrooms: true,
bathroomsMax: true,
numberOfUnits: true,
parkingSpaces: true,
councilTax: true,
disabledPortalIds: true,
internetAdvertising: true,
isExternal: true,
viewingArrangements: true,
videoUrl: true,
videoCaption: true,
video2Url: true,
video2Caption: true,
notes: true,
boardStatus: true,
boardNotes: true,
featuredImageUrl: true,
url: true,
urlCaption: true,
groundRent: true,
groundRentComment: true,
groundRentReviewDate: true,
groundRentIncrease: true,
serviceCharge: true,
serviceChargeComment: true,
floorLevel: true,
internalFloors: true,
totalFloors: true,
boardUpdated: true,
valuation: true,
archivedOn: true,
fromArchive: true,
rural: true,
externalArea: true,
internalArea: true,
epc: true,
selling: true,
letting: true,
commercial: true,
regional: true,
type: true,
style: true,
situation: true,
parking: true,
age: true,
locality: true,
specialFeatures: true,
unmappedAttributes: true,
availableServicesIds: true,
rooms: true,
roomDetailsApproved: true,
officeIds: true,
lostInstructionDate: true,
lostInstructionNote: true,
developmentSiteType: true,
metadata: true,
keywords: true,
extrasField: true,
_eTag: true,
_links: true
      });
export const PropertiesTable = () => {
  const columns: ColumnsList<PropertyModel> = fieldNames.map((col) => getusePropertiesTableColumn(col, propertyModelConfig))

  

  

  const { table, dataQuery } = usePropertiesTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">usePropertiesTable</Typography>
        <Button
          component={RouterLink}
          to={`/properties/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create property
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;