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
import { useUpdateMetadataSchema, useCreateMetadataSchema } from '@/services/metadataschema.ts'

export const updateMetadataMetadataSchemaIdBody = z.object({ schema: z.string() })
export type UpdateMetadataMetadataSchemaIdBody = { schema: string }
export type UpdateMetadataMetadataSchemaIdProps = {
  id: string
  children: (control: Control<UpdateMetadataMetadataSchemaIdBody>) => ReactNode
}
export const createMetadataMetadataSchemaBody = z.object({ entityType: z.string(), schema: z.string() })
export type CreateMetadataMetadataSchemaBody = { entityType: string; schema: string }
export type CreateMetadataMetadataSchemaProps = {
  children: (control: Control<CreateMetadataMetadataSchemaBody>) => ReactNode
}

export const UpdateMetadataMetadataSchemaId = (props: UpdateMetadataMetadataSchemaIdProps) => {
  const { control, handleSubmit } = useForm<UpdateMetadataMetadataSchemaIdBody>({
    resolver: zodResolver(updateMetadataMetadataSchemaIdBody),
  })

  const mutator = useUpdateMetadataSchema()

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

type GetUpdateMetadataMetadataSchemaIdFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getUpdateMetadataMetadataSchemaIdField = ({
  fieldName,
  control,
  formConfig,
}: GetUpdateMetadataMetadataSchemaIdFieldArgs<UpdateMetadataMetadataSchemaIdBody>) => {
  return match(fieldName)
    .with('schema', () => {
      const { label, Input } = formConfig['schema']

      return (
        <Controller
          key="schema"
          name="schema"
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

export const CreateMetadataMetadataSchema = (props: CreateMetadataMetadataSchemaProps) => {
  const { control, handleSubmit } = useForm<CreateMetadataMetadataSchemaBody>({
    resolver: zodResolver(createMetadataMetadataSchemaBody),
  })

  const mutator = useCreateMetadataSchema()

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

type GetCreateMetadataMetadataSchemaFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getCreateMetadataMetadataSchemaField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateMetadataMetadataSchemaFieldArgs<CreateMetadataMetadataSchemaBody>) => {
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
    .with('schema', () => {
      const { label, Input } = formConfig['schema']

      return (
        <Controller
          key="schema"
          name="schema"
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
