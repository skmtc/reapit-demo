import { CreateNotifications } from '@/forms/CreateNotifications.generated.tsx'
import { createNotificationModelConfig } from '@/config/createNotificationModelConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateNotificationModel } from '@/schemas/createNotificationModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateNotificationModel>({
  type: true,
  subType: true,
  products: true,
  targets: true,
  payload: true,
})
export const CreateNotificationsForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateNotificationModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateNotifications>
          <CreateNotificationsFields />
        </CreateNotifications>
      </DialogContent>
    </Drawer>
  )
}

export const CreateNotificationsFields = () => {
  const formConfig = createNotificationModelConfig as ModelConfig<CreateNotificationModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
