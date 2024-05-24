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
import { useCreateNegotiator } from '@/services/negotiators.ts'

export const createNegotiatorsBody = z.object({
  name: z.string(),
  jobTitle: z.string().nullable().optional(),
  active: z.boolean().nullable().optional(),
  officeId: z.string(),
  workPhone: z.string().nullable().optional(),
  mobilePhone: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  diaryNegotiatorIds: z.array(z.string()).nullable().optional(),
  diaryOfficeIds: z.array(z.string()).nullable().optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
export type CreateNegotiatorsBody = {
  name: string
  jobTitle?: string | undefined | null
  active?: boolean | undefined | null
  officeId: string
  workPhone?: string | undefined | null
  mobilePhone?: string | undefined | null
  email?: string | undefined | null
  diaryNegotiatorIds?: Array<string> | undefined | null
  diaryOfficeIds?: Array<string> | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreateNegotiatorsProps = { children: (control: Control<CreateNegotiatorsBody>) => ReactNode }

export const CreateNegotiators = (props: CreateNegotiatorsProps) => {
  const { control, handleSubmit } = useForm<CreateNegotiatorsBody>({
    resolver: zodResolver(createNegotiatorsBody),
  })

  const mutator = useCreateNegotiator()

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

type GetCreateNegotiatorsFieldArgs = {
  fieldName: FieldPath<CreateNegotiatorsBody>
  control: Control<CreateNegotiatorsBody>
  formConfig: FormConfig<CreateNegotiatorsBody>
}

export const getCreateNegotiatorsField = ({ fieldName, control, formConfig }: GetCreateNegotiatorsFieldArgs) => {
  return match(fieldName)
    .with('name', () => {
      const { label, Input } = formConfig['name']

      return (
        <Controller
          key="name"
          name="name"
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
    .with('jobTitle', () => {
      const { label, Input } = formConfig['jobTitle']

      return (
        <Controller
          key="jobTitle"
          name="jobTitle"
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
    .with('active', () => {
      const { label, Input } = formConfig['active']

      return (
        <Controller
          key="active"
          name="active"
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
    .with('officeId', () => {
      const { label, Input } = formConfig['officeId']

      return (
        <Controller
          key="officeId"
          name="officeId"
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
    .with('workPhone', () => {
      const { label, Input } = formConfig['workPhone']

      return (
        <Controller
          key="workPhone"
          name="workPhone"
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
    .with('mobilePhone', () => {
      const { label, Input } = formConfig['mobilePhone']

      return (
        <Controller
          key="mobilePhone"
          name="mobilePhone"
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
    .with('email', () => {
      const { label, Input } = formConfig['email']

      return (
        <Controller
          key="email"
          name="email"
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
    .with('diaryNegotiatorIds', () => {
      const { label, Input } = formConfig['diaryNegotiatorIds']

      return (
        <Controller
          key="diaryNegotiatorIds"
          name="diaryNegotiatorIds"
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
    .with('diaryOfficeIds', () => {
      const { label, Input } = formConfig['diaryOfficeIds']

      return (
        <Controller
          key="diaryOfficeIds"
          name="diaryOfficeIds"
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
