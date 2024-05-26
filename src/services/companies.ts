import { z } from 'zod'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type UseGetApiCompaniesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'companyTypes' | 'relationships'> | undefined
  id?: Array<string> | undefined
  address?: string | undefined
  branch?: string | undefined
  name?: string | undefined
  typeId?: string | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  contactDetail?: Array<string> | undefined
  fromArchive?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
}
export const getApiCompaniesFn = async ({
  pageSize,
  pageNumber,
  sortBy,
  embed,
  id,
  address,
  branch,
  name,
  typeId,
  negotiatorId,
  officeId,
  contactDetail,
  fromArchive,
  createdFrom,
  createdTo,
  modifiedFrom,
  modifiedTo,
  metadata,
}: UseGetApiCompaniesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/companies/${querySerialiser({ args: { pageSize, pageNumber, sortBy, embed, id, address, branch, name, typeId, negotiatorId, officeId, contactDetail, fromArchive, createdFrom, createdTo, modifiedFrom, modifiedTo, metadata }, options: defaultQuerySerialiserOptions })}`,
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
            name: z.string().nullable().optional(),
            branch: z.string().nullable().optional(),
            notes: z.string().nullable().optional(),
            active: z.boolean().nullable().optional(),
            marketingConsent: z.string().nullable().optional(),
            vatRegistered: z.boolean().nullable().optional(),
            typeIds: z.array(z.string()).nullable().optional(),
            supplierTypeId: z.string().nullable().optional(),
            workPhone: z.string().nullable().optional(),
            mobilePhone: z.string().nullable().optional(),
            email: z.string().nullable().optional(),
            archivedOn: z.string().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
            address: z
              .object({
                buildingName: z.string().nullable().optional(),
                buildingNumber: z.string().nullable().optional(),
                line1: z.string().nullable().optional(),
                line2: z.string().nullable().optional(),
                line3: z.string().nullable().optional(),
                line4: z.string().nullable().optional(),
                postcode: z.string().nullable().optional(),
                country: z.string().nullable().optional(),
              })
              .nullable()
              .optional(),
            payments: z.object({ nominalAccountId: z.string().nullable().optional() }).nullable().optional(),
            additionalContactDetails: z
              .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
              .nullable()
              .optional(),
            officeIds: z.array(z.string()).nullable().optional(),
            negotiatorIds: z.array(z.string()).nullable().optional(),
            communicationPreferenceLetter: z.boolean().nullable().optional(),
            communicationPreferenceEmail: z.boolean().nullable().optional(),
            communicationPreferencePhone: z.boolean().nullable().optional(),
            communicationPreferenceSms: z.boolean().nullable().optional(),
            metadata: z.record(z.string(), z.object({})).nullable().optional(),
            _eTag: z.string().nullable().optional(),
            relationships: z
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
                  companyId: z.string().nullable().optional(),
                  associatedType: z.string().nullable().optional(),
                  associatedId: z.string().nullable().optional(),
                  fromArchive: z.boolean().nullable().optional(),
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
export const useGetApiCompanies = (args: UseGetApiCompaniesArgs) => {
  const result = useQuery({
    queryKey: ['Companies'],
    queryFn: () => getApiCompaniesFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UsePostApiCompaniesArgs = {
  body: /** Request body used to create a new company */
  {
    name: /** The name of the company */ string
    branch?: /** The branch name of the company */ string | undefined
    notes?: /** A free text field containing notes that describe the company's business or service offering */
    string | undefined
    active?: /** A flag determining whether or not the company is currently active */ boolean | undefined
    marketingConsent?: /** The marketing consent status of the company (deny/notAsked) */ string | undefined
    vatRegistered?: /** A flag determining whether or not the company is VAT registered */ boolean | undefined
    typeIds: /** A collection of unique identifiers of company types that categorise the type of business the company operates */
    Array<string>
    supplierTypeId?: /** The unique identifier of a supplier type, if the company is a supplier */ string | undefined
    workPhone?: /** The work phone number of the company. (Required when no other company or address details are provided) */
    string | undefined
    mobilePhone?: /** The mobile phone number of the company. (Required when no other company or address details are provided) */
    string | undefined
    email?: /** The email address of the company. (Required when no other company or address details are provided) */
    string | undefined
    address?: /** Request body to set the address of a new company */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
        }
      | undefined
    communicationPreferenceLetter?: /** A flag determining whether or not the company is happy to receive communications by letter */
    boolean | undefined
    communicationPreferenceEmail?: /** A flag determining whether or not the company is happy to receive communications by email */
    boolean | undefined
    communicationPreferencePhone?: /** A flag determining whether or not the company is happy to receive communications by phone */
    boolean | undefined
    communicationPreferenceSms?: /** A flag determining whether or not the company is happy to receive communications by SMS */
    boolean | undefined
    metadata?: /** App specific metadata to set against the company */ Record<string, Record<string, never>> | undefined
  }
}
export const postApiCompaniesFn = async ({ body }: UsePostApiCompaniesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/companies/${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePostApiCompanies = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: postApiCompaniesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Companies'] })
    },
  })
}
export type UseGetApiCompaniesIdArgs = { id: string; embed?: Array<'companyTypes' | 'relationships'> | undefined }
export const getApiCompaniesIdFn = async ({ id, embed }: UseGetApiCompaniesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/companies/${id}${querySerialiser({ args: { embed }, options: defaultQuerySerialiserOptions })}`,
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
      name: z.string().nullable().optional(),
      branch: z.string().nullable().optional(),
      notes: z.string().nullable().optional(),
      active: z.boolean().nullable().optional(),
      marketingConsent: z.string().nullable().optional(),
      vatRegistered: z.boolean().nullable().optional(),
      typeIds: z.array(z.string()).nullable().optional(),
      supplierTypeId: z.string().nullable().optional(),
      workPhone: z.string().nullable().optional(),
      mobilePhone: z.string().nullable().optional(),
      email: z.string().nullable().optional(),
      archivedOn: z.string().nullable().optional(),
      fromArchive: z.boolean().nullable().optional(),
      address: z
        .object({
          buildingName: z.string().nullable().optional(),
          buildingNumber: z.string().nullable().optional(),
          line1: z.string().nullable().optional(),
          line2: z.string().nullable().optional(),
          line3: z.string().nullable().optional(),
          line4: z.string().nullable().optional(),
          postcode: z.string().nullable().optional(),
          country: z.string().nullable().optional(),
        })
        .nullable()
        .optional(),
      payments: z.object({ nominalAccountId: z.string().nullable().optional() }).nullable().optional(),
      additionalContactDetails: z
        .array(z.object({ type: z.string().nullable().optional(), value: z.string().nullable().optional() }))
        .nullable()
        .optional(),
      officeIds: z.array(z.string()).nullable().optional(),
      negotiatorIds: z.array(z.string()).nullable().optional(),
      communicationPreferenceLetter: z.boolean().nullable().optional(),
      communicationPreferenceEmail: z.boolean().nullable().optional(),
      communicationPreferencePhone: z.boolean().nullable().optional(),
      communicationPreferenceSms: z.boolean().nullable().optional(),
      metadata: z.record(z.string(), z.object({})).nullable().optional(),
      _eTag: z.string().nullable().optional(),
      relationships: z
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
            companyId: z.string().nullable().optional(),
            associatedType: z.string().nullable().optional(),
            associatedId: z.string().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
          }),
        )
        .nullable()
        .optional(),
    })
    .parse(data)
}
export const useGetApiCompaniesId = (args: UseGetApiCompaniesIdArgs) => {
  const result = useQuery({
    queryKey: ['Companies'],
    queryFn: () => getApiCompaniesIdFn(args),
  })

  return result
}
export type UsePatchApiCompaniesIdArgs = {
  'If-Match'?: string
  id: string
  body: /** Request body used to update an existing company */
  {
    name?: /** The name of the company */ string | undefined
    branch?: /** The branch name of the company */ string | undefined
    notes?: /** A free text field containing notes that describe the company's business or service offering */
    string | undefined
    active?: /** A flag determining whether or not the company is currently active */ boolean | undefined
    marketingConsent?: /** The marketing consent status of the company (deny/notAsked) */ string | undefined
    vatRegistered?: /** A flag determining whether or not the company is VAT registered */ boolean | undefined
    typeIds?: /** A collection of unique identifiers of company types that categorise the type of business the company operates */
    Array<string> | undefined
    supplierTypeId?: /** The unique identifier of a supplier type, if the company is a supplier */ string | undefined
    workPhone?: /** The work phone number of the company */ string | undefined
    mobilePhone?: /** The mobile phone number of the company */ string | undefined
    email?: /** The email address of the company */ string | undefined
    address?: /** Request body to set the address of an existing company */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */ string | undefined
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the address resides within */ string | undefined
        }
      | undefined
    communicationPreferenceLetter?: /** A flag determining whether or not the company is happy to receive communications by letter */
    boolean | undefined
    communicationPreferenceEmail?: /** A flag determining whether or not the company is happy to receive communications by email */
    boolean | undefined
    communicationPreferencePhone?: /** A flag determining whether or not the company is happy to receive communications by phone */
    boolean | undefined
    communicationPreferenceSms?: /** A flag determining whether or not the company is happy to receive communications by SMS */
    boolean | undefined
    metadata?: /** App specific metadata to set against the company */ Record<string, Record<string, never>> | undefined
  }
}
export const patchApiCompaniesIdFn = async ({ 'If-Match': IfMatch, id, body }: UsePatchApiCompaniesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/companies/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
export const usePatchApiCompaniesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiCompaniesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Companies'] })
    },
  })
}
export type UseGetApiCompaniesIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export const getApiCompaniesIdRelationshipsFn = async ({
  id,
  pageSize,
  pageNumber,
}: UseGetApiCompaniesIdRelationshipsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/companies/${id}/relationships${querySerialiser({ args: { pageSize, pageNumber }, options: defaultQuerySerialiserOptions })}`,
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
            companyId: z.string().nullable().optional(),
            associatedType: z.string().nullable().optional(),
            associatedId: z.string().nullable().optional(),
            fromArchive: z.boolean().nullable().optional(),
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
export const useGetApiCompaniesIdRelationships = (args: UseGetApiCompaniesIdRelationshipsArgs) => {
  const result = useQuery({
    queryKey: ['Companies'],
    queryFn: () => getApiCompaniesIdRelationshipsFn(args),
    placeholderData: keepPreviousData,
  })

  return result
}
export type UseGetApiCompaniesIdStaffMembersArgs = { id: string }
export const getApiCompaniesIdStaffMembersFn = async ({ id }: UseGetApiCompaniesIdStaffMembersArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/companies/${id}/staffMembers${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
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
            name: z.string().nullable().optional(),
            active: z.boolean().nullable().optional(),
            jobTitle: z.string().nullable().optional(),
            workPhone: z.string().nullable().optional(),
            mobilePhone: z.string().nullable().optional(),
            email: z.string().nullable().optional(),
            salutation: z.string().nullable().optional(),
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
export const useGetApiCompaniesIdStaffMembers = (args: UseGetApiCompaniesIdStaffMembersArgs) => {
  const result = useQuery({
    queryKey: ['Companies'],
    queryFn: () => getApiCompaniesIdStaffMembersFn(args),
  })

  return result
}
