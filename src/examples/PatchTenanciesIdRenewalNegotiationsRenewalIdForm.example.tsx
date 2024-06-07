import { PatchTenanciesIdRenewalNegotiationsRenewalId } from '@/forms/Tenancies.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateTenancyRenewalModelConfig } from '@/config/updateTenancyRenewalModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateTenancyRenewalModel>({
          startDate: true,
endDate: true,
negotiatorId: true,
rent: true,
rentFrequency: true,
lettingFee: true,
managementFee: true
        });
export const PatchTenanciesIdRenewalNegotiationsRenewalIdForm = () => {
      const navigate = useNavigate()
      const { id, renewalId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(renewalId, 'Expected renewalId to be defined')
    
      return (
        <Drawer title="Create new UpdateTenancyRenewalModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchTenanciesIdRenewalNegotiationsRenewalId id={id} renewalId={renewalId}>
              <PatchTenanciesIdRenewalNegotiationsRenewalIdFields />
            </PatchTenanciesIdRenewalNegotiationsRenewalId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchTenanciesIdRenewalNegotiationsRenewalIdFields = () => {
      const formConfig = updateTenancyRenewalModelConfig as ModelConfig<UpdateTenancyRenewalModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;