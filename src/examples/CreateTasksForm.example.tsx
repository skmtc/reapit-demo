import { CreateTasks } from '@/forms/Tasks.generated.tsx'
import { createTaskModelConfig } from '@/config/createTaskModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'

export const fieldNames = fieldsConfig<CreateTaskModel>({
          activates: true,
completed: true,
typeId: true,
senderId: true,
text: true,
landlordId: true,
propertyId: true,
applicantId: true,
tenancyId: true,
contactId: true,
recipientId: true,
recipientType: true,
metadata: true
        });
export const CreateTasksForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new CreateTaskModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateTasks >
              <CreateTasksFields />
            </CreateTasks>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateTasksFields = () => {
      const formConfig = createTaskModelConfig as ModelConfig<CreateTaskModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;