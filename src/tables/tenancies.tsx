import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import {
  useGetApiTenancies,
  useGetApiTenanciesIdRelationships,
  useGetApiTenanciesIdChecks,
  useGetApiTenanciesIdBreakClauses,
  useGetApiTenanciesIdAllowances,
  useGetApiTenanciesIdResponsibilities,
  useGetApiTenanciesIdRenewalNegotiations,
  useGetApiTenanciesIdExtensions,
  useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecks,
} from '@/services/tenancies.ts'

export const tenanciesBody = z.object({
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
export type TenanciesBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  startDate?: string | undefined
  endDate?: string | undefined
  status?: string | undefined
  agentRole?: string | undefined
  rent?: number | undefined
  rentFrequency?: string | undefined
  endDateConfirmed?: boolean | undefined
  isPeriodic?: boolean | undefined
  rentInstalmentsFrequency?: string | undefined
  rentInstalmentsAmount?: number | undefined
  rentInstalmentsStart?: string | undefined
  meterReadingGas?: string | undefined
  meterReadingGasLastRead?: string | undefined
  meterReadingElectricity?: string | undefined
  meterReadingElectricityLastRead?: string | undefined
  meterReadingWater?: string | undefined
  meterReadingWaterLastRead?: string | undefined
  typeId?: string | undefined
  negotiatorId?: string | undefined
  propertyId?: string | undefined
  applicantId?: string | undefined
  managerId?: string | undefined
  groupPaymentReference?: string | undefined
  lettingFee?: { type?: string | undefined; amount?: number | undefined; frequency?: string | undefined } | undefined
  managementFee?: { type?: string | undefined; amount?: number | undefined; frequency?: string | undefined } | undefined
  source?: { id?: string | undefined; type?: string | undefined } | undefined
  deposit?:
    | { heldBy?: string | undefined; period?: number | undefined; type?: string | undefined; sum?: number | undefined }
    | undefined
  related?:
    | Array<{
        id?: string | undefined
        name?: string | undefined
        title?: string | undefined
        forename?: string | undefined
        surname?: string | undefined
        dateOfBirth?: string | undefined
        type?: string | undefined
        homePhone?: string | undefined
        workPhone?: string | undefined
        mobilePhone?: string | undefined
        email?: string | undefined
        paymentReference?: string | undefined
        fromArchive?: boolean | undefined
        marketingConsent?: string | undefined
        primaryAddress?:
          | {
              buildingName?: string | undefined
              buildingNumber?: string | undefined
              line1?: string | undefined
              line2?: string | undefined
              line3?: string | undefined
              line4?: string | undefined
              postcode?: string | undefined
              countryId?: string | undefined
            }
          | undefined
        occupyOn?: string | undefined
        vacateOn?: string | undefined
        additionalContactDetails?: Array<{ type?: string | undefined; value?: string | undefined }> | undefined
      }>
    | undefined
  fromArchive?: boolean | undefined
  metadata?: Record<string, Record<string, never>> | undefined
  feeNotes?: string | undefined
  legalStatusId?: string | undefined
  renewalOptions?:
    | {
        optionId?: string | undefined
        optionText?: string | undefined
        expiry?: string | undefined
        conditionIds?: Array<string> | undefined
      }
    | undefined
  arrears?: { chaseArrears?: boolean | undefined; paymentPlan?: string | undefined } | undefined
  _eTag?: string | undefined
}
export type TenanciesArgs = {
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
  columns: ColumnsList<TenanciesBody>
}
export const tenanciesIdRelationshipsBody = z.object({
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
export type TenanciesIdRelationshipsBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  tenancyId?: string | undefined
  associatedType?: string | undefined
  associatedId?: string | undefined
  isMain?: boolean | undefined
  fromArchive?: boolean | undefined
  guarantors?:
    | Array<{
        id?: string | undefined
        guarantorAssociatedId?: string | undefined
        type?: string | undefined
        referenceStatus?: string | undefined
      }>
    | undefined
  references?:
    | Array<{
        id?: string | undefined
        referenceAssociatedId?: string | undefined
        type?: string | undefined
        referenceStatus?: string | undefined
        referenceType?: string | undefined
      }>
    | undefined
}
export type TenanciesIdRelationshipsArgs = { id: string; columns: ColumnsList<TenanciesIdRelationshipsBody> }
export const tenanciesIdChecksBody = z.object({
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
export type TenanciesIdChecksBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  description?: string | undefined
  status?: string | undefined
  type?: string | undefined
  checkTypeId?: string | undefined
  tenancyId?: string | undefined
  metadata?: Record<string, Record<string, never>> | undefined
  _eTag?: string | undefined
}
export type TenanciesIdChecksArgs = {
  id: string
  type?: string | undefined
  status?: Array<'needed' | 'notNeeded' | 'arranged' | 'completed'> | undefined
  columns: ColumnsList<TenanciesIdChecksBody>
}
export const tenanciesIdBreakClausesBody = z.object({
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
export type TenanciesIdBreakClausesBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  clauseTypeId?: string | undefined
  description?: string | undefined
  active?: string | undefined
  appliesTo?: string | undefined
  letterText?: string | undefined
  breakFrom?: { date?: string | undefined; minTermMonths?: number | undefined } | undefined
  noticeRequired?: { date?: string | undefined; beforeBreakMonths?: number | undefined } | undefined
  agreements?: { landlord?: boolean | undefined; tenant?: boolean | undefined } | undefined
  tenancyId?: string | undefined
  _eTag?: string | undefined
}
export type TenanciesIdBreakClausesArgs = { id: string; columns: ColumnsList<TenanciesIdBreakClausesBody> }
export const tenanciesIdAllowancesBody = z.object({
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
export type TenanciesIdAllowancesBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  typeId?: string | undefined
  description?: string | undefined
  state?: string | undefined
  agreements?: { landlord?: boolean | undefined; tenant?: boolean | undefined } | undefined
  letterText?: string | undefined
  tenancyId?: string | undefined
  _eTag?: string | undefined
}
export type TenanciesIdAllowancesArgs = { id: string; columns: ColumnsList<TenanciesIdAllowancesBody> }
export const tenanciesIdResponsibilitiesBody = z.object({
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
export type TenanciesIdResponsibilitiesBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  typeId?: string | undefined
  description?: string | undefined
  appliesTo?: string | undefined
  agreements?: { landlord?: boolean | undefined; tenant?: boolean | undefined } | undefined
  letterText?: string | undefined
  tenancyId?: string | undefined
  _eTag?: string | undefined
}
export type TenanciesIdResponsibilitiesArgs = { id: string; columns: ColumnsList<TenanciesIdResponsibilitiesBody> }
export const tenanciesIdRenewalNegotiationsBody = z.object({
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
})
export type TenanciesIdRenewalNegotiationsBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  startDate?: string | undefined
  endDate?: string | undefined
  status?: string | undefined
  negotiatorId?: string | undefined
  rent?: number | undefined
  rentFrequency?: string | undefined
  rentChange?: { amount?: number | undefined; percentage?: number | undefined } | undefined
  tenancyId?: string | undefined
  lettingFee?: { type?: string | undefined; amount?: number | undefined; frequency?: string | undefined } | undefined
  managementFee?: { type?: string | undefined; amount?: number | undefined; frequency?: string | undefined } | undefined
  _eTag?: string | undefined
}
export type TenanciesIdRenewalNegotiationsArgs = {
  id: string
  columns: ColumnsList<TenanciesIdRenewalNegotiationsBody>
}
export const tenanciesIdExtensionsBody = z.object({
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
})
export type TenanciesIdExtensionsBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  startDate?: string | undefined
  endDate?: string | undefined
  type?: string | undefined
  negotiatorId?: string | undefined
  rent?: number | undefined
  rentFrequency?: string | undefined
  tenancyId?: string | undefined
  fee?: { amount?: number | undefined; summary?: string | undefined; type?: string | undefined } | undefined
  _eTag?: string | undefined
}
export type TenanciesIdExtensionsArgs = { id: string; columns: ColumnsList<TenanciesIdExtensionsBody> }
export const tenanciesIdRenewalNegotiationsRenewalIdChecksBody = z.object({
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
export type TenanciesIdRenewalNegotiationsRenewalIdChecksBody = {
  _links?: Record<string, { href?: string | undefined }> | undefined
  _embedded?: Record<string, Record<string, never>> | undefined
  id?: string | undefined
  created?: string | undefined
  modified?: string | undefined
  status?: string | undefined
  description?: string | undefined
  checkTypeId?: string | undefined
  tenancyId?: string | undefined
  renewalId?: string | undefined
  metadata?: Record<string, Record<string, never>> | undefined
  _eTag?: string | undefined
}
export type TenanciesIdRenewalNegotiationsRenewalIdChecksArgs = {
  id: string
  renewalId: string
  columns: ColumnsList<TenanciesIdRenewalNegotiationsRenewalIdChecksBody>
}

export const tenanciesColumnHelper = createColumnHelper<TenanciesBody>()

export const getTenanciesColumn = (property: string, modelConfig: ModelConfig<TenanciesBody>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return tenanciesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return tenanciesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return tenanciesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return tenanciesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return tenanciesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('startDate', () => {
      const { label: header, format } = modelConfig['startDate']

      return tenanciesColumnHelper.accessor((row) => row.startDate, {
        id: 'startDate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('endDate', () => {
      const { label: header, format } = modelConfig['endDate']

      return tenanciesColumnHelper.accessor((row) => row.endDate, {
        id: 'endDate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('status', () => {
      const { label: header, format } = modelConfig['status']

      return tenanciesColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('agentRole', () => {
      const { label: header, format } = modelConfig['agentRole']

      return tenanciesColumnHelper.accessor((row) => row.agentRole, {
        id: 'agentRole',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('rent', () => {
      const { label: header, format } = modelConfig['rent']

      return tenanciesColumnHelper.accessor((row) => row.rent, {
        id: 'rent',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('rentFrequency', () => {
      const { label: header, format } = modelConfig['rentFrequency']

      return tenanciesColumnHelper.accessor((row) => row.rentFrequency, {
        id: 'rentFrequency',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('endDateConfirmed', () => {
      const { label: header, format } = modelConfig['endDateConfirmed']

      return tenanciesColumnHelper.accessor((row) => row.endDateConfirmed, {
        id: 'endDateConfirmed',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('isPeriodic', () => {
      const { label: header, format } = modelConfig['isPeriodic']

      return tenanciesColumnHelper.accessor((row) => row.isPeriodic, {
        id: 'isPeriodic',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('rentInstalmentsFrequency', () => {
      const { label: header, format } = modelConfig['rentInstalmentsFrequency']

      return tenanciesColumnHelper.accessor((row) => row.rentInstalmentsFrequency, {
        id: 'rentInstalmentsFrequency',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('rentInstalmentsAmount', () => {
      const { label: header, format } = modelConfig['rentInstalmentsAmount']

      return tenanciesColumnHelper.accessor((row) => row.rentInstalmentsAmount, {
        id: 'rentInstalmentsAmount',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('rentInstalmentsStart', () => {
      const { label: header, format } = modelConfig['rentInstalmentsStart']

      return tenanciesColumnHelper.accessor((row) => row.rentInstalmentsStart, {
        id: 'rentInstalmentsStart',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('meterReadingGas', () => {
      const { label: header, format } = modelConfig['meterReadingGas']

      return tenanciesColumnHelper.accessor((row) => row.meterReadingGas, {
        id: 'meterReadingGas',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('meterReadingGasLastRead', () => {
      const { label: header, format } = modelConfig['meterReadingGasLastRead']

      return tenanciesColumnHelper.accessor((row) => row.meterReadingGasLastRead, {
        id: 'meterReadingGasLastRead',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('meterReadingElectricity', () => {
      const { label: header, format } = modelConfig['meterReadingElectricity']

      return tenanciesColumnHelper.accessor((row) => row.meterReadingElectricity, {
        id: 'meterReadingElectricity',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('meterReadingElectricityLastRead', () => {
      const { label: header, format } = modelConfig['meterReadingElectricityLastRead']

      return tenanciesColumnHelper.accessor((row) => row.meterReadingElectricityLastRead, {
        id: 'meterReadingElectricityLastRead',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('meterReadingWater', () => {
      const { label: header, format } = modelConfig['meterReadingWater']

      return tenanciesColumnHelper.accessor((row) => row.meterReadingWater, {
        id: 'meterReadingWater',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('meterReadingWaterLastRead', () => {
      const { label: header, format } = modelConfig['meterReadingWaterLastRead']

      return tenanciesColumnHelper.accessor((row) => row.meterReadingWaterLastRead, {
        id: 'meterReadingWaterLastRead',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('typeId', () => {
      const { label: header, format } = modelConfig['typeId']

      return tenanciesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format } = modelConfig['negotiatorId']

      return tenanciesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return tenanciesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('applicantId', () => {
      const { label: header, format } = modelConfig['applicantId']

      return tenanciesColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('managerId', () => {
      const { label: header, format } = modelConfig['managerId']

      return tenanciesColumnHelper.accessor((row) => row.managerId, {
        id: 'managerId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('groupPaymentReference', () => {
      const { label: header, format } = modelConfig['groupPaymentReference']

      return tenanciesColumnHelper.accessor((row) => row.groupPaymentReference, {
        id: 'groupPaymentReference',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('lettingFee', () => {
      const { label: header, format } = modelConfig['lettingFee']

      return tenanciesColumnHelper.accessor((row) => row.lettingFee, {
        id: 'lettingFee',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('managementFee', () => {
      const { label: header, format } = modelConfig['managementFee']

      return tenanciesColumnHelper.accessor((row) => row.managementFee, {
        id: 'managementFee',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('source', () => {
      const { label: header, format } = modelConfig['source']

      return tenanciesColumnHelper.accessor((row) => row.source, {
        id: 'source',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('deposit', () => {
      const { label: header, format } = modelConfig['deposit']

      return tenanciesColumnHelper.accessor((row) => row.deposit, {
        id: 'deposit',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('related', () => {
      const { label: header, format } = modelConfig['related']

      return tenanciesColumnHelper.accessor((row) => row.related, {
        id: 'related',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fromArchive', () => {
      const { label: header, format } = modelConfig['fromArchive']

      return tenanciesColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return tenanciesColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('feeNotes', () => {
      const { label: header, format } = modelConfig['feeNotes']

      return tenanciesColumnHelper.accessor((row) => row.feeNotes, {
        id: 'feeNotes',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('legalStatusId', () => {
      const { label: header, format } = modelConfig['legalStatusId']

      return tenanciesColumnHelper.accessor((row) => row.legalStatusId, {
        id: 'legalStatusId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('renewalOptions', () => {
      const { label: header, format } = modelConfig['renewalOptions']

      return tenanciesColumnHelper.accessor((row) => row.renewalOptions, {
        id: 'renewalOptions',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('arrears', () => {
      const { label: header, format } = modelConfig['arrears']

      return tenanciesColumnHelper.accessor((row) => row.arrears, {
        id: 'arrears',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return tenanciesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useTenanciesTable = (args: TenanciesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenancies({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const tenanciesIdRelationshipsColumnHelper = createColumnHelper<TenanciesIdRelationshipsBody>()

export const getTenanciesIdRelationshipsColumn = (
  property: string,
  modelConfig: ModelConfig<TenanciesIdRelationshipsBody>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('tenancyId', () => {
      const { label: header, format } = modelConfig['tenancyId']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('associatedType', () => {
      const { label: header, format } = modelConfig['associatedType']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('associatedId', () => {
      const { label: header, format } = modelConfig['associatedId']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('isMain', () => {
      const { label: header, format } = modelConfig['isMain']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.isMain, {
        id: 'isMain',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fromArchive', () => {
      const { label: header, format } = modelConfig['fromArchive']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('guarantors', () => {
      const { label: header, format } = modelConfig['guarantors']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.guarantors, {
        id: 'guarantors',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('references', () => {
      const { label: header, format } = modelConfig['references']

      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.references, {
        id: 'references',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useTenanciesIdRelationshipsTable = (args: TenanciesIdRelationshipsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdRelationships({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const tenanciesIdChecksColumnHelper = createColumnHelper<TenanciesIdChecksBody>()

export const getTenanciesIdChecksColumn = (property: string, modelConfig: ModelConfig<TenanciesIdChecksBody>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return tenanciesIdChecksColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return tenanciesIdChecksColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('description', () => {
      const { label: header, format } = modelConfig['description']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('status', () => {
      const { label: header, format } = modelConfig['status']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('type', () => {
      const { label: header, format } = modelConfig['type']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('checkTypeId', () => {
      const { label: header, format } = modelConfig['checkTypeId']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.checkTypeId, {
        id: 'checkTypeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('tenancyId', () => {
      const { label: header, format } = modelConfig['tenancyId']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return tenanciesIdChecksColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return tenanciesIdChecksColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useTenanciesIdChecksTable = (args: TenanciesIdChecksArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdChecks({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const tenanciesIdBreakClausesColumnHelper = createColumnHelper<TenanciesIdBreakClausesBody>()

export const getTenanciesIdBreakClausesColumn = (
  property: string,
  modelConfig: ModelConfig<TenanciesIdBreakClausesBody>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('clauseTypeId', () => {
      const { label: header, format } = modelConfig['clauseTypeId']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.clauseTypeId, {
        id: 'clauseTypeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('description', () => {
      const { label: header, format } = modelConfig['description']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('active', () => {
      const { label: header, format } = modelConfig['active']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('appliesTo', () => {
      const { label: header, format } = modelConfig['appliesTo']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.appliesTo, {
        id: 'appliesTo',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('letterText', () => {
      const { label: header, format } = modelConfig['letterText']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.letterText, {
        id: 'letterText',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('breakFrom', () => {
      const { label: header, format } = modelConfig['breakFrom']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.breakFrom, {
        id: 'breakFrom',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('noticeRequired', () => {
      const { label: header, format } = modelConfig['noticeRequired']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.noticeRequired, {
        id: 'noticeRequired',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('agreements', () => {
      const { label: header, format } = modelConfig['agreements']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.agreements, {
        id: 'agreements',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('tenancyId', () => {
      const { label: header, format } = modelConfig['tenancyId']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useTenanciesIdBreakClausesTable = (args: TenanciesIdBreakClausesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdBreakClauses({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const tenanciesIdAllowancesColumnHelper = createColumnHelper<TenanciesIdAllowancesBody>()

export const getTenanciesIdAllowancesColumn = (
  property: string,
  modelConfig: ModelConfig<TenanciesIdAllowancesBody>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('typeId', () => {
      const { label: header, format } = modelConfig['typeId']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('description', () => {
      const { label: header, format } = modelConfig['description']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('state', () => {
      const { label: header, format } = modelConfig['state']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.state, {
        id: 'state',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('agreements', () => {
      const { label: header, format } = modelConfig['agreements']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.agreements, {
        id: 'agreements',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('letterText', () => {
      const { label: header, format } = modelConfig['letterText']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.letterText, {
        id: 'letterText',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('tenancyId', () => {
      const { label: header, format } = modelConfig['tenancyId']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return tenanciesIdAllowancesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useTenanciesIdAllowancesTable = (args: TenanciesIdAllowancesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdAllowances({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const tenanciesIdResponsibilitiesColumnHelper = createColumnHelper<TenanciesIdResponsibilitiesBody>()

export const getTenanciesIdResponsibilitiesColumn = (
  property: string,
  modelConfig: ModelConfig<TenanciesIdResponsibilitiesBody>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('typeId', () => {
      const { label: header, format } = modelConfig['typeId']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('description', () => {
      const { label: header, format } = modelConfig['description']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('appliesTo', () => {
      const { label: header, format } = modelConfig['appliesTo']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.appliesTo, {
        id: 'appliesTo',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('agreements', () => {
      const { label: header, format } = modelConfig['agreements']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.agreements, {
        id: 'agreements',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('letterText', () => {
      const { label: header, format } = modelConfig['letterText']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.letterText, {
        id: 'letterText',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('tenancyId', () => {
      const { label: header, format } = modelConfig['tenancyId']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useTenanciesIdResponsibilitiesTable = (args: TenanciesIdResponsibilitiesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdResponsibilities({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const tenanciesIdRenewalNegotiationsColumnHelper = createColumnHelper<TenanciesIdRenewalNegotiationsBody>()

export const getTenanciesIdRenewalNegotiationsColumn = (
  property: string,
  modelConfig: ModelConfig<TenanciesIdRenewalNegotiationsBody>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('startDate', () => {
      const { label: header, format } = modelConfig['startDate']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.startDate, {
        id: 'startDate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('endDate', () => {
      const { label: header, format } = modelConfig['endDate']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.endDate, {
        id: 'endDate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('status', () => {
      const { label: header, format } = modelConfig['status']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format } = modelConfig['negotiatorId']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('rent', () => {
      const { label: header, format } = modelConfig['rent']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.rent, {
        id: 'rent',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('rentFrequency', () => {
      const { label: header, format } = modelConfig['rentFrequency']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.rentFrequency, {
        id: 'rentFrequency',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('rentChange', () => {
      const { label: header, format } = modelConfig['rentChange']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.rentChange, {
        id: 'rentChange',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('tenancyId', () => {
      const { label: header, format } = modelConfig['tenancyId']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('lettingFee', () => {
      const { label: header, format } = modelConfig['lettingFee']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.lettingFee, {
        id: 'lettingFee',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('managementFee', () => {
      const { label: header, format } = modelConfig['managementFee']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.managementFee, {
        id: 'managementFee',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useTenanciesIdRenewalNegotiationsTable = (args: TenanciesIdRenewalNegotiationsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdRenewalNegotiations({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const tenanciesIdExtensionsColumnHelper = createColumnHelper<TenanciesIdExtensionsBody>()

export const getTenanciesIdExtensionsColumn = (
  property: string,
  modelConfig: ModelConfig<TenanciesIdExtensionsBody>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('startDate', () => {
      const { label: header, format } = modelConfig['startDate']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.startDate, {
        id: 'startDate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('endDate', () => {
      const { label: header, format } = modelConfig['endDate']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.endDate, {
        id: 'endDate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('type', () => {
      const { label: header, format } = modelConfig['type']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format } = modelConfig['negotiatorId']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('rent', () => {
      const { label: header, format } = modelConfig['rent']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.rent, {
        id: 'rent',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('rentFrequency', () => {
      const { label: header, format } = modelConfig['rentFrequency']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.rentFrequency, {
        id: 'rentFrequency',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('tenancyId', () => {
      const { label: header, format } = modelConfig['tenancyId']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fee', () => {
      const { label: header, format } = modelConfig['fee']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.fee, {
        id: 'fee',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return tenanciesIdExtensionsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useTenanciesIdExtensionsTable = (args: TenanciesIdExtensionsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdExtensions({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
export const tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper =
  createColumnHelper<TenanciesIdRenewalNegotiationsRenewalIdChecksBody>()

export const getTenanciesIdRenewalNegotiationsRenewalIdChecksColumn = (
  property: string,
  modelConfig: ModelConfig<TenanciesIdRenewalNegotiationsRenewalIdChecksBody>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('status', () => {
      const { label: header, format } = modelConfig['status']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('description', () => {
      const { label: header, format } = modelConfig['description']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('checkTypeId', () => {
      const { label: header, format } = modelConfig['checkTypeId']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.checkTypeId, {
        id: 'checkTypeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('tenancyId', () => {
      const { label: header, format } = modelConfig['tenancyId']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('renewalId', () => {
      const { label: header, format } = modelConfig['renewalId']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.renewalId, {
        id: 'renewalId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const useTenanciesIdRenewalNegotiationsRenewalIdChecksTable = (
  args: TenanciesIdRenewalNegotiationsRenewalIdChecksArgs,
) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecks({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const defaultData = useMemo(() => [], [])

  const table = useReactTable({
    data: dataQuery.data?._embedded ?? defaultData,
    columns: args.columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: dataQuery.data?._embedded?.length, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  })

  return { rerender, table, dataQuery }
}
