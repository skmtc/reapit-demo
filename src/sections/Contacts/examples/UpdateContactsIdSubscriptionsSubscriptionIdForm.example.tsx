import { UpdateContactsIdSubscriptionsSubscriptionId } from '@/sections/Contacts/forms/UpdateContactsIdSubscriptionsSubscriptionId.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateContactSubscriptionModelConfig } from '@/sections/Contacts/config/updateContactSubscriptionModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { UpdateContactSubscriptionModel } from '@/schemas/updateContactSubscriptionModel.generated.tsx'

export const fieldNames = fieldsConfig<UpdateContactSubscriptionModel>({
  status: true,
})
export const UpdateContactsIdSubscriptionsSubscriptionIdForm = () => {
  const navigate = useNavigate()

  const { id, subscriptionId } = useParams()

  invariant(id, 'Expected id to be defined')
  invariant(subscriptionId, 'Expected subscriptionId to be defined')

  return (
    <Drawer title="Create new UpdateContactSubscriptionModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <UpdateContactsIdSubscriptionsSubscriptionId id={id} subscriptionId={subscriptionId}>
          <UpdateContactsIdSubscriptionsSubscriptionIdFields />
        </UpdateContactsIdSubscriptionsSubscriptionId>
      </DialogContent>
    </Drawer>
  )
}

export const UpdateContactsIdSubscriptionsSubscriptionIdFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent
        key={fieldName}
        fieldName={fieldName}
        fieldConfig={updateContactSubscriptionModelConfig[fieldName]}
      />
    ))}
  </>
)
