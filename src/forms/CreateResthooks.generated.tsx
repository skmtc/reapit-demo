import { CreateWebhookModel, createWebhookModel } from '@/schemas/createWebhookModel.generated.tsx'
import { useCreateApiResthooks } from '@/services/RestHooks.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateResthooksProps = { children: ReactNode; defaultValues?: CreateWebhookModel }
export const CreateResthooks = (props: CreateResthooksProps) => {
  const methods = useForm<CreateWebhookModel>({
    resolver: zodResolver(createWebhookModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiResthooks()

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
