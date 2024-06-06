import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateTenanciesIdRenewalNegotiationsRenewalIdChecks } from '@/examples/CreateTenanciesIdRenewalNegotiationsRenewalIdChecksForm.example.tsx'
import { CreateTenancyRenewalCheckModel } from 'schemas/index.ts'
import { createTenancyRenewalCheckModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<CreateTenancyRenewalCheckModel>({
          status: true,
checkTypeId: true,
description: true,
metadata: true
        });
export const CreateTenanciesIdRenewalNegotiationsRenewalIdChecksForm = () => {
      const navigate = useNavigate()
      const { id, renewalId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(renewalId, 'Expected renewalId to be defined')
    
      return (
        <Drawer title="Create new createTenancyRenewalCheckModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <CreateTenanciesIdRenewalNegotiationsRenewalIdChecks id={id} renewalId={renewalId}>
              <CreateTenanciesIdRenewalNegotiationsRenewalIdChecksFields />
            </CreateTenanciesIdRenewalNegotiationsRenewalIdChecks>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const CreateTenanciesIdRenewalNegotiationsRenewalIdChecksFields = () => {
      const formConfig = createTenancyRenewalCheckModelConfig as ModelConfig<CreateTenancyRenewalCheckModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;