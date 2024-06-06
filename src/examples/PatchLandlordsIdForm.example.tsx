import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchLandlordsId } from '@/examples/PatchLandlordsIdForm.example.tsx'
import { UpdateLandlordModel } from 'schemas/index.ts'
import { updateLandlordModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateLandlordModel>({
          active: true,
solicitorId: true,
officeId: true,
source: true,
metadata: true
        });
export const PatchLandlordsIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new updateLandlordModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchLandlordsId id={id}>
              <PatchLandlordsIdFields />
            </PatchLandlordsId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchLandlordsIdFields = () => {
      const formConfig = updateLandlordModelConfig as ModelConfig<UpdateLandlordModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;