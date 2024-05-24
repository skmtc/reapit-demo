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
import {
  useCreateTenancy,
  useCreateTenancyCheck,
  useCreateTenancyBreakClause,
  useCreateTenancyAllowance,
  useCreateTenancyResponsibility,
  useCreateTenancyRenewalNegotiation,
  useCreateTenancyRenewalNegotiationCheck,
} from '@/services/tenancies.ts'

export const createTenanciesBody = z.object({
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  agentRole: z.string(),
  rent: z.number(),
  rentFrequency: z.string(),
  rentInstalmentsFrequency: z.string().nullable().optional(),
  rentInstalmentsAmount: z.number().nullable().optional(),
  rentInstalmentsStart: z.string().nullable().optional(),
  meterReadingGas: z.string().nullable().optional(),
  meterReadingGasLastRead: z.string().nullable().optional(),
  meterReadingElectricity: z.string().nullable().optional(),
  meterReadingElectricityLastRead: z.string().nullable().optional(),
  meterReadingWater: z.string().nullable().optional(),
  meterReadingWaterLastRead: z.string().nullable().optional(),
  isPeriodic: z.boolean().nullable().optional(),
  typeId: z.string(),
  negotiatorId: z.string(),
  propertyId: z.string(),
  applicantId: z.string(),
  feeNotes: z.string().nullable().optional(),
  lettingFee: z
    .object({
      type: z.string().nullable().optional(),
      amount: z.number().nullable().optional(),
      frequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  managementFee: z
    .object({
      type: z.string().nullable().optional(),
      amount: z.number().nullable().optional(),
      frequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  deposit: z
    .object({
      heldBy: z.string().nullable().optional(),
      period: z.number().int().nullable().optional(),
      type: z.string().nullable().optional(),
      sum: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  source: z
    .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
    .nullable()
    .optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
export type CreateTenanciesBody = {
  startDate?: string | undefined | null
  endDate?: string | undefined | null
  status?: string | undefined | null
  agentRole: string
  rent: number
  rentFrequency: string
  rentInstalmentsFrequency?: string | undefined | null
  rentInstalmentsAmount?: number | undefined | null
  rentInstalmentsStart?: string | undefined | null
  meterReadingGas?: string | undefined | null
  meterReadingGasLastRead?: string | undefined | null
  meterReadingElectricity?: string | undefined | null
  meterReadingElectricityLastRead?: string | undefined | null
  meterReadingWater?: string | undefined | null
  meterReadingWaterLastRead?: string | undefined | null
  isPeriodic?: boolean | undefined | null
  typeId: string
  negotiatorId: string
  propertyId: string
  applicantId: string
  feeNotes?: string | undefined | null
  lettingFee?:
    | { type?: string | undefined | null; amount?: number | undefined | null; frequency?: string | undefined | null }
    | undefined
    | null
  managementFee?:
    | { type?: string | undefined | null; amount?: number | undefined | null; frequency?: string | undefined | null }
    | undefined
    | null
  deposit?:
    | {
        heldBy?: string | undefined | null
        period?: number | undefined | null
        type?: string | undefined | null
        sum?: number | undefined | null
      }
    | undefined
    | null
  source?: { id?: string | undefined | null; type?: string | undefined | null } | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreateTenanciesProps = { children: (control: Control<CreateTenanciesBody>) => ReactNode }
export const createTenanciesIdChecksBody = z.object({
  description: z.string().nullable().optional(),
  type: z.string(),
  status: z.string(),
  checkTypeId: z.string().nullable().optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
export type CreateTenanciesIdChecksBody = {
  description?: string | undefined | null
  type: string
  status: string
  checkTypeId?: string | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreateTenanciesIdChecksProps = {
  id: string
  children: (control: Control<CreateTenanciesIdChecksBody>) => ReactNode
}
export const createTenanciesIdBreakClausesBody = z.object({
  typeId: z.string().nullable().optional(),
  active: z.string().nullable().optional(),
  appliesTo: z.string().nullable().optional(),
  agreements: z
    .object({ landlord: z.boolean().nullable().optional(), tenant: z.boolean().nullable().optional() })
    .nullable()
    .optional(),
  breakFrom: z
    .object({ date: z.string().nullable().optional(), minTermMonths: z.number().int().nullable().optional() })
    .nullable()
    .optional(),
  noticeRequired: z
    .object({ date: z.string().nullable().optional(), beforeBreakMonths: z.number().int().nullable().optional() })
    .nullable()
    .optional(),
})
export type CreateTenanciesIdBreakClausesBody = {
  typeId?: string | undefined | null
  active?: string | undefined | null
  appliesTo?: string | undefined | null
  agreements?: { landlord?: boolean | undefined | null; tenant?: boolean | undefined | null } | undefined | null
  breakFrom?: { date?: string | undefined | null; minTermMonths?: number | undefined | null } | undefined | null
  noticeRequired?:
    | { date?: string | undefined | null; beforeBreakMonths?: number | undefined | null }
    | undefined
    | null
}
export type CreateTenanciesIdBreakClausesProps = {
  id: string
  children: (control: Control<CreateTenanciesIdBreakClausesBody>) => ReactNode
}
export const createTenanciesIdAllowancesBody = z.object({
  typeId: z.string().nullable().optional(),
  state: z.string().nullable().optional(),
  agreements: z
    .object({ landlord: z.boolean().nullable().optional(), tenant: z.boolean().nullable().optional() })
    .nullable()
    .optional(),
})
export type CreateTenanciesIdAllowancesBody = {
  typeId?: string | undefined | null
  state?: string | undefined | null
  agreements?: { landlord?: boolean | undefined | null; tenant?: boolean | undefined | null } | undefined | null
}
export type CreateTenanciesIdAllowancesProps = {
  id: string
  children: (control: Control<CreateTenanciesIdAllowancesBody>) => ReactNode
}
export const createTenanciesIdResponsibilitiesBody = z.object({
  typeId: z.string().nullable().optional(),
  appliesTo: z.string().nullable().optional(),
  agreements: z
    .object({ landlord: z.boolean().nullable().optional(), tenant: z.boolean().nullable().optional() })
    .nullable()
    .optional(),
})
export type CreateTenanciesIdResponsibilitiesBody = {
  typeId?: string | undefined | null
  appliesTo?: string | undefined | null
  agreements?: { landlord?: boolean | undefined | null; tenant?: boolean | undefined | null } | undefined | null
}
export type CreateTenanciesIdResponsibilitiesProps = {
  id: string
  children: (control: Control<CreateTenanciesIdResponsibilitiesBody>) => ReactNode
}
export const createTenanciesIdRenewalNegotiationsBody = z.object({
  startDate: z.string().nullable().optional(),
  endDate: z.string().nullable().optional(),
  negotiatorId: z.string().nullable().optional(),
  rent: z.number().nullable().optional(),
  rentFrequency: z.string().nullable().optional(),
  lettingFee: z
    .object({
      type: z.string().nullable().optional(),
      amount: z.number().nullable().optional(),
      frequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  managementFee: z
    .object({
      type: z.string().nullable().optional(),
      amount: z.number().nullable().optional(),
      frequency: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
})
export type CreateTenanciesIdRenewalNegotiationsBody = {
  startDate?: string | undefined | null
  endDate?: string | undefined | null
  negotiatorId?: string | undefined | null
  rent?: number | undefined | null
  rentFrequency?: string | undefined | null
  lettingFee?:
    | { type?: string | undefined | null; amount?: number | undefined | null; frequency?: string | undefined | null }
    | undefined
    | null
  managementFee?:
    | { type?: string | undefined | null; amount?: number | undefined | null; frequency?: string | undefined | null }
    | undefined
    | null
}
export type CreateTenanciesIdRenewalNegotiationsProps = {
  id: string
  children: (control: Control<CreateTenanciesIdRenewalNegotiationsBody>) => ReactNode
}
export const createTenanciesIdRenewalNegotiationsRenewalIdChecksBody = z.object({
  status: z.string(),
  checkTypeId: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
export type CreateTenanciesIdRenewalNegotiationsRenewalIdChecksBody = {
  status: string
  checkTypeId?: string | undefined | null
  description?: string | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreateTenanciesIdRenewalNegotiationsRenewalIdChecksProps = {
  id: string
  renewalId: string
  children: (control: Control<CreateTenanciesIdRenewalNegotiationsRenewalIdChecksBody>) => ReactNode
}

export const CreateTenancies = (props: CreateTenanciesProps) => {
  const { control, handleSubmit } = useForm<CreateTenanciesBody>({
    resolver: zodResolver(createTenanciesBody),
  })

  const mutator = useCreateTenancy()

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

type GetCreateTenanciesFieldArgs = {
  fieldName: FieldPath<CreateTenanciesBody>
  control: Control<CreateTenanciesBody>
  formConfig: FormConfig<CreateTenanciesBody>
}

export const getCreateTenanciesField = ({ fieldName, control, formConfig }: GetCreateTenanciesFieldArgs) => {
  return match(fieldName)
    .with('startDate', () => {
      const { label, Input } = formConfig['startDate']

      return (
        <Controller
          key="startDate"
          name="startDate"
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
    .with('endDate', () => {
      const { label, Input } = formConfig['endDate']

      return (
        <Controller
          key="endDate"
          name="endDate"
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
    .with('status', () => {
      const { label, Input } = formConfig['status']

      return (
        <Controller
          key="status"
          name="status"
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
    .with('agentRole', () => {
      const { label, Input } = formConfig['agentRole']

      return (
        <Controller
          key="agentRole"
          name="agentRole"
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
    .with('rent', () => {
      const { label, Input } = formConfig['rent']

      return (
        <Controller
          key="rent"
          name="rent"
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
    .with('rentFrequency', () => {
      const { label, Input } = formConfig['rentFrequency']

      return (
        <Controller
          key="rentFrequency"
          name="rentFrequency"
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
    .with('rentInstalmentsFrequency', () => {
      const { label, Input } = formConfig['rentInstalmentsFrequency']

      return (
        <Controller
          key="rentInstalmentsFrequency"
          name="rentInstalmentsFrequency"
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
    .with('rentInstalmentsAmount', () => {
      const { label, Input } = formConfig['rentInstalmentsAmount']

      return (
        <Controller
          key="rentInstalmentsAmount"
          name="rentInstalmentsAmount"
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
    .with('rentInstalmentsStart', () => {
      const { label, Input } = formConfig['rentInstalmentsStart']

      return (
        <Controller
          key="rentInstalmentsStart"
          name="rentInstalmentsStart"
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
    .with('meterReadingGas', () => {
      const { label, Input } = formConfig['meterReadingGas']

      return (
        <Controller
          key="meterReadingGas"
          name="meterReadingGas"
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
    .with('meterReadingGasLastRead', () => {
      const { label, Input } = formConfig['meterReadingGasLastRead']

      return (
        <Controller
          key="meterReadingGasLastRead"
          name="meterReadingGasLastRead"
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
    .with('meterReadingElectricity', () => {
      const { label, Input } = formConfig['meterReadingElectricity']

      return (
        <Controller
          key="meterReadingElectricity"
          name="meterReadingElectricity"
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
    .with('meterReadingElectricityLastRead', () => {
      const { label, Input } = formConfig['meterReadingElectricityLastRead']

      return (
        <Controller
          key="meterReadingElectricityLastRead"
          name="meterReadingElectricityLastRead"
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
    .with('meterReadingWater', () => {
      const { label, Input } = formConfig['meterReadingWater']

      return (
        <Controller
          key="meterReadingWater"
          name="meterReadingWater"
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
    .with('meterReadingWaterLastRead', () => {
      const { label, Input } = formConfig['meterReadingWaterLastRead']

      return (
        <Controller
          key="meterReadingWaterLastRead"
          name="meterReadingWaterLastRead"
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
    .with('isPeriodic', () => {
      const { label, Input } = formConfig['isPeriodic']

      return (
        <Controller
          key="isPeriodic"
          name="isPeriodic"
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
    .with('feeNotes', () => {
      const { label, Input } = formConfig['feeNotes']

      return (
        <Controller
          key="feeNotes"
          name="feeNotes"
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
    .with('lettingFee', () => {
      const { label, Input } = formConfig['lettingFee']

      return (
        <Controller
          key="lettingFee"
          name="lettingFee"
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
    .with('managementFee', () => {
      const { label, Input } = formConfig['managementFee']

      return (
        <Controller
          key="managementFee"
          name="managementFee"
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
    .with('deposit', () => {
      const { label, Input } = formConfig['deposit']

      return (
        <Controller
          key="deposit"
          name="deposit"
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

export const CreateTenanciesIdChecks = (props: CreateTenanciesIdChecksProps) => {
  const { control, handleSubmit } = useForm<CreateTenanciesIdChecksBody>({
    resolver: zodResolver(createTenanciesIdChecksBody),
  })

  const mutator = useCreateTenancyCheck()

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

type GetCreateTenanciesIdChecksFieldArgs = {
  fieldName: FieldPath<CreateTenanciesIdChecksBody>
  control: Control<CreateTenanciesIdChecksBody>
  formConfig: FormConfig<CreateTenanciesIdChecksBody>
}

export const getCreateTenanciesIdChecksField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateTenanciesIdChecksFieldArgs) => {
  return match(fieldName)
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
    .with('status', () => {
      const { label, Input } = formConfig['status']

      return (
        <Controller
          key="status"
          name="status"
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
    .with('checkTypeId', () => {
      const { label, Input } = formConfig['checkTypeId']

      return (
        <Controller
          key="checkTypeId"
          name="checkTypeId"
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

export const CreateTenanciesIdBreakClauses = (props: CreateTenanciesIdBreakClausesProps) => {
  const { control, handleSubmit } = useForm<CreateTenanciesIdBreakClausesBody>({
    resolver: zodResolver(createTenanciesIdBreakClausesBody),
  })

  const mutator = useCreateTenancyBreakClause()

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

type GetCreateTenanciesIdBreakClausesFieldArgs = {
  fieldName: FieldPath<CreateTenanciesIdBreakClausesBody>
  control: Control<CreateTenanciesIdBreakClausesBody>
  formConfig: FormConfig<CreateTenanciesIdBreakClausesBody>
}

export const getCreateTenanciesIdBreakClausesField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateTenanciesIdBreakClausesFieldArgs) => {
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
    .with('appliesTo', () => {
      const { label, Input } = formConfig['appliesTo']

      return (
        <Controller
          key="appliesTo"
          name="appliesTo"
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
    .with('agreements', () => {
      const { label, Input } = formConfig['agreements']

      return (
        <Controller
          key="agreements"
          name="agreements"
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
    .with('breakFrom', () => {
      const { label, Input } = formConfig['breakFrom']

      return (
        <Controller
          key="breakFrom"
          name="breakFrom"
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
    .with('noticeRequired', () => {
      const { label, Input } = formConfig['noticeRequired']

      return (
        <Controller
          key="noticeRequired"
          name="noticeRequired"
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

export const CreateTenanciesIdAllowances = (props: CreateTenanciesIdAllowancesProps) => {
  const { control, handleSubmit } = useForm<CreateTenanciesIdAllowancesBody>({
    resolver: zodResolver(createTenanciesIdAllowancesBody),
  })

  const mutator = useCreateTenancyAllowance()

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

type GetCreateTenanciesIdAllowancesFieldArgs = {
  fieldName: FieldPath<CreateTenanciesIdAllowancesBody>
  control: Control<CreateTenanciesIdAllowancesBody>
  formConfig: FormConfig<CreateTenanciesIdAllowancesBody>
}

export const getCreateTenanciesIdAllowancesField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateTenanciesIdAllowancesFieldArgs) => {
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
    .with('state', () => {
      const { label, Input } = formConfig['state']

      return (
        <Controller
          key="state"
          name="state"
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
    .with('agreements', () => {
      const { label, Input } = formConfig['agreements']

      return (
        <Controller
          key="agreements"
          name="agreements"
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

export const CreateTenanciesIdResponsibilities = (props: CreateTenanciesIdResponsibilitiesProps) => {
  const { control, handleSubmit } = useForm<CreateTenanciesIdResponsibilitiesBody>({
    resolver: zodResolver(createTenanciesIdResponsibilitiesBody),
  })

  const mutator = useCreateTenancyResponsibility()

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

type GetCreateTenanciesIdResponsibilitiesFieldArgs = {
  fieldName: FieldPath<CreateTenanciesIdResponsibilitiesBody>
  control: Control<CreateTenanciesIdResponsibilitiesBody>
  formConfig: FormConfig<CreateTenanciesIdResponsibilitiesBody>
}

export const getCreateTenanciesIdResponsibilitiesField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateTenanciesIdResponsibilitiesFieldArgs) => {
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
    .with('appliesTo', () => {
      const { label, Input } = formConfig['appliesTo']

      return (
        <Controller
          key="appliesTo"
          name="appliesTo"
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
    .with('agreements', () => {
      const { label, Input } = formConfig['agreements']

      return (
        <Controller
          key="agreements"
          name="agreements"
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

export const CreateTenanciesIdRenewalNegotiations = (props: CreateTenanciesIdRenewalNegotiationsProps) => {
  const { control, handleSubmit } = useForm<CreateTenanciesIdRenewalNegotiationsBody>({
    resolver: zodResolver(createTenanciesIdRenewalNegotiationsBody),
  })

  const mutator = useCreateTenancyRenewalNegotiation()

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

type GetCreateTenanciesIdRenewalNegotiationsFieldArgs = {
  fieldName: FieldPath<CreateTenanciesIdRenewalNegotiationsBody>
  control: Control<CreateTenanciesIdRenewalNegotiationsBody>
  formConfig: FormConfig<CreateTenanciesIdRenewalNegotiationsBody>
}

export const getCreateTenanciesIdRenewalNegotiationsField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateTenanciesIdRenewalNegotiationsFieldArgs) => {
  return match(fieldName)
    .with('startDate', () => {
      const { label, Input } = formConfig['startDate']

      return (
        <Controller
          key="startDate"
          name="startDate"
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
    .with('endDate', () => {
      const { label, Input } = formConfig['endDate']

      return (
        <Controller
          key="endDate"
          name="endDate"
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
    .with('rent', () => {
      const { label, Input } = formConfig['rent']

      return (
        <Controller
          key="rent"
          name="rent"
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
    .with('rentFrequency', () => {
      const { label, Input } = formConfig['rentFrequency']

      return (
        <Controller
          key="rentFrequency"
          name="rentFrequency"
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
    .with('lettingFee', () => {
      const { label, Input } = formConfig['lettingFee']

      return (
        <Controller
          key="lettingFee"
          name="lettingFee"
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
    .with('managementFee', () => {
      const { label, Input } = formConfig['managementFee']

      return (
        <Controller
          key="managementFee"
          name="managementFee"
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

export const CreateTenanciesIdRenewalNegotiationsRenewalIdChecks = (
  props: CreateTenanciesIdRenewalNegotiationsRenewalIdChecksProps,
) => {
  const { control, handleSubmit } = useForm<CreateTenanciesIdRenewalNegotiationsRenewalIdChecksBody>({
    resolver: zodResolver(createTenanciesIdRenewalNegotiationsRenewalIdChecksBody),
  })

  const mutator = useCreateTenancyRenewalNegotiationCheck()

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

type GetCreateTenanciesIdRenewalNegotiationsRenewalIdChecksFieldArgs = {
  fieldName: FieldPath<CreateTenanciesIdRenewalNegotiationsRenewalIdChecksBody>
  control: Control<CreateTenanciesIdRenewalNegotiationsRenewalIdChecksBody>
  formConfig: FormConfig<CreateTenanciesIdRenewalNegotiationsRenewalIdChecksBody>
}

export const getCreateTenanciesIdRenewalNegotiationsRenewalIdChecksField = ({
  fieldName,
  control,
  formConfig,
}: GetCreateTenanciesIdRenewalNegotiationsRenewalIdChecksFieldArgs) => {
  return match(fieldName)
    .with('status', () => {
      const { label, Input } = formConfig['status']

      return (
        <Controller
          key="status"
          name="status"
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
    .with('checkTypeId', () => {
      const { label, Input } = formConfig['checkTypeId']

      return (
        <Controller
          key="checkTypeId"
          name="checkTypeId"
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
