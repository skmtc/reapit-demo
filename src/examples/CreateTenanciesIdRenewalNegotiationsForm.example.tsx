import { CreateTenanciesIdRenewalNegotiations } from '@/forms/CreateTenanciesIdRenewalNegotiations.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createTenancyRenewalModelConfig } from '@/config/createTenancyRenewalModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateTenancyRenewalModel } from '@/schemas/createTenancyRenewalModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateTenancyRenewalModel>({
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
    <Drawer title="Create new CreateTenancyRenewalModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateTenanciesIdRenewalNegotiations id={id}>
          <CreateTenanciesIdRenewalNegotiationsFields />
        </CreateTenanciesIdRenewalNegotiations>
      </DialogContent>
    </Drawer>
  )
}

export const CreateTenanciesIdRenewalNegotiationsFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createTenancyRenewalModelConfig[fieldName]} />
    ))}
  </>
)
