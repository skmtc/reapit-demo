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
import { usePostApiJournalEntries, usePostApiJournalEntriesBulk } from '@/services/journalentries.ts'

export const createJournalEntriesBody = z.object({
  typeId: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  associatedType: z.string().nullable().optional(),
  associatedId: z.string().nullable().optional(),
  description: z.string(),
  negotiatorId: z.string().nullable().optional(),
})
export type CreateJournalEntriesBody = {
  typeId?: string | undefined | null
  propertyId?: string | undefined | null
  associatedType?: string | undefined | null
  associatedId?: string | undefined | null
  description: string
  negotiatorId?: string | undefined | null
}
export type CreateJournalEntriesProps = { children: (control: Control<CreateJournalEntriesBody>) => ReactNode }
export const createJournalEntriesBulkBody = z.object({
  createJournalEntry: z
    .array(
      z.object({
        typeId: z.string().nullable().optional(),
        propertyId: z.string().nullable().optional(),
        associatedType: z.string().nullable().optional(),
        associatedId: z.string().nullable().optional(),
        description: z.string(),
        negotiatorId: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
})
export type CreateJournalEntriesBulkBody = {
  createJournalEntry?:
    | Array<{
        typeId?: string | undefined | null
        propertyId?: string | undefined | null
        associatedType?: string | undefined | null
        associatedId?: string | undefined | null
        description: string
        negotiatorId?: string | undefined | null
      }>
    | undefined
    | null
}
export type CreateJournalEntriesBulkProps = { children: (control: Control<CreateJournalEntriesBulkBody>) => ReactNode }

export const CreateJournalEntries = (props: CreateJournalEntriesProps) => {
  const { control, handleSubmit } = useForm<CreateJournalEntriesBody>({
    resolver: zodResolver(createJournalEntriesBody),
  })

  const mutator = usePostApiJournalEntries()

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

type GetCreateJournalEntriesFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getCreateJournalEntriesField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateJournalEntriesFieldArgs<CreateJournalEntriesBody>) => {
  return match(fieldName)
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
    .otherwise(() => {
      throw new Error(`Unknown field: '${fieldName}' `)
    })
}

export const CreateJournalEntriesBulk = (props: CreateJournalEntriesBulkProps) => {
  const { control, handleSubmit } = useForm<CreateJournalEntriesBulkBody>({
    resolver: zodResolver(createJournalEntriesBulkBody),
  })

  const mutator = usePostApiJournalEntriesBulk()

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

type GetCreateJournalEntriesBulkFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getCreateJournalEntriesBulkField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateJournalEntriesBulkFieldArgs<CreateJournalEntriesBulkBody>) => {
  return match(fieldName)
    .with('createJournalEntry', () => {
      const { label, Input } = formConfig['createJournalEntry']

      return (
        <Controller
          key="createJournalEntry"
          name="createJournalEntry"
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
