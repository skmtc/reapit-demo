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
import { usePostApiWorksOrders, usePostApiWorksOrdersIdItems } from '@/services/worksorders.ts'

export const createWorksOrdersBody = z.object({
  companyId: z.string().nullable().optional(),
  propertyId: z.string(),
  tenancyId: z.string().nullable().optional(),
  negotiatorId: z.string(),
  typeId: z.string().nullable().optional(),
  status: z.string(),
  description: z.string(),
  reporter: z.string(),
  priority: z.string().nullable().optional(),
  booked: z.string().nullable().optional(),
  required: z.string().nullable().optional(),
  completed: z.string().nullable().optional(),
  items: z.array(
    z.object({
      notes: z.string(),
      chargeTo: z.string(),
      estimate: z.number().nullable().optional(),
      estimateType: z.string().nullable().optional(),
      netAmount: z.number().nullable().optional(),
      vatAmount: z.number().nullable().optional(),
      reserveAmount: z.number().nullable().optional(),
    }),
  ),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
export type CreateWorksOrdersBody = {
  companyId?: string | undefined | null
  propertyId: string
  tenancyId?: string | undefined | null
  negotiatorId: string
  typeId?: string | undefined | null
  status: string
  description: string
  reporter: string
  priority?: string | undefined | null
  booked?: string | undefined | null
  required?: string | undefined | null
  completed?: string | undefined | null
  items: Array<{
    notes: string
    chargeTo: string
    estimate?: number | undefined | null
    estimateType?: string | undefined | null
    netAmount?: number | undefined | null
    vatAmount?: number | undefined | null
    reserveAmount?: number | undefined | null
  }>
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreateWorksOrdersProps = { children: (control: Control<CreateWorksOrdersBody>) => ReactNode }
export const createWorksOrdersIdItemsBody = z.object({
  notes: z.string(),
  chargeTo: z.string(),
  estimate: z.number().nullable().optional(),
  estimateType: z.string().nullable().optional(),
  netAmount: z.number().nullable().optional(),
  vatAmount: z.number().nullable().optional(),
  reserveAmount: z.number().nullable().optional(),
})
export type CreateWorksOrdersIdItemsBody = {
  notes: string
  chargeTo: string
  estimate?: number | undefined | null
  estimateType?: string | undefined | null
  netAmount?: number | undefined | null
  vatAmount?: number | undefined | null
  reserveAmount?: number | undefined | null
}
export type CreateWorksOrdersIdItemsProps = {
  id: string
  children: (control: Control<CreateWorksOrdersIdItemsBody>) => ReactNode
}

export const CreateWorksOrders = (props: CreateWorksOrdersProps) => {
  const { control, handleSubmit } = useForm<CreateWorksOrdersBody>({
    resolver: zodResolver(createWorksOrdersBody),
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

type GetCreateWorksOrdersFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getCreateWorksOrdersField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateWorksOrdersFieldArgs<CreateWorksOrdersBody>) => {
  return match(fieldName)
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
    .with('typeId', () => {
      const { label, Input } = formConfig['typeId']

      return (
        <Controller
          key="typeId"
          name="typeId"
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
    .with('status', () => {
      const { label, Input } = formConfig['status']

      return (
        <Controller
          key="status"
          name="status"
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
    .with('reporter', () => {
      const { label, Input } = formConfig['reporter']

      return (
        <Controller
          key="reporter"
          name="reporter"
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
    .with('priority', () => {
      const { label, Input } = formConfig['priority']

      return (
        <Controller
          key="priority"
          name="priority"
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
    .with('booked', () => {
      const { label, Input } = formConfig['booked']

      return (
        <Controller
          key="booked"
          name="booked"
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
    .with('required', () => {
      const { label, Input } = formConfig['required']

      return (
        <Controller
          key="required"
          name="required"
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
    .with('completed', () => {
      const { label, Input } = formConfig['completed']

      return (
        <Controller
          key="completed"
          name="completed"
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
    .with('items', () => {
      const { label, Input } = formConfig['items']

      return (
        <Controller
          key="items"
          name="items"
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
    .with('metadata', () => {
      const { label, Input } = formConfig['metadata']

      return (
        <Controller
          key="metadata"
          name="metadata"
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

export const CreateWorksOrdersIdItems = (props: CreateWorksOrdersIdItemsProps) => {
  const { control, handleSubmit } = useForm<CreateWorksOrdersIdItemsBody>({
    resolver: zodResolver(createWorksOrdersIdItemsBody),
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

type GetCreateWorksOrdersIdItemsFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getCreateWorksOrdersIdItemsField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateWorksOrdersIdItemsFieldArgs<CreateWorksOrdersIdItemsBody>) => {
  return match(fieldName)
    .with('notes', () => {
      const { label, Input } = formConfig['notes']

      return (
        <Controller
          key="notes"
          name="notes"
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
    .with('chargeTo', () => {
      const { label, Input } = formConfig['chargeTo']

      return (
        <Controller
          key="chargeTo"
          name="chargeTo"
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
    .with('estimate', () => {
      const { label, Input } = formConfig['estimate']

      return (
        <Controller
          key="estimate"
          name="estimate"
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
    .with('estimateType', () => {
      const { label, Input } = formConfig['estimateType']

      return (
        <Controller
          key="estimateType"
          name="estimateType"
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
    .with('vatAmount', () => {
      const { label, Input } = formConfig['vatAmount']

      return (
        <Controller
          key="vatAmount"
          name="vatAmount"
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
    .with('reserveAmount', () => {
      const { label, Input } = formConfig['reserveAmount']

      return (
        <Controller
          key="reserveAmount"
          name="reserveAmount"
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
