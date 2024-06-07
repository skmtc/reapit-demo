import { PatchIdentityChecksId } from '@/forms/IdentityChecks.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateIdentityCheckModelConfig } from '@/config/updateIdentityCheckModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateIdentityCheckModel>({
          checkDate: true,
status: true,
negotiatorId: true,
identityDocument1: true,
identityDocument2: true,
metadata: true
        });
export const PatchIdentityChecksIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateIdentityCheckModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchIdentityChecksId id={id}>
              <PatchIdentityChecksIdFields />
            </PatchIdentityChecksId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchIdentityChecksIdFields = () => {
      const formConfig = updateIdentityCheckModelConfig as ModelConfig<UpdateIdentityCheckModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;