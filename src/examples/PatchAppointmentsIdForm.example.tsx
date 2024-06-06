import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { PatchAppointmentsId } from '@/examples/PatchAppointmentsIdForm.example.tsx'
import { UpdateAppointmentModel } from 'schemas/index.ts'
import { updateAppointmentModelConfig } from 'config/index.example.tsx'

export const fieldNames = fieldsConfig<UpdateAppointmentModel>({
          start: true,
end: true,
followUpOn: true,
typeId: true,
description: true,
propertyId: true,
otherAgentId: true,
organiserId: true,
cancelled: true,
negotiatorIds: true,
officeIds: true,
attendee: true,
accompanied: true,
virtual: true,
isRepeat: true,
negotiatorConfirmed: true,
attendeeConfirmed: true,
propertyConfirmed: true,
attended: true,
followUp: true,
recurrence: true,
documents: true,
metadata: true
        });
export const PatchAppointmentsIdForm = () => {
      const navigate = useNavigate()
      const { id } = useParams()

      invariant(id, 'Expected id to be defined')
    
      return (
        <Drawer title="Create new updateAppointmentModelConfig" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchAppointmentsId id={id}>
              <PatchAppointmentsIdFields />
            </PatchAppointmentsId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchAppointmentsIdFields = () => {
      const formConfig = updateAppointmentModelConfig as ModelConfig<UpdateAppointmentModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;