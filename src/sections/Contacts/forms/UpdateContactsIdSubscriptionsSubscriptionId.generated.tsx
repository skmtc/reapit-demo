import {
  UpdateContactSubscriptionModel,
  updateContactSubscriptionModel,
} from '@/schemas/updateContactSubscriptionModel.generated.tsx'
import { useUpdateApiContactsIdSubscriptionsSubscriptionId } from '@/sections/Contacts/services/Contacts.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

export type UpdateContactsIdSubscriptionsSubscriptionIdProps = {
  id: string
  subscriptionId: string
  children: ReactNode
  defaultValues?: UpdateContactSubscriptionModel
}
export const UpdateContactsIdSubscriptionsSubscriptionId = (
  props: UpdateContactsIdSubscriptionsSubscriptionIdProps,
) => {
  const methods = useForm<UpdateContactSubscriptionModel>({
    resolver: zodResolver(updateContactSubscriptionModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useUpdateApiContactsIdSubscriptionsSubscriptionId()

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
