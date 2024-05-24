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
import { useCreateTask } from '@/services/tasks.ts'

export const createTasksBody = z.object({
  activates: z.string().nullable().optional(),
  completed: z.string().nullable().optional(),
  typeId: z.string().nullable().optional(),
  senderId: z.string(),
  text: z.string(),
  landlordId: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  applicantId: z.string().nullable().optional(),
  tenancyId: z.string().nullable().optional(),
  contactId: z.string().nullable().optional(),
  recipientId: z.string(),
  recipientType: z.string(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
export type CreateTasksBody = {
  activates?: string | undefined | null
  completed?: string | undefined | null
  typeId?: string | undefined | null
  senderId: string
  text: string
  landlordId?: string | undefined | null
  propertyId?: string | undefined | null
  applicantId?: string | undefined | null
  tenancyId?: string | undefined | null
  contactId?: string | undefined | null
  recipientId: string
  recipientType: string
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreateTasksProps = { children: (control: Control<CreateTasksBody>) => ReactNode }

export const CreateTasks = (props: CreateTasksProps) => {
  const { control, handleSubmit } = useForm<CreateTasksBody>({
    resolver: zodResolver(createTasksBody),
  })

  const mutator = useCreateTask()

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

type GetCreateTasksFieldArgs = {
  fieldName: FieldPath<CreateTasksBody>
  control: Control<CreateTasksBody>
  formConfig: FormConfig<CreateTasksBody>
}

export const getCreateTasksField = ({ fieldName, control, formConfig }: GetCreateTasksFieldArgs) => {
  return match(fieldName)
    .with('activates', () => {
      const { label, Input } = formConfig['activates']

      return (
        <Controller
          key="activates"
          name="activates"
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
    .with('completed', () => {
      const { label, Input } = formConfig['completed']

      return (
        <Controller
          key="completed"
          name="completed"
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
    .with('senderId', () => {
      const { label, Input } = formConfig['senderId']

      return (
        <Controller
          key="senderId"
          name="senderId"
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
    .with('text', () => {
      const { label, Input } = formConfig['text']

      return (
        <Controller
          key="text"
          name="text"
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
    .with('landlordId', () => {
      const { label, Input } = formConfig['landlordId']

      return (
        <Controller
          key="landlordId"
          name="landlordId"
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
    .with('applicantId', () => {
      const { label, Input } = formConfig['applicantId']

      return (
        <Controller
          key="applicantId"
          name="applicantId"
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
    .with('tenancyId', () => {
      const { label, Input } = formConfig['tenancyId']

      return (
        <Controller
          key="tenancyId"
          name="tenancyId"
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
    .with('recipientId', () => {
      const { label, Input } = formConfig['recipientId']

      return (
        <Controller
          key="recipientId"
          name="recipientId"
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
    .with('recipientType', () => {
      const { label, Input } = formConfig['recipientType']

      return (
        <Controller
          key="recipientType"
          name="recipientType"
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
