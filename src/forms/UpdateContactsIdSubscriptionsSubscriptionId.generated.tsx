import {
  updateContactSubscriptionModel,
  UpdateContactSubscriptionModel,
} from '@/schemas/updateContactSubscriptionModel.generated.tsx'
import { useUpdateContactSubscription } from '@/services/Contacts.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
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

  const mutator = useUpdateContactSubscription()

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
