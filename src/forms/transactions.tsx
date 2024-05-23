import { z } from 'zod'
import { Controller, FieldPath, useForm, Control, FieldValues } from 'react-hook-form'
import { default as FormLabel } from '@mui/joy/FormLabel'
import { default as FormControl } from '@mui/joy/FormControl'
import { default as FormHelperText } from '@mui/joy/FormHelperText'
import { default as Box } from '@mui/joy/Box'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { FormConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { usePostApiTransactionsSupplierInvoices } from '@/services/transactions.ts'

export const createTransactionsSupplierInvoicesBody = z.object({
  worksOrderId: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  companyId: z.string().nullable().optional(),
  tenancyId: z.string().nullable().optional(),
  description: z.string(),
  accountId: z.string(),
  invoiceRef: z.string(),
  negotiatorId: z.string(),
  invoiceDate: z.string(),
  dueDate: z.string().nullable().optional(),
  netAmount: z.number(),
  taxAmount: z.number(),
})
export type CreateTransactionsSupplierInvoicesBody = {
  worksOrderId?: string | undefined | null
  propertyId?: string | undefined | null
  companyId?: string | undefined | null
  tenancyId?: string | undefined | null
  description: string
  accountId: string
  invoiceRef: string
  negotiatorId: string
  invoiceDate: string
  dueDate?: string | undefined | null
  netAmount: number
  taxAmount: number
}
export type CreateTransactionsSupplierInvoicesProps = {
  children: (control: Control<CreateTransactionsSupplierInvoicesBody>) => ReactNode
}

export const CreateTransactionsSupplierInvoices = (props: CreateTransactionsSupplierInvoicesProps) => {
  const { control, handleSubmit } = useForm<CreateTransactionsSupplierInvoicesBody>({
    resolver: zodResolver(createTransactionsSupplierInvoicesBody),
  })

  const mutator = usePostApiTransactionsSupplierInvoices()

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

type GetCreateTransactionsSupplierInvoicesFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getCreateTransactionsSupplierInvoicesField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateTransactionsSupplierInvoicesFieldArgs<CreateTransactionsSupplierInvoicesBody>) => {
  return match(fieldName)
    .with('worksOrderId', () => {
      const { label, Input } = formConfig['worksOrderId']

      return (
        <Controller
          key="worksOrderId"
          name="worksOrderId"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('propertyId', () => {
      const { label, Input } = formConfig['propertyId']

      return (
        <Controller
          key="propertyId"
          name="propertyId"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('companyId', () => {
      const { label, Input } = formConfig['companyId']

      return (
        <Controller
          key="companyId"
          name="companyId"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('tenancyId', () => {
      const { label, Input } = formConfig['tenancyId']

      return (
        <Controller
          key="tenancyId"
          name="tenancyId"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('description', () => {
      const { label, Input } = formConfig['description']

      return (
        <Controller
          key="description"
          name="description"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('accountId', () => {
      const { label, Input } = formConfig['accountId']

      return (
        <Controller
          key="accountId"
          name="accountId"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('invoiceRef', () => {
      const { label, Input } = formConfig['invoiceRef']

      return (
        <Controller
          key="invoiceRef"
          name="invoiceRef"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('negotiatorId', () => {
      const { label, Input } = formConfig['negotiatorId']

      return (
        <Controller
          key="negotiatorId"
          name="negotiatorId"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('invoiceDate', () => {
      const { label, Input } = formConfig['invoiceDate']

      return (
        <Controller
          key="invoiceDate"
          name="invoiceDate"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('dueDate', () => {
      const { label, Input } = formConfig['dueDate']

      return (
        <Controller
          key="dueDate"
          name="dueDate"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('netAmount', () => {
      const { label, Input } = formConfig['netAmount']

      return (
        <Controller
          key="netAmount"
          name="netAmount"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .with('taxAmount', () => {
      const { label, Input } = formConfig['taxAmount']

      return (
        <Controller
          key="taxAmount"
          name="taxAmount"
          control={control}
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error?.message)}>
              <FormLabel>{label}</FormLabel>
              <Input {...field} />
              {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
            </FormControl>
          )}
        />
      )
    })
    .otherwise(() => {
      throw new Error(`Unknown field: '${fieldName}' `)
    })
}
