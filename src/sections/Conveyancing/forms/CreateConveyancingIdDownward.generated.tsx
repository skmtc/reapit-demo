import { CreateDownwardLinkModel, createDownwardLinkModel } from '@/schemas/createDownwardLinkModel.generated.tsx'
import { useCreateApiConveyancingIdDownward } from '@/sections/Conveyancing/services/Conveyancing.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateConveyancingIdDownwardProps = {
  id: string
  children: ReactNode
  defaultValues?: CreateDownwardLinkModel
}
export const CreateConveyancingIdDownward = (props: CreateConveyancingIdDownwardProps) => {
  const methods = useForm<CreateDownwardLinkModel>({
    resolver: zodResolver(createDownwardLinkModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiConveyancingIdDownward()

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
