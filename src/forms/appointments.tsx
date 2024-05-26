import {
  createAppointmentModel,
  CreateAppointmentModel,
  createOpenHouseAttendeeModel,
  CreateOpenHouseAttendeeModel,
} from '@/index.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { usePostApiAppointments, usePostApiAppointmentsIdOpenHouseAttendees } from '@/services/appointments.ts'

export type CreateAppointmentsProps = { children: (control: Control<CreateAppointmentModel>) => ReactNode }
export type CreateAppointmentsIdOpenHouseAttendeesProps = {
  id: string
  children: (control: Control<CreateOpenHouseAttendeeModel>) => ReactNode
}

export const CreateAppointments = (props: CreateAppointmentsProps) => {
  const { control, handleSubmit } = useForm<CreateAppointmentModel>({
    resolver: zodResolver(createAppointmentModel),
  })

  const mutator = usePostApiAppointments()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit((body) => {
        mutator.mutate({ ...props, body })
      })}
    >
      {props.children(control)}
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
  )
}

export const CreateAppointmentsIdOpenHouseAttendees = (props: CreateAppointmentsIdOpenHouseAttendeesProps) => {
  const { control, handleSubmit } = useForm<CreateOpenHouseAttendeeModel>({
    resolver: zodResolver(createOpenHouseAttendeeModel),
  })

  const mutator = usePostApiAppointmentsIdOpenHouseAttendees()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit((body) => {
        mutator.mutate({ ...props, body })
      })}
    >
      {props.children(control)}
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
  )
}
