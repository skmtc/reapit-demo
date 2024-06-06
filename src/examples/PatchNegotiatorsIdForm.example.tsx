import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchNegotiatorsId } from '@/examples/PatchNegotiatorsIdForm.example.tsx'
import { UpdateNegotiatorModel } from 'schemas/index.ts'
import { updateNegotiatorModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateNegotiatorModel>({
          name: true,
jobTitle: true,
active: true,
workPhone: true,
mobilePhone: true,
email: true,
diaryNegotiatorIds: true,
diaryOfficeIds: true,
metadata: true
        });
export const PatchNegotiatorsIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new updateNegotiatorModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchNegotiatorsId id={id}>
              <PatchNegotiatorsIdFields />
            </PatchNegotiatorsId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchNegotiatorsIdFields = () => {
      const formConfig = updateNegotiatorModelConfig as ModelConfig<UpdateNegotiatorModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;