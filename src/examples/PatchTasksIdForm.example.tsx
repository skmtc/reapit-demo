import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchTasksId } from '@/examples/PatchTasksIdForm.example.tsx'
import { UpdateTaskModel } from 'schemas/index.ts'
import { updateTaskModelConfig } from 'config/index.example.tsx'

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
        <Drawer title="Create new updateTaskModelConfig" onClose={() => navigate('..')}>
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