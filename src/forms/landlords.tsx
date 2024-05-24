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
import { useCreateLandlord, useCreateLandlordRelationship } from '@/services/landlords.ts'

export const createLandlordsBody = z.object({
  active: z.boolean().nullable().optional(),
  solicitorId: z.string().nullable().optional(),
  officeId: z.string(),
  source: z
    .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
    .nullable()
    .optional(),
  related: z.array(
    z.object({ associatedId: z.string().nullable().optional(), associatedType: z.string().nullable().optional() }),
  ),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
export type CreateLandlordsBody = {
  active?: boolean | undefined | null
  solicitorId?: string | undefined | null
  officeId: string
  source?: { id?: string | undefined | null; type?: string | undefined | null } | undefined | null
  related: Array<{ associatedId?: string | undefined | null; associatedType?: string | undefined | null }>
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreateLandlordsProps = { children: (control: Control<CreateLandlordsBody>) => ReactNode }
export const createLandlordsIdRelationshipsBody = z.object({
  associatedId: z.string(),
  associatedType: z.string(),
  isMain: z.boolean(),
})
export type CreateLandlordsIdRelationshipsBody = { associatedId: string; associatedType: string; isMain: boolean }
export type CreateLandlordsIdRelationshipsProps = {
  id: string
  children: (control: Control<CreateLandlordsIdRelationshipsBody>) => ReactNode
}

export const CreateLandlords = (props: CreateLandlordsProps) => {
  const { control, handleSubmit } = useForm<CreateLandlordsBody>({
    resolver: zodResolver(createLandlordsBody),
  })

  const mutator = useCreateLandlord()

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

type GetCreateLandlordsFieldArgs = {
  fieldName: FieldPath<CreateLandlordsBody>
  control: Control<CreateLandlordsBody>
  formConfig: FormConfig<CreateLandlordsBody>
}

export const getCreateLandlordsField = ({ fieldName, control, formConfig }: GetCreateLandlordsFieldArgs) => {
  return match(fieldName)
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
    .with('solicitorId', () => {
      const { label, Input } = formConfig['solicitorId']

      return (
        <Controller
          key="solicitorId"
          name="solicitorId"
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
    .with('source', () => {
      const { label, Input } = formConfig['source']

      return (
        <Controller
          key="source"
          name="source"
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
    .with('related', () => {
      const { label, Input } = formConfig['related']

      return (
        <Controller
          key="related"
          name="related"
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

export const CreateLandlordsIdRelationships = (props: CreateLandlordsIdRelationshipsProps) => {
  const { control, handleSubmit } = useForm<CreateLandlordsIdRelationshipsBody>({
    resolver: zodResolver(createLandlordsIdRelationshipsBody),
  })

  const mutator = useCreateLandlordRelationship()

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

type GetCreateLandlordsIdRelationshipsFieldArgs = {
  fieldName: FieldPath<CreateLandlordsIdRelationshipsBody>
  control: Control<CreateLandlordsIdRelationshipsBody>
  formConfig: FormConfig<CreateLandlordsIdRelationshipsBody>
}

export const getCreateLandlordsIdRelationshipsField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateLandlordsIdRelationshipsFieldArgs) => {
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
