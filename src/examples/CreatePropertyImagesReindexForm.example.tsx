import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreatePropertyImagesReindex } from '@/examples/CreatePropertyImagesReindexForm.example.tsx'
import { ReindexPropertyImagesModel } from 'schemas/index.ts'
import { reindexPropertyImagesModelConfig } from 'config/reindexPropertyImagesModel.example.tsx'

export const fieldNames = fieldsConfig<ReindexPropertyImagesModel>({
          propertyId: true,
imageOrder: true
        });
export const CreatePropertyImagesReindexForm = () => {
      const navigate = useNavigate()
      

      
    
      return (
        <Drawer title="Create new reindexPropertyImagesModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreatePropertyImagesReindex >
              <CreatePropertyImagesReindexFields />
            </CreatePropertyImagesReindex>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreatePropertyImagesReindexFields = () => {
      const formConfig = reindexPropertyImagesModelConfig as ModelConfig<ReindexPropertyImagesModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;