import { PatchApplicantsId } from '@/forms/Applicants.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateApplicantModelConfig } from '@/config/updateApplicantModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateApplicantModel>({
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
metadata: true
        });
export const PatchApplicantsIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateApplicantModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchApplicantsId id={id}>
              <PatchApplicantsIdFields />
            </PatchApplicantsId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchApplicantsIdFields = () => {
      const formConfig = updateApplicantModelConfig as ModelConfig<UpdateApplicantModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;