import { PatchDocumentsId } from '@/forms/Documents.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateDocumentModelConfig } from '@/config/updateDocumentModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateDocumentModel>({
          typeId: true,
name: true,
isPrivate: true,
metadata: true
        });
export const PatchDocumentsIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateDocumentModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchDocumentsId id={id}>
              <PatchDocumentsIdFields />
            </PatchDocumentsId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchDocumentsIdFields = () => {
      const formConfig = updateDocumentModelConfig as ModelConfig<UpdateDocumentModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;