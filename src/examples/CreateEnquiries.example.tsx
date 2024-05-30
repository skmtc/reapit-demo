import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateEnquiries } from '@/forms/enquiries.generated.tsx'
import { CreateEnquiryModel } from '@/schemas/index.ts'
import { enquiryModelConfig } from '@/config/enquiryModel.example.tsx'

const fieldNames = fieldsConfig<CreateEnquiryModel>({
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
    <Drawer title="Create new enquiry" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateEnquiries>
          <CreateEnquiriesFields />
        </CreateEnquiries>
      </DialogContent>
    </Drawer>
  )
}

export const CreateEnquiriesFields = () => {
  const formConfig = enquiryModelConfig as ModelConfig<CreateEnquiryModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
