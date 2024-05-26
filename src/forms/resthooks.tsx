import { createWebhookModel, CreateWebhookModel, updateWebhookModel, UpdateWebhookModel } from '@/index.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { usePostApiResthooks, usePutApiResthooksId } from '@/services/resthooks.ts'

export type CreateResthooksProps = { children: (control: Control<CreateWebhookModel>) => ReactNode }
export type UpdateResthooksIdProps = { id: string; children: (control: Control<UpdateWebhookModel>) => ReactNode }

export const CreateResthooks = (props: CreateResthooksProps) => {
  const { control, handleSubmit } = useForm<CreateWebhookModel>({
    resolver: zodResolver(createWebhookModel),
  })

  const mutator = usePostApiResthooks()

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

export const UpdateResthooksId = (props: UpdateResthooksIdProps) => {
  const { control, handleSubmit } = useForm<UpdateWebhookModel>({
    resolver: zodResolver(updateWebhookModel),
  })

  const mutator = usePutApiResthooksId()

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
