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
import { useCreateVendorRelationship } from '@/services/vendors.ts'

export const createVendorsIdRelationshipsBody = z.object({
  associatedId: z.string(),
  associatedType: z.string(),
  isMain: z.boolean(),
})
export type CreateVendorsIdRelationshipsBody = { associatedId: string; associatedType: string; isMain: boolean }
export type CreateVendorsIdRelationshipsProps = {
  id: string
  children: (control: Control<CreateVendorsIdRelationshipsBody>) => ReactNode
}

export const CreateVendorsIdRelationships = (props: CreateVendorsIdRelationshipsProps) => {
  const { control, handleSubmit } = useForm<CreateVendorsIdRelationshipsBody>({
    resolver: zodResolver(createVendorsIdRelationshipsBody),
  })

  const mutator = useCreateVendorRelationship()

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

type GetCreateVendorsIdRelationshipsFieldArgs = {
  fieldName: FieldPath<CreateVendorsIdRelationshipsBody>
  control: Control<CreateVendorsIdRelationshipsBody>
  formConfig: FormConfig<CreateVendorsIdRelationshipsBody>
}

export const getCreateVendorsIdRelationshipsField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateVendorsIdRelationshipsFieldArgs) => {
  return match(fieldName)
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
    .with('isMain', () => {
      const { label, Input } = formConfig['isMain']

      return (
        <Controller
          key="isMain"
          name="isMain"
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
