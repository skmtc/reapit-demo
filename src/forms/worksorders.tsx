import {
  createWorksOrderModel,
  CreateWorksOrderModel,
  createWorksOrderItemModel,
  CreateWorksOrderItemModel,
} from '@/index.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { usePostApiWorksOrders, usePostApiWorksOrdersIdItems } from '@/services/worksorders.ts'

export type CreateWorksOrdersProps = { children: (control: Control<CreateWorksOrderModel>) => ReactNode }
export type CreateWorksOrdersIdItemsProps = {
  id: string
  children: (control: Control<CreateWorksOrderItemModel>) => ReactNode
}

export const CreateWorksOrders = (props: CreateWorksOrdersProps) => {
  const { control, handleSubmit } = useForm<CreateWorksOrderModel>({
    resolver: zodResolver(createWorksOrderModel),
  })

  const mutator = usePostApiWorksOrders()

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

  const mutator = usePostApiWorksOrdersIdItems()

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
