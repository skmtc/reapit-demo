import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchPropertiesIdCertificatesResponsibilities } from '@/examples/PatchPropertiesIdCertificatesResponsibilitiesForm.example.tsx'
import { UpdateCertificateResponsibilitiesModel } from 'schemas/index.ts'
import { updateCertificateResponsibilitiesModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateCertificateResponsibilitiesModel>({
          responsibleParties: true
        });
export const PatchPropertiesIdCertificatesResponsibilitiesForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new updateCertificateResponsibilitiesModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchPropertiesIdCertificatesResponsibilities id={id}>
              <PatchPropertiesIdCertificatesResponsibilitiesFields />
            </PatchPropertiesIdCertificatesResponsibilities>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchPropertiesIdCertificatesResponsibilitiesFields = () => {
      const formConfig = updateCertificateResponsibilitiesModelConfig as ModelConfig<UpdateCertificateResponsibilitiesModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;