import { UpdateWebhookModel, updateWebhookModel } from '@/schemas/updateWebhookModel.generated.tsx'
import { useUpdateApiResthooksId } from '@/services/RestHooks.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type UpdateResthooksIdProps = { id: string; children: ReactNode; defaultValues?: UpdateWebhookModel }
export const UpdateResthooksId = (props: UpdateResthooksIdProps) => {
  const methods = useForm<UpdateWebhookModel>({
    resolver: zodResolver(updateWebhookModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useUpdateApiResthooksId()

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
