import { createWorksOrderItemModel, CreateWorksOrderItemModel } from '@/schemas/createWorksOrderItemModel.generated.tsx'
import { useCreateWorksOrderItem } from '@/services/WorksOrders.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
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
