import {
  typeModel,
  listItemModel,
  certificateTypeModel,
  listItemDetailModel,
  terminologyModel,
} from '@/schemas/index.ts'
import { querySerialiser, defaultQuerySerialiserOptions } from '@/lib/querySerialiser'
import { useQuery } from '@tanstack/react-query'
import { z } from 'zod'

export type UseGetApiConfigurationTypesArgs = {
  type?:
    | Array<
        | 'agencyTypes'
        | 'appointmentTypes'
        | 'applicantStatuses'
        | 'boardStatuses'
        | 'buyingPositions'
        | 'buyingReasons'
        | 'certificateTypes'
        | 'companyTypes'
        | 'contactCategories'
        | 'identityDocumentTypes'
        | 'documentTypes'
        | 'journalEntryTypes'
        | 'keyTypes'
        | 'followUpResponses'
        | 'sellingReasons'
        | 'rentInsuranceCancellationReasons'
        | 'rentingPositions'
        | 'supplierTypes'
        | 'taskTypes'
        | 'tenancyLegalStatuses'
        | 'tenancyTypes'
        | 'vendorTypes'
        | 'worksOrderTypes'
      >
    | undefined
}
export const getApiConfigurationTypesFn = async ({ type }: UseGetApiConfigurationTypesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/types${querySerialiser({ args: { type }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return typeModel.parse(data)
}
export const useGetApiConfigurationTypes = ({ type }: UseGetApiConfigurationTypesArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', type],
    queryFn: () => getApiConfigurationTypesFn({ type }),
  })

  return result
}
export type UseGetApiConfigurationAgencyTypesArgs = void
export const getApiConfigurationAgencyTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/agencyTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationAgencyTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationAgencyTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationAgencyTypesIdArgs = { id: string }
export const getApiConfigurationAgencyTypesIdFn = async ({ id }: UseGetApiConfigurationAgencyTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/agencyTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationAgencyTypesId = ({ id }: UseGetApiConfigurationAgencyTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationAgencyTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationApplicantStatusesIdArgs = { id: string }
export const getApiConfigurationApplicantStatusesIdFn = async ({
  id,
}: UseGetApiConfigurationApplicantStatusesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/applicantStatuses/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationApplicantStatusesId = ({ id }: UseGetApiConfigurationApplicantStatusesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationApplicantStatusesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationApplicantStatusesArgs = { id?: Array<string> | undefined }
export const getApiConfigurationApplicantStatusesFn = async ({ id }: UseGetApiConfigurationApplicantStatusesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/applicantStatuses${querySerialiser({ args: { id }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationApplicantStatuses = ({ id }: UseGetApiConfigurationApplicantStatusesArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationApplicantStatusesFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationAppointmentTypesArgs = void
export const getApiConfigurationAppointmentTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/appointmentTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationAppointmentTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationAppointmentTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationAppointmentTypesIdArgs = { id: string }
export const getApiConfigurationAppointmentTypesIdFn = async ({ id }: UseGetApiConfigurationAppointmentTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/appointmentTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationAppointmentTypesId = ({ id }: UseGetApiConfigurationAppointmentTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationAppointmentTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationBoardStatusesArgs = void
export const getApiConfigurationBoardStatusesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/boardStatuses${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationBoardStatuses = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationBoardStatusesFn(),
  })

  return result
}
export type UseGetApiConfigurationBoardStatusesIdArgs = { id: string }
export const getApiConfigurationBoardStatusesIdFn = async ({ id }: UseGetApiConfigurationBoardStatusesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/boardStatuses/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationBoardStatusesId = ({ id }: UseGetApiConfigurationBoardStatusesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationBoardStatusesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationBuyingPositionsArgs = void
export const getApiConfigurationBuyingPositionsFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/buyingPositions${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationBuyingPositions = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationBuyingPositionsFn(),
  })

  return result
}
export type UseGetApiConfigurationBuyingPositionsIdArgs = { id: string }
export const getApiConfigurationBuyingPositionsIdFn = async ({ id }: UseGetApiConfigurationBuyingPositionsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/buyingPositions/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationBuyingPositionsId = ({ id }: UseGetApiConfigurationBuyingPositionsIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationBuyingPositionsIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationBuyingReasonsArgs = void
export const getApiConfigurationBuyingReasonsFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/buyingReasons${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationBuyingReasons = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationBuyingReasonsFn(),
  })

  return result
}
export type UseGetApiConfigurationCertificateTypesArgs = void
export const getApiConfigurationCertificateTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/certificateTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(certificateTypeModel).parse(data)
}
export const useGetApiConfigurationCertificateTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationCertificateTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationCertificateTypesIdArgs = { id: string }
export const getApiConfigurationCertificateTypesIdFn = async ({ id }: UseGetApiConfigurationCertificateTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/certificateTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return certificateTypeModel.parse(data)
}
export const useGetApiConfigurationCertificateTypesId = ({ id }: UseGetApiConfigurationCertificateTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationCertificateTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationCompanyTypesArgs = { id?: Array<string> | undefined }
export const getApiConfigurationCompanyTypesFn = async ({ id }: UseGetApiConfigurationCompanyTypesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/companyTypes${querySerialiser({ args: { id }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationCompanyTypes = ({ id }: UseGetApiConfigurationCompanyTypesArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationCompanyTypesFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationCompanyTypesIdArgs = { id: string }
export const getApiConfigurationCompanyTypesIdFn = async ({ id }: UseGetApiConfigurationCompanyTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/companyTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationCompanyTypesId = ({ id }: UseGetApiConfigurationCompanyTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationCompanyTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationContactCategoriesIdArgs = { id: string }
export const getApiConfigurationContactCategoriesIdFn = async ({
  id,
}: UseGetApiConfigurationContactCategoriesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/contactCategories/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationContactCategoriesId = ({ id }: UseGetApiConfigurationContactCategoriesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationContactCategoriesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationContactCategoriesArgs = { id?: Array<string> | undefined }
export const getApiConfigurationContactCategoriesFn = async ({ id }: UseGetApiConfigurationContactCategoriesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/contactCategories${querySerialiser({ args: { id }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationContactCategories = ({ id }: UseGetApiConfigurationContactCategoriesArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationContactCategoriesFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationDocumentTypesArgs = void
export const getApiConfigurationDocumentTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/documentTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationDocumentTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationDocumentTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationDocumentTypesIdArgs = { id: string }
export const getApiConfigurationDocumentTypesIdFn = async ({ id }: UseGetApiConfigurationDocumentTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/documentTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationDocumentTypesId = ({ id }: UseGetApiConfigurationDocumentTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationDocumentTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationFollowUpResponsesArgs = void
export const getApiConfigurationFollowUpResponsesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/followUpResponses${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationFollowUpResponses = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationFollowUpResponsesFn(),
  })

  return result
}
export type UseGetApiConfigurationFollowUpResponsesIdArgs = { id: string }
export const getApiConfigurationFollowUpResponsesIdFn = async ({
  id,
}: UseGetApiConfigurationFollowUpResponsesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/followUpResponses/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationFollowUpResponsesId = ({ id }: UseGetApiConfigurationFollowUpResponsesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationFollowUpResponsesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationIdentityDocumentTypesArgs = void
export const getApiConfigurationIdentityDocumentTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/identityDocumentTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationIdentityDocumentTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationIdentityDocumentTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationIdentityDocumentTypesIdArgs = { id: string }
export const getApiConfigurationIdentityDocumentTypesIdFn = async ({
  id,
}: UseGetApiConfigurationIdentityDocumentTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/identityDocumentTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationIdentityDocumentTypesId = ({
  id,
}: UseGetApiConfigurationIdentityDocumentTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationIdentityDocumentTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationJournalEntryTypesArgs = void
export const getApiConfigurationJournalEntryTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/journalEntryTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationJournalEntryTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationJournalEntryTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationJournalEntryTypesIdArgs = { id: string }
export const getApiConfigurationJournalEntryTypesIdFn = async ({
  id,
}: UseGetApiConfigurationJournalEntryTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/journalEntryTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationJournalEntryTypesId = ({ id }: UseGetApiConfigurationJournalEntryTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationJournalEntryTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationKeyTypesArgs = void
export const getApiConfigurationKeyTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/keyTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationKeyTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationKeyTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationKeyTypesIdArgs = { id: string }
export const getApiConfigurationKeyTypesIdFn = async ({ id }: UseGetApiConfigurationKeyTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/keyTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationKeyTypesId = ({ id }: UseGetApiConfigurationKeyTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationKeyTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationPortalTypesArgs = { id?: Array<string> | undefined }
export const getApiConfigurationPortalTypesFn = async ({ id }: UseGetApiConfigurationPortalTypesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/portalTypes${querySerialiser({ args: { id }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationPortalTypes = ({ id }: UseGetApiConfigurationPortalTypesArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationPortalTypesFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationPortalTypesIdArgs = { id: string }
export const getApiConfigurationPortalTypesIdFn = async ({ id }: UseGetApiConfigurationPortalTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/portalTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationPortalTypesId = ({ id }: UseGetApiConfigurationPortalTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationPortalTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationPreTenancyCheckTypesArgs = {
  active?: boolean | undefined
  officeId?: Array<string> | undefined
}
export const getApiConfigurationPreTenancyCheckTypesFn = async ({
  active,
  officeId,
}: UseGetApiConfigurationPreTenancyCheckTypesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/preTenancyCheckTypes${querySerialiser({ args: { active, officeId }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemDetailModel).parse(data)
}
export const useGetApiConfigurationPreTenancyCheckTypes = ({
  active,
  officeId,
}: UseGetApiConfigurationPreTenancyCheckTypesArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', active, officeId],
    queryFn: () => getApiConfigurationPreTenancyCheckTypesFn({ active, officeId }),
  })

  return result
}
export type UseGetApiConfigurationPreTenancyCheckTypesIdArgs = { id: string }
export const getApiConfigurationPreTenancyCheckTypesIdFn = async ({
  id,
}: UseGetApiConfigurationPreTenancyCheckTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/preTenancyCheckTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemDetailModel.parse(data)
}
export const useGetApiConfigurationPreTenancyCheckTypesId = ({
  id,
}: UseGetApiConfigurationPreTenancyCheckTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationPreTenancyCheckTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationPropertyServiceTypesArgs = void
export const getApiConfigurationPropertyServiceTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/propertyServiceTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationPropertyServiceTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationPropertyServiceTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationPropertyServiceTypesIdArgs = { id: string }
export const getApiConfigurationPropertyServiceTypesIdFn = async ({
  id,
}: UseGetApiConfigurationPropertyServiceTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/propertyServiceTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationPropertyServiceTypesId = ({
  id,
}: UseGetApiConfigurationPropertyServiceTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationPropertyServiceTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationRenewalCheckTypesArgs = {
  active?: boolean | undefined
  officeId?: Array<string> | undefined
}
export const getApiConfigurationRenewalCheckTypesFn = async ({
  active,
  officeId,
}: UseGetApiConfigurationRenewalCheckTypesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/renewalCheckTypes${querySerialiser({ args: { active, officeId }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemDetailModel).parse(data)
}
export const useGetApiConfigurationRenewalCheckTypes = ({
  active,
  officeId,
}: UseGetApiConfigurationRenewalCheckTypesArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', active, officeId],
    queryFn: () => getApiConfigurationRenewalCheckTypesFn({ active, officeId }),
  })

  return result
}
export type UseGetApiConfigurationRenewalCheckTypesIdArgs = { id: string }
export const getApiConfigurationRenewalCheckTypesIdFn = async ({
  id,
}: UseGetApiConfigurationRenewalCheckTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/renewalCheckTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemDetailModel.parse(data)
}
export const useGetApiConfigurationRenewalCheckTypesId = ({ id }: UseGetApiConfigurationRenewalCheckTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationRenewalCheckTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationRentInsuranceCancellationReasonsArgs = void
export const getApiConfigurationRentInsuranceCancellationReasonsFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/rentInsuranceCancellationReasons${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationRentInsuranceCancellationReasons = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationRentInsuranceCancellationReasonsFn(),
  })

  return result
}
export type UseGetApiConfigurationRentInsuranceCancellationReasonsIdArgs = { id: string }
export const getApiConfigurationRentInsuranceCancellationReasonsIdFn = async ({
  id,
}: UseGetApiConfigurationRentInsuranceCancellationReasonsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/rentInsuranceCancellationReasons/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationRentInsuranceCancellationReasonsId = ({
  id,
}: UseGetApiConfigurationRentInsuranceCancellationReasonsIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationRentInsuranceCancellationReasonsIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationRentingPositionsArgs = void
export const getApiConfigurationRentingPositionsFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/rentingPositions${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationRentingPositions = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationRentingPositionsFn(),
  })

  return result
}
export type UseGetApiConfigurationRentingPositionsIdArgs = { id: string }
export const getApiConfigurationRentingPositionsIdFn = async ({ id }: UseGetApiConfigurationRentingPositionsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/rentingPositions/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationRentingPositionsId = ({ id }: UseGetApiConfigurationRentingPositionsIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationRentingPositionsIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationRuralTenancyTypesArgs = void
export const getApiConfigurationRuralTenancyTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/ruralTenancyTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationRuralTenancyTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationRuralTenancyTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationRuralTenancyTypesIdArgs = { id: string }
export const getApiConfigurationRuralTenancyTypesIdFn = async ({
  id,
}: UseGetApiConfigurationRuralTenancyTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/ruralTenancyTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationRuralTenancyTypesId = ({ id }: UseGetApiConfigurationRuralTenancyTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationRuralTenancyTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationSellingReasonsArgs = void
export const getApiConfigurationSellingReasonsFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/sellingReasons${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationSellingReasons = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationSellingReasonsFn(),
  })

  return result
}
export type UseGetApiConfigurationSellingReasonsIdArgs = { id: string }
export const getApiConfigurationSellingReasonsIdFn = async ({ id }: UseGetApiConfigurationSellingReasonsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/sellingReasons/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationSellingReasonsId = ({ id }: UseGetApiConfigurationSellingReasonsIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationSellingReasonsIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationSupplierTypesArgs = void
export const getApiConfigurationSupplierTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/supplierTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationSupplierTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationSupplierTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationSupplierTypesIdArgs = { id: string }
export const getApiConfigurationSupplierTypesIdFn = async ({ id }: UseGetApiConfigurationSupplierTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/supplierTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationSupplierTypesId = ({ id }: UseGetApiConfigurationSupplierTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationSupplierTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationTaskTypesArgs = void
export const getApiConfigurationTaskTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/taskTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationTaskTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTaskTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationTaskTypesIdArgs = { id: string }
export const getApiConfigurationTaskTypesIdFn = async ({ id }: UseGetApiConfigurationTaskTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/taskTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationTaskTypesId = ({ id }: UseGetApiConfigurationTaskTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationTaskTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationTenancyLegalStatusesArgs = void
export const getApiConfigurationTenancyLegalStatusesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/tenancyLegalStatuses${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationTenancyLegalStatuses = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTenancyLegalStatusesFn(),
  })

  return result
}
export type UseGetApiConfigurationTenancyLegalStatusesIdArgs = { id: string }
export const getApiConfigurationTenancyLegalStatusesIdFn = async ({
  id,
}: UseGetApiConfigurationTenancyLegalStatusesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/tenancyLegalStatuses/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationTenancyLegalStatusesId = ({
  id,
}: UseGetApiConfigurationTenancyLegalStatusesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationTenancyLegalStatusesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationTenancyRenewalOptionsArgs = { id?: Array<string> | undefined }
export const getApiConfigurationTenancyRenewalOptionsFn = async ({
  id,
}: UseGetApiConfigurationTenancyRenewalOptionsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/tenancyRenewalOptions${querySerialiser({ args: { id }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationTenancyRenewalOptions = ({
  id,
}: UseGetApiConfigurationTenancyRenewalOptionsArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationTenancyRenewalOptionsFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationTenancyRenewalOptionsIdArgs = { id: string }
export const getApiConfigurationTenancyRenewalOptionsIdFn = async ({
  id,
}: UseGetApiConfigurationTenancyRenewalOptionsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/tenancyRenewalOptions/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationTenancyRenewalOptionsId = ({
  id,
}: UseGetApiConfigurationTenancyRenewalOptionsIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationTenancyRenewalOptionsIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationTenancyRenewalOptionConditionsArgs = { id?: Array<string> | undefined }
export const getApiConfigurationTenancyRenewalOptionConditionsFn = async ({
  id,
}: UseGetApiConfigurationTenancyRenewalOptionConditionsArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/tenancyRenewalOptionConditions${querySerialiser({ args: { id }, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationTenancyRenewalOptionConditions = ({
  id,
}: UseGetApiConfigurationTenancyRenewalOptionConditionsArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationTenancyRenewalOptionConditionsFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationTenancyRenewalOptionConditionsIdArgs = { id: string }
export const getApiConfigurationTenancyRenewalOptionConditionsIdFn = async ({
  id,
}: UseGetApiConfigurationTenancyRenewalOptionConditionsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/tenancyRenewalOptionConditions/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationTenancyRenewalOptionConditionsId = ({
  id,
}: UseGetApiConfigurationTenancyRenewalOptionConditionsIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationTenancyRenewalOptionConditionsIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationTenancyTypesArgs = void
export const getApiConfigurationTenancyTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/tenancyTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationTenancyTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTenancyTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationTenancyTypesIdArgs = { id: string }
export const getApiConfigurationTenancyTypesIdFn = async ({ id }: UseGetApiConfigurationTenancyTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/tenancyTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationTenancyTypesId = ({ id }: UseGetApiConfigurationTenancyTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationTenancyTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationVendorTypesArgs = void
export const getApiConfigurationVendorTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/vendorTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationVendorTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationVendorTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationVendorTypesIdArgs = { id: string }
export const getApiConfigurationVendorTypesIdFn = async ({ id }: UseGetApiConfigurationVendorTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/vendorTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationVendorTypesId = ({ id }: UseGetApiConfigurationVendorTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationVendorTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationWorksOrderTypesArgs = void
export const getApiConfigurationWorksOrderTypesFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/worksOrderTypes${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return z.array(listItemModel).parse(data)
}
export const useGetApiConfigurationWorksOrderTypes = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationWorksOrderTypesFn(),
  })

  return result
}
export type UseGetApiConfigurationWorksOrderTypesIdArgs = { id: string }
export const getApiConfigurationWorksOrderTypesIdFn = async ({ id }: UseGetApiConfigurationWorksOrderTypesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/worksOrderTypes/${id}${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return listItemModel.parse(data)
}
export const useGetApiConfigurationWorksOrderTypesId = ({ id }: UseGetApiConfigurationWorksOrderTypesIdArgs) => {
  const result = useQuery({
    queryKey: ['Configuration', id],
    queryFn: () => getApiConfigurationWorksOrderTypesIdFn({ id }),
  })

  return result
}
export type UseGetApiConfigurationTerminologyArgs = void
export const getApiConfigurationTerminologyFn = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_PLATFORM_API_URL}/configuration/terminology${querySerialiser({ args: {}, options: defaultQuerySerialiserOptions })}`,
    {
      method: 'GET',
      headers: {
        'api-version': 'latest',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
      },
    },
  )

  const data = await res.json()

  return terminologyModel.parse(data)
}
export const useGetApiConfigurationTerminology = () => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTerminologyFn(),
  })

  return result
}
