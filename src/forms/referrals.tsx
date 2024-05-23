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
import { usePostApiReferrals } from '@/services/referrals.ts'

export const createReferralsBody = z.object({
  referralTypeId: z.string(),
  negotiatorId: z.string().nullable().optional(),
  propertyId: z.string().nullable().optional(),
  applicantId: z.string().nullable().optional(),
  contactId: z.string(),
  amount: z.number().nullable().optional(),
})
export type CreateReferralsBody = {
  referralTypeId: string
  negotiatorId?: string | undefined | null
  propertyId?: string | undefined | null
  applicantId?: string | undefined | null
  contactId: string
  amount?: number | undefined | null
}
export type CreateReferralsProps = { children: (control: Control<CreateReferralsBody>) => ReactNode }

export const CreateReferrals = (props: CreateReferralsProps) => {
  const { control, handleSubmit } = useForm<CreateReferralsBody>({
    resolver: zodResolver(createReferralsBody),
  })

  const mutator = usePostApiReferrals()

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

type GetCreateReferralsFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getCreateReferralsField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateReferralsFieldArgs<CreateReferralsBody>) => {
  return match(fieldName)
    .with('referralTypeId', () => {
      const { label, Input } = formConfig['referralTypeId']

      return (
        <Controller
          key="referralTypeId"
          name="referralTypeId"
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
