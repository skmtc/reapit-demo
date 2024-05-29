import { createNotificationModel, CreateNotificationModel } from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateNotification } from '@/services/notifications.ts'

export type CreateNotificationsProps = { children: ReactNode }

export const CreateNotifications = (props: CreateNotificationsProps) => {
  const methods = useForm<CreateNotificationModel>({
    resolver: zodResolver(createNotificationModel),
  })

  const mutator = useCreateNotification()

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
