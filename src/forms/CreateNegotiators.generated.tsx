import { CreateNegotiatorModel, createNegotiatorModel } from '@/schemas/createNegotiatorModel.generated.tsx'
import { useCreateApiNegotiators } from '@/services/Negotiators.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateNegotiatorsProps = { children: ReactNode; defaultValues?: CreateNegotiatorModel }
export const CreateNegotiators = (props: CreateNegotiatorsProps) => {
  const methods = useForm<CreateNegotiatorModel>({
    resolver: zodResolver(createNegotiatorModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiNegotiators()

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
