import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateDocuments } from '@/forms/documents.generated.tsx'
import { CreateDocumentModel } from '@/schemas/index.ts'
import { documentModelConfig } from '@/config/documentModel.example.tsx'

const fieldNames = fieldsConfig<CreateDocumentModel>({
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
    <Drawer title="Create new document" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateDocuments>
          <CreateDocumentsFields />
        </CreateDocuments>
      </DialogContent>
    </Drawer>
  )
}

export const CreateDocumentsFields = () => {
  const formConfig = documentModelConfig as ModelConfig<CreateDocumentModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
