import { CreatePropertyImages } from '@/forms/CreatePropertyImages.generated.tsx'
import { createPropertyImageModelConfig } from '@/config/createPropertyImageModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreatePropertyImageModel } from '@/schemas/createPropertyImageModel.generated.tsx'

export const fieldNames = fieldsConfig<CreatePropertyImageModel>({
  data: true,
  fileUrl: true,
  propertyId: true,
  caption: true,
  type: true,
})
export const CreatePropertyImagesForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreatePropertyImageModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreatePropertyImages>
          <CreatePropertyImagesFields />
        </CreatePropertyImages>
      </DialogContent>
    </Drawer>
  )
}

export const CreatePropertyImagesFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createPropertyImageModelConfig[fieldName]} />
    ))}
  </>
)
