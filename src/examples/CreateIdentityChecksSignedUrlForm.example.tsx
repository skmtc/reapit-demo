import { CreateIdentityChecksSignedUrl } from '@/forms/CreateIdentityChecksSignedUrl.generated.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreatePreSignedUrlsModel } from '@/schemas/createPreSignedUrlsModel.generated.tsx'

export const fieldNames = fieldsConfig<CreatePreSignedUrlsModel>({
  amount: true,
})
export const CreateIdentityChecksSignedUrlForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreatePreSignedUrlsModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateIdentityChecksSignedUrl>
          <CreateIdentityChecksSignedUrlFields />
        </CreateIdentityChecksSignedUrl>
      </DialogContent>
    </Drawer>
  )
}

export const CreateIdentityChecksSignedUrlFields = () => {
  const formConfig = createPreSignedUrlsModelConfig as ModelConfig<CreatePreSignedUrlsModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
