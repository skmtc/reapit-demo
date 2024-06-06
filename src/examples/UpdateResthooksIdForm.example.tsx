import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { UpdateResthooksId } from '@/examples/UpdateResthooksIdForm.example.tsx'
import { UpdateWebhookModel } from 'schemas/index.ts'
import { updateWebhookModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateWebhookModel>({
          url: true,
description: true,
topicIds: true,
active: true,
ignoreEtagOnlyChanges: true
        });
export const UpdateResthooksIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new updateWebhookModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <UpdateResthooksId id={id}>
              <UpdateResthooksIdFields />
            </UpdateResthooksId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const UpdateResthooksIdFields = () => {
      const formConfig = updateWebhookModelConfig as ModelConfig<UpdateWebhookModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;