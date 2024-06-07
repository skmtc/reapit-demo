import { useLandlordsTable, getuseLandlordsTableColumn } from '@/tables/Landlords.generated.tsx'
import { landlordModelConfig } from '@/config/landlordModelConfigConfig.example.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import { LandlordModel } from '@/schemas/landlordModel.generated.tsx'

export const fieldNames = fieldsConfig<LandlordModel>({
        _links: true,
_embedded: true,
id: true,
created: true,
modified: true,
active: true,
solicitorId: true,
officeId: true,
source: true,
related: true,
metadata: true,
extrasField: true,
_eTag: true
      });
export const LandlordsTable = () => {
  const columns: ColumnsList<LandlordModel> = fieldNames.map((col) => getuseLandlordsTableColumn(col, landlordModelConfig))

  

  

  const { table, dataQuery } = useLandlordsTable({ columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useLandlordsTable</Typography>
        <Button
          component={RouterLink}
          to={`/landlords/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create landlord
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;