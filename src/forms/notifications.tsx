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
import { usePostApiNotifications } from '@/services/notifications.ts'

export const createNotificationsBody = z.object({
  type: z.string().nullable().optional(),
  subType: z.string().nullable().optional(),
  products: z.array(z.string()).nullable().optional(),
  targets: z
    .object({ negotiatorId: z.array(z.string()).nullable().optional() })
    .nullable()
    .optional(),
  payload: z.object({}).nullable().optional(),
})
export type CreateNotificationsBody = {
  type?: string | undefined | null
  subType?: string | undefined | null
  products?: Array<string> | undefined | null
  targets?: { negotiatorId?: Array<string> | undefined | null } | undefined | null
  payload?: Record<string, never> | undefined | null
}
export type CreateNotificationsProps = { children: (control: Control<CreateNotificationsBody>) => ReactNode }

export const CreateNotifications = (props: CreateNotificationsProps) => {
  const { control, handleSubmit } = useForm<CreateNotificationsBody>({
    resolver: zodResolver(createNotificationsBody),
  })

  const mutator = usePostApiNotifications()

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

type GetCreateNotificationsFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getCreateNotificationsField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateNotificationsFieldArgs<CreateNotificationsBody>) => {
  return match(fieldName)
    .with('type', () => {
      const { label, Input } = formConfig['type']

      return (
        <Controller
          key="type"
          name="type"
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
    .with('subType', () => {
      const { label, Input } = formConfig['subType']

      return (
        <Controller
          key="subType"
          name="subType"
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
    .with('products', () => {
      const { label, Input } = formConfig['products']

      return (
        <Controller
          key="products"
          name="products"
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
    .with('targets', () => {
      const { label, Input } = formConfig['targets']

      return (
        <Controller
          key="targets"
          name="targets"
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
    .with('payload', () => {
      const { label, Input } = formConfig['payload']

      return (
        <Controller
          key="payload"
          name="payload"
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
