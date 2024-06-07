import { PatchAreasId } from '@/forms/Areas.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateAreaModelConfig } from '@/config/updateAreaModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateAreaModel>({
          name: true,
area: true,
departmentIds: true,
officeIds: true
        });
export const PatchAreasIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateAreaModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchAreasId id={id}>
              <PatchAreasIdFields />
            </PatchAreasId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchAreasIdFields = () => {
      const formConfig = updateAreaModelConfig as ModelConfig<UpdateAreaModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;