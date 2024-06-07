import { PatchPropertyImagesId } from '@/forms/PropertyImages.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updatePropertyImageModelConfig } from '@/config/updatePropertyImageModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdatePropertyImageModel>({
          caption: true,
type: true
        });
export const PatchPropertyImagesIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdatePropertyImageModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchPropertyImagesId id={id}>
              <PatchPropertyImagesIdFields />
            </PatchPropertyImagesId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchPropertyImagesIdFields = () => {
      const formConfig = updatePropertyImageModelConfig as ModelConfig<UpdatePropertyImageModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;