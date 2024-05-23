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
import { useCreateEnquiry } from '@/services/enquiries.ts'

export const createEnquiriesBody = z.object({
  title: z.string(),
  forename: z.string(),
  surname: z.string(),
  position: z.string().nullable().optional(),
  enquiryType: z.string(),
  message: z.string(),
  officeId: z.string(),
  marketingConsent: z.string(),
  sourceName: z.string(),
  homePhone: z.string().nullable().optional(),
  workPhone: z.string().nullable().optional(),
  mobilePhone: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  address: z
    .object({
      buildingName: z.string().nullable().optional(),
      buildingNumber: z.string().nullable().optional(),
      line1: z.string().nullable().optional(),
      line2: z.string().nullable().optional(),
      line3: z.string().nullable().optional(),
      line4: z.string().nullable().optional(),
      postcode: z.string().nullable().optional(),
      countryId: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  buying: z
    .object({ priceFrom: z.number().int().nullable().optional(), priceTo: z.number().int().nullable().optional() })
    .nullable()
    .optional(),
  renting: z
    .object({
      rentFrom: z.number().int().nullable().optional(),
      rentTo: z.number().int().nullable().optional(),
      rentFrequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  bedrooms: z.number().int().nullable().optional(),
  propertyIds: z.array(z.string()).nullable().optional(),
})
export type CreateEnquiriesBody = {
  title: string
  forename: string
  surname: string
  position?: string | undefined | null
  enquiryType: string
  message: string
  officeId: string
  marketingConsent: string
  sourceName: string
  homePhone?: string | undefined | null
  workPhone?: string | undefined | null
  mobilePhone?: string | undefined | null
  email?: string | undefined | null
  address?:
    | {
        buildingName?: string | undefined | null
        buildingNumber?: string | undefined | null
        line1?: string | undefined | null
        line2?: string | undefined | null
        line3?: string | undefined | null
        line4?: string | undefined | null
        postcode?: string | undefined | null
        countryId?: string | undefined | null
      }
    | undefined
    | null
  buying?: { priceFrom?: number | undefined | null; priceTo?: number | undefined | null } | undefined | null
  renting?:
    | {
        rentFrom?: number | undefined | null
        rentTo?: number | undefined | null
        rentFrequency?: string | undefined | null
      }
    | undefined
    | null
  bedrooms?: number | undefined | null
  propertyIds?: Array<string> | undefined | null
}
export type CreateEnquiriesProps = { children: (control: Control<CreateEnquiriesBody>) => ReactNode }

export const CreateEnquiries = (props: CreateEnquiriesProps) => {
  const { control, handleSubmit } = useForm<CreateEnquiriesBody>({
    resolver: zodResolver(createEnquiriesBody),
  })

  const mutator = useCreateEnquiry()

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

type GetCreateEnquiriesFieldArgs<Model extends FieldValues> = {
  fieldName: FieldPath<Model>
  control: Control<Model>
  formConfig: FormConfig<Model>
}

export const getCreateEnquiriesField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateEnquiriesFieldArgs<CreateEnquiriesBody>) => {
  return match(fieldName)
    .with('title', () => {
      const { label, Input } = formConfig['title']

      return (
        <Controller
          key="title"
          name="title"
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
    .with('forename', () => {
      const { label, Input } = formConfig['forename']

      return (
        <Controller
          key="forename"
          name="forename"
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
    .with('surname', () => {
      const { label, Input } = formConfig['surname']

      return (
        <Controller
          key="surname"
          name="surname"
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
    .with('position', () => {
      const { label, Input } = formConfig['position']

      return (
        <Controller
          key="position"
          name="position"
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
    .with('enquiryType', () => {
      const { label, Input } = formConfig['enquiryType']

      return (
        <Controller
          key="enquiryType"
          name="enquiryType"
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
    .with('message', () => {
      const { label, Input } = formConfig['message']

      return (
        <Controller
          key="message"
          name="message"
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
    .with('marketingConsent', () => {
      const { label, Input } = formConfig['marketingConsent']

      return (
        <Controller
          key="marketingConsent"
          name="marketingConsent"
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
    .with('sourceName', () => {
      const { label, Input } = formConfig['sourceName']

      return (
        <Controller
          key="sourceName"
          name="sourceName"
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
    .with('homePhone', () => {
      const { label, Input } = formConfig['homePhone']

      return (
        <Controller
          key="homePhone"
          name="homePhone"
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
    .with('workPhone', () => {
      const { label, Input } = formConfig['workPhone']

      return (
        <Controller
          key="workPhone"
          name="workPhone"
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
    .with('mobilePhone', () => {
      const { label, Input } = formConfig['mobilePhone']

      return (
        <Controller
          key="mobilePhone"
          name="mobilePhone"
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
    .with('email', () => {
      const { label, Input } = formConfig['email']

      return (
        <Controller
          key="email"
          name="email"
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
    .with('address', () => {
      const { label, Input } = formConfig['address']

      return (
        <Controller
          key="address"
          name="address"
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
    .with('buying', () => {
      const { label, Input } = formConfig['buying']

      return (
        <Controller
          key="buying"
          name="buying"
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
    .with('renting', () => {
      const { label, Input } = formConfig['renting']

      return (
        <Controller
          key="renting"
          name="renting"
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
    .with('bedrooms', () => {
      const { label, Input } = formConfig['bedrooms']

      return (
        <Controller
          key="bedrooms"
          name="bedrooms"
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
    .with('propertyIds', () => {
      const { label, Input } = formConfig['propertyIds']

      return (
        <Controller
          key="propertyIds"
          name="propertyIds"
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
