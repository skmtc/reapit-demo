import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiTenanciesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  fromArchive?: boolean | undefined
  embed?:
    | Array<
        | 'appointments'
        | 'applicant'
        | 'extensions'
        | 'documents'
        | 'negotiator'
        | 'property'
        | 'source'
        | 'tasks'
        | 'type'
      >
    | undefined
  id?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  applicantId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  name?: string | undefined
  nameType?: string | undefined
  status?:
    | Array<'offerPending' | 'offerWithdrawn' | 'offerRejected' | 'arranging' | 'current' | 'finished' | 'cancelled'>
    | undefined
  email?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  endDateFrom?: string | undefined
  endDateTo?: string | undefined
  startDateFrom?: string | undefined
  startDateTo?: string | undefined
  metadata?: Array<string> | undefined
}
export const getApiTenanciesFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  fromArchive,
  embed,
  id,
  negotiatorId,
  applicantId,
  propertyId,
  name,
  nameType,
  status,
  email,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  endDateFrom,
  endDateTo,
  startDateFrom,
  startDateTo,
  metadata,
}: UseGetApiTenanciesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${querySerialiser({ args: { pageSize, pageNumber, sortBy, fromArchive, embed, id, negotiatorId, applicantId, propertyId, name, nameType, status, email, createdFrom, createdTo, modifiedFrom, modifiedTo, endDateFrom, endDateTo, startDateFrom, startDateTo, metadata }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            startDate: z.string().nullable().optional(),
            endDate: z.string().nullable().optional(),
            status: z.string().nullable().optional(),
            agentRole: z.string().nullable().optional(),
            rent: z.number().nullable().optional(),
            rentFrequency: z.string().nullable().optional(),
            endDateConfirmed: z.boolean().nullable().optional(),
            isPeriodic: z.boolean().nullable().optional(),
            rentInstalmentsFrequency: z.string().nullable().optional(),
            rentInstalmentsAmount: z.number().nullable().optional(),
            rentInstalmentsStart: z.string().nullable().optional(),
            meterReadingGas: z.string().nullable().optional(),
            meterReadingGasLastRead: z.string().nullable().optional(),
            meterReadingElectricity: z.string().nullable().optional(),
            meterReadingElectricityLastRead: z.string().nullable().optional(),
            meterReadingWater: z.string().nullable().optional(),
            meterReadingWaterLastRead: z.string().nullable().optional(),
            typeId: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            propertyId: z.string().nullable().optional(),
            applicantId: z.string().nullable().optional(),
            managerId: z.string().nullable().optional(),
            groupPaymentReference: z.string().nullable().optional(),
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
            source: z
              .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
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
            related: z
              .array(
                z.object({
                  id: z.string().nullable().optional(),
                  name: z.string().nullable().optional(),
                  title: z.string().nullable().optional(),
                  forename: z.string().nullable().optional(),
                  surname: z.string().nullable().optional(),
                  dateOfBirth: z.string().nullable().optional(),
                  type: z.string().nullable().optional(),
                  homePhone: z.string().nullable().optional(),
                  workPhone: z.string().nullable().optional(),
                  mobilePhone: z.string().nullable().optional(),
                  email: z.string().nullable().optional(),
                  paymentReference: z.string().nullable().optional(),
                  fromArchive: z.boolean().nullable().optional(),
                  marketingConsent: z.string().nullable().optional(),
                  primaryAddress: z
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
                  occupyOn: z.string().nullable().optional(),
                  vacateOn: z.string().nullable().optional(),
                  additionalContactDetails: z
                    .array(
                      z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }),
                    )
                    .nullable()
                    .optional(),
                }),
              )
              .nullable()
              .optional(),
            fromArchive: z.boolean().nullable().optional(),
            metadata: z.record(z.string(), z.object({})).nullable().optional(),
            feeNotes: z.string().nullable().optional(),
            legalStatusId: z.string().nullable().optional(),
            renewalOptions: z
              .object({
                optionId: z.string().nullable().optional(),
                optionText: z.string().nullable().optional(),
                expiry: z.string().nullable().optional(),
                conditionIds: z.array(z.string()).nullable().optional(),
              })
              .nullable()
              .optional(),
            arrears: z
              .object({
                chaseArrears: z.boolean().nullable().optional(),
                paymentPlan: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiTenancies = (args: UseGetApiTenanciesArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiTenanciesArgs = {
  body: /** Request body used to create a new tenancy */
  {
    startDate?: string | undefined
    endDate?: string | undefined
    status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
    string | undefined
    agentRole: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    string
    rent: /** The amount of rent required, returned in relation to the collection frequency */ number
    rentFrequency: /** The rent collection frequency (weekly/monthly/annually) */ string
    rentInstalmentsFrequency?: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
    string | undefined
    rentInstalmentsAmount?: /** The amount due for each rent instalment (where specified) */ number | undefined
    rentInstalmentsStart?: /** The date that the first instalment is due */ string | undefined
    meterReadingGas?: /** The recorded utility reading for the gas meter */ string | undefined
    meterReadingGasLastRead?: /** Date of when the reading of gas utility was last recorded */ string | undefined
    meterReadingElectricity?: /** The recorded utility reading for the electricity meter */ string | undefined
    meterReadingElectricityLastRead?: /** Date of when the reading of electricity utility was last recorded */
    string | undefined
    meterReadingWater?: /** The recorded utility reading for the water meter */ string | undefined
    meterReadingWaterLastRead?: /** Date of when the reading of water utility was last recorded */ string | undefined
    isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */ boolean | undefined
    typeId: /** The unique identifier of the type of tenancy */ string
    negotiatorId: /** The unique identifier of the negotiator who is managing the tenancy */ string
    propertyId: /** The unique identifier of the property that relates to the tenancy */ string
    applicantId: /** The unique identifier of the applicant who has applied to be a tenant */ string
    feeNotes?: /** Financial notes set against the tenancy */ string | undefined
    lettingFee?: /** Request body used to set letting fees on a new tenancy */
    | {
          type?: /** The letting fee type (percentage/fixed) */ string | undefined
          amount?: /** The fee amount */ number | undefined
          frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
          string | undefined
        }
      | undefined
    managementFee?: /** Request body used to set management fees on a new tenancy */
    | {
          type?: /** The management fee type (percentage/fixed) */ string | undefined
          amount?: /** The fee amount */ number | undefined
          frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
          string | undefined
        }
      | undefined
    deposit?: /** Request body used to set the deposit of a new tenancy */
    | {
          heldBy?: /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
          string | undefined
          period?: /** The number of weeks or months rent collected as the deposit on the tenancy */ number | undefined
          type?: /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ string | undefined
          sum?: /** The amount of deposit held */ number | undefined
        }
      | undefined
    source?: /** Request body used to set the source of a new tenancy */
    | {
          id?: /** The unique identifier of the source for the tenancy */ string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the tenancy */ Record<string, Record<string, never>> | undefined
  }
}
export const postApiTenanciesFn = async ({ body }: UsePostApiTenanciesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePostApiTenancies = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiTenanciesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdArgs = {
  id: string
  embed?:
    | Array<
        | 'appointments'
        | 'applicant'
        | 'extensions'
        | 'documents'
        | 'negotiator'
        | 'property'
        | 'source'
        | 'tasks'
        | 'type'
      >
    | undefined
}
export const getApiTenanciesIdFn = async ({ id, embed }: UseGetApiTenanciesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      startDate: z.string().nullable().optional(),
      endDate: z.string().nullable().optional(),
      status: z.string().nullable().optional(),
      agentRole: z.string().nullable().optional(),
      rent: z.number().nullable().optional(),
      rentFrequency: z.string().nullable().optional(),
      endDateConfirmed: z.boolean().nullable().optional(),
      isPeriodic: z.boolean().nullable().optional(),
      rentInstalmentsFrequency: z.string().nullable().optional(),
      rentInstalmentsAmount: z.number().nullable().optional(),
      rentInstalmentsStart: z.string().nullable().optional(),
      meterReadingGas: z.string().nullable().optional(),
      meterReadingGasLastRead: z.string().nullable().optional(),
      meterReadingElectricity: z.string().nullable().optional(),
      meterReadingElectricityLastRead: z.string().nullable().optional(),
      meterReadingWater: z.string().nullable().optional(),
      meterReadingWaterLastRead: z.string().nullable().optional(),
      typeId: z.string().nullable().optional(),
      negotiatorId: z.string().nullable().optional(),
      propertyId: z.string().nullable().optional(),
      applicantId: z.string().nullable().optional(),
      managerId: z.string().nullable().optional(),
      groupPaymentReference: z.string().nullable().optional(),
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
      source: z
        .object({ id: z.string().nullable().optional(), type: z.string().nullable().optional() })
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
      related: z
        .array(
          z.object({
            id: z.string().nullable().optional(),
            name: z.string().nullable().optional(),
            title: z.string().nullable().optional(),
            forename: z.string().nullable().optional(),
            surname: z.string().nullable().optional(),
            dateOfBirth: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            homePhone: z.string().nullable().optional(),
            workPhone: z.string().nullable().optional(),
            mobilePhone: z.string().nullable().optional(),
            email: z.string().nullable().optional(),
            paymentReference: z.string().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
            marketingConsent: z.string().nullable().optional(),
            primaryAddress: z
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
            occupyOn: z.string().nullable().optional(),
            vacateOn: z.string().nullable().optional(),
            additionalContactDetails: z
              .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
              .nullable()
              .optional(),
          }),
        )
        .nullable()
        .optional(),
      fromArchive: z.boolean().nullable().optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      feeNotes: z.string().nullable().optional(),
      legalStatusId: z.string().nullable().optional(),
      renewalOptions: z
        .object({
          optionId: z.string().nullable().optional(),
          optionText: z.string().nullable().optional(),
          expiry: z.string().nullable().optional(),
          conditionIds: z.array(z.string()).nullable().optional(),
        })
        .nullable()
        .optional(),
      arrears: z
        .object({ chaseArrears: z.boolean().nullable().optional(), paymentPlan: z.string().nullable().optional() })
        .nullable()
        .optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesId = (args: UseGetApiTenanciesIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdFn(args),
  })

  return result
}
export type UsePatchApiTenanciesIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing Tenancy */
  {
    startDate?: /** The start date of the tenancy */ string | undefined
    endDate?: /** The end date of the tenancy */ string | undefined
    status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
    string | undefined
    agentRole?: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    string | undefined
    rent?: /** The amount of rent required, returned in relation to the collection frequency */ number | undefined
    rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */ string | undefined
    endDateConfirmed?: /** Flag for end date confirmation */ boolean | undefined
    isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */ boolean | undefined
    typeId?: /** The unique identifier of the type of tenancy */ string | undefined
    negotiatorId?: /** The unique identifier of the negotiator who is managing the tenancy */ string | undefined
    source?: /** Request body used to set the source of a new tenancy */
    | {
          id?: /** The unique identifier of the source for the tenancy */ string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    rentInstalmentsFrequency?: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
    string | undefined
    rentInstalmentsAmount?: /** The amount due for each rent instalment (where specified) */ number | undefined
    rentInstalmentsStart?: /** The date that the first instalment is due */ string | undefined
    meterReadingGas?: /** The recorded utility reading for the gas meter */ string | undefined
    meterReadingGasLastRead?: /** Date of when the reading of gas utility was last recorded */ string | undefined
    meterReadingElectricity?: /** The recorded utility reading for the electricity meter */ string | undefined
    meterReadingElectricityLastRead?: /** Date of when the reading of electricity utility was last recorded */
    string | undefined
    meterReadingWater?: /** The recorded utility reading for the water meter */ string | undefined
    meterReadingWaterLastRead?: /** Date of when the reading of water utility was last recorded */ string | undefined
    feeNotes?: /** Financial notes set against the tenancy */ string | undefined
    legalStatusId?: /** The identifier of the legal status to set against the tenancy */ string | undefined
    deposit?: /** Request body used to set the deposit of a tenancy */
    | {
          heldBy?: /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
          string | undefined
          period?: /** The number of weeks or months rent collected as the deposit on the tenancy */ number | undefined
          type?: /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */ string | undefined
          sum?: /** The amount of deposit held */ number | undefined
        }
      | undefined
    lettingFee?: /** Request body used to update letting fees on an existing tenancy */
    | {
          type?: /** The letting fee type (percentage/fixed) */ string | undefined
          amount?: /** The fee amount */ number | undefined
          frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
          string | undefined
        }
      | undefined
    managementFee?: /** Request body used to update management fees on an existing tenancy */
    | {
          type?: /** The management fee type (percentage/fixed) */ string | undefined
          amount?: /** The fee amount */ number | undefined
          frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
          string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the tenancy */ Record<string, Record<string, never>> | undefined
  }
}
export const patchApiTenanciesIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiTenanciesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePatchApiTenanciesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdRelationshipsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/relationships${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            tenancyId: z.string().nullable().optional(),
            associatedType: z.string().nullable().optional(),
            associatedId: z.string().nullable().optional(),
            isMain: z.boolean().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
            guarantors: z
              .array(
                z.object({
                  id: z.string().nullable().optional(),
                  guarantorAssociatedId: z.string().nullable().optional(),
                  type: z.string().nullable().optional(),
                  referenceStatus: z.string().nullable().optional(),
                }),
              )
              .nullable()
              .optional(),
            references: z
              .array(
                z.object({
                  id: z.string().nullable().optional(),
                  referenceAssociatedId: z.string().nullable().optional(),
                  type: z.string().nullable().optional(),
                  referenceStatus: z.string().nullable().optional(),
                  referenceType: z.string().nullable().optional(),
                }),
              )
              .nullable()
              .optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdRelationships = (args: UseGetApiTenanciesIdRelationshipsArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiTenanciesIdRelationshipsRelationshipIdArgs = { id: string; relationshipId: string }
export const getApiTenanciesIdRelationshipsRelationshipIdFn = async ({
  id,
  relationshipId,
}: UseGetApiTenanciesIdRelationshipsRelationshipIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/relationships/${relationshipId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      tenancyId: z.string().nullable().optional(),
      associatedType: z.string().nullable().optional(),
      associatedId: z.string().nullable().optional(),
      isMain: z.boolean().nullable().optional(),
      fromArchive: z.boolean().nullable().optional(),
      guarantors: z
        .array(
          z.object({
            id: z.string().nullable().optional(),
            guarantorAssociatedId: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            referenceStatus: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      references: z
        .array(
          z.object({
            id: z.string().nullable().optional(),
            referenceAssociatedId: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            referenceStatus: z.string().nullable().optional(),
            referenceType: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdRelationshipsRelationshipId = (
  args: UseGetApiTenanciesIdRelationshipsRelationshipIdArgs,
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRelationshipsRelationshipIdFn(args),
  })

  return result
}
export type UseGetApiTenanciesIdChecksArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
  type?: string | undefined
  status?: Array<'needed' | 'notNeeded' | 'arranged' | 'completed'> | undefined
}
export const getApiTenanciesIdChecksFn = async ({
  id,
  pageSize,
  pageNumber,
  type,
  status,
}: UseGetApiTenanciesIdChecksArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/checks${querySerialiser({ args: { pageSize, pageNumber, type, status }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            status: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            checkTypeId: z.string().nullable().optional(),
            tenancyId: z.string().nullable().optional(),
            metadata: z.record(z.string(), z.object({})).nullable().optional(),
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdChecks = (args: UseGetApiTenanciesIdChecksArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdChecksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiTenanciesIdChecksArgs = {
  id: string
  body: /** Request body used to create a new tenancy check */
  {
    description?: /** Short, descriptive text describing the purpose of the check. This should be populated
when creating a custom tenancy check that does not match any of the existing pre-configured
tenancy check options.
Description and CheckTypeId must not be supplied in the same payload, but at least one must be provided */
    string | undefined
    type: /** The type of the tenancy check (preTenancy/postTenancy) */ string
    status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string
    checkTypeId?: /** The identifier of the pre-configured tenancy check. This should be populated
when an existing tenancy check configuration is desired, rather than a custom one
CheckTypeId and Description must not be supplied in the same payload, but at least one must be provided */
    string | undefined
    metadata?: /** App specific metadata to set against the tenancy check */
    Record<string, Record<string, never>> | undefined
  }
}
export const postApiTenanciesIdChecksFn = async ({ id, body }: UsePostApiTenanciesIdChecksArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/checks${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePostApiTenanciesIdChecks = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiTenanciesIdChecksFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdChecksCheckIdArgs = { id: string; checkId: string }
export const getApiTenanciesIdChecksCheckIdFn = async ({ id, checkId }: UseGetApiTenanciesIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      status: z.string().nullable().optional(),
      type: z.string().nullable().optional(),
      checkTypeId: z.string().nullable().optional(),
      tenancyId: z.string().nullable().optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdChecksCheckId = (args: UseGetApiTenanciesIdChecksCheckIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdChecksCheckIdFn(args),
  })

  return result
}
export type UseDeleteApiTenanciesIdChecksCheckIdArgs = { id: string; checkId: string }
export const deleteApiTenanciesIdChecksCheckIdFn = async ({
  id,
  checkId,
}: UseDeleteApiTenanciesIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id, checkId }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const useDeleteApiTenanciesIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UsePatchApiTenanciesIdChecksCheckIdArgs = {
  'If-Match'?: string
  id: string
  checkId: string
  body: /** Model for updat of an existing tenancy check */
  {
    status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string | undefined
    metadata?: /** App specific metadata to set against the tenancy check */
    Record<string, Record<string, never>> | undefined
  }
}
export const patchApiTenanciesIdChecksCheckIdFn = async ({
  'If-Match': IfMatch,
  id,
  checkId,
  body,
}: UsePatchApiTenanciesIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, checkId, body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePatchApiTenanciesIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdBreakClausesArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdBreakClausesFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdBreakClausesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/breakClauses${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            clauseTypeId: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            active: z.string().nullable().optional(),
            appliesTo: z.string().nullable().optional(),
            letterText: z.string().nullable().optional(),
            breakFrom: z
              .object({ date: z.string().nullable().optional(), minTermMonths: z.number().int().nullable().optional() })
              .nullable()
              .optional(),
            noticeRequired: z
              .object({
                date: z.string().nullable().optional(),
                beforeBreakMonths: z.number().int().nullable().optional(),
              })
              .nullable()
              .optional(),
            agreements: z
              .object({ landlord: z.boolean().nullable().optional(), tenant: z.boolean().nullable().optional() })
              .nullable()
              .optional(),
            tenancyId: z.string().nullable().optional(),
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdBreakClauses = (args: UseGetApiTenanciesIdBreakClausesArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdBreakClausesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiTenanciesIdBreakClausesArgs = {
  id: string
  body: /** Request body used to update tenancy break clause */
  {
    typeId?: /** The identifier of the associated to the break clause */ string | undefined
    active?: /** The date the break clause becomes/became active */ string | undefined
    appliesTo?: /** The responsible party (landlord/tenant/mutual) */ string | undefined
    agreements?: /** Request body used to set party agreements to a specific clause in a tenancy agreement */
    | {
          landlord?: /** A flag to determine if the landlord has agreed */ boolean | undefined
          tenant?: /** A flag to determine if the tenant has agreed */ boolean | undefined
        }
      | undefined
    breakFrom?: /** Request body used to set a break clauses break from details */
    | {
          date?: /** The date the break from clause can be used */ string | undefined
          minTermMonths?: /** The minimum number of months until the break clause can be used */ number | undefined
        }
      | undefined
    noticeRequired?: /** Request body used to set a break clauses notice required details */
    | {
          date?: /** The date a break clauses notice is required by */ string | undefined
          beforeBreakMonths?: /** The number of months the notice is required before the break clause */
          number | undefined
        }
      | undefined
  }
}
export const postApiTenanciesIdBreakClausesFn = async ({ id, body }: UsePostApiTenanciesIdBreakClausesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/breakClauses${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePostApiTenanciesIdBreakClauses = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiTenanciesIdBreakClausesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdBreakClausesClauseIdArgs = { id: string; clauseId: string }
export const getApiTenanciesIdBreakClausesClauseIdFn = async ({
  id,
  clauseId,
}: UseGetApiTenanciesIdBreakClausesClauseIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/breakClauses/${clauseId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      clauseTypeId: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      active: z.string().nullable().optional(),
      appliesTo: z.string().nullable().optional(),
      letterText: z.string().nullable().optional(),
      breakFrom: z
        .object({ date: z.string().nullable().optional(), minTermMonths: z.number().int().nullable().optional() })
        .nullable()
        .optional(),
      noticeRequired: z
        .object({ date: z.string().nullable().optional(), beforeBreakMonths: z.number().int().nullable().optional() })
        .nullable()
        .optional(),
      agreements: z
        .object({ landlord: z.boolean().nullable().optional(), tenant: z.boolean().nullable().optional() })
        .nullable()
        .optional(),
      tenancyId: z.string().nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdBreakClausesClauseId = (args: UseGetApiTenanciesIdBreakClausesClauseIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdBreakClausesClauseIdFn(args),
  })

  return result
}
export type UseDeleteApiTenanciesIdBreakClausesClauseIdArgs = { id: string; clauseId: string }
export const deleteApiTenanciesIdBreakClausesClauseIdFn = async ({
  id,
  clauseId,
}: UseDeleteApiTenanciesIdBreakClausesClauseIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/breakClauses/${clauseId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id, clauseId }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const useDeleteApiTenanciesIdBreakClausesClauseId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdBreakClausesClauseIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UsePatchApiTenanciesIdBreakClausesClauseIdArgs = {
  'If-Match'?: string
  id: string
  clauseId: string
  body: /** Request body used to update tenancy break clause */
  {
    active?: /** The date the break clause becomes/became active */ string | undefined
    appliesTo?: /** The responsible party (landlord/tenant/mutual) */ string | undefined
    agreements?: /** Request body used to set party agreements to a specific clause in a tenancy agreement */
    | {
          landlord?: /** A flag to determine if the landlord has agreed */ boolean | undefined
          tenant?: /** A flag to determine if the tenant has agreed */ boolean | undefined
        }
      | undefined
    breakFrom?: /** Request body used to set a break clauses break from details */
    | {
          date?: /** The date the break from clause can be used */ string | undefined
          minTermMonths?: /** The minimum number of months until the break clause can be used */ number | undefined
        }
      | undefined
    noticeRequired?: /** Request body used to set a break clauses notice required details */
    | {
          date?: /** The date a break clauses notice is required by */ string | undefined
          beforeBreakMonths?: /** The number of months the notice is required before the break clause */
          number | undefined
        }
      | undefined
  }
}
export const patchApiTenanciesIdBreakClausesClauseIdFn = async ({
  'If-Match': IfMatch,
  id,
  clauseId,
  body,
}: UsePatchApiTenanciesIdBreakClausesClauseIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/breakClauses/${clauseId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, clauseId, body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePatchApiTenanciesIdBreakClausesClauseId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdBreakClausesClauseIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdAllowancesArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdAllowancesFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdAllowancesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/allowances${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            typeId: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            state: z.string().nullable().optional(),
            agreements: z
              .object({ landlord: z.boolean().nullable().optional(), tenant: z.boolean().nullable().optional() })
              .nullable()
              .optional(),
            letterText: z.string().nullable().optional(),
            tenancyId: z.string().nullable().optional(),
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdAllowances = (args: UseGetApiTenanciesIdAllowancesArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdAllowancesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiTenanciesIdAllowancesArgs = {
  id: string
  body: /** Request body used to set a tenancy allowance */
  {
    typeId?: /** The identifier of the associated to the allowance */ string | undefined
    state?: /** The state of the allowance (allowed/notAllowed) */ string | undefined
    agreements?: /** Request body used to set party agreements to a specific clause in a tenancy agreement */
    | {
          landlord?: /** A flag to determine if the landlord has agreed */ boolean | undefined
          tenant?: /** A flag to determine if the tenant has agreed */ boolean | undefined
        }
      | undefined
  }
}
export const postApiTenanciesIdAllowancesFn = async ({ id, body }: UsePostApiTenanciesIdAllowancesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/allowances${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePostApiTenanciesIdAllowances = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiTenanciesIdAllowancesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdAllowancesAllowanceIdArgs = { id: string; allowanceId: string }
export const getApiTenanciesIdAllowancesAllowanceIdFn = async ({
  id,
  allowanceId,
}: UseGetApiTenanciesIdAllowancesAllowanceIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/allowances/${allowanceId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      typeId: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      state: z.string().nullable().optional(),
      agreements: z
        .object({ landlord: z.boolean().nullable().optional(), tenant: z.boolean().nullable().optional() })
        .nullable()
        .optional(),
      letterText: z.string().nullable().optional(),
      tenancyId: z.string().nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdAllowancesAllowanceId = (args: UseGetApiTenanciesIdAllowancesAllowanceIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdAllowancesAllowanceIdFn(args),
  })

  return result
}
export type UseDeleteApiTenanciesIdAllowancesAllowanceIdArgs = { id: string; allowanceId: string }
export const deleteApiTenanciesIdAllowancesAllowanceIdFn = async ({
  id,
  allowanceId,
}: UseDeleteApiTenanciesIdAllowancesAllowanceIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/allowances/${allowanceId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id, allowanceId }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const useDeleteApiTenanciesIdAllowancesAllowanceId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdAllowancesAllowanceIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UsePatchApiTenanciesIdAllowancesAllowanceIdArgs = {
  'If-Match'?: string
  id: string
  allowanceId: string
  body: /** Request body used to update tenancy allowance */
  {
    state?: /** The state of the allowance (allowed/notAllowed) */ string | undefined
    agreements?: /** Request body used to set party agreements to a specific clause in a tenancy agreement */
    | {
          landlord?: /** A flag to determine if the landlord has agreed */ boolean | undefined
          tenant?: /** A flag to determine if the tenant has agreed */ boolean | undefined
        }
      | undefined
  }
}
export const patchApiTenanciesIdAllowancesAllowanceIdFn = async ({
  'If-Match': IfMatch,
  id,
  allowanceId,
  body,
}: UsePatchApiTenanciesIdAllowancesAllowanceIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/allowances/${allowanceId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, allowanceId, body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePatchApiTenanciesIdAllowancesAllowanceId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdAllowancesAllowanceIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdResponsibilitiesArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdResponsibilitiesFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdResponsibilitiesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/responsibilities${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            typeId: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            appliesTo: z.string().nullable().optional(),
            agreements: z
              .object({ landlord: z.boolean().nullable().optional(), tenant: z.boolean().nullable().optional() })
              .nullable()
              .optional(),
            letterText: z.string().nullable().optional(),
            tenancyId: z.string().nullable().optional(),
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdResponsibilities = (args: UseGetApiTenanciesIdResponsibilitiesArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdResponsibilitiesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiTenanciesIdResponsibilitiesArgs = {
  id: string
  body: /** Request body used to set a tenancy responsibility */
  {
    typeId?: /** The identifier of the associated to the responsibility */ string | undefined
    appliesTo?: /** The responsible party (landlord/tenant) */ string | undefined
    agreements?: /** Request body used to set party agreements to a specific clause in a tenancy agreement */
    | {
          landlord?: /** A flag to determine if the landlord has agreed */ boolean | undefined
          tenant?: /** A flag to determine if the tenant has agreed */ boolean | undefined
        }
      | undefined
  }
}
export const postApiTenanciesIdResponsibilitiesFn = async ({ id, body }: UsePostApiTenanciesIdResponsibilitiesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/responsibilities${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePostApiTenanciesIdResponsibilities = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiTenanciesIdResponsibilitiesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdResponsibilitiesResponsibilityIdArgs = { id: string; responsibilityId: string }
export const getApiTenanciesIdResponsibilitiesResponsibilityIdFn = async ({
  id,
  responsibilityId,
}: UseGetApiTenanciesIdResponsibilitiesResponsibilityIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/responsibilities/${responsibilityId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      typeId: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      appliesTo: z.string().nullable().optional(),
      agreements: z
        .object({ landlord: z.boolean().nullable().optional(), tenant: z.boolean().nullable().optional() })
        .nullable()
        .optional(),
      letterText: z.string().nullable().optional(),
      tenancyId: z.string().nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdResponsibilitiesResponsibilityId = (
  args: UseGetApiTenanciesIdResponsibilitiesResponsibilityIdArgs,
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdResponsibilitiesResponsibilityIdFn(args),
  })

  return result
}
export type UseDeleteApiTenanciesIdResponsibilitiesResponsibilityIdArgs = { id: string; responsibilityId: string }
export const deleteApiTenanciesIdResponsibilitiesResponsibilityIdFn = async ({
  id,
  responsibilityId,
}: UseDeleteApiTenanciesIdResponsibilitiesResponsibilityIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/responsibilities/${responsibilityId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ id, responsibilityId }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const useDeleteApiTenanciesIdResponsibilitiesResponsibilityId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdResponsibilitiesResponsibilityIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UsePatchApiTenanciesIdResponsibilitiesResponsibilityIdArgs = {
  'If-Match'?: string
  id: string
  responsibilityId: string
  body: /** Request body used to update tenancy responsibility */
  {
    appliesTo?: /** The responsible party (landlord/tenant) */ string | undefined
    agreements?: /** Request body used to set party agreements to a specific clause in a tenancy agreement */
    | {
          landlord?: /** A flag to determine if the landlord has agreed */ boolean | undefined
          tenant?: /** A flag to determine if the tenant has agreed */ boolean | undefined
        }
      | undefined
  }
}
export const patchApiTenanciesIdResponsibilitiesResponsibilityIdFn = async ({
  'If-Match': IfMatch,
  id,
  responsibilityId,
  body,
}: UsePatchApiTenanciesIdResponsibilitiesResponsibilityIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/responsibilities/${responsibilityId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, responsibilityId, body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePatchApiTenanciesIdResponsibilitiesResponsibilityId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdResponsibilitiesResponsibilityIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdRenewalNegotiationsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdRenewalNegotiationsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdRenewalNegotiationsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            startDate: z.string().nullable().optional(),
            endDate: z.string().nullable().optional(),
            status: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            rent: z.number().nullable().optional(),
            rentFrequency: z.string().nullable().optional(),
            rentChange: z
              .object({ amount: z.number().nullable().optional(), percentage: z.number().nullable().optional() })
              .nullable()
              .optional(),
            tenancyId: z.string().nullable().optional(),
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
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdRenewalNegotiations = (args: UseGetApiTenanciesIdRenewalNegotiationsArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRenewalNegotiationsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiTenanciesIdRenewalNegotiationsArgs = {
  id: string
  body: /** Request body used to create a tenancy renewal negotiation */
  {
    startDate?: /** The proposed start date of the tenancy renewal */ string | undefined
    endDate?: /** The proposed end date of the tenancy renewal */ string | undefined
    negotiatorId?: /** The unique identifier of the negotiator who is managing this tenancy renewal */
    string | undefined
    rent?: /** The amount of rent required, returned in relation to the collection frequency */ number | undefined
    rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */ string | undefined
    lettingFee?: /** Request body used to create a tenancy renewals letting fee */
    | {
          type?: /** The letting fee type (fixed/perentage) */ string | undefined
          amount?: /** The letting fee amount as a fixed price or percentage based on the `type` */ number | undefined
          frequency?: /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
          string | undefined
        }
      | undefined
    managementFee?: /** Request body used to create a tenancy renewals management fee */
    | {
          type?: /** The mangement fee type (fixed/perentage) */ string | undefined
          amount?: /** The mangement fee amount as a fixed price or percentage based on the `type` */ number | undefined
          frequency?: /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
          string | undefined
        }
      | undefined
  }
}
export const postApiTenanciesIdRenewalNegotiationsFn = async ({
  id,
  body,
}: UsePostApiTenanciesIdRenewalNegotiationsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePostApiTenanciesIdRenewalNegotiations = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiTenanciesIdRenewalNegotiationsFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdRenewalNegotiationsRenewalIdArgs = { id: string; renewalId: string }
export const getApiTenanciesIdRenewalNegotiationsRenewalIdFn = async ({
  id,
  renewalId,
}: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            startDate: z.string().nullable().optional(),
            endDate: z.string().nullable().optional(),
            status: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            rent: z.number().nullable().optional(),
            rentFrequency: z.string().nullable().optional(),
            rentChange: z
              .object({ amount: z.number().nullable().optional(), percentage: z.number().nullable().optional() })
              .nullable()
              .optional(),
            tenancyId: z.string().nullable().optional(),
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
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdRenewalNegotiationsRenewalId = (
  args: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdArgs,
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRenewalNegotiationsRenewalIdFn(args),
  })

  return result
}
export type UsePatchApiTenanciesIdRenewalNegotiationsRenewalIdArgs = {
  'If-Match'?: string
  id: string
  renewalId: string
  body: /** Request body used to update a tenancy renewal negotiation */
  {
    startDate?: /** The proposed start date of the tenancy renewal */ string | undefined
    endDate?: /** The proposed end date of the tenancy renewal */ string | undefined
    negotiatorId?: /** The unique identifier of the negotiator who is managing this tenancy renewal */
    string | undefined
    rent?: /** The amount of rent required, returned in relation to the collection frequency */ number | undefined
    rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */ string | undefined
    lettingFee?: /** Request body used to update a tenancy renewals letting fee */
    | {
          type?: /** The letting fee type (fixed/perentage) */ string | undefined
          amount?: /** The letting fee amount as a fixed price or percentage based on the `type` */ number | undefined
          frequency?: /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
          string | undefined
        }
      | undefined
    managementFee?: /** Request body used to update a tenancy renewals management fee */
    | {
          type?: /** The mangement fee type (fixed/perentage) */ string | undefined
          amount?: /** The mangement fee amount as a fixed price or percentage based on the `type` */ number | undefined
          frequency?: /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
          string | undefined
        }
      | undefined
  }
}
export const patchApiTenanciesIdRenewalNegotiationsRenewalIdFn = async ({
  'If-Match': IfMatch,
  id,
  renewalId,
  body,
}: UsePatchApiTenanciesIdRenewalNegotiationsRenewalIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, renewalId, body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePatchApiTenanciesIdRenewalNegotiationsRenewalId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdRenewalNegotiationsRenewalIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdExtensionsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdExtensionsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdExtensionsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/extensions${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            startDate: z.string().nullable().optional(),
            endDate: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            rent: z.number().nullable().optional(),
            rentFrequency: z.string().nullable().optional(),
            tenancyId: z.string().nullable().optional(),
            fee: z
              .object({
                amount: z.number().nullable().optional(),
                summary: z.string().nullable().optional(),
                type: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdExtensions = (args: UseGetApiTenanciesIdExtensionsArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdExtensionsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiTenanciesIdExtensionsExtensionIdArgs = { id: string; extensionId: string }
export const getApiTenanciesIdExtensionsExtensionIdFn = async ({
  id,
  extensionId,
}: UseGetApiTenanciesIdExtensionsExtensionIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/extensions/${extensionId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            startDate: z.string().nullable().optional(),
            endDate: z.string().nullable().optional(),
            type: z.string().nullable().optional(),
            negotiatorId: z.string().nullable().optional(),
            rent: z.number().nullable().optional(),
            rentFrequency: z.string().nullable().optional(),
            tenancyId: z.string().nullable().optional(),
            fee: z
              .object({
                amount: z.number().nullable().optional(),
                summary: z.string().nullable().optional(),
                type: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdExtensionsExtensionId = (args: UseGetApiTenanciesIdExtensionsExtensionIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdExtensionsExtensionIdFn(args),
  })

  return result
}
export type UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs = {
  id: string
  renewalId: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn = async ({
  id,
  renewalId,
  pageSize,
  pageNumber,
}: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}/checks${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            _embedded: z.record(z.string(), z.object({})).nullable().optional(),
            id: z.string().nullable().optional(),
            created: z.string().nullable().optional(),
            modified: z.string().nullable().optional(),
            status: z.string().nullable().optional(),
            description: z.string().nullable().optional(),
            checkTypeId: z.string().nullable().optional(),
            tenancyId: z.string().nullable().optional(),
            renewalId: z.string().nullable().optional(),
            metadata: z.record(z.string(), z.object({})).nullable().optional(),
            _eTag: z.string().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
      pageNumber: z.number().int().nullable().optional(),
      pageSize: z.number().int().nullable().optional(),
      pageCount: z.number().int().nullable().optional(),
      totalPageCount: z.number().int().nullable().optional(),
      totalCount: z.number().int().nullable().optional(),
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecks = (
  args: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs,
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs = {
  id: string
  renewalId: string
  body: /** Request body used to create a new tenancy renewal check */
  {
    status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string
    checkTypeId?: /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
    string | undefined
    description?: /** The name of this tenancy check */ string | undefined
    metadata?: /** App specific metadata to set against the tenancy renewal check */
    Record<string, Record<string, never>> | undefined
  }
}
export const postApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn = async ({
  id,
  renewalId,
  body,
}: UsePostApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}/checks${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'POST',
      body: JSON.stringify({ id, renewalId, body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePostApiTenanciesIdRenewalNegotiationsRenewalIdChecks = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs = {
  id: string
  renewalId: string
  checkId: string
}
export const getApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn = async ({
  id,
  renewalId,
  checkId,
}: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z
    .object({
      _links: z
        .record(z.string(), z.object({ href: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      _embedded: z.record(z.string(), z.object({})).nullable().optional(),
      id: z.string().nullable().optional(),
      created: z.string().nullable().optional(),
      modified: z.string().nullable().optional(),
      status: z.string().nullable().optional(),
      description: z.string().nullable().optional(),
      checkTypeId: z.string().nullable().optional(),
      tenancyId: z.string().nullable().optional(),
      renewalId: z.string().nullable().optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
    })
    .parse(data)
}
export const useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId = (
  args: UseGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs,
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn(args),
  })

  return result
}
export type UseDeleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs = {
  'If-Match'?: string
  id: string
  renewalId: string
  checkId: string
}
export const deleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn = async ({
  'If-Match': IfMatch,
  id,
  renewalId,
  checkId,
}: UseDeleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ 'If-Match': IfMatch, id, renewalId, checkId }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const useDeleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
export type UsePatchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs = {
  'If-Match'?: string
  id: string
  renewalId: string
  checkId: string
  body: /** Request body used to update a tenancy renewal check */
  {
    status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */ string | undefined
    metadata?: /** App specific metadata to set against the tenancy renewal check */
    Record<string, Record<string, never>> | undefined
  }
}
export const patchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn = async ({
  'If-Match': IfMatch,
  id,
  renewalId,
  checkId,
  body,
}: UsePatchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/tenancies/${id}/renewalNegotiations/${renewalId}/checks/${checkId}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ 'If-Match': IfMatch, id, renewalId, checkId, body }),
      headers: {
        'api-version': 'latest',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.void().parse(data)
}
export const usePatchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    },
  })
}
