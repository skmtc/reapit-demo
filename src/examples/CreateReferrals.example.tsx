import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateReferrals } from '@/forms/referrals.generated.tsx'
import { CreateReferralModel } from '@/schemas/index.ts'
import { referralModelConfig } from '@/config/referralModel.example.tsx'

const fieldNames = fieldsConfig<CreateReferralModel>({
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
    <Drawer title="Create new referral" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateReferrals>
          <CreateReferralsFields />
        </CreateReferrals>
      </DialogContent>
    </Drawer>
  )
}

export const CreateReferralsFields = () => {
  const formConfig = referralModelConfig as ModelConfig<CreateReferralModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
