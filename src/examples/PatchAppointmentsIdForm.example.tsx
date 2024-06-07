import { PatchAppointmentsId } from '@/forms/Appointments.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateAppointmentModelConfig } from '@/config/updateAppointmentModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

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
        <Drawer title="Create new UpdateAppointmentModel" onClose={() => navigate('..')}>
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