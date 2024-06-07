import { PatchTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId } from '@/forms/Tenancies.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateTenancyRenewalCheckModelConfig } from '@/config/updateTenancyRenewalCheckModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateTenancyRenewalCheckModel>({
          status: true,
metadata: true
        });
export const PatchTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdForm = () => {
      const navigate = useNavigate()
      const { id, renewalId, checkId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(renewalId, 'Expected renewalId to be defined')
invariant(checkId, 'Expected checkId to be defined')
    
      return (
        <Drawer title="Create new UpdateTenancyRenewalCheckModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId id={id} renewalId={renewalId} checkId={checkId}>
              <PatchTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFields />
            </PatchTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFields = () => {
      const formConfig = updateTenancyRenewalCheckModelConfig as ModelConfig<UpdateTenancyRenewalCheckModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;