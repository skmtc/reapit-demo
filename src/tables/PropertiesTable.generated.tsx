import { propertyModelConfig } from '@/config/propertyModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import {
  useGetApiProperties,
  useGetApiPropertiesIdCertificates,
  useGetApiPropertiesIdKeys,
  useGetApiPropertiesIdKeysKeyIdMovements,
  useGetApiPropertiesIdChecks,
  useGetApiPropertiesCertificates,
  useGetApiPropertiesIdAppraisals,
} from '@/services/Properties.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { PropertyModel } from '@/schemas/propertyModel.generated.tsx'
import { certificateModelConfig } from '@/config/certificateModelConfig.example.tsx'
import { CertificateModel } from '@/schemas/certificateModel.generated.tsx'
import { keysModelConfig } from '@/config/keysModelConfig.example.tsx'
import { KeysModel } from '@/schemas/keysModel.generated.tsx'
import { keyMovementModelConfig } from '@/config/keyMovementModelConfig.example.tsx'
import { KeyMovementModel } from '@/schemas/keyMovementModel.generated.tsx'
import { propertyCheckModelConfig } from '@/config/propertyCheckModelConfig.example.tsx'
import { PropertyCheckModel } from '@/schemas/propertyCheckModel.generated.tsx'
import { propertyAppraisalModelConfig } from '@/config/propertyAppraisalModelConfig.example.tsx'
import { PropertyAppraisalModel } from '@/schemas/propertyAppraisalModel.generated.tsx'

export const getPropertiesTableColumn = (
  property: string,
  modelConfig: ModelConfig<PropertyModel>,
  row: PropertyModel,
) => {
  return match(property)
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
    .with('lastCall', () => ({
      id: 'lastCall',
      label: modelConfig['lastCall'].label,
      value: modelConfig['lastCall'].format(row['lastCall']),
    }))
    .with('nextCall', () => ({
      id: 'nextCall',
      label: modelConfig['nextCall'].label,
      value: modelConfig['nextCall'].format(row['nextCall']),
    }))
    .with('marketingMode', () => ({
      id: 'marketingMode',
      label: modelConfig['marketingMode'].label,
      value: modelConfig['marketingMode'].format(row['marketingMode']),
    }))
    .with('currency', () => ({
      id: 'currency',
      label: modelConfig['currency'].label,
      value: modelConfig['currency'].format(row['currency']),
    }))
    .with('alternateId', () => ({
      id: 'alternateId',
      label: modelConfig['alternateId'].label,
      value: modelConfig['alternateId'].format(row['alternateId']),
    }))
    .with('address', () => ({
      id: 'address',
      label: modelConfig['address'].label,
      value: modelConfig['address'].format(row['address']),
    }))
    .with('areaId', () => ({
      id: 'areaId',
      label: modelConfig['areaId'].label,
      value: modelConfig['areaId'].format(row['areaId']),
    }))
    .with('strapline', () => ({
      id: 'strapline',
      label: modelConfig['strapline'].label,
      value: modelConfig['strapline'].format(row['strapline']),
    }))
    .with('description', () => ({
      id: 'description',
      label: modelConfig['description'].label,
      value: modelConfig['description'].format(row['description']),
    }))
    .with('longDescription', () => ({
      id: 'longDescription',
      label: modelConfig['longDescription'].label,
      value: modelConfig['longDescription'].format(row['longDescription']),
    }))
    .with('localAuthorityCompanyId', () => ({
      id: 'localAuthorityCompanyId',
      label: modelConfig['localAuthorityCompanyId'].label,
      value: modelConfig['localAuthorityCompanyId'].format(row['localAuthorityCompanyId']),
    }))
    .with('localAuthorityCompanyName', () => ({
      id: 'localAuthorityCompanyName',
      label: modelConfig['localAuthorityCompanyName'].label,
      value: modelConfig['localAuthorityCompanyName'].format(row['localAuthorityCompanyName']),
    }))
    .with('summary', () => ({
      id: 'summary',
      label: modelConfig['summary'].label,
      value: modelConfig['summary'].format(row['summary']),
    }))
    .with('departmentId', () => ({
      id: 'departmentId',
      label: modelConfig['departmentId'].label,
      value: modelConfig['departmentId'].format(row['departmentId']),
    }))
    .with('negotiatorId', () => ({
      id: 'negotiatorId',
      label: modelConfig['negotiatorId'].label,
      value: modelConfig['negotiatorId'].format(row['negotiatorId']),
    }))
    .with('bedrooms', () => ({
      id: 'bedrooms',
      label: modelConfig['bedrooms'].label,
      value: modelConfig['bedrooms'].format(row['bedrooms']),
    }))
    .with('bedroomsMax', () => ({
      id: 'bedroomsMax',
      label: modelConfig['bedroomsMax'].label,
      value: modelConfig['bedroomsMax'].format(row['bedroomsMax']),
    }))
    .with('receptions', () => ({
      id: 'receptions',
      label: modelConfig['receptions'].label,
      value: modelConfig['receptions'].format(row['receptions']),
    }))
    .with('receptionsMax', () => ({
      id: 'receptionsMax',
      label: modelConfig['receptionsMax'].label,
      value: modelConfig['receptionsMax'].format(row['receptionsMax']),
    }))
    .with('bathrooms', () => ({
      id: 'bathrooms',
      label: modelConfig['bathrooms'].label,
      value: modelConfig['bathrooms'].format(row['bathrooms']),
    }))
    .with('bathroomsMax', () => ({
      id: 'bathroomsMax',
      label: modelConfig['bathroomsMax'].label,
      value: modelConfig['bathroomsMax'].format(row['bathroomsMax']),
    }))
    .with('numberOfUnits', () => ({
      id: 'numberOfUnits',
      label: modelConfig['numberOfUnits'].label,
      value: modelConfig['numberOfUnits'].format(row['numberOfUnits']),
    }))
    .with('parkingSpaces', () => ({
      id: 'parkingSpaces',
      label: modelConfig['parkingSpaces'].label,
      value: modelConfig['parkingSpaces'].format(row['parkingSpaces']),
    }))
    .with('councilTax', () => ({
      id: 'councilTax',
      label: modelConfig['councilTax'].label,
      value: modelConfig['councilTax'].format(row['councilTax']),
    }))
    .with('disabledPortalIds', () => ({
      id: 'disabledPortalIds',
      label: modelConfig['disabledPortalIds'].label,
      value: modelConfig['disabledPortalIds'].format(row['disabledPortalIds']),
    }))
    .with('internetAdvertising', () => ({
      id: 'internetAdvertising',
      label: modelConfig['internetAdvertising'].label,
      value: modelConfig['internetAdvertising'].format(row['internetAdvertising']),
    }))
    .with('isExternal', () => ({
      id: 'isExternal',
      label: modelConfig['isExternal'].label,
      value: modelConfig['isExternal'].format(row['isExternal']),
    }))
    .with('viewingArrangements', () => ({
      id: 'viewingArrangements',
      label: modelConfig['viewingArrangements'].label,
      value: modelConfig['viewingArrangements'].format(row['viewingArrangements']),
    }))
    .with('videoUrl', () => ({
      id: 'videoUrl',
      label: modelConfig['videoUrl'].label,
      value: modelConfig['videoUrl'].format(row['videoUrl']),
    }))
    .with('videoCaption', () => ({
      id: 'videoCaption',
      label: modelConfig['videoCaption'].label,
      value: modelConfig['videoCaption'].format(row['videoCaption']),
    }))
    .with('video2Url', () => ({
      id: 'video2Url',
      label: modelConfig['video2Url'].label,
      value: modelConfig['video2Url'].format(row['video2Url']),
    }))
    .with('video2Caption', () => ({
      id: 'video2Caption',
      label: modelConfig['video2Caption'].label,
      value: modelConfig['video2Caption'].format(row['video2Caption']),
    }))
    .with('notes', () => ({
      id: 'notes',
      label: modelConfig['notes'].label,
      value: modelConfig['notes'].format(row['notes']),
    }))
    .with('boardStatus', () => ({
      id: 'boardStatus',
      label: modelConfig['boardStatus'].label,
      value: modelConfig['boardStatus'].format(row['boardStatus']),
    }))
    .with('boardNotes', () => ({
      id: 'boardNotes',
      label: modelConfig['boardNotes'].label,
      value: modelConfig['boardNotes'].format(row['boardNotes']),
    }))
    .with('featuredImageUrl', () => ({
      id: 'featuredImageUrl',
      label: modelConfig['featuredImageUrl'].label,
      value: modelConfig['featuredImageUrl'].format(row['featuredImageUrl']),
    }))
    .with('url', () => ({
      id: 'url',
      label: modelConfig['url'].label,
      value: modelConfig['url'].format(row['url']),
    }))
    .with('urlCaption', () => ({
      id: 'urlCaption',
      label: modelConfig['urlCaption'].label,
      value: modelConfig['urlCaption'].format(row['urlCaption']),
    }))
    .with('groundRent', () => ({
      id: 'groundRent',
      label: modelConfig['groundRent'].label,
      value: modelConfig['groundRent'].format(row['groundRent']),
    }))
    .with('groundRentComment', () => ({
      id: 'groundRentComment',
      label: modelConfig['groundRentComment'].label,
      value: modelConfig['groundRentComment'].format(row['groundRentComment']),
    }))
    .with('groundRentReviewDate', () => ({
      id: 'groundRentReviewDate',
      label: modelConfig['groundRentReviewDate'].label,
      value: modelConfig['groundRentReviewDate'].format(row['groundRentReviewDate']),
    }))
    .with('groundRentIncrease', () => ({
      id: 'groundRentIncrease',
      label: modelConfig['groundRentIncrease'].label,
      value: modelConfig['groundRentIncrease'].format(row['groundRentIncrease']),
    }))
    .with('serviceCharge', () => ({
      id: 'serviceCharge',
      label: modelConfig['serviceCharge'].label,
      value: modelConfig['serviceCharge'].format(row['serviceCharge']),
    }))
    .with('serviceChargeComment', () => ({
      id: 'serviceChargeComment',
      label: modelConfig['serviceChargeComment'].label,
      value: modelConfig['serviceChargeComment'].format(row['serviceChargeComment']),
    }))
    .with('floorLevel', () => ({
      id: 'floorLevel',
      label: modelConfig['floorLevel'].label,
      value: modelConfig['floorLevel'].format(row['floorLevel']),
    }))
    .with('internalFloors', () => ({
      id: 'internalFloors',
      label: modelConfig['internalFloors'].label,
      value: modelConfig['internalFloors'].format(row['internalFloors']),
    }))
    .with('totalFloors', () => ({
      id: 'totalFloors',
      label: modelConfig['totalFloors'].label,
      value: modelConfig['totalFloors'].format(row['totalFloors']),
    }))
    .with('boardUpdated', () => ({
      id: 'boardUpdated',
      label: modelConfig['boardUpdated'].label,
      value: modelConfig['boardUpdated'].format(row['boardUpdated']),
    }))
    .with('valuation', () => ({
      id: 'valuation',
      label: modelConfig['valuation'].label,
      value: modelConfig['valuation'].format(row['valuation']),
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
    .with('rural', () => ({
      id: 'rural',
      label: modelConfig['rural'].label,
      value: modelConfig['rural'].format(row['rural']),
    }))
    .with('externalArea', () => ({
      id: 'externalArea',
      label: modelConfig['externalArea'].label,
      value: modelConfig['externalArea'].format(row['externalArea']),
    }))
    .with('internalArea', () => ({
      id: 'internalArea',
      label: modelConfig['internalArea'].label,
      value: modelConfig['internalArea'].format(row['internalArea']),
    }))
    .with('epc', () => ({
      id: 'epc',
      label: modelConfig['epc'].label,
      value: modelConfig['epc'].format(row['epc']),
    }))
    .with('selling', () => ({
      id: 'selling',
      label: modelConfig['selling'].label,
      value: modelConfig['selling'].format(row['selling']),
    }))
    .with('letting', () => ({
      id: 'letting',
      label: modelConfig['letting'].label,
      value: modelConfig['letting'].format(row['letting']),
    }))
    .with('commercial', () => ({
      id: 'commercial',
      label: modelConfig['commercial'].label,
      value: modelConfig['commercial'].format(row['commercial']),
    }))
    .with('regional', () => ({
      id: 'regional',
      label: modelConfig['regional'].label,
      value: modelConfig['regional'].format(row['regional']),
    }))
    .with('type', () => ({
      id: 'type',
      label: modelConfig['type'].label,
      value: modelConfig['type'].format(row['type']),
    }))
    .with('style', () => ({
      id: 'style',
      label: modelConfig['style'].label,
      value: modelConfig['style'].format(row['style']),
    }))
    .with('situation', () => ({
      id: 'situation',
      label: modelConfig['situation'].label,
      value: modelConfig['situation'].format(row['situation']),
    }))
    .with('parking', () => ({
      id: 'parking',
      label: modelConfig['parking'].label,
      value: modelConfig['parking'].format(row['parking']),
    }))
    .with('age', () => ({
      id: 'age',
      label: modelConfig['age'].label,
      value: modelConfig['age'].format(row['age']),
    }))
    .with('locality', () => ({
      id: 'locality',
      label: modelConfig['locality'].label,
      value: modelConfig['locality'].format(row['locality']),
    }))
    .with('specialFeatures', () => ({
      id: 'specialFeatures',
      label: modelConfig['specialFeatures'].label,
      value: modelConfig['specialFeatures'].format(row['specialFeatures']),
    }))
    .with('unmappedAttributes', () => ({
      id: 'unmappedAttributes',
      label: modelConfig['unmappedAttributes'].label,
      value: modelConfig['unmappedAttributes'].format(row['unmappedAttributes']),
    }))
    .with('availableServicesIds', () => ({
      id: 'availableServicesIds',
      label: modelConfig['availableServicesIds'].label,
      value: modelConfig['availableServicesIds'].format(row['availableServicesIds']),
    }))
    .with('rooms', () => ({
      id: 'rooms',
      label: modelConfig['rooms'].label,
      value: modelConfig['rooms'].format(row['rooms']),
    }))
    .with('roomDetailsApproved', () => ({
      id: 'roomDetailsApproved',
      label: modelConfig['roomDetailsApproved'].label,
      value: modelConfig['roomDetailsApproved'].format(row['roomDetailsApproved']),
    }))
    .with('officeIds', () => ({
      id: 'officeIds',
      label: modelConfig['officeIds'].label,
      value: modelConfig['officeIds'].format(row['officeIds']),
    }))
    .with('lostInstructionDate', () => ({
      id: 'lostInstructionDate',
      label: modelConfig['lostInstructionDate'].label,
      value: modelConfig['lostInstructionDate'].format(row['lostInstructionDate']),
    }))
    .with('lostInstructionNote', () => ({
      id: 'lostInstructionNote',
      label: modelConfig['lostInstructionNote'].label,
      value: modelConfig['lostInstructionNote'].format(row['lostInstructionNote']),
    }))
    .with('developmentSiteType', () => ({
      id: 'developmentSiteType',
      label: modelConfig['developmentSiteType'].label,
      value: modelConfig['developmentSiteType'].format(row['developmentSiteType']),
    }))
    .with('metadata', () => ({
      id: 'metadata',
      label: modelConfig['metadata'].label,
      value: modelConfig['metadata'].format(row['metadata']),
    }))
    .with('keywords', () => ({
      id: 'keywords',
      label: modelConfig['keywords'].label,
      value: modelConfig['keywords'].format(row['keywords']),
    }))
    .with('extrasField', () => ({
      id: 'extrasField',
      label: modelConfig['extrasField'].label,
      value: modelConfig['extrasField'].format(row['extrasField']),
    }))
    .with('_eTag', () => ({
      id: '_eTag',
      label: modelConfig['_eTag'].label,
      value: modelConfig['_eTag'].format(row['_eTag']),
    }))
    .with('_links', () => ({
      id: '_links',
      label: modelConfig['_links'].label,
      value: modelConfig['_links'].format(row['_links']),
    }))
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}
export type UsePropertiesTableArgs = {
  sortBy?: string | null | undefined
  embed?:
    | Array<
        | 'appointments'
        | 'area'
        | 'certificates'
        | 'department'
        | 'documents'
        | 'images'
        | 'keys'
        | 'landlord'
        | 'negotiator'
        | 'offers'
        | 'offices'
        | 'tenancies'
        | 'vendor'
      >
    | null
    | undefined
  id?: Array<string> | null | undefined
  age?: Array<'period' | 'new' | 'modern' | 'old'> | null | undefined
  agentRole?:
    | Array<
        'managed' | 'rentCollection' | 'collectFirstPayment' | 'collectRentToDate' | 'lettingOnly' | 'introducingTenant'
      >
    | null
    | undefined
  areaId?: Array<string> | null | undefined
  excludeAreaId?: Array<string> | null | undefined
  landlordId?: Array<string> | null | undefined
  lettingStatus?:
    | Array<
        | 'valuation'
        | 'toLet'
        | 'toLetUnavailable'
        | 'underOffer'
        | 'underOfferUnavailable'
        | 'arrangingTenancyUnavailable'
        | 'arrangingTenancy'
        | 'tenancyCurrentUnavailable'
        | 'tenancyCurrent'
        | 'tenancyFinished'
        | 'tenancyCancelled'
        | 'sold'
        | 'letByOtherAgent'
        | 'letPrivately'
        | 'provisional'
        | 'withdrawn'
      >
    | null
    | undefined
  locality?: Array<'rural' | 'village' | 'townCity'> | null | undefined
  marketingMode?: Array<'selling' | 'letting' | 'sellingAndLetting'> | null | undefined
  masterId?: Array<string> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  parking?:
    | Array<
        'residents' | 'offStreet' | 'secure' | 'underground' | 'garage' | 'doubleGarage' | 'tripleGarage' | 'carport'
      >
    | null
    | undefined
  sellingStatus?:
    | Array<
        | 'preAppraisal'
        | 'valuation'
        | 'paidValuation'
        | 'forSale'
        | 'forSaleUnavailable'
        | 'underOffer'
        | 'underOfferUnavailable'
        | 'reserved'
        | 'exchanged'
        | 'completed'
        | 'soldExternally'
        | 'withdrawn'
      >
    | null
    | undefined
  situation?:
    | Array<
        'garden' | 'land' | 'patio' | 'roofTerrace' | 'conservatory' | 'balcony' | 'communalGardens' | 'outsideSpace'
      >
    | null
    | undefined
  style?:
    | Array<
        | 'terraced'
        | 'endTerrace'
        | 'detached'
        | 'semiDetached'
        | 'linkDetached'
        | 'mews'
        | 'basement'
        | 'lowerGroundFloor'
        | 'groundFloor'
        | 'firstFloor'
        | 'upperFloor'
        | 'upperFloorWithLift'
        | 'penthouse'
        | 'duplex'
      >
    | null
    | undefined
  type?:
    | Array<
        | 'house'
        | 'bungalow'
        | 'flatApartment'
        | 'maisonette'
        | 'land'
        | 'farm'
        | 'cottage'
        | 'studio'
        | 'townhouse'
        | 'developmentPlot'
      >
    | null
    | undefined
  market?: Array<'local' | 'openA' | 'openB' | 'openC' | 'openD'> | null | undefined
  address?: string | null | undefined
  countryId?: string | null | undefined
  departmentId?: string | null | undefined
  bedroomsFrom?: number | null | undefined
  bedroomsTo?: number | null | undefined
  priceFrom?: number | null | undefined
  priceTo?: number | null | undefined
  priceFiltersCurrency?: string | null | undefined
  rentFrom?: number | null | undefined
  rentTo?: number | null | undefined
  rentFrequency?: Array<'weekly' | 'monthly' | 'annually'> | null | undefined
  internetAdvertising?: boolean | null | undefined
  isExternal?: boolean | null | undefined
  fromArchive?: boolean | null | undefined
  availableFrom?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  metadata?: Array<string> | null | undefined
  extrasField?: Array<string> | null | undefined
  fieldNames: (keyof PropertyModel)[]
}
export const usePropertiesTable = (args: UsePropertiesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiProperties({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof PropertyModel => c in row)
        .map((fieldName) => getPropertiesTableColumn(fieldName, propertyModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getPropertiesIdCertificatesTableColumn = (
  property: string,
  modelConfig: ModelConfig<CertificateModel>,
  row: CertificateModel,
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
    .with('category', () => ({
      id: 'category',
      label: modelConfig['category'].label,
      value: modelConfig['category'].format(row['category']),
    }))
    .with('typeId', () => ({
      id: 'typeId',
      label: modelConfig['typeId'].label,
      value: modelConfig['typeId'].format(row['typeId']),
    }))
    .with('start', () => ({
      id: 'start',
      label: modelConfig['start'].label,
      value: modelConfig['start'].format(row['start']),
    }))
    .with('expiry', () => ({
      id: 'expiry',
      label: modelConfig['expiry'].label,
      value: modelConfig['expiry'].format(row['expiry']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('companyId', () => ({
      id: 'companyId',
      label: modelConfig['companyId'].label,
      value: modelConfig['companyId'].format(row['companyId']),
    }))
    .with('statusId', () => ({
      id: 'statusId',
      label: modelConfig['statusId'].label,
      value: modelConfig['statusId'].format(row['statusId']),
    }))
    .with('notes', () => ({
      id: 'notes',
      label: modelConfig['notes'].label,
      value: modelConfig['notes'].format(row['notes']),
    }))
    .with('referenceNumber', () => ({
      id: 'referenceNumber',
      label: modelConfig['referenceNumber'].label,
      value: modelConfig['referenceNumber'].format(row['referenceNumber']),
    }))
    .with('responsibleParty', () => ({
      id: 'responsibleParty',
      label: modelConfig['responsibleParty'].label,
      value: modelConfig['responsibleParty'].format(row['responsibleParty']),
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
export type UsePropertiesIdCertificatesTableArgs = {
  id: string
  category?: Array<'safetyCertificate' | 'insurancePolicy' | 'warranty'> | null | undefined
  fieldNames: (keyof CertificateModel)[]
}
export const usePropertiesIdCertificatesTable = (args: UsePropertiesIdCertificatesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdCertificates({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof CertificateModel => c in row)
        .map((fieldName) => getPropertiesIdCertificatesTableColumn(fieldName, certificateModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getPropertiesIdKeysTableColumn = (
  property: string,
  modelConfig: ModelConfig<KeysModel>,
  row: KeysModel,
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
    .with('number', () => ({
      id: 'number',
      label: modelConfig['number'].label,
      value: modelConfig['number'].format(row['number']),
    }))
    .with('typeId', () => ({
      id: 'typeId',
      label: modelConfig['typeId'].label,
      value: modelConfig['typeId'].format(row['typeId']),
    }))
    .with('officeId', () => ({
      id: 'officeId',
      label: modelConfig['officeId'].label,
      value: modelConfig['officeId'].format(row['officeId']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('status', () => ({
      id: 'status',
      label: modelConfig['status'].label,
      value: modelConfig['status'].format(row['status']),
    }))
    .with('keysInSet', () => ({
      id: 'keysInSet',
      label: modelConfig['keysInSet'].label,
      value: modelConfig['keysInSet'].format(row['keysInSet']),
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
export type UsePropertiesIdKeysTableArgs = { id: string; fieldNames: (keyof KeysModel)[] }
export const usePropertiesIdKeysTable = (args: UsePropertiesIdKeysTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdKeys({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof KeysModel => c in row)
        .map((fieldName) => getPropertiesIdKeysTableColumn(fieldName, keysModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getPropertiesIdKeysKeyIdMovementsTableColumn = (
  property: string,
  modelConfig: ModelConfig<KeyMovementModel>,
  row: KeyMovementModel,
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
    .with('keyId', () => ({
      id: 'keyId',
      label: modelConfig['keyId'].label,
      value: modelConfig['keyId'].format(row['keyId']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('checkOutToId', () => ({
      id: 'checkOutToId',
      label: modelConfig['checkOutToId'].label,
      value: modelConfig['checkOutToId'].format(row['checkOutToId']),
    }))
    .with('checkOutToType', () => ({
      id: 'checkOutToType',
      label: modelConfig['checkOutToType'].label,
      value: modelConfig['checkOutToType'].format(row['checkOutToType']),
    }))
    .with('checkOutAt', () => ({
      id: 'checkOutAt',
      label: modelConfig['checkOutAt'].label,
      value: modelConfig['checkOutAt'].format(row['checkOutAt']),
    }))
    .with('checkOutNegotiatorId', () => ({
      id: 'checkOutNegotiatorId',
      label: modelConfig['checkOutNegotiatorId'].label,
      value: modelConfig['checkOutNegotiatorId'].format(row['checkOutNegotiatorId']),
    }))
    .with('checkInAt', () => ({
      id: 'checkInAt',
      label: modelConfig['checkInAt'].label,
      value: modelConfig['checkInAt'].format(row['checkInAt']),
    }))
    .with('checkInNegotiatorId', () => ({
      id: 'checkInNegotiatorId',
      label: modelConfig['checkInNegotiatorId'].label,
      value: modelConfig['checkInNegotiatorId'].format(row['checkInNegotiatorId']),
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
export type UsePropertiesIdKeysKeyIdMovementsTableArgs = {
  id: string
  keyId: string
  fieldNames: (keyof KeyMovementModel)[]
}
export const usePropertiesIdKeysKeyIdMovementsTable = (args: UsePropertiesIdKeysKeyIdMovementsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdKeysKeyIdMovements({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof KeyMovementModel => c in row)
        .map((fieldName) => getPropertiesIdKeysKeyIdMovementsTableColumn(fieldName, keyMovementModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getPropertiesIdChecksTableColumn = (
  property: string,
  modelConfig: ModelConfig<PropertyCheckModel>,
  row: PropertyCheckModel,
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
    .with('type', () => ({
      id: 'type',
      label: modelConfig['type'].label,
      value: modelConfig['type'].format(row['type']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
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
export type UsePropertiesIdChecksTableArgs = {
  id: string
  type?: string | null | undefined
  fieldNames: (keyof PropertyCheckModel)[]
}
export const usePropertiesIdChecksTable = (args: UsePropertiesIdChecksTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdChecks({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof PropertyCheckModel => c in row)
        .map((fieldName) => getPropertiesIdChecksTableColumn(fieldName, propertyCheckModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getPropertiesCertificatesTableColumn = (
  property: string,
  modelConfig: ModelConfig<CertificateModel>,
  row: CertificateModel,
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
    .with('category', () => ({
      id: 'category',
      label: modelConfig['category'].label,
      value: modelConfig['category'].format(row['category']),
    }))
    .with('typeId', () => ({
      id: 'typeId',
      label: modelConfig['typeId'].label,
      value: modelConfig['typeId'].format(row['typeId']),
    }))
    .with('start', () => ({
      id: 'start',
      label: modelConfig['start'].label,
      value: modelConfig['start'].format(row['start']),
    }))
    .with('expiry', () => ({
      id: 'expiry',
      label: modelConfig['expiry'].label,
      value: modelConfig['expiry'].format(row['expiry']),
    }))
    .with('propertyId', () => ({
      id: 'propertyId',
      label: modelConfig['propertyId'].label,
      value: modelConfig['propertyId'].format(row['propertyId']),
    }))
    .with('companyId', () => ({
      id: 'companyId',
      label: modelConfig['companyId'].label,
      value: modelConfig['companyId'].format(row['companyId']),
    }))
    .with('statusId', () => ({
      id: 'statusId',
      label: modelConfig['statusId'].label,
      value: modelConfig['statusId'].format(row['statusId']),
    }))
    .with('notes', () => ({
      id: 'notes',
      label: modelConfig['notes'].label,
      value: modelConfig['notes'].format(row['notes']),
    }))
    .with('referenceNumber', () => ({
      id: 'referenceNumber',
      label: modelConfig['referenceNumber'].label,
      value: modelConfig['referenceNumber'].format(row['referenceNumber']),
    }))
    .with('responsibleParty', () => ({
      id: 'responsibleParty',
      label: modelConfig['responsibleParty'].label,
      value: modelConfig['responsibleParty'].format(row['responsibleParty']),
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
export type UsePropertiesCertificatesTableArgs = {
  sortBy?: string | null | undefined
  expiryDateFrom?: string | null | undefined
  expiryDateTo?: string | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  categories?: Array<string> | null | undefined
  typeIds?: Array<string> | null | undefined
  propertyIds?: Array<string> | null | undefined
  embed?: Array<'property'> | null | undefined
  fieldNames: (keyof CertificateModel)[]
}
export const usePropertiesCertificatesTable = (args: UsePropertiesCertificatesTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesCertificates({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof CertificateModel => c in row)
        .map((fieldName) => getPropertiesCertificatesTableColumn(fieldName, certificateModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
export const getPropertiesIdAppraisalsTableColumn = (
  property: string,
  modelConfig: ModelConfig<PropertyAppraisalModel>,
  row: PropertyAppraisalModel,
) => {
  return match(property)
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
    .with('companyId', () => ({
      id: 'companyId',
      label: modelConfig['companyId'].label,
      value: modelConfig['companyId'].format(row['companyId']),
    }))
    .with('isExternal', () => ({
      id: 'isExternal',
      label: modelConfig['isExternal'].label,
      value: modelConfig['isExternal'].format(row['isExternal']),
    }))
    .with('date', () => ({
      id: 'date',
      label: modelConfig['date'].label,
      value: modelConfig['date'].format(row['date']),
    }))
    .with('price', () => ({
      id: 'price',
      label: modelConfig['price'].label,
      value: modelConfig['price'].format(row['price']),
    }))
    .with('fee', () => ({
      id: 'fee',
      label: modelConfig['fee'].label,
      value: modelConfig['fee'].format(row['fee']),
    }))
    .with('notes', () => ({
      id: 'notes',
      label: modelConfig['notes'].label,
      value: modelConfig['notes'].format(row['notes']),
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
export type UsePropertiesIdAppraisalsTableArgs = { id: string; fieldNames: (keyof PropertyAppraisalModel)[] }
export const usePropertiesIdAppraisalsTable = (args: UsePropertiesIdAppraisalsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdAppraisals({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof PropertyAppraisalModel => c in row)
        .map((fieldName) => getPropertiesIdAppraisalsTableColumn(fieldName, propertyAppraisalModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
