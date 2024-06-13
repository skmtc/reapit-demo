import { CreateEnquiries } from '@/forms/CreateEnquiries.generated.tsx'
import { createEnquiryModelConfig } from '@/config/createEnquiryModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateEnquiryModel } from '@/schemas/createEnquiryModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateEnquiryModel>({
  title: true,
  forename: true,
  surname: true,
  position: true,
  enquiryType: true,
  message: true,
  officeId: true,
  marketingConsent: true,
  sourceName: true,
  homePhone: true,
  workPhone: true,
  mobilePhone: true,
  email: true,
  address: true,
  buying: true,
  renting: true,
  bedrooms: true,
  propertyIds: true,
})
export const CreateEnquiriesForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateEnquiryModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateEnquiries>
          <CreateEnquiriesFields />
        </CreateEnquiries>
      </DialogContent>
    </Drawer>
  )
}

export const CreateEnquiriesFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createEnquiryModelConfig[fieldName]} />
    ))}
  </>
)
