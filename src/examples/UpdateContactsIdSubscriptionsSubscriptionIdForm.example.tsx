import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { UpdateContactsIdSubscriptionsSubscriptionId } from '@/examples/UpdateContactsIdSubscriptionsSubscriptionIdForm.example.tsx'
import { UpdateContactSubscriptionModel } from 'schemas/index.ts'
import { updateContactSubscriptionModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateContactSubscriptionModel>({
          status: true
        });
export const UpdateContactsIdSubscriptionsSubscriptionIdForm = () => {
      const navigate = useNavigate()
      const { id, subscriptionId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(subscriptionId, 'Expected subscriptionId to be defined')
    
      return (
        <Drawer title="Create new updateContactSubscriptionModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <UpdateContactsIdSubscriptionsSubscriptionId id={id} subscriptionId={subscriptionId}>
              <UpdateContactsIdSubscriptionsSubscriptionIdFields />
            </UpdateContactsIdSubscriptionsSubscriptionId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const UpdateContactsIdSubscriptionsSubscriptionIdFields = () => {
      const formConfig = updateContactSubscriptionModelConfig as ModelConfig<UpdateContactSubscriptionModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;