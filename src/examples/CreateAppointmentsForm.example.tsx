import { CreateAppointments } from '@/forms/CreateAppointments.generated.tsx'
import { createAppointmentModelConfig } from '@/config/createAppointmentModelConfig.example.tsx'
import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'
import { CreateAppointmentModel } from '@/schemas/createAppointmentModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateAppointmentModel>({
  start: true,
  end: true,
  followUpOn: true,
  typeId: true,
  description: true,
  organiserId: true,
  negotiatorIds: true,
  officeIds: true,
  attendee: true,
  propertyId: true,
  otherAgentId: true,
  accompanied: true,
  negotiatorConfirmed: true,
  attendeeConfirmed: true,
  propertyConfirmed: true,
  virtual: true,
  isRepeat: true,
  attended: true,
  recurrence: true,
  documents: true,
  metadata: true,
})
export const CreateAppointmentsForm = () => {
  const navigate = useNavigate()

  return (
    <Drawer title="Create new CreateAppointmentModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateAppointments>
          <CreateAppointmentsFields />
        </CreateAppointments>
      </DialogContent>
    </Drawer>
  )
}

export const CreateAppointmentsFields = () => {
  const formConfig = createAppointmentModelConfig as ModelConfig<CreateAppointmentModel>

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={formConfig[fieldName]} />
      ))}
    </>
  )
}
