import { CreateNegotiators } from '@/forms/Negotiators.generated.tsx'
import { createNegotiatorModelConfig } from '@/config/createNegotiatorModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'

export const fieldNames = fieldsConfig<CreateNegotiatorModel>({
          name: true,
jobTitle: true,
active: true,
officeId: true,
workPhone: true,
mobilePhone: true,
email: true,
diaryNegotiatorIds: true,
diaryOfficeIds: true,
metadata: true
        });
export const CreateNegotiatorsForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new CreateNegotiatorModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateNegotiators >
              <CreateNegotiatorsFields />
            </CreateNegotiators>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateNegotiatorsFields = () => {
      const formConfig = createNegotiatorModelConfig as ModelConfig<CreateNegotiatorModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;