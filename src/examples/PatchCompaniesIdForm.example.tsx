import { PatchCompaniesId } from '@/forms/Companies.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateCompanyModelConfig } from '@/config/updateCompanyModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateCompanyModel>({
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
metadata: true
        });
export const PatchCompaniesIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateCompanyModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchCompaniesId id={id}>
              <PatchCompaniesIdFields />
            </PatchCompaniesId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchCompaniesIdFields = () => {
      const formConfig = updateCompanyModelConfig as ModelConfig<UpdateCompanyModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;