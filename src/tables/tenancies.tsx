import { z } from 'zod'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ConfigItemLookup, ColumnsList } from '@/components/ModelRuntimeConfig'
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  startDate?: string | undefined | null
  endDate?: string | undefined | null
  status?: string | undefined | null
  agentRole?: string | undefined | null
  rent?: number | undefined | null
  rentFrequency?: string | undefined | null
  endDateConfirmed?: boolean | undefined | null
  isPeriodic?: boolean | undefined | null
  rentInstalmentsFrequency?: string | undefined | null
  rentInstalmentsAmount?: number | undefined | null
  rentInstalmentsStart?: string | undefined | null
  meterReadingGas?: string | undefined | null
  meterReadingGasLastRead?: string | undefined | null
  meterReadingElectricity?: string | undefined | null
  meterReadingElectricityLastRead?: string | undefined | null
  meterReadingWater?: string | undefined | null
  meterReadingWaterLastRead?: string | undefined | null
  typeId?: string | undefined | null
  negotiatorId?: string | undefined | null
  propertyId?: string | undefined | null
  applicantId?: string | undefined | null
  managerId?: string | undefined | null
  groupPaymentReference?: string | undefined | null
  lettingFee?:
    | { type?: string | undefined | null; amount?: number | undefined | null; frequency?: string | undefined | null }
    | undefined
    | null
  managementFee?:
    | { type?: string | undefined | null; amount?: number | undefined | null; frequency?: string | undefined | null }
    | undefined
    | null
  source?: { id?: string | undefined | null; type?: string | undefined | null } | undefined | null
  deposit?:
    | {
        heldBy?: string | undefined | null
        period?: number | undefined | null
        type?: string | undefined | null
        sum?: number | undefined | null
      }
    | undefined
    | null
  related?:
    | Array<{
        id?: string | undefined | null
        name?: string | undefined | null
        title?: string | undefined | null
        forename?: string | undefined | null
        surname?: string | undefined | null
        dateOfBirth?: string | undefined | null
        type?: string | undefined | null
        homePhone?: string | undefined | null
        workPhone?: string | undefined | null
        mobilePhone?: string | undefined | null
        email?: string | undefined | null
        paymentReference?: string | undefined | null
        fromArchive?: boolean | undefined | null
        marketingConsent?: string | undefined | null
        primaryAddress?:
          | {
              buildingName?: string | undefined | null
              buildingNumber?: string | undefined | null
              line1?: string | undefined | null
              line2?: string | undefined | null
              line3?: string | undefined | null
              line4?: string | undefined | null
              postcode?: string | undefined | null
              countryId?: string | undefined | null
            }
          | undefined
          | null
        occupyOn?: string | undefined | null
        vacateOn?: string | undefined | null
        additionalContactDetails?:
          | Array<{ type?: string | undefined | null; value?: string | undefined | null }>
          | undefined
          | null
      }>
    | undefined
    | null
  fromArchive?: boolean | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  feeNotes?: string | undefined | null
  legalStatusId?: string | undefined | null
  renewalOptions?:
    | {
        optionId?: string | undefined | null
        optionText?: string | undefined | null
        expiry?: string | undefined | null
        conditionIds?: Array<string> | undefined | null
      }
    | undefined
    | null
  arrears?: { chaseArrears?: boolean | undefined | null; paymentPlan?: string | undefined | null } | undefined | null
  _eTag?: string | undefined | null
}
export type TenanciesArgs = {
  sortBy?: string | undefined | null
  fromArchive?: boolean | undefined | null
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
    | null
  id?: Array<string> | undefined | null
  negotiatorId?: Array<string> | undefined | null
  applicantId?: Array<string> | undefined | null
  propertyId?: Array<string> | undefined | null
  name?: string | undefined | null
  nameType?: string | undefined | null
  status?:
    | Array<'offerPending' | 'offerWithdrawn' | 'offerRejected' | 'arranging' | 'current' | 'finished' | 'cancelled'>
    | undefined
    | null
  email?: Array<string> | undefined | null
  createdFrom?: string | undefined | null
  createdTo?: string | undefined | null
  modifiedFrom?: string | undefined | null
  modifiedTo?: string | undefined | null
  endDateFrom?: string | undefined | null
  endDateTo?: string | undefined | null
  startDateFrom?: string | undefined | null
  startDateTo?: string | undefined | null
  metadata?: Array<string> | undefined | null
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  tenancyId?: string | undefined | null
  associatedType?: string | undefined | null
  associatedId?: string | undefined | null
  isMain?: boolean | undefined | null
  fromArchive?: boolean | undefined | null
  guarantors?:
    | Array<{
        id?: string | undefined | null
        guarantorAssociatedId?: string | undefined | null
        type?: string | undefined | null
        referenceStatus?: string | undefined | null
      }>
    | undefined
    | null
  references?:
    | Array<{
        id?: string | undefined | null
        referenceAssociatedId?: string | undefined | null
        type?: string | undefined | null
        referenceStatus?: string | undefined | null
        referenceType?: string | undefined | null
      }>
    | undefined
    | null
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  description?: string | undefined | null
  status?: string | undefined | null
  type?: string | undefined | null
  checkTypeId?: string | undefined | null
  tenancyId?: string | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
}
export type TenanciesIdChecksArgs = {
  id: string
  type?: string | undefined | null
  status?: Array<'needed' | 'notNeeded' | 'arranged' | 'completed'> | undefined | null
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  clauseTypeId?: string | undefined | null
  description?: string | undefined | null
  active?: string | undefined | null
  appliesTo?: string | undefined | null
  letterText?: string | undefined | null
  breakFrom?: { date?: string | undefined | null; minTermMonths?: number | undefined | null } | undefined | null
  noticeRequired?:
    | { date?: string | undefined | null; beforeBreakMonths?: number | undefined | null }
    | undefined
    | null
  agreements?: { landlord?: boolean | undefined | null; tenant?: boolean | undefined | null } | undefined | null
  tenancyId?: string | undefined | null
  _eTag?: string | undefined | null
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  typeId?: string | undefined | null
  description?: string | undefined | null
  state?: string | undefined | null
  agreements?: { landlord?: boolean | undefined | null; tenant?: boolean | undefined | null } | undefined | null
  letterText?: string | undefined | null
  tenancyId?: string | undefined | null
  _eTag?: string | undefined | null
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  typeId?: string | undefined | null
  description?: string | undefined | null
  appliesTo?: string | undefined | null
  agreements?: { landlord?: boolean | undefined | null; tenant?: boolean | undefined | null } | undefined | null
  letterText?: string | undefined | null
  tenancyId?: string | undefined | null
  _eTag?: string | undefined | null
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  startDate?: string | undefined | null
  endDate?: string | undefined | null
  status?: string | undefined | null
  negotiatorId?: string | undefined | null
  rent?: number | undefined | null
  rentFrequency?: string | undefined | null
  rentChange?: { amount?: number | undefined | null; percentage?: number | undefined | null } | undefined | null
  tenancyId?: string | undefined | null
  lettingFee?:
    | { type?: string | undefined | null; amount?: number | undefined | null; frequency?: string | undefined | null }
    | undefined
    | null
  managementFee?:
    | { type?: string | undefined | null; amount?: number | undefined | null; frequency?: string | undefined | null }
    | undefined
    | null
  _eTag?: string | undefined | null
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  startDate?: string | undefined | null
  endDate?: string | undefined | null
  type?: string | undefined | null
  negotiatorId?: string | undefined | null
  rent?: number | undefined | null
  rentFrequency?: string | undefined | null
  tenancyId?: string | undefined | null
  fee?:
    | { amount?: number | undefined | null; summary?: string | undefined | null; type?: string | undefined | null }
    | undefined
    | null
  _eTag?: string | undefined | null
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
  _links?: Record<string, { href?: string | undefined | null }> | undefined | null
  _embedded?: Record<string, Record<string, never>> | undefined | null
  id?: string | undefined | null
  created?: string | undefined | null
  modified?: string | undefined | null
  status?: string | undefined | null
  description?: string | undefined | null
  checkTypeId?: string | undefined | null
  tenancyId?: string | undefined | null
  renewalId?: string | undefined | null
  metadata?: Record<string, Record<string, never>> | undefined | null
  _eTag?: string | undefined | null
}
export type TenanciesIdRenewalNegotiationsRenewalIdChecksArgs = {
  id: string
  renewalId: string
  columns: ColumnsList<TenanciesIdRenewalNegotiationsRenewalIdChecksBody>
}

export const tenanciesColumnHelper = createColumnHelper<TenanciesBody>()

export const getTenanciesColumn = (property: string, { label, format }: ConfigItemLookup<TenanciesBody>) => {
  return match(property)
    .with('_links', () => {
      return tenanciesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return tenanciesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return tenanciesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return tenanciesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return tenanciesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('startDate', () => {
      return tenanciesColumnHelper.accessor((row) => row.startDate, {
        id: 'startDate',
        header: label('startDate'),
        cell: (info) => format(info.getValue(), 'startDate'),
      })
    })
    .with('endDate', () => {
      return tenanciesColumnHelper.accessor((row) => row.endDate, {
        id: 'endDate',
        header: label('endDate'),
        cell: (info) => format(info.getValue(), 'endDate'),
      })
    })
    .with('status', () => {
      return tenanciesColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format(info.getValue(), 'status'),
      })
    })
    .with('agentRole', () => {
      return tenanciesColumnHelper.accessor((row) => row.agentRole, {
        id: 'agentRole',
        header: label('agentRole'),
        cell: (info) => format(info.getValue(), 'agentRole'),
      })
    })
    .with('rent', () => {
      return tenanciesColumnHelper.accessor((row) => row.rent, {
        id: 'rent',
        header: label('rent'),
        cell: (info) => format(info.getValue(), 'rent'),
      })
    })
    .with('rentFrequency', () => {
      return tenanciesColumnHelper.accessor((row) => row.rentFrequency, {
        id: 'rentFrequency',
        header: label('rentFrequency'),
        cell: (info) => format(info.getValue(), 'rentFrequency'),
      })
    })
    .with('endDateConfirmed', () => {
      return tenanciesColumnHelper.accessor((row) => row.endDateConfirmed, {
        id: 'endDateConfirmed',
        header: label('endDateConfirmed'),
        cell: (info) => format(info.getValue(), 'endDateConfirmed'),
      })
    })
    .with('isPeriodic', () => {
      return tenanciesColumnHelper.accessor((row) => row.isPeriodic, {
        id: 'isPeriodic',
        header: label('isPeriodic'),
        cell: (info) => format(info.getValue(), 'isPeriodic'),
      })
    })
    .with('rentInstalmentsFrequency', () => {
      return tenanciesColumnHelper.accessor((row) => row.rentInstalmentsFrequency, {
        id: 'rentInstalmentsFrequency',
        header: label('rentInstalmentsFrequency'),
        cell: (info) => format(info.getValue(), 'rentInstalmentsFrequency'),
      })
    })
    .with('rentInstalmentsAmount', () => {
      return tenanciesColumnHelper.accessor((row) => row.rentInstalmentsAmount, {
        id: 'rentInstalmentsAmount',
        header: label('rentInstalmentsAmount'),
        cell: (info) => format(info.getValue(), 'rentInstalmentsAmount'),
      })
    })
    .with('rentInstalmentsStart', () => {
      return tenanciesColumnHelper.accessor((row) => row.rentInstalmentsStart, {
        id: 'rentInstalmentsStart',
        header: label('rentInstalmentsStart'),
        cell: (info) => format(info.getValue(), 'rentInstalmentsStart'),
      })
    })
    .with('meterReadingGas', () => {
      return tenanciesColumnHelper.accessor((row) => row.meterReadingGas, {
        id: 'meterReadingGas',
        header: label('meterReadingGas'),
        cell: (info) => format(info.getValue(), 'meterReadingGas'),
      })
    })
    .with('meterReadingGasLastRead', () => {
      return tenanciesColumnHelper.accessor((row) => row.meterReadingGasLastRead, {
        id: 'meterReadingGasLastRead',
        header: label('meterReadingGasLastRead'),
        cell: (info) => format(info.getValue(), 'meterReadingGasLastRead'),
      })
    })
    .with('meterReadingElectricity', () => {
      return tenanciesColumnHelper.accessor((row) => row.meterReadingElectricity, {
        id: 'meterReadingElectricity',
        header: label('meterReadingElectricity'),
        cell: (info) => format(info.getValue(), 'meterReadingElectricity'),
      })
    })
    .with('meterReadingElectricityLastRead', () => {
      return tenanciesColumnHelper.accessor((row) => row.meterReadingElectricityLastRead, {
        id: 'meterReadingElectricityLastRead',
        header: label('meterReadingElectricityLastRead'),
        cell: (info) => format(info.getValue(), 'meterReadingElectricityLastRead'),
      })
    })
    .with('meterReadingWater', () => {
      return tenanciesColumnHelper.accessor((row) => row.meterReadingWater, {
        id: 'meterReadingWater',
        header: label('meterReadingWater'),
        cell: (info) => format(info.getValue(), 'meterReadingWater'),
      })
    })
    .with('meterReadingWaterLastRead', () => {
      return tenanciesColumnHelper.accessor((row) => row.meterReadingWaterLastRead, {
        id: 'meterReadingWaterLastRead',
        header: label('meterReadingWaterLastRead'),
        cell: (info) => format(info.getValue(), 'meterReadingWaterLastRead'),
      })
    })
    .with('typeId', () => {
      return tenanciesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header: label('typeId'),
        cell: (info) => format(info.getValue(), 'typeId'),
      })
    })
    .with('negotiatorId', () => {
      return tenanciesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('propertyId', () => {
      return tenanciesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header: label('propertyId'),
        cell: (info) => format(info.getValue(), 'propertyId'),
      })
    })
    .with('applicantId', () => {
      return tenanciesColumnHelper.accessor((row) => row.applicantId, {
        id: 'applicantId',
        header: label('applicantId'),
        cell: (info) => format(info.getValue(), 'applicantId'),
      })
    })
    .with('managerId', () => {
      return tenanciesColumnHelper.accessor((row) => row.managerId, {
        id: 'managerId',
        header: label('managerId'),
        cell: (info) => format(info.getValue(), 'managerId'),
      })
    })
    .with('groupPaymentReference', () => {
      return tenanciesColumnHelper.accessor((row) => row.groupPaymentReference, {
        id: 'groupPaymentReference',
        header: label('groupPaymentReference'),
        cell: (info) => format(info.getValue(), 'groupPaymentReference'),
      })
    })
    .with('lettingFee', () => {
      return tenanciesColumnHelper.accessor((row) => row.lettingFee, {
        id: 'lettingFee',
        header: label('lettingFee'),
        cell: (info) => format(info.getValue(), 'lettingFee'),
      })
    })
    .with('managementFee', () => {
      return tenanciesColumnHelper.accessor((row) => row.managementFee, {
        id: 'managementFee',
        header: label('managementFee'),
        cell: (info) => format(info.getValue(), 'managementFee'),
      })
    })
    .with('source', () => {
      return tenanciesColumnHelper.accessor((row) => row.source, {
        id: 'source',
        header: label('source'),
        cell: (info) => format(info.getValue(), 'source'),
      })
    })
    .with('deposit', () => {
      return tenanciesColumnHelper.accessor((row) => row.deposit, {
        id: 'deposit',
        header: label('deposit'),
        cell: (info) => format(info.getValue(), 'deposit'),
      })
    })
    .with('related', () => {
      return tenanciesColumnHelper.accessor((row) => row.related, {
        id: 'related',
        header: label('related'),
        cell: (info) => format(info.getValue(), 'related'),
      })
    })
    .with('fromArchive', () => {
      return tenanciesColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header: label('fromArchive'),
        cell: (info) => format(info.getValue(), 'fromArchive'),
      })
    })
    .with('metadata', () => {
      return tenanciesColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format(info.getValue(), 'metadata'),
      })
    })
    .with('feeNotes', () => {
      return tenanciesColumnHelper.accessor((row) => row.feeNotes, {
        id: 'feeNotes',
        header: label('feeNotes'),
        cell: (info) => format(info.getValue(), 'feeNotes'),
      })
    })
    .with('legalStatusId', () => {
      return tenanciesColumnHelper.accessor((row) => row.legalStatusId, {
        id: 'legalStatusId',
        header: label('legalStatusId'),
        cell: (info) => format(info.getValue(), 'legalStatusId'),
      })
    })
    .with('renewalOptions', () => {
      return tenanciesColumnHelper.accessor((row) => row.renewalOptions, {
        id: 'renewalOptions',
        header: label('renewalOptions'),
        cell: (info) => format(info.getValue(), 'renewalOptions'),
      })
    })
    .with('arrears', () => {
      return tenanciesColumnHelper.accessor((row) => row.arrears, {
        id: 'arrears',
        header: label('arrears'),
        cell: (info) => format(info.getValue(), 'arrears'),
      })
    })
    .with('_eTag', () => {
      return tenanciesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
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
  { label, format }: ConfigItemLookup<TenanciesIdRelationshipsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('tenancyId', () => {
      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header: label('tenancyId'),
        cell: (info) => format(info.getValue(), 'tenancyId'),
      })
    })
    .with('associatedType', () => {
      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.associatedType, {
        id: 'associatedType',
        header: label('associatedType'),
        cell: (info) => format(info.getValue(), 'associatedType'),
      })
    })
    .with('associatedId', () => {
      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.associatedId, {
        id: 'associatedId',
        header: label('associatedId'),
        cell: (info) => format(info.getValue(), 'associatedId'),
      })
    })
    .with('isMain', () => {
      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.isMain, {
        id: 'isMain',
        header: label('isMain'),
        cell: (info) => format(info.getValue(), 'isMain'),
      })
    })
    .with('fromArchive', () => {
      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header: label('fromArchive'),
        cell: (info) => format(info.getValue(), 'fromArchive'),
      })
    })
    .with('guarantors', () => {
      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.guarantors, {
        id: 'guarantors',
        header: label('guarantors'),
        cell: (info) => format(info.getValue(), 'guarantors'),
      })
    })
    .with('references', () => {
      return tenanciesIdRelationshipsColumnHelper.accessor((row) => row.references, {
        id: 'references',
        header: label('references'),
        cell: (info) => format(info.getValue(), 'references'),
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

export const getTenanciesIdChecksColumn = (
  property: string,
  { label, format }: ConfigItemLookup<TenanciesIdChecksBody>,
) => {
  return match(property)
    .with('_links', () => {
      return tenanciesIdChecksColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return tenanciesIdChecksColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return tenanciesIdChecksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return tenanciesIdChecksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return tenanciesIdChecksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('description', () => {
      return tenanciesIdChecksColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .with('status', () => {
      return tenanciesIdChecksColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format(info.getValue(), 'status'),
      })
    })
    .with('type', () => {
      return tenanciesIdChecksColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format(info.getValue(), 'type'),
      })
    })
    .with('checkTypeId', () => {
      return tenanciesIdChecksColumnHelper.accessor((row) => row.checkTypeId, {
        id: 'checkTypeId',
        header: label('checkTypeId'),
        cell: (info) => format(info.getValue(), 'checkTypeId'),
      })
    })
    .with('tenancyId', () => {
      return tenanciesIdChecksColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header: label('tenancyId'),
        cell: (info) => format(info.getValue(), 'tenancyId'),
      })
    })
    .with('metadata', () => {
      return tenanciesIdChecksColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format(info.getValue(), 'metadata'),
      })
    })
    .with('_eTag', () => {
      return tenanciesIdChecksColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
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
  { label, format }: ConfigItemLookup<TenanciesIdBreakClausesBody>,
) => {
  return match(property)
    .with('_links', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('clauseTypeId', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.clauseTypeId, {
        id: 'clauseTypeId',
        header: label('clauseTypeId'),
        cell: (info) => format(info.getValue(), 'clauseTypeId'),
      })
    })
    .with('description', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .with('active', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.active, {
        id: 'active',
        header: label('active'),
        cell: (info) => format(info.getValue(), 'active'),
      })
    })
    .with('appliesTo', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.appliesTo, {
        id: 'appliesTo',
        header: label('appliesTo'),
        cell: (info) => format(info.getValue(), 'appliesTo'),
      })
    })
    .with('letterText', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.letterText, {
        id: 'letterText',
        header: label('letterText'),
        cell: (info) => format(info.getValue(), 'letterText'),
      })
    })
    .with('breakFrom', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.breakFrom, {
        id: 'breakFrom',
        header: label('breakFrom'),
        cell: (info) => format(info.getValue(), 'breakFrom'),
      })
    })
    .with('noticeRequired', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.noticeRequired, {
        id: 'noticeRequired',
        header: label('noticeRequired'),
        cell: (info) => format(info.getValue(), 'noticeRequired'),
      })
    })
    .with('agreements', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.agreements, {
        id: 'agreements',
        header: label('agreements'),
        cell: (info) => format(info.getValue(), 'agreements'),
      })
    })
    .with('tenancyId', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header: label('tenancyId'),
        cell: (info) => format(info.getValue(), 'tenancyId'),
      })
    })
    .with('_eTag', () => {
      return tenanciesIdBreakClausesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
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
  { label, format }: ConfigItemLookup<TenanciesIdAllowancesBody>,
) => {
  return match(property)
    .with('_links', () => {
      return tenanciesIdAllowancesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return tenanciesIdAllowancesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('typeId', () => {
      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header: label('typeId'),
        cell: (info) => format(info.getValue(), 'typeId'),
      })
    })
    .with('description', () => {
      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .with('state', () => {
      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.state, {
        id: 'state',
        header: label('state'),
        cell: (info) => format(info.getValue(), 'state'),
      })
    })
    .with('agreements', () => {
      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.agreements, {
        id: 'agreements',
        header: label('agreements'),
        cell: (info) => format(info.getValue(), 'agreements'),
      })
    })
    .with('letterText', () => {
      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.letterText, {
        id: 'letterText',
        header: label('letterText'),
        cell: (info) => format(info.getValue(), 'letterText'),
      })
    })
    .with('tenancyId', () => {
      return tenanciesIdAllowancesColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header: label('tenancyId'),
        cell: (info) => format(info.getValue(), 'tenancyId'),
      })
    })
    .with('_eTag', () => {
      return tenanciesIdAllowancesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
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
  { label, format }: ConfigItemLookup<TenanciesIdResponsibilitiesBody>,
) => {
  return match(property)
    .with('_links', () => {
      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('typeId', () => {
      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header: label('typeId'),
        cell: (info) => format(info.getValue(), 'typeId'),
      })
    })
    .with('description', () => {
      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .with('appliesTo', () => {
      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.appliesTo, {
        id: 'appliesTo',
        header: label('appliesTo'),
        cell: (info) => format(info.getValue(), 'appliesTo'),
      })
    })
    .with('agreements', () => {
      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.agreements, {
        id: 'agreements',
        header: label('agreements'),
        cell: (info) => format(info.getValue(), 'agreements'),
      })
    })
    .with('letterText', () => {
      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.letterText, {
        id: 'letterText',
        header: label('letterText'),
        cell: (info) => format(info.getValue(), 'letterText'),
      })
    })
    .with('tenancyId', () => {
      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header: label('tenancyId'),
        cell: (info) => format(info.getValue(), 'tenancyId'),
      })
    })
    .with('_eTag', () => {
      return tenanciesIdResponsibilitiesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
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
  { label, format }: ConfigItemLookup<TenanciesIdRenewalNegotiationsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('startDate', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.startDate, {
        id: 'startDate',
        header: label('startDate'),
        cell: (info) => format(info.getValue(), 'startDate'),
      })
    })
    .with('endDate', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.endDate, {
        id: 'endDate',
        header: label('endDate'),
        cell: (info) => format(info.getValue(), 'endDate'),
      })
    })
    .with('status', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format(info.getValue(), 'status'),
      })
    })
    .with('negotiatorId', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('rent', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.rent, {
        id: 'rent',
        header: label('rent'),
        cell: (info) => format(info.getValue(), 'rent'),
      })
    })
    .with('rentFrequency', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.rentFrequency, {
        id: 'rentFrequency',
        header: label('rentFrequency'),
        cell: (info) => format(info.getValue(), 'rentFrequency'),
      })
    })
    .with('rentChange', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.rentChange, {
        id: 'rentChange',
        header: label('rentChange'),
        cell: (info) => format(info.getValue(), 'rentChange'),
      })
    })
    .with('tenancyId', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header: label('tenancyId'),
        cell: (info) => format(info.getValue(), 'tenancyId'),
      })
    })
    .with('lettingFee', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.lettingFee, {
        id: 'lettingFee',
        header: label('lettingFee'),
        cell: (info) => format(info.getValue(), 'lettingFee'),
      })
    })
    .with('managementFee', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row.managementFee, {
        id: 'managementFee',
        header: label('managementFee'),
        cell: (info) => format(info.getValue(), 'managementFee'),
      })
    })
    .with('_eTag', () => {
      return tenanciesIdRenewalNegotiationsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
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
  { label, format }: ConfigItemLookup<TenanciesIdExtensionsBody>,
) => {
  return match(property)
    .with('_links', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('startDate', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.startDate, {
        id: 'startDate',
        header: label('startDate'),
        cell: (info) => format(info.getValue(), 'startDate'),
      })
    })
    .with('endDate', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.endDate, {
        id: 'endDate',
        header: label('endDate'),
        cell: (info) => format(info.getValue(), 'endDate'),
      })
    })
    .with('type', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header: label('type'),
        cell: (info) => format(info.getValue(), 'type'),
      })
    })
    .with('negotiatorId', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header: label('negotiatorId'),
        cell: (info) => format(info.getValue(), 'negotiatorId'),
      })
    })
    .with('rent', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.rent, {
        id: 'rent',
        header: label('rent'),
        cell: (info) => format(info.getValue(), 'rent'),
      })
    })
    .with('rentFrequency', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.rentFrequency, {
        id: 'rentFrequency',
        header: label('rentFrequency'),
        cell: (info) => format(info.getValue(), 'rentFrequency'),
      })
    })
    .with('tenancyId', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header: label('tenancyId'),
        cell: (info) => format(info.getValue(), 'tenancyId'),
      })
    })
    .with('fee', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row.fee, {
        id: 'fee',
        header: label('fee'),
        cell: (info) => format(info.getValue(), 'fee'),
      })
    })
    .with('_eTag', () => {
      return tenanciesIdExtensionsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
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
  { label, format }: ConfigItemLookup<TenanciesIdRenewalNegotiationsRenewalIdChecksBody>,
) => {
  return match(property)
    .with('_links', () => {
      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header: label('_links'),
        cell: (info) => format(info.getValue(), '_links'),
      })
    })
    .with('_embedded', () => {
      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header: label('_embedded'),
        cell: (info) => format(info.getValue(), '_embedded'),
      })
    })
    .with('id', () => {
      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header: label('id'),
        cell: (info) => format(info.getValue(), 'id'),
      })
    })
    .with('created', () => {
      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header: label('created'),
        cell: (info) => format(info.getValue(), 'created'),
      })
    })
    .with('modified', () => {
      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header: label('modified'),
        cell: (info) => format(info.getValue(), 'modified'),
      })
    })
    .with('status', () => {
      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header: label('status'),
        cell: (info) => format(info.getValue(), 'status'),
      })
    })
    .with('description', () => {
      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header: label('description'),
        cell: (info) => format(info.getValue(), 'description'),
      })
    })
    .with('checkTypeId', () => {
      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.checkTypeId, {
        id: 'checkTypeId',
        header: label('checkTypeId'),
        cell: (info) => format(info.getValue(), 'checkTypeId'),
      })
    })
    .with('tenancyId', () => {
      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.tenancyId, {
        id: 'tenancyId',
        header: label('tenancyId'),
        cell: (info) => format(info.getValue(), 'tenancyId'),
      })
    })
    .with('renewalId', () => {
      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.renewalId, {
        id: 'renewalId',
        header: label('renewalId'),
        cell: (info) => format(info.getValue(), 'renewalId'),
      })
    })
    .with('metadata', () => {
      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header: label('metadata'),
        cell: (info) => format(info.getValue(), 'metadata'),
      })
    })
    .with('_eTag', () => {
      return tenanciesIdRenewalNegotiationsRenewalIdChecksColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header: label('_eTag'),
        cell: (info) => format(info.getValue(), '_eTag'),
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
