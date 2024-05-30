import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateTenanciesIdRenewalNegotiations } from '@/forms/tenancies.generated.tsx'
import { CreateTenancyRenewalModel } from '@/schemas/index.ts'
import { tenancyRenewalModelConfig } from '@/config/tenancyRenewalModel.example.tsx'

const fieldNames = fieldsConfig<CreateTenancyRenewalModel>({
  startDate: true,
  endDate: true,
  negotiatorId: true,
  rent: true,
  rentFrequency: true,
  lettingFee: true,
  managementFee: true,
})

export const CreateTenanciesIdRenewalNegotiationsForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new tenancyRenewal" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateTenanciesIdRenewalNegotiations id={id}>
          <CreateTenanciesIdRenewalNegotiationsFields />
        </CreateTenanciesIdRenewalNegotiations>
      </DialogContent>
    </Drawer>
  )
}

export const CreateTenanciesIdRenewalNegotiationsFields = () => {
  const formConfig = tenancyRenewalModelConfig as ModelConfig<CreateTenancyRenewalModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
