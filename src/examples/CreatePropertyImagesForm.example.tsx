import { CreatePropertyImages } from '@/forms/PropertyImages.generated.tsx'
import { createPropertyImageModelConfig } from '@/config/createPropertyImageModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'

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
        <Drawer title="Create new CreatePropertyImageModel" onClose={() => navigate('..')}>
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