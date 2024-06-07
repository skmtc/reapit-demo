import { PatchPropertiesIdChecksCheckId } from '@/forms/Properties.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updatePropertyCheckModelConfig } from '@/config/updatePropertyCheckModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdatePropertyCheckModel>({
          status: true
        });
export const PatchPropertiesIdChecksCheckIdForm = () => {
      const navigate = useNavigate()
      const { id, checkId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(checkId, 'Expected checkId to be defined')
    
      return (
        <Drawer title="Create new UpdatePropertyCheckModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchPropertiesIdChecksCheckId id={id} checkId={checkId}>
              <PatchPropertiesIdChecksCheckIdFields />
            </PatchPropertiesIdChecksCheckId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchPropertiesIdChecksCheckIdFields = () => {
      const formConfig = updatePropertyCheckModelConfig as ModelConfig<UpdatePropertyCheckModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;