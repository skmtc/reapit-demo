import { CreateDocumentsSignedUrl } from '@/forms/CreateDocumentsSignedUrl.generated.tsx'
import { createPreSignedUrlsModelConfig } from '@/config/createPreSignedUrlsModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreatePreSignedUrlsModel } from '@/schemas/createPreSignedUrlsModel.generated.tsx'

export const fieldNames = fieldsConfig<CreatePreSignedUrlsModel>({
  amount: true,
})
export const CreateDocumentsSignedUrlForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreatePreSignedUrlsModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateDocumentsSignedUrl>
          <CreateDocumentsSignedUrlFields />
        </CreateDocumentsSignedUrl>
      </DialogContent>
    </Drawer>
  )
}

export const CreateDocumentsSignedUrlFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createPreSignedUrlsModelConfig[fieldName]} />
    ))}
  </>
)
