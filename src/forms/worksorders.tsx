import { createWorksOrderModel, CreateWorksOrderModel } from '@/models/createWorksOrderModel.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateWorksOrder, useCreateWorksOrderItem } from '@/services/worksorders.ts'
import { createWorksOrderItemModel, CreateWorksOrderItemModel } from '@/models/createWorksOrderItemModel.ts'

export type CreateWorksOrdersProps = { children: (control: Control<CreateWorksOrderModel>) => ReactNode }
export type CreateWorksOrdersIdItemsProps = {
  id: string
  children: (control: Control<CreateWorksOrderItemModel>) => ReactNode
}

export const CreateWorksOrders = (props: CreateWorksOrdersProps) => {
  const { control, handleSubmit } = useForm<CreateWorksOrderModel>({
    resolver: zodResolver(createWorksOrderModel),
  })

  const mutator = useCreateWorksOrder()

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

export const CreateWorksOrdersIdItems = (props: CreateWorksOrdersIdItemsProps) => {
  const { control, handleSubmit } = useForm<CreateWorksOrderItemModel>({
    resolver: zodResolver(createWorksOrderItemModel),
  })

  const mutator = useCreateWorksOrderItem()

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
