import { contactModelConfig } from '@/sections/Contacts/config/contactModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import {
  useGetApiContacts,
  useGetApiContactsIdRelationships,
  useGetApiContactsIdSubscriptions,
} from '@/sections/Contacts/services/Contacts.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { ContactModel } from '@/schemas/contactModel.generated.tsx'
import { contactRoleModelConfig } from '@/sections/Contacts/config/contactRoleModelConfig.example.tsx'
import { ContactRoleModel } from '@/schemas/contactRoleModel.generated.tsx'
import { contactSubscriptionModelConfig } from '@/sections/Contacts/config/contactSubscriptionModelConfig.example.tsx'
import { ContactSubscriptionModel } from '@/schemas/contactSubscriptionModel.generated.tsx'

export const getContactsTableColumn = (property: string, modelConfig: ModelConfig<ContactModel>, row: ContactModel) => {
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
    .with('dateOfBirth', () => ({
      id: 'dateOfBirth',
      label: modelConfig['dateOfBirth'].label,
      value: modelConfig['dateOfBirth'].format(row['dateOfBirth']),
    }))
    .with('active', () => ({
      id: 'active',
      label: modelConfig['active'].label,
      value: modelConfig['active'].format(row['active']),
    }))
    .with('marketingConsent', () => ({
      id: 'marketingConsent',
      label: modelConfig['marketingConsent'].label,
      value: modelConfig['marketingConsent'].format(row['marketingConsent']),
    }))
    .with('identityCheck', () => ({
      id: 'identityCheck',
      label: modelConfig['identityCheck'].label,
      value: modelConfig['identityCheck'].format(row['identityCheck']),
    }))
    .with('source', () => ({
      id: 'source',
      label: modelConfig['source'].label,
      value: modelConfig['source'].format(row['source']),
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
      icon: 'email',
      label: modelConfig['email'].label,
      value: modelConfig['email'].format(row['email']),
    }))
    .with('archivedOn', () => ({
      id: 'archivedOn',
      label: modelConfig['archivedOn'].label,
      value: modelConfig['archivedOn'].format(row['archivedOn']),
    }))
    .with('fromArchive', () => ({
      id: 'fromArchive',
      label: modelConfig['fromArchive'].label,
      value: modelConfig['fromArchive'].format(row['fromArchive']),
    }))
    .with('primaryAddress', () => ({
      id: 'primaryAddress',
      label: modelConfig['primaryAddress'].label,
      value: modelConfig['primaryAddress'].format(row['primaryAddress']),
    }))
    .with('secondaryAddress', () => ({
      id: 'secondaryAddress',
      label: modelConfig['secondaryAddress'].label,
      value: modelConfig['secondaryAddress'].format(row['secondaryAddress']),
    }))
    .with('workAddress', () => ({
      id: 'workAddress',
      label: modelConfig['workAddress'].label,
      value: modelConfig['workAddress'].format(row['workAddress']),
    }))
    .with('officeIds', () => ({
      id: 'officeIds',
      label: modelConfig['officeIds'].label,
      value: modelConfig['officeIds'].format(row['officeIds']),
    }))
    .with('negotiatorIds', () => ({
      id: 'negotiatorIds',
      label: modelConfig['negotiatorIds'].label,
      value: modelConfig['negotiatorIds'].format(row['negotiatorIds']),
    }))
    .with('categoryIds', () => ({
      id: 'categoryIds',
      label: modelConfig['categoryIds'].label,
      value: modelConfig['categoryIds'].format(row['categoryIds']),
    }))
    .with('communicationPreferenceLetter', () => ({
      id: 'communicationPreferenceLetter',
      label: modelConfig['communicationPreferenceLetter'].label,
      value: modelConfig['communicationPreferenceLetter'].format(row['communicationPreferenceLetter']),
    }))
    .with('communicationPreferenceEmail', () => ({
      id: 'communicationPreferenceEmail',
      label: modelConfig['communicationPreferenceEmail'].label,
      value: modelConfig['communicationPreferenceEmail'].format(row['communicationPreferenceEmail']),
    }))
    .with('communicationPreferencePhone', () => ({
      id: 'communicationPreferencePhone',
      label: modelConfig['communicationPreferencePhone'].label,
      value: modelConfig['communicationPreferencePhone'].format(row['communicationPreferencePhone']),
    }))
    .with('communicationPreferenceSMS', () => ({
      id: 'communicationPreferenceSMS',
      label: modelConfig['communicationPreferenceSMS'].label,
      value: modelConfig['communicationPreferenceSMS'].format(row['communicationPreferenceSMS']),
    }))
    .with('additionalContactDetails', () => ({
      id: 'additionalContactDetails',
      label: modelConfig['additionalContactDetails'].label,
      value: modelConfig['additionalContactDetails'].format(row['additionalContactDetails']),
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
    .with('extrasField', () => ({
      id: 'extrasField',
      label: modelConfig['extrasField'].label,
      value: modelConfig['extrasField'].format(row['extrasField']),
    }))
    .with('relationships', () => ({
      id: 'relationships',
      label: modelConfig['relationships'].label,
      value: modelConfig['relationships'].format(row['relationships']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseContactsTableArgs = {
  sortBy?: string | null | undefined
  embed?:
    | Array<'documents' | 'identityChecks' | 'negotiators' | 'offices' | 'relationships' | 'source'>
    | null
    | undefined
  id?: Array<string> | null | undefined
  contactDetail?: Array<string> | null | undefined
  email?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  address?: string | null | undefined
  identityCheck?: Array<'pass' | 'fail' | 'pending' | 'warnings' | 'unchecked'> | null | undefined
  name?: string | null | undefined
  nameType?: string | null | undefined
  marketingConsent?: Array<'grant' | 'deny' | 'notAsked'> | null | undefined
  marketingConsentFilterType?: Array<'assumedOrExplicit' | 'explicit'> | null | undefined
  active?: boolean | null | undefined
  fromArchive?: boolean | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  extrasField?: Array<string> | null | undefined
  fieldNames: (keyof ContactModel)[]
}
export const useContactsTable = (args: UseContactsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiContacts({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof ContactModel => c in row)
        .map((fieldName) => getContactsTableColumn(fieldName, contactModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getContactsIdRelationshipsTableColumn = (
  property: string,
  modelConfig: ModelConfig<ContactRoleModel>,
  row: ContactRoleModel,
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
    .with('contactId', () => ({
      id: 'contactId',
      label: modelConfig['contactId'].label,
      value: modelConfig['contactId'].format(row['contactId']),
    }))
    .with('associatedType', () => ({
      id: 'associatedType',
      label: modelConfig['associatedType'].label,
      value: modelConfig['associatedType'].format(row['associatedType']),
    }))
    .with('associatedId', () => ({
      id: 'associatedId',
      label: modelConfig['associatedId'].label,
      value: modelConfig['associatedId'].format(row['associatedId']),
    }))
    .with('fromArchive', () => ({
      id: 'fromArchive',
      label: modelConfig['fromArchive'].label,
      value: modelConfig['fromArchive'].format(row['fromArchive']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseContactsIdRelationshipsTableArgs = { id: string; fieldNames: (keyof ContactRoleModel)[] }
export const useContactsIdRelationshipsTable = (args: UseContactsIdRelationshipsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiContactsIdRelationships({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof ContactRoleModel => c in row)
        .map((fieldName) => getContactsIdRelationshipsTableColumn(fieldName, contactRoleModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getContactsIdSubscriptionsTableColumn = (
  property: string,
  modelConfig: ModelConfig<ContactSubscriptionModel>,
  row: ContactSubscriptionModel,
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
    .with('contactId', () => ({
      id: 'contactId',
      label: modelConfig['contactId'].label,
      value: modelConfig['contactId'].format(row['contactId']),
    }))
    .with('name', () => ({
      id: 'name',
      label: modelConfig['name'].label,
      value: modelConfig['name'].format(row['name']),
    }))
    .with('group', () => ({
      id: 'group',
      label: modelConfig['group'].label,
      value: modelConfig['group'].format(row['group']),
    }))
    .with('status', () => ({
      id: 'status',
      label: modelConfig['status'].label,
      value: modelConfig['status'].format(row['status']),
    }))
    .with('type', () => ({
      id: 'type',
      label: modelConfig['type'].label,
      value: modelConfig['type'].format(row['type']),
    }))
    .with('subscribedOn', () => ({
      id: 'subscribedOn',
      label: modelConfig['subscribedOn'].label,
      value: modelConfig['subscribedOn'].format(row['subscribedOn']),
    }))
    .with('unsubscribedOn', () => ({
      id: 'unsubscribedOn',
      label: modelConfig['unsubscribedOn'].label,
      value: modelConfig['unsubscribedOn'].format(row['unsubscribedOn']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UseContactsIdSubscriptionsTableArgs = {
  id: string
  type?: string | null | undefined
  status?: string | null | undefined
  fieldNames: (keyof ContactSubscriptionModel)[]
}
export const useContactsIdSubscriptionsTable = (args: UseContactsIdSubscriptionsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiContactsIdSubscriptions({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof ContactSubscriptionModel => c in row)
        .map((fieldName) => getContactsIdSubscriptionsTableColumn(fieldName, contactSubscriptionModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
