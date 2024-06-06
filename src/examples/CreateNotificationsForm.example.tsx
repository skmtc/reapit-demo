import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateNotifications } from '@/examples/CreateNotificationsForm.example.tsx'
import { CreateNotificationModel } from 'schemas/index.ts'
import { createNotificationModelConfig } from 'config/index.example.tsx'

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
        <Drawer title="Create new createNotificationModelConfig" onClose={() => navigate('..')}>
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