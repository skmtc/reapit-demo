import { CreateProperties } from '@/forms/CreateProperties.generated.tsx'
import { createPropertyModelConfig } from '@/config/createPropertyModelConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreatePropertyModel } from '@/schemas/createPropertyModel.generated.tsx'

export const fieldNames = fieldsConfig<CreatePropertyModel>({
  lastCall: true,
  nextCall: true,
  marketingMode: true,
  departmentId: true,
  strapline: true,
  description: true,
  summary: true,
  alternateId: true,
  specialFeatures: true,
  address: true,
  bedrooms: true,
  bedroomsMax: true,
  numberOfUnits: true,
  receptions: true,
  receptionsMax: true,
  bathrooms: true,
  bathroomsMax: true,
  parkingSpaces: true,
  councilTax: true,
  internetAdvertising: true,
  viewingArrangements: true,
  videoUrl: true,
  videoCaption: true,
  video2Url: true,
  video2Caption: true,
  notes: true,
  longDescription: true,
  floorLevel: true,
  internalFloors: true,
  totalFloors: true,
  boardStatus: true,
  boardNotes: true,
  boardUpdated: true,
  valuation: true,
  epc: true,
  externalArea: true,
  internalArea: true,
  rural: true,
  selling: true,
  letting: true,
  regional: true,
  type: true,
  style: true,
  situation: true,
  parking: true,
  age: true,
  locality: true,
  rooms: true,
  roomDetailsApproved: true,
  negotiatorId: true,
  officeIds: true,
  areaId: true,
  url: true,
  urlCaption: true,
  groundRent: true,
  groundRentComment: true,
  groundRentReviewDate: true,
  groundRentIncrease: true,
  serviceCharge: true,
  serviceChargeComment: true,
  metadata: true,
})
export const CreatePropertiesForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreatePropertyModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateProperties>
          <CreatePropertiesFields />
        </CreateProperties>
      </DialogContent>
    </Drawer>
  )
}

export const CreatePropertiesFields = () => {
  const formConfig = createPropertyModelConfig as ModelConfig<CreatePropertyModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
