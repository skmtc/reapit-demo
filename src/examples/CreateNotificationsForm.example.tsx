import { CreateNotifications } from '@/forms/Notifications.generated.tsx'
import { createNotificationModelConfig } from '@/config/createNotificationModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'

export const fieldNames = fieldsConfig<CreateNotificationModel>({
          type: true,
subType: true,
products: true,
targets: true,
payload: true
        });
export const CreateNotificationsForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new CreateNotificationModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateNotifications >
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
    ;