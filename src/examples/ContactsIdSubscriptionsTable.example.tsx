import { useContactsIdSubscriptionsTable, getuseContactsIdSubscriptionsTableColumn } from '@/tables/Contacts.generated.tsx'
import { useParams, Link as RouterLink, Outlet } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { contactSubscriptionModelConfig } from '@/config/contactSubscriptionModelConfigConfig.example.tsx'
import { SharedTable } from '@/components/SharedTable'
import { ColumnsList, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { default as Box } from '@mui/joy/Box'
import { default as Typography } from '@mui/joy/Typography'
import { default as Button } from '@mui/joy/Button'
import { ContactSubscriptionModel } from '@/schemas/contactSubscriptionModel.generated.tsx'

export const fieldNames = fieldsConfig<ContactSubscriptionModel>({
        _links: true,
_embedded: true,
id: true,
contactId: true,
name: true,
group: true,
status: true,
type: true,
subscribedOn: true,
unsubscribedOn: true
      });
export const ContactsIdSubscriptionsTable = () => {
  const columns: ColumnsList<ContactSubscriptionModel> = fieldNames.map((col) => getuseContactsIdSubscriptionsTableColumn(col, contactSubscriptionModelConfig))

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  const { table, dataQuery } = useContactsIdSubscriptionsTable({ id, columns })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <Box sx={{ display: 'flex', p: '16px', justifyContent: 'space-between' }}>
        <Typography level="h1">useContactsIdSubscriptionsTable</Typography>
        <Button
          component={RouterLink}
          to={`/contacts/${id}/subscriptions/new`}
          sx={{
            color: 'white',
            ':hover': {
              color: 'white',
            },
          }}
        >
          Create contactSubscription
        </Button>
      </Box>
      <SharedTable table={table} dataQuery={dataQuery} />
      <Outlet />
    </Box>
  )
}
;