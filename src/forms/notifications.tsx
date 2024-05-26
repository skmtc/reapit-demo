import { createNotificationModel, CreateNotificationModel } from '@/index.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { usePostApiNotifications } from '@/services/notifications.ts'

export type CreateNotificationsProps = { children: (control: Control<CreateNotificationModel>) => ReactNode }

export const CreateNotifications = (props: CreateNotificationsProps) => {
  const { control, handleSubmit } = useForm<CreateNotificationModel>({
    resolver: zodResolver(createNotificationModel),
  })

  const mutator = usePostApiNotifications()

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
