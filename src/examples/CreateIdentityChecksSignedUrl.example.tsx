import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateIdentityChecksSignedUrl } from '@/forms/identitychecks.generated.tsx'
import { CreatePreSignedUrlsModel } from '@/schemas/index.ts'
import { preSignedUrlsModelConfig } from '@/config/index.example.tsx'

const fieldNames = fieldsConfig<CreatePreSignedUrlsModel>({
  amount: true,
})

export const CreateIdentityChecksSignedUrlForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new preSignedUrls" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateIdentityChecksSignedUrl>
          <CreateIdentityChecksSignedUrlFields />
        </CreateIdentityChecksSignedUrl>
      </DialogContent>
    </Drawer>
  )
}

export const CreateIdentityChecksSignedUrlFields = () => {
  const formConfig = preSignedUrlsModelConfig as ModelConfig<CreatePreSignedUrlsModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
