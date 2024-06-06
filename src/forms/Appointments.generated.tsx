import { createAppointmentModel, CreateAppointmentModel, updateAppointmentModel, UpdateAppointmentModel, createOpenHouseAttendeeModel, CreateOpenHouseAttendeeModel, updateOpenHouseAttendeeModel, UpdateOpenHouseAttendeeModel } from 'schemas/index.ts'
import { usePostApiAppointments, usePatchApiAppointmentsId, usePostApiAppointmentsIdOpenHouseAttendees, usePatchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeId } from 'services/Appointments.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateAppointmentsProps = {children: ReactNode};
export const CreateAppointments = (props:CreateAppointmentsProps) => {
      const methods = useForm<CreateAppointmentModel>({
        resolver: zodResolver(createAppointmentModel)
      })

      const mutator = usePostApiAppointments()

      return (
        <FormProvider {...methods}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            flex={1}
            gap="16px"
            onSubmit={methods.handleSubmit(body => {
              mutator.mutate({ ...props, body })
            })}
          >
            {props.children}
            <Box display="flex" flexDirection="column" sx={{
              pt: "16px",
              position: "sticky",
              bottom: 0,
              bgColor: "white"
            }}>
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        </FormProvider>
      )
    };
export type PatchAppointmentsIdProps = {'If-Match'?: string, id: string, children: ReactNode};
export const PatchAppointmentsId = (props:PatchAppointmentsIdProps) => {
      const methods = useForm<UpdateAppointmentModel>({
        resolver: zodResolver(updateAppointmentModel)
      })

      const mutator = usePatchApiAppointmentsId()

      return (
        <FormProvider {...methods}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            flex={1}
            gap="16px"
            onSubmit={methods.handleSubmit(body => {
              mutator.mutate({ ...props, body })
            })}
          >
            {props.children}
            <Box display="flex" flexDirection="column" sx={{
              pt: "16px",
              position: "sticky",
              bottom: 0,
              bgColor: "white"
            }}>
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        </FormProvider>
      )
    };
export type CreateAppointmentsIdOpenHouseAttendeesProps = {id: string, children: ReactNode};
export const CreateAppointmentsIdOpenHouseAttendees = (props:CreateAppointmentsIdOpenHouseAttendeesProps) => {
      const methods = useForm<CreateOpenHouseAttendeeModel>({
        resolver: zodResolver(createOpenHouseAttendeeModel)
      })

      const mutator = usePostApiAppointmentsIdOpenHouseAttendees()

      return (
        <FormProvider {...methods}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            flex={1}
            gap="16px"
            onSubmit={methods.handleSubmit(body => {
              mutator.mutate({ ...props, body })
            })}
          >
            {props.children}
            <Box display="flex" flexDirection="column" sx={{
              pt: "16px",
              position: "sticky",
              bottom: 0,
              bgColor: "white"
            }}>
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        </FormProvider>
      )
    };
export type PatchAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdProps = {'If-Match'?: string, id: string, openHouseAttendeeId: string, children: ReactNode};
export const PatchAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeId = (props:PatchAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdProps) => {
      const methods = useForm<UpdateOpenHouseAttendeeModel>({
        resolver: zodResolver(updateOpenHouseAttendeeModel)
      })

      const mutator = usePatchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeId()

      return (
        <FormProvider {...methods}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            flex={1}
            gap="16px"
            onSubmit={methods.handleSubmit(body => {
              mutator.mutate({ ...props, body })
            })}
          >
            {props.children}
            <Box display="flex" flexDirection="column" sx={{
              pt: "16px",
              position: "sticky",
              bottom: 0,
              bgColor: "white"
            }}>
              <Button type="submit">Submit</Button>
            </Box>
          </Box>
        </FormProvider>
      )
    };