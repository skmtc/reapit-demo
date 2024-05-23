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
import { useCreateAppointment, useCreateOpenHouseAttendee } from '@/services/appointments.ts'

export const createAppointmentsBody = z.object({
  start: z.string(),
  end: z.string(),
  followUpOn: z.string().nullable().optional(),
  typeId: z.string(),
  description: z.string().nullable().optional(),
  organiserId: z.string().nullable().optional(),
  negotiatorIds: z.array(z.string()).nullable().optional(),
  officeIds: z.array(z.string()).nullable().optional(),
  attendee: z
    .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
    .nullable()
    .optional(),
  propertyId: z.string().nullable().optional(),
  otherAgentId: z.string().nullable().optional(),
  accompanied: z.boolean().nullable().optional(),
  negotiatorConfirmed: z.boolean().nullable().optional(),
  attendeeConfirmed: z.boolean().nullable().optional(),
  propertyConfirmed: z.boolean().nullable().optional(),
  virtual: z.boolean().nullable().optional(),
  isRepeat: z.boolean().nullable().optional(),
  attended: z.string().nullable().optional(),
  recurrence: z
    .object({
      interval: z.number().int().nullable().optional(),
      type: z.string().nullable().optional(),
      until: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  documents: z
    .object({
      draftPropertyInspectionReportId: z.string().nullable().optional(),
      finalPropertyInspectionReportId: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
export type CreateAppointmentsBody = {
  start: string
  end: string
  followUpOn?: string | undefined | null
  typeId: string
  description?: string | undefined | null
  organiserId?: string | undefined | null
  negotiatorIds?: Array<string> | undefined | null
  officeIds?: Array<string> | undefined | null
  attendee?: { id?: string | undefined | null; type?: string | undefined | null } | undefined | null
  propertyId?: string | undefined | null
  otherAgentId?: string | undefined | null
  accompanied?: boolean | undefined | null
  negotiatorConfirmed?: boolean | undefined | null
  attendeeConfirmed?: boolean | undefined | null
  propertyConfirmed?: boolean | undefined | null
  virtual?: boolean | undefined | null
  isRepeat?: boolean | undefined | null
  attended?: string | undefined | null
  recurrence?:
    | { interval?: number | undefined | null; type?: string | undefined | null; until?: string | undefined | null }
    | undefined
    | null
  documents?:
    | {
        draftPropertyInspectionReportId?: string | undefined | null
        finalPropertyInspectionReportId?: string | undefined | null
      }
    | undefined
    | null
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreateAppointmentsProps = { children: (control: Control<CreateAppointmentsBody>) => ReactNode }
export const createAppointmentsIdOpenHouseAttendeesBody = z.object({
  interestLevel: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
  attendee: z
    .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
    .nullable()
    .optional(),
})
export type CreateAppointmentsIdOpenHouseAttendeesBody = {
  interestLevel?: string | undefined | null
  notes?: string | undefined | null
  attendee?: { id?: string | undefined | null; type?: string | undefined | null } | undefined | null
}
export type CreateAppointmentsIdOpenHouseAttendeesProps = {
  id: string
  children: (control: Control<CreateAppointmentsIdOpenHouseAttendeesBody>) => ReactNode
}

export const CreateAppointments = (props: CreateAppointmentsProps) => {
  const { control, handleSubmit } = useForm<CreateAppointmentsBody>({
    resolver: zodResolver(createAppointmentsBody),
  })

  const mutator = useCreateAppointment()

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

type GetCreateAppointmentsFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getCreateAppointmentsField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateAppointmentsFieldArgs<CreateAppointmentsBody>) => {
  return match(fieldName)
    .with('start', () => {
      const { label, Input } = formConfig['start']

      return (
        <Controller
          key="start"
          name="start"
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
    .with('end', () => {
      const { label, Input } = formConfig['end']

      return (
        <Controller
          key="end"
          name="end"
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
    .with('followUpOn', () => {
      const { label, Input } = formConfig['followUpOn']

      return (
        <Controller
          key="followUpOn"
          name="followUpOn"
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
    .with('organiserId', () => {
      const { label, Input } = formConfig['organiserId']

      return (
        <Controller
          key="organiserId"
          name="organiserId"
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
    .with('negotiatorIds', () => {
      const { label, Input } = formConfig['negotiatorIds']

      return (
        <Controller
          key="negotiatorIds"
          name="negotiatorIds"
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
    .with('officeIds', () => {
      const { label, Input } = formConfig['officeIds']

      return (
        <Controller
          key="officeIds"
          name="officeIds"
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
    .with('attendee', () => {
      const { label, Input } = formConfig['attendee']

      return (
        <Controller
          key="attendee"
          name="attendee"
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
    .with('otherAgentId', () => {
      const { label, Input } = formConfig['otherAgentId']

      return (
        <Controller
          key="otherAgentId"
          name="otherAgentId"
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
    .with('accompanied', () => {
      const { label, Input } = formConfig['accompanied']

      return (
        <Controller
          key="accompanied"
          name="accompanied"
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
    .with('negotiatorConfirmed', () => {
      const { label, Input } = formConfig['negotiatorConfirmed']

      return (
        <Controller
          key="negotiatorConfirmed"
          name="negotiatorConfirmed"
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
    .with('attendeeConfirmed', () => {
      const { label, Input } = formConfig['attendeeConfirmed']

      return (
        <Controller
          key="attendeeConfirmed"
          name="attendeeConfirmed"
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
    .with('propertyConfirmed', () => {
      const { label, Input } = formConfig['propertyConfirmed']

      return (
        <Controller
          key="propertyConfirmed"
          name="propertyConfirmed"
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
    .with('virtual', () => {
      const { label, Input } = formConfig['virtual']

      return (
        <Controller
          key="virtual"
          name="virtual"
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
    .with('isRepeat', () => {
      const { label, Input } = formConfig['isRepeat']

      return (
        <Controller
          key="isRepeat"
          name="isRepeat"
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
    .with('attended', () => {
      const { label, Input } = formConfig['attended']

      return (
        <Controller
          key="attended"
          name="attended"
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
    .with('recurrence', () => {
      const { label, Input } = formConfig['recurrence']

      return (
        <Controller
          key="recurrence"
          name="recurrence"
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
    .with('documents', () => {
      const { label, Input } = formConfig['documents']

      return (
        <Controller
          key="documents"
          name="documents"
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

export const CreateAppointmentsIdOpenHouseAttendees = (props: CreateAppointmentsIdOpenHouseAttendeesProps) => {
  const { control, handleSubmit } = useForm<CreateAppointmentsIdOpenHouseAttendeesBody>({
    resolver: zodResolver(createAppointmentsIdOpenHouseAttendeesBody),
  })

  const mutator = useCreateOpenHouseAttendee()

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

type GetCreateAppointmentsIdOpenHouseAttendeesFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getCreateAppointmentsIdOpenHouseAttendeesField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateAppointmentsIdOpenHouseAttendeesFieldArgs<CreateAppointmentsIdOpenHouseAttendeesBody>) => {
  return match(fieldName)
    .with('interestLevel', () => {
      const { label, Input } = formConfig['interestLevel']

      return (
        <Controller
          key="interestLevel"
          name="interestLevel"
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
    .with('notes', () => {
      const { label, Input } = formConfig['notes']

      return (
        <Controller
          key="notes"
          name="notes"
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
    .with('attendee', () => {
      const { label, Input } = formConfig['attendee']

      return (
        <Controller
          key="attendee"
          name="attendee"
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
