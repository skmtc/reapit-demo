import { invoiceModelConfig } from '@/config/invoiceModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import {
  useGetApiInvoices,
  useGetApiInvoicesPayments,
  useGetApiInvoicesCredits,
  useGetApiInvoicesCharges,
} from '@/services/Invoices.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { InvoiceModel } from '@/schemas/invoiceModel.generated.tsx'
import { paymentModelConfig } from '@/config/paymentModelConfig.example.tsx'
import { PaymentModel } from '@/schemas/paymentModel.generated.tsx'
import { creditModelConfig } from '@/config/creditModelConfig.example.tsx'
import { CreditModel } from '@/schemas/creditModel.generated.tsx'
import { chargeModelConfig } from '@/config/chargeModelConfig.example.tsx'
import { ChargeModel } from '@/schemas/chargeModel.generated.tsx'

export const getInvoicesTableColumn = (property: string, modelConfig: ModelConfig<InvoiceModel>, row: InvoiceModel) => {
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
    .with('reference', () => ({
      id: 'reference',
      label: modelConfig['reference'].label,
      value: modelConfig['reference'].format(row['reference']),
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
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('status', () => ({
      id: 'status',
      label: modelConfig['status'].label,
      value: modelConfig['status'].format(row['status']),
    }))
    .with('date', () => ({
      id: 'date',
      label: modelConfig['date'].label,
      value: modelConfig['date'].format(row['date']),
    }))
    .with('dueDate', () => ({
      id: 'dueDate',
      label: modelConfig['dueDate'].label,
      value: modelConfig['dueDate'].format(row['dueDate']),
    }))
    .with('isRaised', () => ({
      id: 'isRaised',
      label: modelConfig['isRaised'].label,
      value: modelConfig['isRaised'].format(row['isRaised']),
    }))
    .with('netAmount', () => ({
      id: 'netAmount',
      label: modelConfig['netAmount'].label,
      value: modelConfig['netAmount'].format(row['netAmount']),
    }))
    .with('vatAmount', () => ({
      id: 'vatAmount',
      label: modelConfig['vatAmount'].label,
      value: modelConfig['vatAmount'].format(row['vatAmount']),
    }))
    .with('outstandingAmount', () => ({
      id: 'outstandingAmount',
      label: modelConfig['outstandingAmount'].label,
      value: modelConfig['outstandingAmount'].format(row['outstandingAmount']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseInvoicesTableArgs = {
  sortBy?: string | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  status?: Array<'pending' | 'raised' | 'partPaid' | 'partCredited' | 'credited' | 'paid'> | null | undefined
  dateFrom?: string | null | undefined
  dateTo?: string | null | undefined
  dueDateFrom?: string | null | undefined
  dueDateTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  fieldNames: (keyof InvoiceModel)[]
}
export const useInvoicesTable = (args: UseInvoicesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiInvoices({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof InvoiceModel => c in row)
        .map((fieldName) => getInvoicesTableColumn(fieldName, invoiceModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getInvoicesPaymentsTableColumn = (
  property: string,
  modelConfig: ModelConfig<PaymentModel>,
  row: PaymentModel,
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
    .with('invoiceId', () => ({
      id: 'invoiceId',
      label: modelConfig['invoiceId'].label,
      value: modelConfig['invoiceId'].format(row['invoiceId']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('type', () => ({
      id: 'type',
      label: modelConfig['type'].label,
      value: modelConfig['type'].format(row['type']),
    }))
    .with('date', () => ({
      id: 'date',
      label: modelConfig['date'].label,
      value: modelConfig['date'].format(row['date']),
    }))
    .with('netAmount', () => ({
      id: 'netAmount',
      label: modelConfig['netAmount'].label,
      value: modelConfig['netAmount'].format(row['netAmount']),
    }))
    .with('vatAmount', () => ({
      id: 'vatAmount',
      label: modelConfig['vatAmount'].label,
      value: modelConfig['vatAmount'].format(row['vatAmount']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseInvoicesPaymentsTableArgs = {
  sortBy?: string | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  invoiceId?: Array<string> | null | undefined
  type?: Array<'payment' | 'accountPayment' | 'advertisingPayment' | 'buyerDeposit'> | null | undefined
  dateFrom?: string | null | undefined
  dateTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  fieldNames: (keyof PaymentModel)[]
}
export const useInvoicesPaymentsTable = (args: UseInvoicesPaymentsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiInvoicesPayments({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof PaymentModel => c in row)
        .map((fieldName) => getInvoicesPaymentsTableColumn(fieldName, paymentModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getInvoicesCreditsTableColumn = (
  property: string,
  modelConfig: ModelConfig<CreditModel>,
  row: CreditModel,
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
    .with('invoiceId', () => ({
      id: 'invoiceId',
      label: modelConfig['invoiceId'].label,
      value: modelConfig['invoiceId'].format(row['invoiceId']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('date', () => ({
      id: 'date',
      label: modelConfig['date'].label,
      value: modelConfig['date'].format(row['date']),
    }))
    .with('netAmount', () => ({
      id: 'netAmount',
      label: modelConfig['netAmount'].label,
      value: modelConfig['netAmount'].format(row['netAmount']),
    }))
    .with('vatAmount', () => ({
      id: 'vatAmount',
      label: modelConfig['vatAmount'].label,
      value: modelConfig['vatAmount'].format(row['vatAmount']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseInvoicesCreditsTableArgs = {
  sortBy?: string | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  invoiceId?: Array<string> | null | undefined
  dateFrom?: string | null | undefined
  dateTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  fieldNames: (keyof CreditModel)[]
}
export const useInvoicesCreditsTable = (args: UseInvoicesCreditsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiInvoicesCredits({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof CreditModel => c in row)
        .map((fieldName) => getInvoicesCreditsTableColumn(fieldName, creditModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getInvoicesChargesTableColumn = (
  property: string,
  modelConfig: ModelConfig<ChargeModel>,
  row: ChargeModel,
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
    .with('type', () => ({
      id: 'type',
      label: modelConfig['type'].label,
      value: modelConfig['type'].format(row['type']),
    }))
    .with('invoiceId', () => ({
      id: 'invoiceId',
      label: modelConfig['invoiceId'].label,
      value: modelConfig['invoiceId'].format(row['invoiceId']),
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
    .with('vatCode', () => ({
      id: 'vatCode',
      label: modelConfig['vatCode'].label,
      value: modelConfig['vatCode'].format(row['vatCode']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('netAmount', () => ({
      id: 'netAmount',
      label: modelConfig['netAmount'].label,
      value: modelConfig['netAmount'].format(row['netAmount']),
    }))
    .with('vatAmount', () => ({
      id: 'vatAmount',
      label: modelConfig['vatAmount'].label,
      value: modelConfig['vatAmount'].format(row['vatAmount']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseInvoicesChargesTableArgs = {
  sortBy?: string | null | undefined
  negotiatorId?: Array<string> | null | undefined
  propertyId?: Array<string> | null | undefined
  invoiceId?: Array<string> | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  fieldNames: (keyof ChargeModel)[]
}
export const useInvoicesChargesTable = (args: UseInvoicesChargesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiInvoicesCharges({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof ChargeModel => c in row)
        .map((fieldName) => getInvoicesChargesTableColumn(fieldName, chargeModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
