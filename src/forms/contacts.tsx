import {
  createContactModel,
  CreateContactModel,
  updateContactSubscriptionModel,
  UpdateContactSubscriptionModel,
} from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateContact, useUpdateContactSubscription } from '@/services/contacts.ts'

export type CreateContactsProps = { children: ReactNode }
export type UpdateContactsIdSubscriptionsSubscriptionIdProps = {
  id: string
  subscriptionId: string
  children: ReactNode
}

export const CreateContacts = (props: CreateContactsProps) => {
  const { handleSubmit } = useForm<CreateContactModel>({
    resolver: zodResolver(createContactModel),
  })

  const mutator = useCreateContact()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit((body) => {
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
  )
}

export const UpdateContactsIdSubscriptionsSubscriptionId = (
  props: UpdateContactsIdSubscriptionsSubscriptionIdProps,
) => {
  const { handleSubmit } = useForm<UpdateContactSubscriptionModel>({
    resolver: zodResolver(updateContactSubscriptionModel),
  })

  const mutator = useUpdateContactSubscription()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit((body) => {
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
  )
}
