import { createContactModel, CreateContactModel } from '@/models/createContactModel.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateContact, useUpdateContactSubscription } from '@/services/contacts.ts'
import {
  updateContactSubscriptionModel,
  UpdateContactSubscriptionModel,
} from '@/models/updateContactSubscriptionModel.ts'

export type CreateContactsProps = { children: (control: Control<CreateContactModel>) => ReactNode }
export type UpdateContactsIdSubscriptionsSubscriptionIdProps = {
  id: string
  subscriptionId: string
  children: (control: Control<UpdateContactSubscriptionModel>) => ReactNode
}

export const CreateContacts = (props: CreateContactsProps) => {
  const { control, handleSubmit } = useForm<CreateContactModel>({
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
      {props.children(control)}
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
  const { control, handleSubmit } = useForm<UpdateContactSubscriptionModel>({
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
      {props.children(control)}
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
