import { PatchPropertiesIdCertificatesCertificateId } from '@/forms/Properties.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateCertificateModelConfig } from '@/config/updateCertificateModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateCertificateModel>({
          start: true,
expiry: true,
companyId: true,
notes: true,
referenceNumber: true
        });
export const PatchPropertiesIdCertificatesCertificateIdForm = () => {
      const navigate = useNavigate()
      const { id, certificateId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(certificateId, 'Expected certificateId to be defined')
    
      return (
        <Drawer title="Create new UpdateCertificateModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchPropertiesIdCertificatesCertificateId id={id} certificateId={certificateId}>
              <PatchPropertiesIdCertificatesCertificateIdFields />
            </PatchPropertiesIdCertificatesCertificateId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchPropertiesIdCertificatesCertificateIdFields = () => {
      const formConfig = updateCertificateModelConfig as ModelConfig<UpdateCertificateModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;