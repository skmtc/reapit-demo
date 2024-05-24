import { z } from 'zod'
import { Controller, FieldPath, useForm, Control } from 'react-hook-form'
import { default as FormLabel } from '@mui/joy/FormLabel'
import { default as FormControl } from '@mui/joy/FormControl'
import { default as FormHelperText } from '@mui/joy/FormHelperText'
import { default as Box } from '@mui/joy/Box'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { ReactNode } from 'react'
import { FormConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useCreateIdentityCheck, useCreateIdentityCheckSignedUrl } from '@/services/identitychecks.ts'

export const createIdentityChecksBody = z.object({
  contactId: z.string(),
  checkDate: z.string(),
  status: z.string(),
  negotiatorId: z.string(),
  identityDocument1: z
    .object({
      typeId: z.string(),
      expiry: z.string().nullable().optional(),
      details: z.string().nullable().optional(),
      fileData: z.string().nullable().optional(),
      fileUrl: z.string().nullable().optional(),
      name: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  identityDocument2: z
    .object({
      typeId: z.string(),
      expiry: z.string().nullable().optional(),
      details: z.string().nullable().optional(),
      fileData: z.string().nullable().optional(),
      fileUrl: z.string().nullable().optional(),
      name: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
export type CreateIdentityChecksBody = {
  contactId: string
  checkDate: string
  status: string
  negotiatorId: string
  identityDocument1?:
    | {
        typeId: string
        expiry?: string | undefined | null
        details?: string | undefined | null
        fileData?: string | undefined | null
        fileUrl?: string | undefined | null
        name?: string | undefined | null
      }
    | undefined
    | null
  identityDocument2?:
    | {
        typeId: string
        expiry?: string | undefined | null
        details?: string | undefined | null
        fileData?: string | undefined | null
        fileUrl?: string | undefined | null
        name?: string | undefined | null
      }
    | undefined
    | null
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreateIdentityChecksProps = { children: (control: Control<CreateIdentityChecksBody>) => ReactNode }
export const createIdentityChecksSignedUrlBody = z.object({ amount: z.number().int() })
export type CreateIdentityChecksSignedUrlBody = { amount: number }
export type CreateIdentityChecksSignedUrlProps = {
  children: (control: Control<CreateIdentityChecksSignedUrlBody>) => ReactNode
}

export const CreateIdentityChecks = (props: CreateIdentityChecksProps) => {
  const { control, handleSubmit } = useForm<CreateIdentityChecksBody>({
    resolver: zodResolver(createIdentityChecksBody),
  })

  const mutator = useCreateIdentityCheck()

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

type GetCreateIdentityChecksFieldArgs = {
  fieldName: FieldPath<CreateIdentityChecksBody>
  control: Control<CreateIdentityChecksBody>
  formConfig: FormConfig<CreateIdentityChecksBody>
}

export const getCreateIdentityChecksField = ({ fieldName, control, formConfig }: GetCreateIdentityChecksFieldArgs) => {
  return match(fieldName)
    .with('contactId', () => {
      const { label, Input } = formConfig['contactId']

      return (
        <Controller
          key="contactId"
          name="contactId"
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
    .with('checkDate', () => {
      const { label, Input } = formConfig['checkDate']

      return (
        <Controller
          key="checkDate"
          name="checkDate"
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
    .with('identityDocument1', () => {
      const { label, Input } = formConfig['identityDocument1']

      return (
        <Controller
          key="identityDocument1"
          name="identityDocument1"
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
    .with('identityDocument2', () => {
      const { label, Input } = formConfig['identityDocument2']

      return (
        <Controller
          key="identityDocument2"
          name="identityDocument2"
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

export const CreateIdentityChecksSignedUrl = (props: CreateIdentityChecksSignedUrlProps) => {
  const { control, handleSubmit } = useForm<CreateIdentityChecksSignedUrlBody>({
    resolver: zodResolver(createIdentityChecksSignedUrlBody),
  })

  const mutator = useCreateIdentityCheckSignedUrl()

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

type GetCreateIdentityChecksSignedUrlFieldArgs = {
  fieldName: FieldPath<CreateIdentityChecksSignedUrlBody>
  control: Control<CreateIdentityChecksSignedUrlBody>
  formConfig: FormConfig<CreateIdentityChecksSignedUrlBody>
}

export const getCreateIdentityChecksSignedUrlField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateIdentityChecksSignedUrlFieldArgs) => {
  return match(fieldName)
    .with('amount', () => {
      const { label, Input } = formConfig['amount']

      return (
        <Controller
          key="amount"
          name="amount"
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
