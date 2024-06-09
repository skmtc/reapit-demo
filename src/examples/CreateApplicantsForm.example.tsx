import { CreateApplicants } from '@/forms/CreateApplicants.generated.tsx'
import { createApplicantModelConfig } from '@/config/createApplicantModelConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateApplicantModel } from '@/schemas/createApplicantModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateApplicantModel>({
  marketingMode: true,
  currency: true,
  active: true,
  notes: true,
  statusId: true,
  sellingStatus: true,
  sellingPosition: true,
  lastCall: true,
  nextCall: true,
  departmentId: true,
  solicitorId: true,
  potentialClient: true,
  type: true,
  style: true,
  situation: true,
  parking: true,
  age: true,
  locality: true,
  specialFeatures: true,
  bedroomsMin: true,
  bedroomsMax: true,
  receptionsMin: true,
  receptionsMax: true,
  bathroomsMin: true,
  bathroomsMax: true,
  parkingSpacesMin: true,
  parkingSpacesMax: true,
  locationType: true,
  locationOptions: true,
  buying: true,
  renting: true,
  externalArea: true,
  internalArea: true,
  source: true,
  regional: true,
  officeIds: true,
  negotiatorIds: true,
  related: true,
  metadata: true,
})
export const CreateApplicantsForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateApplicantModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateApplicants>
          <CreateApplicantsFields />
        </CreateApplicants>
      </DialogContent>
    </Drawer>
  )
}

export const CreateApplicantsFields = () => {
  const formConfig = createApplicantModelConfig as ModelConfig<CreateApplicantModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
