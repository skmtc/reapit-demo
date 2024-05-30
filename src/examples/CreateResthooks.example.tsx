import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateResthooks } from '@/forms/resthooks.generated.tsx'
import { CreateWebhookModel } from '@/schemas/index.ts'
import { webhookModelConfig } from '@/config/webhookModel.example.tsx'

const fieldNames = fieldsConfig<CreateWebhookModel>({
  url: true,
  description: true,
  topicIds: true,
  active: true,
  ignoreEtagOnlyChanges: true,
})

export const CreateResthooksForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new webhook" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateResthooks>
          <CreateResthooksFields />
        </CreateResthooks>
      </DialogContent>
    </Drawer>
  )
}

export const CreateResthooksFields = () => {
  const formConfig = webhookModelConfig as ModelConfig<CreateWebhookModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
