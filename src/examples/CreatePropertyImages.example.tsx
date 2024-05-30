import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreatePropertyImages } from '@/forms/propertyimages.generated.tsx'
import { CreatePropertyImageModel } from '@/schemas/index.ts'
import { propertyImageModelConfig } from '@/config/propertyImageModel.example.tsx'

const fieldNames = fieldsConfig<CreatePropertyImageModel>({
  data: true,
  fileUrl: true,
  propertyId: true,
  caption: true,
  type: true,
})

export const CreatePropertyImagesForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new propertyImage" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreatePropertyImages>
          <CreatePropertyImagesFields />
        </CreatePropertyImages>
      </DialogContent>
    </Drawer>
  )
}

export const CreatePropertyImagesFields = () => {
  const formConfig = propertyImageModelConfig as ModelConfig<CreatePropertyImageModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
