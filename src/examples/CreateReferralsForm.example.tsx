import { CreateReferrals } from '@/forms/CreateReferrals.generated.tsx'
import { createReferralModelConfig } from '@/config/createReferralModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateReferralModel } from '@/schemas/createReferralModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateReferralModel>({
  referralTypeId: true,
  negotiatorId: true,
  propertyId: true,
  applicantId: true,
  contactId: true,
  amount: true,
})
export const CreateReferralsForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateReferralModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateReferrals>
          <CreateReferralsFields />
        </CreateReferrals>
      </DialogContent>
    </Drawer>
  )
}

export const CreateReferralsFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createReferralModelConfig[fieldName]} />
    ))}
  </>
)
