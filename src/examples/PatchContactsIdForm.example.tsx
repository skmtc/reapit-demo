import { PatchContactsId } from '@/forms/Contacts.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateContactModelConfig } from '@/config/updateContactModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateContactModel>({
          title: true,
forename: true,
surname: true,
dateOfBirth: true,
active: true,
marketingConsent: true,
source: true,
homePhone: true,
workPhone: true,
mobilePhone: true,
email: true,
officeIds: true,
negotiatorIds: true,
categoryIds: true,
primaryAddress: true,
secondaryAddress: true,
workAddress: true,
communicationPreferenceLetter: true,
communicationPreferenceEmail: true,
communicationPreferencePhone: true,
communicationPreferenceSMS: true,
fromArchive: true,
metadata: true,
additionalContactDetails: true
        });
export const PatchContactsIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateContactModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchContactsId id={id}>
              <PatchContactsIdFields />
            </PatchContactsId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchContactsIdFields = () => {
      const formConfig = updateContactModelConfig as ModelConfig<UpdateContactModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;