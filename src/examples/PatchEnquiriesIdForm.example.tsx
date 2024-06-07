import { PatchEnquiriesId } from '@/forms/Enquiries.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateEnquiryModelConfig } from '@/config/updateEnquiryModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateEnquiryModel>({
          applicantId: true,
status: true
        });
export const PatchEnquiriesIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateEnquiryModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchEnquiriesId id={id}>
              <PatchEnquiriesIdFields />
            </PatchEnquiriesId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchEnquiriesIdFields = () => {
      const formConfig = updateEnquiryModelConfig as ModelConfig<UpdateEnquiryModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;