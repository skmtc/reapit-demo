import {
  CreateSupplierInvoiceModel,
  createSupplierInvoiceModel,
} from '@/schemas/createSupplierInvoiceModel.generated.tsx'
import { useCreateApiTransactionsSupplierInvoices } from '@/services/Transactions.generated.ts'
import { FormLayout, Button } from '@reapit/elements'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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

  const mutator = useCreateApiTransactionsSupplierInvoices()

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
