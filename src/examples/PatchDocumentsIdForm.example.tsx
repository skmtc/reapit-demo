import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchDocumentsId } from '@/examples/PatchDocumentsIdForm.example.tsx'
import { UpdateDocumentModel } from 'schemas/index.ts'
import { updateDocumentModelConfig } from 'config/index.example.tsx'

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
        <Drawer title="Create new updateDocumentModelConfig" onClose={() => navigate('..')}>
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