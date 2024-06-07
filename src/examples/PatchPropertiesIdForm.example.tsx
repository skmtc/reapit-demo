import { PatchPropertiesId } from '@/forms/Properties.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updatePropertyModelConfig } from '@/config/updatePropertyModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdatePropertyModel>({
          lastCall: true,
nextCall: true,
roomDetailsApproved: true,
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
selling: true,
letting: true,
regional: true,
rural: true,
type: true,
style: true,
situation: true,
parking: true,
age: true,
locality: true,
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
availableServicesIds: true,
metadata: true
        });
export const PatchPropertiesIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdatePropertyModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchPropertiesId id={id}>
              <PatchPropertiesIdFields />
            </PatchPropertiesId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchPropertiesIdFields = () => {
      const formConfig = updatePropertyModelConfig as ModelConfig<UpdatePropertyModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;