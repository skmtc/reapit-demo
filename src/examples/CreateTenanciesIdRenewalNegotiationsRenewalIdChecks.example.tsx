import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateTenanciesIdRenewalNegotiationsRenewalIdChecks } from '@/forms/tenancies.generated.tsx'
import { CreateTenancyRenewalCheckModel } from '@/schemas/index.ts'
import { tenancyRenewalCheckModelConfig } from '@/config/tenancyRenewalCheckModel.example.tsx'

const fieldNames = fieldsConfig<CreateTenancyRenewalCheckModel>({
  status: true,
  checkTypeId: true,
  description: true,
  metadata: true,
})

export const CreateTenanciesIdRenewalNegotiationsRenewalIdChecksForm = () => {
  const navigate = useNavigate()
  const { id, renewalId } = useParams()

  invariant(id, 'Expected id to be defined')
  invariant(renewalId, 'Expected renewalId to be defined')

  return (
    <Drawer title="Create new tenancyRenewalCheck" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateTenanciesIdRenewalNegotiationsRenewalIdChecks id={id} renewalId={renewalId}>
          <CreateTenanciesIdRenewalNegotiationsRenewalIdChecksFields />
        </CreateTenanciesIdRenewalNegotiationsRenewalIdChecks>
      </DialogContent>
    </Drawer>
  )
}

export const CreateTenanciesIdRenewalNegotiationsRenewalIdChecksFields = () => {
  const formConfig = tenancyRenewalCheckModelConfig as ModelConfig<CreateTenancyRenewalCheckModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
