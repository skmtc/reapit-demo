import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreatePropertyImages } from '@/examples/CreatePropertyImagesForm.example.tsx'
import { CreatePropertyImageModel } from 'schemas/index.ts'
import { createPropertyImageModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreatePropertyImageModel>({
          data: true,
fileUrl: true,
propertyId: true,
caption: true,
type: true
        });
export const CreatePropertyImagesForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new createPropertyImageModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreatePropertyImages >
              <CreatePropertyImagesFields />
            </CreatePropertyImages>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreatePropertyImagesFields = () => {
      const formConfig = createPropertyImageModelConfig as ModelConfig<CreatePropertyImageModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;