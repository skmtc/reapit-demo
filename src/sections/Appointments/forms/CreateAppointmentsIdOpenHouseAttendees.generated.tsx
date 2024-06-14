import {
  CreateOpenHouseAttendeeModel,
  createOpenHouseAttendeeModel,
} from '@/schemas/createOpenHouseAttendeeModel.generated.tsx'
import { useCreateApiAppointmentsIdOpenHouseAttendees } from '@/sections/Appointments/services/Appointments.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateAppointmentsIdOpenHouseAttendeesProps = {
  id: string
  children: ReactNode
  defaultValues?: CreateOpenHouseAttendeeModel
}
export const CreateAppointmentsIdOpenHouseAttendees = (props: CreateAppointmentsIdOpenHouseAttendeesProps) => {
  const methods = useForm<CreateOpenHouseAttendeeModel>({
    resolver: zodResolver(createOpenHouseAttendeeModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiAppointmentsIdOpenHouseAttendees()

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        <FormLayout>{props.children}</FormLayout>

        <Button intent="primary">Submit</Button>
      </form>
    </FormProvider>
  )
}
