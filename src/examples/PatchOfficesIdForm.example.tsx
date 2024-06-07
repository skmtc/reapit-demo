import { PatchOfficesId } from '@/forms/Offices.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateOfficeModelConfig } from '@/config/updateOfficeModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateOfficeModel>({
          name: true,
active: true,
manager: true,
address: true,
workPhone: true,
email: true,
metadata: true
        });
export const PatchOfficesIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateOfficeModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchOfficesId id={id}>
              <PatchOfficesIdFields />
            </PatchOfficesId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchOfficesIdFields = () => {
      const formConfig = updateOfficeModelConfig as ModelConfig<UpdateOfficeModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;