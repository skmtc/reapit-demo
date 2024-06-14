import { enquiryModelConfig } from '@/sections/Enquiries/config/enquiryModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiEnquiries } from '@/sections/Enquiries/services/Enquiries.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { EnquiryModel } from '@/schemas/enquiryModel.generated.tsx'

export const getEnquiriesTableColumn = (
  property: string,
  modelConfig: ModelConfig<EnquiryModel>,
  row: EnquiryModel,
) => {
  return match(property)
    .with('_links', () => ({
      id: '_links',
      label: modelConfig['_links'].label,
      value: modelConfig['_links'].format(row['_links']),
    }))
    .with('_embedded', () => ({
      id: '_embedded',
      label: modelConfig['_embedded'].label,
      value: modelConfig['_embedded'].format(row['_embedded']),
    }))
    .with('id', () => ({
      id: 'id',
      label: modelConfig['id'].label,
      value: modelConfig['id'].format(row['id']),
    }))
    .with('created', () => ({
      id: 'created',
      label: modelConfig['created'].label,
      value: modelConfig['created'].format(row['created']),
    }))
    .with('modified', () => ({
      id: 'modified',
      label: modelConfig['modified'].label,
      value: modelConfig['modified'].format(row['modified']),
    }))
    .with('title', () => ({
      id: 'title',
      label: modelConfig['title'].label,
      value: modelConfig['title'].format(row['title']),
    }))
    .with('forename', () => ({
      id: 'forename',
      label: modelConfig['forename'].label,
      value: modelConfig['forename'].format(row['forename']),
    }))
    .with('surname', () => ({
      id: 'surname',
      label: modelConfig['surname'].label,
      value: modelConfig['surname'].format(row['surname']),
    }))
    .with('enquiryType', () => ({
      id: 'enquiryType',
      label: modelConfig['enquiryType'].label,
      value: modelConfig['enquiryType'].format(row['enquiryType']),
    }))
    .with('message', () => ({
      id: 'message',
      label: modelConfig['message'].label,
      value: modelConfig['message'].format(row['message']),
    }))
    .with('status', () => ({
      id: 'status',
      label: modelConfig['status'].label,
      value: modelConfig['status'].format(row['status']),
    }))
    .with('marketingConsent', () => ({
      id: 'marketingConsent',
      label: modelConfig['marketingConsent'].label,
      value: modelConfig['marketingConsent'].format(row['marketingConsent']),
    }))
    .with('position', () => ({
      id: 'position',
      label: modelConfig['position'].label,
      value: modelConfig['position'].format(row['position']),
    }))
    .with('officeId', () => ({
      id: 'officeId',
      label: modelConfig['officeId'].label,
      value: modelConfig['officeId'].format(row['officeId']),
    }))
    .with('applicantId', () => ({
      id: 'applicantId',
      label: modelConfig['applicantId'].label,
      value: modelConfig['applicantId'].format(row['applicantId']),
    }))
    .with('negotiatorId', () => ({
      id: 'negotiatorId',
      label: modelConfig['negotiatorId'].label,
      value: modelConfig['negotiatorId'].format(row['negotiatorId']),
    }))
    .with('sourceName', () => ({
      id: 'sourceName',
      label: modelConfig['sourceName'].label,
      value: modelConfig['sourceName'].format(row['sourceName']),
    }))
    .with('homePhone', () => ({
      id: 'homePhone',
      label: modelConfig['homePhone'].label,
      value: modelConfig['homePhone'].format(row['homePhone']),
    }))
    .with('workPhone', () => ({
      id: 'workPhone',
      label: modelConfig['workPhone'].label,
      value: modelConfig['workPhone'].format(row['workPhone']),
    }))
    .with('mobilePhone', () => ({
      id: 'mobilePhone',
      label: modelConfig['mobilePhone'].label,
      value: modelConfig['mobilePhone'].format(row['mobilePhone']),
    }))
    .with('email', () => ({
      id: 'email',
      label: modelConfig['email'].label,
      value: modelConfig['email'].format(row['email']),
    }))
    .with('address', () => ({
      id: 'address',
      label: modelConfig['address'].label,
      value: modelConfig['address'].format(row['address']),
    }))
    .with('buying', () => ({
      id: 'buying',
      label: modelConfig['buying'].label,
      value: modelConfig['buying'].format(row['buying']),
    }))
    .with('renting', () => ({
      id: 'renting',
      label: modelConfig['renting'].label,
      value: modelConfig['renting'].format(row['renting']),
    }))
    .with('bedrooms', () => ({
      id: 'bedrooms',
      label: modelConfig['bedrooms'].label,
      value: modelConfig['bedrooms'].format(row['bedrooms']),
    }))
    .with('propertyIds', () => ({
      id: 'propertyIds',
      label: modelConfig['propertyIds'].label,
      value: modelConfig['propertyIds'].format(row['propertyIds']),
    }))
    .with('_eTag', () => ({
      id: '_eTag',
      label: modelConfig['_eTag'].label,
      value: modelConfig['_eTag'].format(row['_eTag']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseEnquiriesTableArgs = {
  sortBy?: string | null | undefined
  enquiryType?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  fieldNames: (keyof EnquiryModel)[]
}
export const useEnquiriesTable = (args: UseEnquiriesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiEnquiries({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof EnquiryModel => c in row)
        .map((fieldName) => getEnquiriesTableColumn(fieldName, enquiryModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
