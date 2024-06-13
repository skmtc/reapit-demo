import { updateWebhookModel, UpdateWebhookModel } from '@/schemas/updateWebhookModel.generated.tsx'
import { useUpdateResthook } from '@/services/RestHooks.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type UpdateResthooksIdProps = { id: string; children: ReactNode; defaultValues?: UpdateWebhookModel }
export const UpdateResthooksId = (props: UpdateResthooksIdProps) => {
  const methods = useForm<UpdateWebhookModel>({
    resolver: zodResolver(updateWebhookModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useUpdateResthook()

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
