import { PatchTasksId } from '@/forms/Tasks.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateTaskModelConfig } from '@/config/updateTaskModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateTaskModel>({
          activates: true,
completed: true,
typeId: true,
senderId: true,
text: true,
landlordId: true,
propertyId: true,
applicantId: true,
tenancyId: true,
contactId: true,
recipientId: true,
recipientType: true,
metadata: true
        });
export const PatchTasksIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new UpdateTaskModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchTasksId id={id}>
              <PatchTasksIdFields />
            </PatchTasksId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchTasksIdFields = () => {
      const formConfig = updateTaskModelConfig as ModelConfig<UpdateTaskModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;