import { CreateAppointmentModel, createAppointmentModel } from '@/schemas/createAppointmentModel.generated.tsx'
import { useCreateApiAppointments } from '@/services/Appointments.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateAppointmentsProps = { children: ReactNode; defaultValues?: CreateAppointmentModel }
export const CreateAppointments = (props: CreateAppointmentsProps) => {
  const methods = useForm<CreateAppointmentModel>({
    resolver: zodResolver(createAppointmentModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiAppointments()

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
