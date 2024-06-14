import { CreateUpwardLinkModel, createUpwardLinkModel } from '@/schemas/createUpwardLinkModel.generated.tsx'
import { useCreateApiConveyancingIdUpward } from '@/sections/Conveyancing/services/Conveyancing.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateConveyancingIdUpwardProps = { id: string; children: ReactNode; defaultValues?: CreateUpwardLinkModel }
export const CreateConveyancingIdUpward = (props: CreateConveyancingIdUpwardProps) => {
  const methods = useForm<CreateUpwardLinkModel>({
    resolver: zodResolver(createUpwardLinkModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiConveyancingIdUpward()

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
