import { PatchTenanciesIdChecksCheckId } from '@/forms/Tenancies.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateTenancyCheckModelConfig } from '@/config/updateTenancyCheckModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateTenancyCheckModel>({
          status: true,
metadata: true
        });
export const PatchTenanciesIdChecksCheckIdForm = () => {
      const navigate = useNavigate()
      const { id, checkId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(checkId, 'Expected checkId to be defined')
    
      return (
        <Drawer title="Create new UpdateTenancyCheckModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchTenanciesIdChecksCheckId id={id} checkId={checkId}>
              <PatchTenanciesIdChecksCheckIdFields />
            </PatchTenanciesIdChecksCheckId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchTenanciesIdChecksCheckIdFields = () => {
      const formConfig = updateTenancyCheckModelConfig as ModelConfig<UpdateTenancyCheckModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;