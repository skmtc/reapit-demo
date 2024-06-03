import {
  createAppointmentModel,
  CreateAppointmentModel,
  createOpenHouseAttendeeModel,
  CreateOpenHouseAttendeeModel,
} from '@/schemas/index.ts'
import { useCreateAppointment, useCreateOpenHouseAttendee } from '@/services/appointments.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateAppointmentsProps = { children: ReactNode }
export type CreateAppointmentsIdOpenHouseAttendeesProps = { id: string; children: ReactNode }

export const CreateAppointments = (props: CreateAppointmentsProps) => {
  const methods = useForm<CreateAppointmentModel>({
    resolver: zodResolver(createAppointmentModel),
  })

  const mutator = useCreateAppointment()

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        gap="16px"
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        {props.children}
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            pt: '16px',
            position: 'sticky',
            bottom: 0,
            bgColor: 'white',
          }}
        >
          <Button type="submit">Submit</Button>
        </Box>
      </Box>
    </FormProvider>
  )
}

export const CreateAppointmentsIdOpenHouseAttendees = (props: CreateAppointmentsIdOpenHouseAttendeesProps) => {
  const methods = useForm<CreateOpenHouseAttendeeModel>({
    resolver: zodResolver(createOpenHouseAttendeeModel),
  })

  const mutator = useCreateOpenHouseAttendee()

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        display="flex"
        flexDirection="column"
        flex={1}
        gap="16px"
        onSubmit={methods.handleSubmit((body) => {
          mutator.mutate({ ...props, body })
        })}
      >
        {props.children}
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            pt: '16px',
            position: 'sticky',
            bottom: 0,
            bgColor: 'white',
          }}
        >
          <Button type="submit">Submit</Button>
        </Box>
      </Box>
    </FormProvider>
  )
}
