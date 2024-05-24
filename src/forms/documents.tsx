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
import { useCreateDocument, useCreateSignedUrl } from '@/services/documents.ts'

export const createDocumentsBody = z.object({
  associatedType: z.string(),
  associatedId: z.string(),
  typeId: z.string(),
  name: z.string(),
  isPrivate: z.boolean().nullable().optional(),
  fileData: z.string().nullable().optional(),
  fileUrl: z.string().nullable().optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
export type CreateDocumentsBody = {
  associatedType: string
  associatedId: string
  typeId: string
  name: string
  isPrivate?: boolean | undefined | null
  fileData?: string | undefined | null
  fileUrl?: string | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreateDocumentsProps = { children: (control: Control<CreateDocumentsBody>) => ReactNode }
export const createDocumentsSignedUrlBody = z.object({ amount: z.number().int() })
export type CreateDocumentsSignedUrlBody = { amount: number }
export type CreateDocumentsSignedUrlProps = { children: (control: Control<CreateDocumentsSignedUrlBody>) => ReactNode }

export const CreateDocuments = (props: CreateDocumentsProps) => {
  const { control, handleSubmit } = useForm<CreateDocumentsBody>({
    resolver: zodResolver(createDocumentsBody),
  })

  const mutator = useCreateDocument()

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

type GetCreateDocumentsFieldArgs = {
  fieldName: FieldPath<CreateDocumentsBody>
  control: Control<CreateDocumentsBody>
  formConfig: FormConfig<CreateDocumentsBody>
}

export const getCreateDocumentsField = ({ fieldName, control, formConfig }: GetCreateDocumentsFieldArgs) => {
  return match(fieldName)
    .with('associatedType', () => {
      const { label, Input } = formConfig['associatedType']

      return (
        <Controller
          key="associatedType"
          name="associatedType"
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
    .with('associatedId', () => {
      const { label, Input } = formConfig['associatedId']

      return (
        <Controller
          key="associatedId"
          name="associatedId"
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
    .with('isPrivate', () => {
      const { label, Input } = formConfig['isPrivate']

      return (
        <Controller
          key="isPrivate"
          name="isPrivate"
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
    .with('fileData', () => {
      const { label, Input } = formConfig['fileData']

      return (
        <Controller
          key="fileData"
          name="fileData"
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
    .with('fileUrl', () => {
      const { label, Input } = formConfig['fileUrl']

      return (
        <Controller
          key="fileUrl"
          name="fileUrl"
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

export const CreateDocumentsSignedUrl = (props: CreateDocumentsSignedUrlProps) => {
  const { control, handleSubmit } = useForm<CreateDocumentsSignedUrlBody>({
    resolver: zodResolver(createDocumentsSignedUrlBody),
  })

  const mutator = useCreateSignedUrl()

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

type GetCreateDocumentsSignedUrlFieldArgs = {
  fieldName: FieldPath<CreateDocumentsSignedUrlBody>
  control: Control<CreateDocumentsSignedUrlBody>
  formConfig: FormConfig<CreateDocumentsSignedUrlBody>
}

export const getCreateDocumentsSignedUrlField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateDocumentsSignedUrlFieldArgs) => {
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
