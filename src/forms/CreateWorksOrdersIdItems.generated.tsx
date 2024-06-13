import { useCreateApiWorksOrdersIdItems } from '@/services/WorksOrders.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type CreateWorksOrdersIdItemsProps = {
  id: string
  children: ReactNode
  defaultValues?: CreateWorksOrderItemModel
}
export const CreateWorksOrdersIdItems = (props: CreateWorksOrdersIdItemsProps) => {
  const methods = useForm<CreateWorksOrderItemModel>({
    resolver: zodResolver(createWorksOrderItemModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateApiWorksOrdersIdItems()

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
