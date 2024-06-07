import { CreatePropertyImagesSignedUrl } from '@/forms/PropertyImages.generated.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'

export const fieldNames = fieldsConfig<CreatePreSignedUrlsModel>({
          amount: true
        });
export const CreatePropertyImagesSignedUrlForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new CreatePreSignedUrlsModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreatePropertyImagesSignedUrl >
              <CreatePropertyImagesSignedUrlFields />
            </CreatePropertyImagesSignedUrl>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreatePropertyImagesSignedUrlFields = () => {
      const formConfig = createPreSignedUrlsModelConfig as ModelConfig<CreatePreSignedUrlsModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;