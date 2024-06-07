import { PatchSourcesId } from '@/forms/Sources.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateSourceModelConfig } from '@/config/updateSourceModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateSourceModel>({
          name: true,
type: true,
officeIds: true,
departmentIds: true
        });
export const PatchSourcesIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateSourceModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchSourcesId id={id}>
              <PatchSourcesIdFields />
            </PatchSourcesId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchSourcesIdFields = () => {
      const formConfig = updateSourceModelConfig as ModelConfig<UpdateSourceModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;