import { CreateWorksOrderModel, createWorksOrderModel } from '@/schemas/createWorksOrderModel.generated.tsx'
import { useCreateApiWorksOrders } from '@/services/WorksOrders.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateWorksOrdersProps = { children: ReactNode; defaultValues?: CreateWorksOrderModel }
export const CreateWorksOrders = (props: CreateWorksOrdersProps) => {
  const methods = useForm<CreateWorksOrderModel>({
    resolver: zodResolver(createWorksOrderModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiWorksOrders()

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
