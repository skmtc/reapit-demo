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
import { useCreateApplicant, useCreateApplicantRelationship } from '@/services/applicants.ts'

export const createApplicantsBody = z.object({
  marketingMode: z.string(),
  currency: z.string().nullable().optional(),
  active: z.boolean().nullable().optional(),
  notes: z.string().nullable().optional(),
  statusId: z.string().nullable().optional(),
  sellingStatus: z.string().nullable().optional(),
  sellingPosition: z.string().nullable().optional(),
  lastCall: z.string().nullable().optional(),
  nextCall: z.string().nullable().optional(),
  departmentId: z.string(),
  solicitorId: z.string().nullable().optional(),
  potentialClient: z.boolean().nullable().optional(),
  type: z.array(z.string()).nullable().optional(),
  style: z.array(z.string()).nullable().optional(),
  situation: z.array(z.string()).nullable().optional(),
  parking: z.array(z.string()).nullable().optional(),
  age: z.array(z.string()).nullable().optional(),
  locality: z.array(z.string()).nullable().optional(),
  specialFeatures: z.array(z.string()).nullable().optional(),
  bedroomsMin: z.number().int().nullable().optional(),
  bedroomsMax: z.number().int().nullable().optional(),
  receptionsMin: z.number().int().nullable().optional(),
  receptionsMax: z.number().int().nullable().optional(),
  bathroomsMin: z.number().int().nullable().optional(),
  bathroomsMax: z.number().int().nullable().optional(),
  parkingSpacesMin: z.number().int().nullable().optional(),
  parkingSpacesMax: z.number().int().nullable().optional(),
  locationType: z.string().nullable().optional(),
  locationOptions: z.array(z.string()).nullable().optional(),
  buying: z
    .object({
      reasonId: z.string().nullable().optional(),
      positionId: z.string().nullable().optional(),
      priceFrom: z.number().int().nullable().optional(),
      priceTo: z.number().int().nullable().optional(),
      decoration: z.array(z.string()).nullable().optional(),
      tenure: z.array(z.string()).nullable().optional(),
      mortgageExpiry: z.string().nullable().optional(),
      leaseRemaining: z
        .object({ min: z.number().int().nullable().optional(), max: z.number().int().nullable().optional() })
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
  renting: z
    .object({
      moveDate: z.string().nullable().optional(),
      term: z.string().nullable().optional(),
      rentFrom: z.number().nullable().optional(),
      rentTo: z.number().nullable().optional(),
      rentFrequency: z.string().nullable().optional(),
      furnishing: z.array(z.string()).nullable().optional(),
      positionId: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  externalArea: z
    .object({
      type: z.string().nullable().optional(),
      amountFrom: z.number().nullable().optional(),
      amountTo: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  internalArea: z
    .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
    .nullable()
    .optional(),
  source: z
    .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
    .nullable()
    .optional(),
  regional: z
    .object({
      ggy: z
        .object({ market: z.array(z.string()).nullable().optional() })
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
  officeIds: z.array(z.string()),
  negotiatorIds: z.array(z.string()),
  related: z.array(z.object({ associatedId: z.string(), associatedType: z.string().nullable().optional() })),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
export type CreateApplicantsBody = {
  marketingMode: string
  currency?: string | undefined | null
  active?: boolean | undefined | null
  notes?: string | undefined | null
  statusId?: string | undefined | null
  sellingStatus?: string | undefined | null
  sellingPosition?: string | undefined | null
  lastCall?: string | undefined | null
  nextCall?: string | undefined | null
  departmentId: string
  solicitorId?: string | undefined | null
  potentialClient?: boolean | undefined | null
  type?: Array<string> | undefined | null
  style?: Array<string> | undefined | null
  situation?: Array<string> | undefined | null
  parking?: Array<string> | undefined | null
  age?: Array<string> | undefined | null
  locality?: Array<string> | undefined | null
  specialFeatures?: Array<string> | undefined | null
  bedroomsMin?: number | undefined | null
  bedroomsMax?: number | undefined | null
  receptionsMin?: number | undefined | null
  receptionsMax?: number | undefined | null
  bathroomsMin?: number | undefined | null
  bathroomsMax?: number | undefined | null
  parkingSpacesMin?: number | undefined | null
  parkingSpacesMax?: number | undefined | null
  locationType?: string | undefined | null
  locationOptions?: Array<string> | undefined | null
  buying?:
    | {
        reasonId?: string | undefined | null
        positionId?: string | undefined | null
        priceFrom?: number | undefined | null
        priceTo?: number | undefined | null
        decoration?: Array<string> | undefined | null
        tenure?: Array<string> | undefined | null
        mortgageExpiry?: string | undefined | null
        leaseRemaining?: { min?: number | undefined | null; max?: number | undefined | null } | undefined | null
      }
    | undefined
    | null
  renting?:
    | {
        moveDate?: string | undefined | null
        term?: string | undefined | null
        rentFrom?: number | undefined | null
        rentTo?: number | undefined | null
        rentFrequency?: string | undefined | null
        furnishing?: Array<string> | undefined | null
        positionId?: string | undefined | null
      }
    | undefined
    | null
  externalArea?:
    | { type?: string | undefined | null; amountFrom?: number | undefined | null; amountTo?: number | undefined | null }
    | undefined
    | null
  internalArea?: { type?: string | undefined | null; amount?: number | undefined | null } | undefined | null
  source?: { id?: string | undefined | null; type?: string | undefined | null } | undefined | null
  regional?: { ggy?: { market?: Array<string> | undefined | null } | undefined | null } | undefined | null
  officeIds: Array<string>
  negotiatorIds: Array<string>
  related: Array<{ associatedId: string; associatedType?: string | undefined | null }>
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreateApplicantsProps = { children: (control: Control<CreateApplicantsBody>) => ReactNode }
export const createApplicantsIdRelationshipsBody = z.object({
  associatedId: z.string().nullable().optional(),
  associatedType: z.string().nullable().optional(),
  isMain: z.boolean().nullable().optional(),
})
export type CreateApplicantsIdRelationshipsBody = {
  associatedId?: string | undefined | null
  associatedType?: string | undefined | null
  isMain?: boolean | undefined | null
}
export type CreateApplicantsIdRelationshipsProps = {
  id: string
  children: (control: Control<CreateApplicantsIdRelationshipsBody>) => ReactNode
}

export const CreateApplicants = (props: CreateApplicantsProps) => {
  const { control, handleSubmit } = useForm<CreateApplicantsBody>({
    resolver: zodResolver(createApplicantsBody),
  })

  const mutator = useCreateApplicant()

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

type GetCreateApplicantsFieldArgs = {
  fieldName: FieldPath<CreateApplicantsBody>
  control: Control<CreateApplicantsBody>
  formConfig: FormConfig<CreateApplicantsBody>
}

export const getCreateApplicantsField = ({ fieldName, control, formConfig }: GetCreateApplicantsFieldArgs) => {
  return match(fieldName)
    .with('marketingMode', () => {
      const { label, Input } = formConfig['marketingMode']

      return (
        <Controller
          key="marketingMode"
          name="marketingMode"
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
    .with('currency', () => {
      const { label, Input } = formConfig['currency']

      return (
        <Controller
          key="currency"
          name="currency"
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
    .with('statusId', () => {
      const { label, Input } = formConfig['statusId']

      return (
        <Controller
          key="statusId"
          name="statusId"
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
    .with('sellingStatus', () => {
      const { label, Input } = formConfig['sellingStatus']

      return (
        <Controller
          key="sellingStatus"
          name="sellingStatus"
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
    .with('sellingPosition', () => {
      const { label, Input } = formConfig['sellingPosition']

      return (
        <Controller
          key="sellingPosition"
          name="sellingPosition"
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
    .with('lastCall', () => {
      const { label, Input } = formConfig['lastCall']

      return (
        <Controller
          key="lastCall"
          name="lastCall"
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
    .with('nextCall', () => {
      const { label, Input } = formConfig['nextCall']

      return (
        <Controller
          key="nextCall"
          name="nextCall"
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
    .with('departmentId', () => {
      const { label, Input } = formConfig['departmentId']

      return (
        <Controller
          key="departmentId"
          name="departmentId"
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
    .with('potentialClient', () => {
      const { label, Input } = formConfig['potentialClient']

      return (
        <Controller
          key="potentialClient"
          name="potentialClient"
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
    .with('type', () => {
      const { label, Input } = formConfig['type']

      return (
        <Controller
          key="type"
          name="type"
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
    .with('style', () => {
      const { label, Input } = formConfig['style']

      return (
        <Controller
          key="style"
          name="style"
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
    .with('situation', () => {
      const { label, Input } = formConfig['situation']

      return (
        <Controller
          key="situation"
          name="situation"
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
    .with('parking', () => {
      const { label, Input } = formConfig['parking']

      return (
        <Controller
          key="parking"
          name="parking"
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
    .with('age', () => {
      const { label, Input } = formConfig['age']

      return (
        <Controller
          key="age"
          name="age"
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
    .with('locality', () => {
      const { label, Input } = formConfig['locality']

      return (
        <Controller
          key="locality"
          name="locality"
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
    .with('specialFeatures', () => {
      const { label, Input } = formConfig['specialFeatures']

      return (
        <Controller
          key="specialFeatures"
          name="specialFeatures"
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
    .with('bedroomsMin', () => {
      const { label, Input } = formConfig['bedroomsMin']

      return (
        <Controller
          key="bedroomsMin"
          name="bedroomsMin"
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
    .with('bedroomsMax', () => {
      const { label, Input } = formConfig['bedroomsMax']

      return (
        <Controller
          key="bedroomsMax"
          name="bedroomsMax"
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
    .with('receptionsMin', () => {
      const { label, Input } = formConfig['receptionsMin']

      return (
        <Controller
          key="receptionsMin"
          name="receptionsMin"
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
    .with('receptionsMax', () => {
      const { label, Input } = formConfig['receptionsMax']

      return (
        <Controller
          key="receptionsMax"
          name="receptionsMax"
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
    .with('bathroomsMin', () => {
      const { label, Input } = formConfig['bathroomsMin']

      return (
        <Controller
          key="bathroomsMin"
          name="bathroomsMin"
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
    .with('bathroomsMax', () => {
      const { label, Input } = formConfig['bathroomsMax']

      return (
        <Controller
          key="bathroomsMax"
          name="bathroomsMax"
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
    .with('parkingSpacesMin', () => {
      const { label, Input } = formConfig['parkingSpacesMin']

      return (
        <Controller
          key="parkingSpacesMin"
          name="parkingSpacesMin"
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
    .with('parkingSpacesMax', () => {
      const { label, Input } = formConfig['parkingSpacesMax']

      return (
        <Controller
          key="parkingSpacesMax"
          name="parkingSpacesMax"
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
    .with('locationType', () => {
      const { label, Input } = formConfig['locationType']

      return (
        <Controller
          key="locationType"
          name="locationType"
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
    .with('locationOptions', () => {
      const { label, Input } = formConfig['locationOptions']

      return (
        <Controller
          key="locationOptions"
          name="locationOptions"
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
    .with('externalArea', () => {
      const { label, Input } = formConfig['externalArea']

      return (
        <Controller
          key="externalArea"
          name="externalArea"
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
    .with('internalArea', () => {
      const { label, Input } = formConfig['internalArea']

      return (
        <Controller
          key="internalArea"
          name="internalArea"
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
    .with('regional', () => {
      const { label, Input } = formConfig['regional']

      return (
        <Controller
          key="regional"
          name="regional"
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

export const CreateApplicantsIdRelationships = (props: CreateApplicantsIdRelationshipsProps) => {
  const { control, handleSubmit } = useForm<CreateApplicantsIdRelationshipsBody>({
    resolver: zodResolver(createApplicantsIdRelationshipsBody),
  })

  const mutator = useCreateApplicantRelationship()

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

type GetCreateApplicantsIdRelationshipsFieldArgs = {
  fieldName: FieldPath<CreateApplicantsIdRelationshipsBody>
  control: Control<CreateApplicantsIdRelationshipsBody>
  formConfig: FormConfig<CreateApplicantsIdRelationshipsBody>
}

export const getCreateApplicantsIdRelationshipsField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateApplicantsIdRelationshipsFieldArgs) => {
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
