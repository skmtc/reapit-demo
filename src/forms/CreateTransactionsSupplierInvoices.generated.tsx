import {
  createSupplierInvoiceModel,
  CreateSupplierInvoiceModel,
} from '@/schemas/createSupplierInvoiceModel.generated.tsx'
import { useCreateSupplierInvoice } from '@/services/Transactions.generated.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'

export type CreateTransactionsSupplierInvoicesProps = {
  children: ReactNode
  defaultValues?: CreateSupplierInvoiceModel
}
export const CreateTransactionsSupplierInvoices = (props: CreateTransactionsSupplierInvoicesProps) => {
  const methods = useForm<CreateSupplierInvoiceModel>({
    resolver: zodResolver(createSupplierInvoiceModel),
    defaultValues: props.defaultValues,
  })

  const mutator = useCreateSupplierInvoice()

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
