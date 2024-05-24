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
import { useCreateResthook, useUpdateResthook } from '@/services/resthooks.ts'

export const createResthooksBody = z.object({
  url: z.string(),
  description: z.string().nullable().optional(),
  topicIds: z.array(z.string()).nullable().optional(),
  active: z.boolean().nullable().optional(),
  ignoreEtagOnlyChanges: z.boolean().nullable().optional(),
})
export type CreateResthooksBody = {
  url: string
  description?: string | undefined | null
  topicIds?: Array<string> | undefined | null
  active?: boolean | undefined | null
  ignoreEtagOnlyChanges?: boolean | undefined | null
}
export type CreateResthooksProps = { children: (control: Control<CreateResthooksBody>) => ReactNode }
export const updateResthooksIdBody = z.object({
  url: z.string(),
  description: z.string().nullable().optional(),
  topicIds: z.array(z.string()).nullable().optional(),
  active: z.boolean().nullable().optional(),
  ignoreEtagOnlyChanges: z.boolean().nullable().optional(),
})
export type UpdateResthooksIdBody = {
  url: string
  description?: string | undefined | null
  topicIds?: Array<string> | undefined | null
  active?: boolean | undefined | null
  ignoreEtagOnlyChanges?: boolean | undefined | null
}
export type UpdateResthooksIdProps = { id: string; children: (control: Control<UpdateResthooksIdBody>) => ReactNode }

export const CreateResthooks = (props: CreateResthooksProps) => {
  const { control, handleSubmit } = useForm<CreateResthooksBody>({
    resolver: zodResolver(createResthooksBody),
  })

  const mutator = useCreateResthook()

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

type GetCreateResthooksFieldArgs = {
  fieldName: FieldPath<CreateResthooksBody>
  control: Control<CreateResthooksBody>
  formConfig: FormConfig<CreateResthooksBody>
}

export const getCreateResthooksField = ({ fieldName, control, formConfig }: GetCreateResthooksFieldArgs) => {
  return match(fieldName)
    .with('url', () => {
      const { label, Input } = formConfig['url']

      return (
        <Controller
          key="url"
          name="url"
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
    .with('topicIds', () => {
      const { label, Input } = formConfig['topicIds']

      return (
        <Controller
          key="topicIds"
          name="topicIds"
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
    .with('ignoreEtagOnlyChanges', () => {
      const { label, Input } = formConfig['ignoreEtagOnlyChanges']

      return (
        <Controller
          key="ignoreEtagOnlyChanges"
          name="ignoreEtagOnlyChanges"
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

export const UpdateResthooksId = (props: UpdateResthooksIdProps) => {
  const { control, handleSubmit } = useForm<UpdateResthooksIdBody>({
    resolver: zodResolver(updateResthooksIdBody),
  })

  const mutator = useUpdateResthook()

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

type GetUpdateResthooksIdFieldArgs = {
  fieldName: FieldPath<UpdateResthooksIdBody>
  control: Control<UpdateResthooksIdBody>
  formConfig: FormConfig<UpdateResthooksIdBody>
}

export const getUpdateResthooksIdField = ({ fieldName, control, formConfig }: GetUpdateResthooksIdFieldArgs) => {
  return match(fieldName)
    .with('url', () => {
      const { label, Input } = formConfig['url']

      return (
        <Controller
          key="url"
          name="url"
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
    .with('topicIds', () => {
      const { label, Input } = formConfig['topicIds']

      return (
        <Controller
          key="topicIds"
          name="topicIds"
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
    .with('ignoreEtagOnlyChanges', () => {
      const { label, Input } = formConfig['ignoreEtagOnlyChanges']

      return (
        <Controller
          key="ignoreEtagOnlyChanges"
          name="ignoreEtagOnlyChanges"
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
