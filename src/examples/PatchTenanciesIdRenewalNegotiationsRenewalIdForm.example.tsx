import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchTenanciesIdRenewalNegotiationsRenewalId } from '@/examples/PatchTenanciesIdRenewalNegotiationsRenewalIdForm.example.tsx'
import { UpdateTenancyRenewalModel } from 'schemas/index.ts'
import { updateTenancyRenewalModelConfig } from 'config/index.example.tsx'

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
        <Drawer title="Create new updateTenancyRenewalModelConfig" onClose={() => navigate('..')}>
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