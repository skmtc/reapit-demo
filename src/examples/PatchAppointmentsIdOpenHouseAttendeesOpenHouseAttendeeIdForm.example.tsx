import { PatchAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeId } from '@/forms/Appointments.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { updateOpenHouseAttendeeModelConfig } from '@/config/updateOpenHouseAttendeeModelConfigConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'

export const fieldNames = fieldsConfig<UpdateOpenHouseAttendeeModel>({
          interestLevel: true,
notes: true
        });
export const PatchAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdForm = () => {
      const navigate = useNavigate()
      const { id, openHouseAttendeeId } = useParams()

      invariant(id, 'Expected id to be defined')
invariant(openHouseAttendeeId, 'Expected openHouseAttendeeId to be defined')
    
      return (
        <Drawer title="Create new UpdateOpenHouseAttendeeModel" onClose={() => navigate('..')}>
          <DialogContent sx={{ p: '16px' }}>
            <PatchAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeId id={id} openHouseAttendeeId={openHouseAttendeeId}>
              <PatchAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFields />
            </PatchAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeId>
          </DialogContent>
        </Drawer>
      )
    }
    
    export const PatchAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFields = () => {
      const formConfig = updateOpenHouseAttendeeModelConfig as ModelConfig<UpdateOpenHouseAttendeeModel>
    
      return (
        <>
          {fieldNames.map((fieldName) => (
            <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
          ))}
        </>
      )
    }
    ;