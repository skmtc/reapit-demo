import { CreateDocuments } from '@/sections/Documents/forms/CreateDocuments.generated.tsx'
import { createDocumentModelConfig } from '@/sections/Documents/config/createDocumentModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateDocumentModel } from '@/schemas/createDocumentModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateDocumentModel>({
  associatedType: true,
  associatedId: true,
  typeId: true,
  name: true,
  isPrivate: true,
  fileData: true,
  fileUrl: true,
  metadata: true,
})
export const CreateDocumentsForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateDocumentModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateDocuments>
          <CreateDocumentsFields />
        </CreateDocuments>
      </DialogContent>
    </Drawer>
  )
}

export const CreateDocumentsFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createDocumentModelConfig[fieldName]} />
    ))}
  </>
)
