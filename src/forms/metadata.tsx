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
import { usePostApiMetadata, usePutApiMetadataId } from '@/services/metadata.ts'

export const createMetadataBody = z.object({
  entityType: z.string(),
  entityId: z.string().nullable().optional(),
  metadata: z.string(),
})
export type CreateMetadataBody = { entityType: string; entityId?: string | undefined | null; metadata: string }
export type CreateMetadataProps = { children: (control: Control<CreateMetadataBody>) => ReactNode }
export const updateMetadataIdBody = z.object({ metadata: z.string() })
export type UpdateMetadataIdBody = { metadata: string }
export type UpdateMetadataIdProps = { id: string; children: (control: Control<UpdateMetadataIdBody>) => ReactNode }

export const CreateMetadata = (props: CreateMetadataProps) => {
  const { control, handleSubmit } = useForm<CreateMetadataBody>({
    resolver: zodResolver(createMetadataBody),
  })

  const mutator = usePostApiMetadata()

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

type GetCreateMetadataFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getCreateMetadataField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateMetadataFieldArgs<CreateMetadataBody>) => {
  return match(fieldName)
    .with('entityType', () => {
      const { label, Input } = formConfig['entityType']

      return (
        <Controller
          key="entityType"
          name="entityType"
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
    .with('entityId', () => {
      const { label, Input } = formConfig['entityId']

      return (
        <Controller
          key="entityId"
          name="entityId"
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

export const UpdateMetadataId = (props: UpdateMetadataIdProps) => {
  const { control, handleSubmit } = useForm<UpdateMetadataIdBody>({
    resolver: zodResolver(updateMetadataIdBody),
  })

  const mutator = usePutApiMetadataId()

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

type GetUpdateMetadataIdFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getUpdateMetadataIdField = ({
  fieldName,
  control,
  formConfig,
}: GetUpdateMetadataIdFieldArgs<UpdateMetadataIdBody>) => {
  return match(fieldName)
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
