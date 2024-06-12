import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { referralModelConfig } from '@/config/referralModelConfig.example.tsx'
import { useGetApiReferrals } from '@/services/Referrals.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { ReferralModel } from '@/schemas/referralModel.generated.tsx'

export type UseReferralsTableArgs = {
  id?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  applicantId?: Array<string> | null | undefined
  contactId?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  referralTypeId?: Array<string> | null | undefined
  status?: Array<'sent' | 'inProgress' | 'succeeded' | 'cancelled' | 'failed' | 'paid' | 'declined'> | null | undefined
  embed?: Array<'applicant' | 'contact' | 'negotiator' | 'property' | 'type'> | null | undefined
  sortBy?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  fieldNames: (keyof ReferralModel)[]
}
export const getReferralsTableColumn = (
  property: string,
  modelConfig: ModelConfig<ReferralModel>,
  row: ReferralModel,
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
    .with('referralTypeId', () => ({
      id: 'referralTypeId',
      label: modelConfig['referralTypeId'].label,
      value: modelConfig['referralTypeId'].format(row['referralTypeId']),
    }))
    .with('type', () => ({
      id: 'type',
      label: modelConfig['type'].label,
      value: modelConfig['type'].format(row['type']),
    }))
    .with('negotiatorId', () => ({
      id: 'negotiatorId',
      label: modelConfig['negotiatorId'].label,
      value: modelConfig['negotiatorId'].format(row['negotiatorId']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('applicantId', () => ({
      id: 'applicantId',
      label: modelConfig['applicantId'].label,
      value: modelConfig['applicantId'].format(row['applicantId']),
    }))
    .with('contactId', () => ({
      id: 'contactId',
      label: modelConfig['contactId'].label,
      value: modelConfig['contactId'].format(row['contactId']),
    }))
    .with('status', () => ({
      id: 'status',
      label: modelConfig['status'].label,
      value: modelConfig['status'].format(row['status']),
    }))
    .with('amount', () => ({
      id: 'amount',
      label: modelConfig['amount'].label,
      value: modelConfig['amount'].format(row['amount']),
    }))
    .with('paid', () => ({
      id: 'paid',
      label: modelConfig['paid'].label,
      value: modelConfig['paid'].format(row['paid']),
    }))
    .with('accepted', () => ({
      id: 'accepted',
      label: modelConfig['accepted'].label,
      value: modelConfig['accepted'].format(row['accepted']),
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
export const useReferralsTable = (args: UseReferralsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiReferrals({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof ReferralModel => c in row)
        .map((fieldName) => getReferralsTableColumn(fieldName, referralModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
