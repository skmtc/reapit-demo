import { CreateResthooks } from '@/forms/CreateResthooks.generated.tsx'
import { createWebhookModelConfig } from '@/config/createWebhookModelConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateWebhookModel } from '@/schemas/createWebhookModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateWebhookModel>({
  url: true,
  description: true,
  topicIds: true,
  active: true,
  ignoreEtagOnlyChanges: true,
})
export const CreateResthooksForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateWebhookModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateResthooks>
          <CreateResthooksFields />
        </CreateResthooks>
      </DialogContent>
    </Drawer>
  )
}

export const CreateResthooksFields = () => {
  const formConfig = createWebhookModelConfig as ModelConfig<CreateWebhookModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
