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
  useCreateProperty,
  useCreatePropertyCertificate,
  useCreatePropertyKey,
  useCreatePropertyKeyMovement,
  useUpdatePropertyKeyMovement,
  useCreatePropertyCheck,
  useCreatePropertyAppraisal,
} from '@/services/properties.ts'

export const createPropertiesBody = z.object({
  lastCall: z.string().nullable().optional(),
  nextCall: z.string().nullable().optional(),
  marketingMode: z.string(),
  departmentId: z.string(),
  strapline: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  summary: z.string().nullable().optional(),
  alternateId: z.string().nullable().optional(),
  specialFeatures: z.array(z.string()).nullable().optional(),
  address: z.object({
    buildingName: z.string().nullable().optional(),
    buildingNumber: z.string().nullable().optional(),
    line1: z.string(),
    line2: z.string().nullable().optional(),
    line3: z.string().nullable().optional(),
    line4: z.string().nullable().optional(),
    postcode: z.string().nullable().optional(),
    countryId: z.string().nullable().optional(),
    geolocation: z.object({ latitude: z.number(), longitude: z.number() }).nullable().optional(),
  }),
  bedrooms: z.number().int().nullable().optional(),
  bedroomsMax: z.number().int().nullable().optional(),
  numberOfUnits: z.number().int().nullable().optional(),
  receptions: z.number().int().nullable().optional(),
  receptionsMax: z.number().int().nullable().optional(),
  bathrooms: z.number().int().nullable().optional(),
  bathroomsMax: z.number().int().nullable().optional(),
  parkingSpaces: z.number().int().nullable().optional(),
  councilTax: z.string().nullable().optional(),
  internetAdvertising: z.boolean().nullable().optional(),
  viewingArrangements: z.string().nullable().optional(),
  videoUrl: z.string().nullable().optional(),
  videoCaption: z.string().nullable().optional(),
  video2Url: z.string().nullable().optional(),
  video2Caption: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
  longDescription: z.string().nullable().optional(),
  floorLevel: z.number().int().nullable().optional(),
  internalFloors: z.number().int().nullable().optional(),
  totalFloors: z.number().int().nullable().optional(),
  boardStatus: z.string().nullable().optional(),
  boardNotes: z.string().nullable().optional(),
  boardUpdated: z.string().nullable().optional(),
  valuation: z.string().nullable().optional(),
  epc: z
    .object({
      exempt: z.boolean().nullable().optional(),
      eer: z.number().int().nullable().optional(),
      eerPotential: z.number().int().nullable().optional(),
      eir: z.number().int().nullable().optional(),
      eirPotential: z.number().int().nullable().optional(),
      fullDocumentUrl: z.string().nullable().optional(),
      firstPageDocumentUrl: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  externalArea: z
    .object({
      type: z.string().nullable().optional(),
      min: z.number().nullable().optional(),
      max: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  internalArea: z
    .object({
      type: z.string().nullable().optional(),
      min: z.number().nullable().optional(),
      max: z.number().nullable().optional(),
    })
    .nullable()
    .optional(),
  rural: z
    .object({
      buildingsDescription: z.string().nullable().optional(),
      landDescription: z.string().nullable().optional(),
    })
    .nullable()
    .optional(),
  selling: z
    .object({
      instructed: z.string().nullable().optional(),
      price: z.number().int().nullable().optional(),
      reservationFee: z.number().int().nullable().optional(),
      qualifier: z.string().nullable().optional(),
      status: z.string().nullable().optional(),
      disposal: z.string().nullable().optional(),
      completed: z.string().nullable().optional(),
      exchanged: z.string().nullable().optional(),
      accountPaid: z.string().nullable().optional(),
      tenure: z
        .object({ type: z.string().nullable().optional(), expiry: z.string().nullable().optional() })
        .nullable()
        .optional(),
      sellingAgency: z.string().nullable().optional(),
      agencyId: z.string().nullable().optional(),
      agreementExpiry: z.string().nullable().optional(),
      fee: z
        .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
        .nullable()
        .optional(),
      recommendedPrice: z.number().int().nullable().optional(),
      valuationPrice: z.number().int().nullable().optional(),
      decoration: z.array(z.string()).nullable().optional(),
      sharedOwnership: z
        .object({
          sharedPercentage: z.number().nullable().optional(),
          rent: z.number().nullable().optional(),
          rentFrequency: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
  letting: z
    .object({
      instructed: z.string().nullable().optional(),
      availableFrom: z.string().nullable().optional(),
      availableTo: z.string().nullable().optional(),
      agreementSigned: z.string().nullable().optional(),
      rent: z.number().nullable().optional(),
      rentFrequency: z.string().nullable().optional(),
      rentIncludes: z.string().nullable().optional(),
      furnishing: z.array(z.string()).nullable().optional(),
      agentRole: z.string().nullable().optional(),
      term: z.string().nullable().optional(),
      status: z.string().nullable().optional(),
      landlordId: z.string().nullable().optional(),
      worksOrderNote: z.string().nullable().optional(),
      minimumTerm: z.number().int().nullable().optional(),
      managementFee: z
        .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
        .nullable()
        .optional(),
      lettingFee: z
        .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
        .nullable()
        .optional(),
      qualifier: z.string().nullable().optional(),
      utilities: z
        .object({
          hasGas: z.boolean().nullable().optional(),
          gasCompanyId: z.string().nullable().optional(),
          gasMeterPoint: z.string().nullable().optional(),
          electricityCompanyId: z.string().nullable().optional(),
          electricityMeterPoint: z.string().nullable().optional(),
          waterCompanyId: z.string().nullable().optional(),
          waterMeterPoint: z.string().nullable().optional(),
          telephoneCompanyId: z.string().nullable().optional(),
          internetCompanyId: z.string().nullable().optional(),
          cableTvCompanyId: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
      deposit: z
        .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
  regional: z
    .object({
      irl: z
        .object({
          buildingEnergyRating: z
            .object({
              exempt: z.boolean().nullable().optional(),
              rating: z.string().nullable().optional(),
              refNumber: z.string().nullable().optional(),
              epi: z.string().nullable().optional(),
            })
            .nullable()
            .optional(),
        })
        .nullable()
        .optional(),
    })
    .nullable()
    .optional(),
  type: z.array(z.string()).nullable().optional(),
  style: z.array(z.string()).nullable().optional(),
  situation: z.array(z.string()).nullable().optional(),
  parking: z.array(z.string()).nullable().optional(),
  age: z.array(z.string()).nullable().optional(),
  locality: z.array(z.string()).nullable().optional(),
  rooms: z
    .array(
      z.object({
        name: z.string().nullable().optional(),
        dimensions: z.string().nullable().optional(),
        description: z.string().nullable().optional(),
      }),
    )
    .nullable()
    .optional(),
  roomDetailsApproved: z.boolean().nullable().optional(),
  negotiatorId: z.string(),
  officeIds: z.array(z.string()),
  areaId: z.string().nullable().optional(),
  url: z.string().nullable().optional(),
  urlCaption: z.string().nullable().optional(),
  groundRent: z.number().nullable().optional(),
  groundRentComment: z.string().nullable().optional(),
  groundRentReviewDate: z.string().nullable().optional(),
  groundRentIncrease: z.number().nullable().optional(),
  serviceCharge: z.number().nullable().optional(),
  serviceChargeComment: z.string().nullable().optional(),
  metadata: z.record(z.string(), z.object({})).nullable().optional(),
})
export type CreatePropertiesBody = {
  lastCall?: string | undefined | null
  nextCall?: string | undefined | null
  marketingMode: string
  departmentId: string
  strapline?: string | undefined | null
  description?: string | undefined | null
  summary?: string | undefined | null
  alternateId?: string | undefined | null
  specialFeatures?: Array<string> | undefined | null
  address: {
    buildingName?: string | undefined | null
    buildingNumber?: string | undefined | null
    line1: string
    line2?: string | undefined | null
    line3?: string | undefined | null
    line4?: string | undefined | null
    postcode?: string | undefined | null
    countryId?: string | undefined | null
    geolocation?: { latitude: number; longitude: number } | undefined | null
  }
  bedrooms?: number | undefined | null
  bedroomsMax?: number | undefined | null
  numberOfUnits?: number | undefined | null
  receptions?: number | undefined | null
  receptionsMax?: number | undefined | null
  bathrooms?: number | undefined | null
  bathroomsMax?: number | undefined | null
  parkingSpaces?: number | undefined | null
  councilTax?: string | undefined | null
  internetAdvertising?: boolean | undefined | null
  viewingArrangements?: string | undefined | null
  videoUrl?: string | undefined | null
  videoCaption?: string | undefined | null
  video2Url?: string | undefined | null
  video2Caption?: string | undefined | null
  notes?: string | undefined | null
  longDescription?: string | undefined | null
  floorLevel?: number | undefined | null
  internalFloors?: number | undefined | null
  totalFloors?: number | undefined | null
  boardStatus?: string | undefined | null
  boardNotes?: string | undefined | null
  boardUpdated?: string | undefined | null
  valuation?: string | undefined | null
  epc?:
    | {
        exempt?: boolean | undefined | null
        eer?: number | undefined | null
        eerPotential?: number | undefined | null
        eir?: number | undefined | null
        eirPotential?: number | undefined | null
        fullDocumentUrl?: string | undefined | null
        firstPageDocumentUrl?: string | undefined | null
      }
    | undefined
    | null
  externalArea?:
    | { type?: string | undefined | null; min?: number | undefined | null; max?: number | undefined | null }
    | undefined
    | null
  internalArea?:
    | { type?: string | undefined | null; min?: number | undefined | null; max?: number | undefined | null }
    | undefined
    | null
  rural?:
    | { buildingsDescription?: string | undefined | null; landDescription?: string | undefined | null }
    | undefined
    | null
  selling?:
    | {
        instructed?: string | undefined | null
        price?: number | undefined | null
        reservationFee?: number | undefined | null
        qualifier?: string | undefined | null
        status?: string | undefined | null
        disposal?: string | undefined | null
        completed?: string | undefined | null
        exchanged?: string | undefined | null
        accountPaid?: string | undefined | null
        tenure?: { type?: string | undefined | null; expiry?: string | undefined | null } | undefined | null
        sellingAgency?: string | undefined | null
        agencyId?: string | undefined | null
        agreementExpiry?: string | undefined | null
        fee?: { type?: string | undefined | null; amount?: number | undefined | null } | undefined | null
        recommendedPrice?: number | undefined | null
        valuationPrice?: number | undefined | null
        decoration?: Array<string> | undefined | null
        sharedOwnership?:
          | {
              sharedPercentage?: number | undefined | null
              rent?: number | undefined | null
              rentFrequency?: string | undefined | null
            }
          | undefined
          | null
      }
    | undefined
    | null
  letting?:
    | {
        instructed?: string | undefined | null
        availableFrom?: string | undefined | null
        availableTo?: string | undefined | null
        agreementSigned?: string | undefined | null
        rent?: number | undefined | null
        rentFrequency?: string | undefined | null
        rentIncludes?: string | undefined | null
        furnishing?: Array<string> | undefined | null
        agentRole?: string | undefined | null
        term?: string | undefined | null
        status?: string | undefined | null
        landlordId?: string | undefined | null
        worksOrderNote?: string | undefined | null
        minimumTerm?: number | undefined | null
        managementFee?: { type?: string | undefined | null; amount?: number | undefined | null } | undefined | null
        lettingFee?: { type?: string | undefined | null; amount?: number | undefined | null } | undefined | null
        qualifier?: string | undefined | null
        utilities?:
          | {
              hasGas?: boolean | undefined | null
              gasCompanyId?: string | undefined | null
              gasMeterPoint?: string | undefined | null
              electricityCompanyId?: string | undefined | null
              electricityMeterPoint?: string | undefined | null
              waterCompanyId?: string | undefined | null
              waterMeterPoint?: string | undefined | null
              telephoneCompanyId?: string | undefined | null
              internetCompanyId?: string | undefined | null
              cableTvCompanyId?: string | undefined | null
            }
          | undefined
          | null
        deposit?: { type?: string | undefined | null; amount?: number | undefined | null } | undefined | null
      }
    | undefined
    | null
  regional?:
    | {
        irl?:
          | {
              buildingEnergyRating?:
                | {
                    exempt?: boolean | undefined | null
                    rating?: string | undefined | null
                    refNumber?: string | undefined | null
                    epi?: string | undefined | null
                  }
                | undefined
                | null
            }
          | undefined
          | null
      }
    | undefined
    | null
  type?: Array<string> | undefined | null
  style?: Array<string> | undefined | null
  situation?: Array<string> | undefined | null
  parking?: Array<string> | undefined | null
  age?: Array<string> | undefined | null
  locality?: Array<string> | undefined | null
  rooms?:
    | Array<{
        name?: string | undefined | null
        dimensions?: string | undefined | null
        description?: string | undefined | null
      }>
    | undefined
    | null
  roomDetailsApproved?: boolean | undefined | null
  negotiatorId: string
  officeIds: Array<string>
  areaId?: string | undefined | null
  url?: string | undefined | null
  urlCaption?: string | undefined | null
  groundRent?: number | undefined | null
  groundRentComment?: string | undefined | null
  groundRentReviewDate?: string | undefined | null
  groundRentIncrease?: number | undefined | null
  serviceCharge?: number | undefined | null
  serviceChargeComment?: string | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
}
export type CreatePropertiesProps = { children: (control: Control<CreatePropertiesBody>) => ReactNode }
export const createPropertiesIdCertificatesBody = z.object({
  category: z.string().nullable().optional(),
  typeId: z.string().nullable().optional(),
  start: z.string().nullable().optional(),
  expiry: z.string().nullable().optional(),
  companyId: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
  referenceNumber: z.string().nullable().optional(),
})
export type CreatePropertiesIdCertificatesBody = {
  category?: string | undefined | null
  typeId?: string | undefined | null
  start?: string | undefined | null
  expiry?: string | undefined | null
  companyId?: string | undefined | null
  notes?: string | undefined | null
  referenceNumber?: string | undefined | null
}
export type CreatePropertiesIdCertificatesProps = {
  id: string
  children: (control: Control<CreatePropertiesIdCertificatesBody>) => ReactNode
}
export const createPropertiesIdKeysBody = z.object({
  number: z.string().nullable().optional(),
  typeId: z.string().nullable().optional(),
  officeId: z.string().nullable().optional(),
  keysInSet: z
    .array(z.object({ name: z.string().nullable().optional() }))
    .nullable()
    .optional(),
})
export type CreatePropertiesIdKeysBody = {
  number?: string | undefined | null
  typeId?: string | undefined | null
  officeId?: string | undefined | null
  keysInSet?: Array<{ name?: string | undefined | null }> | undefined | null
}
export type CreatePropertiesIdKeysProps = {
  id: string
  children: (control: Control<CreatePropertiesIdKeysBody>) => ReactNode
}
export const createPropertiesIdKeysKeyIdMovementsBody = z.object({
  checkInRequired: z.boolean().nullable().optional(),
  checkOutToId: z.string().nullable().optional(),
  checkOutToType: z.string().nullable().optional(),
  checkOutNegotiatorId: z.string().nullable().optional(),
})
export type CreatePropertiesIdKeysKeyIdMovementsBody = {
  checkInRequired?: boolean | undefined | null
  checkOutToId?: string | undefined | null
  checkOutToType?: string | undefined | null
  checkOutNegotiatorId?: string | undefined | null
}
export type CreatePropertiesIdKeysKeyIdMovementsProps = {
  id: string
  keyId: string
  children: (control: Control<CreatePropertiesIdKeysKeyIdMovementsBody>) => ReactNode
}
export const updatePropertiesIdKeysKeyIdMovementsMovementIdBody = z.object({
  checkInNegotiatorId: z.string().nullable().optional(),
})
export type UpdatePropertiesIdKeysKeyIdMovementsMovementIdBody = { checkInNegotiatorId?: string | undefined | null }
export type UpdatePropertiesIdKeysKeyIdMovementsMovementIdProps = {
  id: string
  keyId: string
  movementId: string
  children: (control: Control<UpdatePropertiesIdKeysKeyIdMovementsMovementIdBody>) => ReactNode
}
export const createPropertiesIdChecksBody = z.object({ description: z.string(), type: z.string(), status: z.string() })
export type CreatePropertiesIdChecksBody = { description: string; type: string; status: string }
export type CreatePropertiesIdChecksProps = {
  id: string
  children: (control: Control<CreatePropertiesIdChecksBody>) => ReactNode
}
export const createPropertiesIdAppraisalsBody = z.object({
  companyId: z.string().nullable().optional(),
  date: z.string().nullable().optional(),
  price: z.number().int().nullable().optional(),
  fee: z
    .object({ type: z.string().nullable().optional(), amount: z.number().nullable().optional() })
    .nullable()
    .optional(),
  notes: z.string().nullable().optional(),
})
export type CreatePropertiesIdAppraisalsBody = {
  companyId?: string | undefined | null
  date?: string | undefined | null
  price?: number | undefined | null
  fee?: { type?: string | undefined | null; amount?: number | undefined | null } | undefined | null
  notes?: string | undefined | null
}
export type CreatePropertiesIdAppraisalsProps = {
  id: string
  children: (control: Control<CreatePropertiesIdAppraisalsBody>) => ReactNode
}

export const CreateProperties = (props: CreatePropertiesProps) => {
  const { control, handleSubmit } = useForm<CreatePropertiesBody>({
    resolver: zodResolver(createPropertiesBody),
  })

  const mutator = useCreateProperty()

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

type GetCreatePropertiesFieldArgs = {
  fieldName: FieldPath<CreatePropertiesBody>
  control: Control<CreatePropertiesBody>
  formConfig: FormConfig<CreatePropertiesBody>
}

export const getCreatePropertiesField = ({ fieldName, control, formConfig }: GetCreatePropertiesFieldArgs) => {
  return match(fieldName)
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
    .with('strapline', () => {
      const { label, Input } = formConfig['strapline']

      return (
        <Controller
          key="strapline"
          name="strapline"
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
    .with('summary', () => {
      const { label, Input } = formConfig['summary']

      return (
        <Controller
          key="summary"
          name="summary"
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
    .with('alternateId', () => {
      const { label, Input } = formConfig['alternateId']

      return (
        <Controller
          key="alternateId"
          name="alternateId"
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
    .with('numberOfUnits', () => {
      const { label, Input } = formConfig['numberOfUnits']

      return (
        <Controller
          key="numberOfUnits"
          name="numberOfUnits"
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
    .with('receptions', () => {
      const { label, Input } = formConfig['receptions']

      return (
        <Controller
          key="receptions"
          name="receptions"
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
    .with('bathrooms', () => {
      const { label, Input } = formConfig['bathrooms']

      return (
        <Controller
          key="bathrooms"
          name="bathrooms"
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
    .with('parkingSpaces', () => {
      const { label, Input } = formConfig['parkingSpaces']

      return (
        <Controller
          key="parkingSpaces"
          name="parkingSpaces"
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
    .with('councilTax', () => {
      const { label, Input } = formConfig['councilTax']

      return (
        <Controller
          key="councilTax"
          name="councilTax"
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
    .with('internetAdvertising', () => {
      const { label, Input } = formConfig['internetAdvertising']

      return (
        <Controller
          key="internetAdvertising"
          name="internetAdvertising"
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
    .with('viewingArrangements', () => {
      const { label, Input } = formConfig['viewingArrangements']

      return (
        <Controller
          key="viewingArrangements"
          name="viewingArrangements"
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
    .with('videoUrl', () => {
      const { label, Input } = formConfig['videoUrl']

      return (
        <Controller
          key="videoUrl"
          name="videoUrl"
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
    .with('videoCaption', () => {
      const { label, Input } = formConfig['videoCaption']

      return (
        <Controller
          key="videoCaption"
          name="videoCaption"
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
    .with('video2Url', () => {
      const { label, Input } = formConfig['video2Url']

      return (
        <Controller
          key="video2Url"
          name="video2Url"
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
    .with('video2Caption', () => {
      const { label, Input } = formConfig['video2Caption']

      return (
        <Controller
          key="video2Caption"
          name="video2Caption"
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
    .with('longDescription', () => {
      const { label, Input } = formConfig['longDescription']

      return (
        <Controller
          key="longDescription"
          name="longDescription"
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
    .with('floorLevel', () => {
      const { label, Input } = formConfig['floorLevel']

      return (
        <Controller
          key="floorLevel"
          name="floorLevel"
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
    .with('internalFloors', () => {
      const { label, Input } = formConfig['internalFloors']

      return (
        <Controller
          key="internalFloors"
          name="internalFloors"
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
    .with('totalFloors', () => {
      const { label, Input } = formConfig['totalFloors']

      return (
        <Controller
          key="totalFloors"
          name="totalFloors"
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
    .with('boardStatus', () => {
      const { label, Input } = formConfig['boardStatus']

      return (
        <Controller
          key="boardStatus"
          name="boardStatus"
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
    .with('boardNotes', () => {
      const { label, Input } = formConfig['boardNotes']

      return (
        <Controller
          key="boardNotes"
          name="boardNotes"
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
    .with('boardUpdated', () => {
      const { label, Input } = formConfig['boardUpdated']

      return (
        <Controller
          key="boardUpdated"
          name="boardUpdated"
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
    .with('valuation', () => {
      const { label, Input } = formConfig['valuation']

      return (
        <Controller
          key="valuation"
          name="valuation"
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
    .with('epc', () => {
      const { label, Input } = formConfig['epc']

      return (
        <Controller
          key="epc"
          name="epc"
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
    .with('rural', () => {
      const { label, Input } = formConfig['rural']

      return (
        <Controller
          key="rural"
          name="rural"
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
    .with('selling', () => {
      const { label, Input } = formConfig['selling']

      return (
        <Controller
          key="selling"
          name="selling"
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
    .with('letting', () => {
      const { label, Input } = formConfig['letting']

      return (
        <Controller
          key="letting"
          name="letting"
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
    .with('rooms', () => {
      const { label, Input } = formConfig['rooms']

      return (
        <Controller
          key="rooms"
          name="rooms"
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
    .with('roomDetailsApproved', () => {
      const { label, Input } = formConfig['roomDetailsApproved']

      return (
        <Controller
          key="roomDetailsApproved"
          name="roomDetailsApproved"
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
    .with('areaId', () => {
      const { label, Input } = formConfig['areaId']

      return (
        <Controller
          key="areaId"
          name="areaId"
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
    .with('urlCaption', () => {
      const { label, Input } = formConfig['urlCaption']

      return (
        <Controller
          key="urlCaption"
          name="urlCaption"
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
    .with('groundRent', () => {
      const { label, Input } = formConfig['groundRent']

      return (
        <Controller
          key="groundRent"
          name="groundRent"
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
    .with('groundRentComment', () => {
      const { label, Input } = formConfig['groundRentComment']

      return (
        <Controller
          key="groundRentComment"
          name="groundRentComment"
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
    .with('groundRentReviewDate', () => {
      const { label, Input } = formConfig['groundRentReviewDate']

      return (
        <Controller
          key="groundRentReviewDate"
          name="groundRentReviewDate"
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
    .with('groundRentIncrease', () => {
      const { label, Input } = formConfig['groundRentIncrease']

      return (
        <Controller
          key="groundRentIncrease"
          name="groundRentIncrease"
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
    .with('serviceCharge', () => {
      const { label, Input } = formConfig['serviceCharge']

      return (
        <Controller
          key="serviceCharge"
          name="serviceCharge"
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
    .with('serviceChargeComment', () => {
      const { label, Input } = formConfig['serviceChargeComment']

      return (
        <Controller
          key="serviceChargeComment"
          name="serviceChargeComment"
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

export const CreatePropertiesIdCertificates = (props: CreatePropertiesIdCertificatesProps) => {
  const { control, handleSubmit } = useForm<CreatePropertiesIdCertificatesBody>({
    resolver: zodResolver(createPropertiesIdCertificatesBody),
  })

  const mutator = useCreatePropertyCertificate()

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

type GetCreatePropertiesIdCertificatesFieldArgs = {
  fieldName: FieldPath<CreatePropertiesIdCertificatesBody>
  control: Control<CreatePropertiesIdCertificatesBody>
  formConfig: FormConfig<CreatePropertiesIdCertificatesBody>
}

export const getCreatePropertiesIdCertificatesField = ({
  fieldName,
  control,
  formConfig,
}: GetCreatePropertiesIdCertificatesFieldArgs) => {
  return match(fieldName)
    .with('category', () => {
      const { label, Input } = formConfig['category']

      return (
        <Controller
          key="category"
          name="category"
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
    .with('expiry', () => {
      const { label, Input } = formConfig['expiry']

      return (
        <Controller
          key="expiry"
          name="expiry"
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
    .with('companyId', () => {
      const { label, Input } = formConfig['companyId']

      return (
        <Controller
          key="companyId"
          name="companyId"
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
    .with('referenceNumber', () => {
      const { label, Input } = formConfig['referenceNumber']

      return (
        <Controller
          key="referenceNumber"
          name="referenceNumber"
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

export const CreatePropertiesIdKeys = (props: CreatePropertiesIdKeysProps) => {
  const { control, handleSubmit } = useForm<CreatePropertiesIdKeysBody>({
    resolver: zodResolver(createPropertiesIdKeysBody),
  })

  const mutator = useCreatePropertyKey()

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

type GetCreatePropertiesIdKeysFieldArgs = {
  fieldName: FieldPath<CreatePropertiesIdKeysBody>
  control: Control<CreatePropertiesIdKeysBody>
  formConfig: FormConfig<CreatePropertiesIdKeysBody>
}

export const getCreatePropertiesIdKeysField = ({
  fieldName,
  control,
  formConfig,
}: GetCreatePropertiesIdKeysFieldArgs) => {
  return match(fieldName)
    .with('number', () => {
      const { label, Input } = formConfig['number']

      return (
        <Controller
          key="number"
          name="number"
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
    .with('keysInSet', () => {
      const { label, Input } = formConfig['keysInSet']

      return (
        <Controller
          key="keysInSet"
          name="keysInSet"
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

export const CreatePropertiesIdKeysKeyIdMovements = (props: CreatePropertiesIdKeysKeyIdMovementsProps) => {
  const { control, handleSubmit } = useForm<CreatePropertiesIdKeysKeyIdMovementsBody>({
    resolver: zodResolver(createPropertiesIdKeysKeyIdMovementsBody),
  })

  const mutator = useCreatePropertyKeyMovement()

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

type GetCreatePropertiesIdKeysKeyIdMovementsFieldArgs = {
  fieldName: FieldPath<CreatePropertiesIdKeysKeyIdMovementsBody>
  control: Control<CreatePropertiesIdKeysKeyIdMovementsBody>
  formConfig: FormConfig<CreatePropertiesIdKeysKeyIdMovementsBody>
}

export const getCreatePropertiesIdKeysKeyIdMovementsField = ({
  fieldName,
  control,
  formConfig,
}: GetCreatePropertiesIdKeysKeyIdMovementsFieldArgs) => {
  return match(fieldName)
    .with('checkInRequired', () => {
      const { label, Input } = formConfig['checkInRequired']

      return (
        <Controller
          key="checkInRequired"
          name="checkInRequired"
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
    .with('checkOutToId', () => {
      const { label, Input } = formConfig['checkOutToId']

      return (
        <Controller
          key="checkOutToId"
          name="checkOutToId"
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
    .with('checkOutToType', () => {
      const { label, Input } = formConfig['checkOutToType']

      return (
        <Controller
          key="checkOutToType"
          name="checkOutToType"
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
    .with('checkOutNegotiatorId', () => {
      const { label, Input } = formConfig['checkOutNegotiatorId']

      return (
        <Controller
          key="checkOutNegotiatorId"
          name="checkOutNegotiatorId"
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

export const UpdatePropertiesIdKeysKeyIdMovementsMovementId = (
  props: UpdatePropertiesIdKeysKeyIdMovementsMovementIdProps,
) => {
  const { control, handleSubmit } = useForm<UpdatePropertiesIdKeysKeyIdMovementsMovementIdBody>({
    resolver: zodResolver(updatePropertiesIdKeysKeyIdMovementsMovementIdBody),
  })

  const mutator = useUpdatePropertyKeyMovement()

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

type GetUpdatePropertiesIdKeysKeyIdMovementsMovementIdFieldArgs = {
  fieldName: FieldPath<UpdatePropertiesIdKeysKeyIdMovementsMovementIdBody>
  control: Control<UpdatePropertiesIdKeysKeyIdMovementsMovementIdBody>
  formConfig: FormConfig<UpdatePropertiesIdKeysKeyIdMovementsMovementIdBody>
}

export const getUpdatePropertiesIdKeysKeyIdMovementsMovementIdField = ({
  fieldName,
  control,
  formConfig,
}: GetUpdatePropertiesIdKeysKeyIdMovementsMovementIdFieldArgs) => {
  return match(fieldName)
    .with('checkInNegotiatorId', () => {
      const { label, Input } = formConfig['checkInNegotiatorId']

      return (
        <Controller
          key="checkInNegotiatorId"
          name="checkInNegotiatorId"
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

export const CreatePropertiesIdChecks = (props: CreatePropertiesIdChecksProps) => {
  const { control, handleSubmit } = useForm<CreatePropertiesIdChecksBody>({
    resolver: zodResolver(createPropertiesIdChecksBody),
  })

  const mutator = useCreatePropertyCheck()

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

type GetCreatePropertiesIdChecksFieldArgs = {
  fieldName: FieldPath<CreatePropertiesIdChecksBody>
  control: Control<CreatePropertiesIdChecksBody>
  formConfig: FormConfig<CreatePropertiesIdChecksBody>
}

export const getCreatePropertiesIdChecksField = ({
  fieldName,
  control,
  formConfig,
}: GetCreatePropertiesIdChecksFieldArgs) => {
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
    .otherwise(() => {
      throw new Error(`Unknown field: '${fieldName}' `)
    })
}

export const CreatePropertiesIdAppraisals = (props: CreatePropertiesIdAppraisalsProps) => {
  const { control, handleSubmit } = useForm<CreatePropertiesIdAppraisalsBody>({
    resolver: zodResolver(createPropertiesIdAppraisalsBody),
  })

  const mutator = useCreatePropertyAppraisal()

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

type GetCreatePropertiesIdAppraisalsFieldArgs = {
  fieldName: FieldPath<CreatePropertiesIdAppraisalsBody>
  control: Control<CreatePropertiesIdAppraisalsBody>
  formConfig: FormConfig<CreatePropertiesIdAppraisalsBody>
}

export const getCreatePropertiesIdAppraisalsField = ({
  fieldName,
  control,
  formConfig,
}: GetCreatePropertiesIdAppraisalsFieldArgs) => {
  return match(fieldName)
    .with('companyId', () => {
      const { label, Input } = formConfig['companyId']

      return (
        <Controller
          key="companyId"
          name="companyId"
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
    .with('date', () => {
      const { label, Input } = formConfig['date']

      return (
        <Controller
          key="date"
          name="date"
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
    .with('price', () => {
      const { label, Input } = formConfig['price']

      return (
        <Controller
          key="price"
          name="price"
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
    .with('fee', () => {
      const { label, Input } = formConfig['fee']

      return (
        <Controller
          key="fee"
          name="fee"
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
    .otherwise(() => {
      throw new Error(`Unknown field: '${fieldName}' `)
    })
}
