import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchReferralsId } from '@/examples/PatchReferralsIdForm.example.tsx'
import { UpdateReferralModel } from 'schemas/index.ts'
import { updateReferralModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateReferralModel>({
          status: true,
amount: true,
metadata: true
        });
export const PatchReferralsIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new updateReferralModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchReferralsId id={id}>
              <PatchReferralsIdFields />
            </PatchReferralsId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchReferralsIdFields = () => {
      const formConfig = updateReferralModelConfig as ModelConfig<UpdateReferralModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;