import { UpdateMetadataId } from '@/forms/Metadata.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateMetadataRequestConfig } from '@/config/updateMetadataRequestConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateMetadataRequest>({
          metadata: true
        });
export const UpdateMetadataIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateMetadataRequest" onClose={() => navigate('..')}>
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