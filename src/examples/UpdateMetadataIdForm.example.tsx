import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { UpdateMetadataId } from '@/examples/UpdateMetadataIdForm.example.tsx'
import { UpdateMetadataRequest } from 'schemas/index.ts'
import { updateMetadataRequestConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateMetadataRequest>({
          metadata: true
        });
export const UpdateMetadataIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new updateMetadataRequestConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <UpdateMetadataId id={id}>
              <UpdateMetadataIdFields />
            </UpdateMetadataId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const UpdateMetadataIdFields = () => {
      const formConfig = updateMetadataRequestConfig as ModelConfig<UpdateMetadataRequest>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;