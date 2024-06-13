import { offerModelConfig } from '@/config/offerModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiOffers } from '@/services/Offers.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { OfferModel } from '@/schemas/offerModel.generated.tsx'

export const getOffersTableColumn = (property: string, modelConfig: ModelConfig<OfferModel>, row: OfferModel) => {
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
    .with('currency', () => ({
      id: 'currency',
      label: modelConfig['currency'].label,
      value: modelConfig['currency'].format(row['currency']),
    }))
    .with('applicantId', () => ({
      id: 'applicantId',
      label: modelConfig['applicantId'].label,
      value: modelConfig['applicantId'].format(row['applicantId']),
    }))
    .with('companyId', () => ({
      id: 'companyId',
      label: modelConfig['companyId'].label,
      value: modelConfig['companyId'].format(row['companyId']),
    }))
    .with('contactId', () => ({
      id: 'contactId',
      label: modelConfig['contactId'].label,
      value: modelConfig['contactId'].format(row['contactId']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('negotiatorId', () => ({
      id: 'negotiatorId',
      label: modelConfig['negotiatorId'].label,
      value: modelConfig['negotiatorId'].format(row['negotiatorId']),
    }))
    .with('date', () => ({
      id: 'date',
      label: modelConfig['date'].label,
      value: modelConfig['date'].format(row['date']),
    }))
    .with('amount', () => ({
      id: 'amount',
      label: modelConfig['amount'].label,
      value: modelConfig['amount'].format(row['amount']),
    }))
    .with('status', () => ({
      id: 'status',
      label: modelConfig['status'].label,
      value: modelConfig['status'].format(row['status']),
    }))
    .with('inclusions', () => ({
      id: 'inclusions',
      label: modelConfig['inclusions'].label,
      value: modelConfig['inclusions'].format(row['inclusions']),
    }))
    .with('exclusions', () => ({
      id: 'exclusions',
      label: modelConfig['exclusions'].label,
      value: modelConfig['exclusions'].format(row['exclusions']),
    }))
    .with('conditions', () => ({
      id: 'conditions',
      label: modelConfig['conditions'].label,
      value: modelConfig['conditions'].format(row['conditions']),
    }))
    .with('related', () => ({
      id: 'related',
      label: modelConfig['related'].label,
      value: modelConfig['related'].format(row['related']),
    }))
    .with('metadata', () => ({
      id: 'metadata',
      label: modelConfig['metadata'].label,
      value: modelConfig['metadata'].format(row['metadata']),
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
export type UseOffersTableArgs = {
  sortBy?: string | null | undefined
  embed?: Array<'applicant' | 'conveyancing' | 'property' | 'negotiator'> | null | undefined
  id?: Array<string> | null | undefined
  applicantId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  status?:
    | Array<'pending' | 'withdrawn' | 'rejected' | 'accepted' | 'noteOfInterest' | 'noteOfInterestWithdrawn'>
    | null
    | undefined
  address?: string | null | undefined
  name?: string | null | undefined
  amountFrom?: number | null | undefined
  amountTo?: number | null | undefined
  dateFrom?: string | null | undefined
  dateTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  fieldNames: (keyof OfferModel)[]
}
export const useOffersTable = (args: UseOffersTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiOffers({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof OfferModel => c in row)
        .map((fieldName) => getOffersTableColumn(fieldName, offerModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
