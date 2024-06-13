import { CreateCompanies } from '@/forms/CreateCompanies.generated.tsx'
import { createCompanyModelConfig } from '@/config/createCompanyModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateCompanyModel } from '@/schemas/createCompanyModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateCompanyModel>({
  name: true,
  branch: true,
  notes: true,
  active: true,
  marketingConsent: true,
  vatRegistered: true,
  typeIds: true,
  supplierTypeId: true,
  workPhone: true,
  mobilePhone: true,
  email: true,
  address: true,
  communicationPreferenceLetter: true,
  communicationPreferenceEmail: true,
  communicationPreferencePhone: true,
  communicationPreferenceSms: true,
  metadata: true,
})
export const CreateCompaniesForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateCompanyModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateCompanies>
          <CreateCompaniesFields />
        </CreateCompanies>
      </DialogContent>
    </Drawer>
  )
}

export const CreateCompaniesFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createCompanyModelConfig[fieldName]} />
    ))}
  </>
)
