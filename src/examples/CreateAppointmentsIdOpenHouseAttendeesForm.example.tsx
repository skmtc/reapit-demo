import { CreateAppointmentsIdOpenHouseAttendees } from '@/forms/CreateAppointmentsIdOpenHouseAttendees.generated.tsx'
import { useParams, useNavigate } from 'react-router-dom'
import { default as invariant } from 'tiny-invariant'
import { createOpenHouseAttendeeModelConfig } from '@/config/createOpenHouseAttendeeModelConfig.example.tsx'
import { FieldParent, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { Drawer } from '@/components/Drawer'
import { default as DialogContent } from '@mui/joy/DialogContent'
import { CreateOpenHouseAttendeeModel } from '@/schemas/createOpenHouseAttendeeModel.generated.tsx'

export const fieldNames = fieldsConfig<CreateOpenHouseAttendeeModel>({
  interestLevel: true,
  notes: true,
  attendee: true,
})
export const CreateAppointmentsIdOpenHouseAttendeesForm = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  invariant(id, 'Expected id to be defined')

  return (
    <Drawer title="Create new CreateOpenHouseAttendeeModel" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateAppointmentsIdOpenHouseAttendees id={id}>
          <CreateAppointmentsIdOpenHouseAttendeesFields />
        </CreateAppointmentsIdOpenHouseAttendees>
      </DialogContent>
    </Drawer>
  )
}

export const CreateAppointmentsIdOpenHouseAttendeesFields = () => (
  <>
    {fieldNames.map((fieldName) => (
      <FieldParent key={fieldName} fieldName={fieldName} fieldConfig={createOpenHouseAttendeeModelConfig[fieldName]} />
    ))}
  </>
)
