import { PatchPropertiesIdAppraisalsAppraisalId } from '@/forms/Properties.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updatePropertyAppraisalModelConfig } from '@/config/updatePropertyAppraisalModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdatePropertyAppraisalModel>({
          companyId: true,
date: true,
price: true,
fee: true,
notes: true
        });
export const PatchPropertiesIdAppraisalsAppraisalIdForm = () => {
      const navigate = useNavigate()
      const { id, appraisalId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(appraisalId, 'Expected appraisalId to be defined')
    
      return (
        <Drawer title="Create new UpdatePropertyAppraisalModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchPropertiesIdAppraisalsAppraisalId id={id} appraisalId={appraisalId}>
              <PatchPropertiesIdAppraisalsAppraisalIdFields />
            </PatchPropertiesIdAppraisalsAppraisalId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchPropertiesIdAppraisalsAppraisalIdFields = () => {
      const formConfig = updatePropertyAppraisalModelConfig as ModelConfig<UpdatePropertyAppraisalModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;