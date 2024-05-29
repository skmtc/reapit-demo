import {
  createWorksOrderModel,
  CreateWorksOrderModel,
  createWorksOrderItemModel,
  CreateWorksOrderItemModel,
} from '@/schemas/index.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateWorksOrder, useCreateWorksOrderItem } from '@/services/worksorders.ts'

export type CreateWorksOrdersProps = { children: ReactNode }
export type CreateWorksOrdersIdItemsProps = { id: string; children: ReactNode }

export const CreateWorksOrders = (props: CreateWorksOrdersProps) => {
  const methods = useForm<CreateWorksOrderModel>({
    resolver: zodResolver(createWorksOrderModel),
  })

  const mutator = useCreateWorksOrder()

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

export const CreateWorksOrdersIdItems = (props: CreateWorksOrdersIdItemsProps) => {
  const methods = useForm<CreateWorksOrderItemModel>({
    resolver: zodResolver(createWorksOrderItemModel),
  })

  const mutator = useCreateWorksOrderItem()

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
