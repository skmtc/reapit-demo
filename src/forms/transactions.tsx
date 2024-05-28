import { createSupplierInvoiceModel, CreateSupplierInvoiceModel } from '@/models/createSupplierInvoiceModel.ts'
import { default as Box } from '@mui/joy/Box'
import { useForm, Control } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { useCreateSupplierInvoice } from '@/services/transactions.ts'

export type CreateTransactionsSupplierInvoicesProps = {
  children: (control: Control<CreateSupplierInvoiceModel>) => ReactNode
}

export const CreateTransactionsSupplierInvoices = (props: CreateTransactionsSupplierInvoicesProps) => {
  const { control, handleSubmit } = useForm<CreateSupplierInvoiceModel>({
    resolver: zodResolver(createSupplierInvoiceModel),
  })

  const mutator = useCreateSupplierInvoice()

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
