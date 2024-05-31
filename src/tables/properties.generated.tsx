import {
  propertyModel,
  PropertyModel,
  certificateModel,
  CertificateModel,
  keysModel,
  KeysModel,
  keyMovementModel,
  KeyMovementModel,
  propertyCheckModel,
  PropertyCheckModel,
  propertyAppraisalModel,
  PropertyAppraisalModel,
} from '@/schemas/index.ts'
import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useMemo, useReducer, useState } from 'react'
import {
  useGetApiProperties,
  useGetApiPropertiesIdCertificates,
  useGetApiPropertiesIdKeys,
  useGetApiPropertiesIdKeysKeyIdMovements,
  useGetApiPropertiesIdChecks,
  useGetApiPropertiesCertificates,
  useGetApiPropertiesIdAppraisals,
} from '@/services/properties.generated.ts'

export type PropertiesArgs = {
  sortBy?: string | undefined
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
    | undefined
  id?: Array<string> | undefined
  age?: Array<'period' | 'new' | 'modern' | 'old'> | undefined
  agentRole?:
    | Array<
        'managed' | 'rentCollection' | 'collectFirstPayment' | 'collectRentToDate' | 'lettingOnly' | 'introducingTenant'
      >
    | undefined
  areaId?: Array<string> | undefined
  excludeAreaId?: Array<string> | undefined
  landlordId?: Array<string> | undefined
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
    | undefined
  locality?: Array<'rural' | 'village' | 'townCity'> | undefined
  marketingMode?: Array<'selling' | 'letting' | 'sellingAndLetting'> | undefined
  masterId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  parking?:
    | Array<
        'residents' | 'offStreet' | 'secure' | 'underground' | 'garage' | 'doubleGarage' | 'tripleGarage' | 'carport'
      >
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
    | undefined
  situation?:
    | Array<
        'garden' | 'land' | 'patio' | 'roofTerrace' | 'conservatory' | 'balcony' | 'communalGardens' | 'outsideSpace'
      >
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
    | undefined
  market?: Array<'local' | 'openA' | 'openB' | 'openC' | 'openD'> | undefined
  address?: string | undefined
  countryId?: string | undefined
  departmentId?: string | undefined
  bedroomsFrom?: number | undefined
  bedroomsTo?: number | undefined
  priceFrom?: number | undefined
  priceTo?: number | undefined
  priceFiltersCurrency?: string | undefined
  rentFrom?: number | undefined
  rentTo?: number | undefined
  rentFrequency?: Array<'weekly' | 'monthly' | 'annually'> | undefined
  internetAdvertising?: boolean | undefined
  isExternal?: boolean | undefined
  fromArchive?: boolean | undefined
  availableFrom?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  extrasField?: Array<string> | undefined
  columns: ColumnsList<PropertyModel>
}
export type PropertiesIdCertificatesArgs = {
  id: string
  category?: Array<'safetyCertificate' | 'insurancePolicy' | 'warranty'> | undefined
  columns: ColumnsList<CertificateModel>
}
export type PropertiesIdKeysArgs = { id: string; columns: ColumnsList<KeysModel> }
export type PropertiesIdKeysKeyIdMovementsArgs = { id: string; keyId: string; columns: ColumnsList<KeyMovementModel> }
export type PropertiesIdChecksArgs = { id: string; type?: string | undefined; columns: ColumnsList<PropertyCheckModel> }
export type PropertiesCertificatesArgs = {
  sortBy?: string | undefined
  expiryDateFrom?: string | undefined
  expiryDateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  categories?: Array<string> | undefined
  typeIds?: Array<string> | undefined
  propertyIds?: Array<string> | undefined
  embed?: Array<'property'> | undefined
  columns: ColumnsList<CertificateModel>
}
export type PropertiesIdAppraisalsArgs = { id: string; columns: ColumnsList<PropertyAppraisalModel> }

export const propertiesColumnHelper = createColumnHelper<PropertyModel>()

export const getPropertiesColumn = (property: string, modelConfig: ModelConfig<PropertyModel>) => {
  return match(property)
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return propertiesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return propertiesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return propertiesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return propertiesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('lastCall', () => {
      const { label: header, format, width, minWidth } = modelConfig['lastCall']

      return propertiesColumnHelper.accessor((row) => row.lastCall, {
        id: 'lastCall',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('nextCall', () => {
      const { label: header, format, width, minWidth } = modelConfig['nextCall']

      return propertiesColumnHelper.accessor((row) => row.nextCall, {
        id: 'nextCall',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('marketingMode', () => {
      const { label: header, format, width, minWidth } = modelConfig['marketingMode']

      return propertiesColumnHelper.accessor((row) => row.marketingMode, {
        id: 'marketingMode',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('currency', () => {
      const { label: header, format, width, minWidth } = modelConfig['currency']

      return propertiesColumnHelper.accessor((row) => row.currency, {
        id: 'currency',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('alternateId', () => {
      const { label: header, format, width, minWidth } = modelConfig['alternateId']

      return propertiesColumnHelper.accessor((row) => row.alternateId, {
        id: 'alternateId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('address', () => {
      const { label: header, format, width, minWidth } = modelConfig['address']

      return propertiesColumnHelper.accessor((row) => row.address, {
        id: 'address',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('areaId', () => {
      const { label: header, format, width, minWidth } = modelConfig['areaId']

      return propertiesColumnHelper.accessor((row) => row.areaId, {
        id: 'areaId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('strapline', () => {
      const { label: header, format, width, minWidth } = modelConfig['strapline']

      return propertiesColumnHelper.accessor((row) => row.strapline, {
        id: 'strapline',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return propertiesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('longDescription', () => {
      const { label: header, format, width, minWidth } = modelConfig['longDescription']

      return propertiesColumnHelper.accessor((row) => row.longDescription, {
        id: 'longDescription',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('localAuthorityCompanyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['localAuthorityCompanyId']

      return propertiesColumnHelper.accessor((row) => row.localAuthorityCompanyId, {
        id: 'localAuthorityCompanyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('localAuthorityCompanyName', () => {
      const { label: header, format, width, minWidth } = modelConfig['localAuthorityCompanyName']

      return propertiesColumnHelper.accessor((row) => row.localAuthorityCompanyName, {
        id: 'localAuthorityCompanyName',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('summary', () => {
      const { label: header, format, width, minWidth } = modelConfig['summary']

      return propertiesColumnHelper.accessor((row) => row.summary, {
        id: 'summary',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('departmentId', () => {
      const { label: header, format, width, minWidth } = modelConfig['departmentId']

      return propertiesColumnHelper.accessor((row) => row.departmentId, {
        id: 'departmentId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return propertiesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('bedrooms', () => {
      const { label: header, format, width, minWidth } = modelConfig['bedrooms']

      return propertiesColumnHelper.accessor((row) => row.bedrooms, {
        id: 'bedrooms',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('bedroomsMax', () => {
      const { label: header, format, width, minWidth } = modelConfig['bedroomsMax']

      return propertiesColumnHelper.accessor((row) => row.bedroomsMax, {
        id: 'bedroomsMax',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('receptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['receptions']

      return propertiesColumnHelper.accessor((row) => row.receptions, {
        id: 'receptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('receptionsMax', () => {
      const { label: header, format, width, minWidth } = modelConfig['receptionsMax']

      return propertiesColumnHelper.accessor((row) => row.receptionsMax, {
        id: 'receptionsMax',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('bathrooms', () => {
      const { label: header, format, width, minWidth } = modelConfig['bathrooms']

      return propertiesColumnHelper.accessor((row) => row.bathrooms, {
        id: 'bathrooms',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('bathroomsMax', () => {
      const { label: header, format, width, minWidth } = modelConfig['bathroomsMax']

      return propertiesColumnHelper.accessor((row) => row.bathroomsMax, {
        id: 'bathroomsMax',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('numberOfUnits', () => {
      const { label: header, format, width, minWidth } = modelConfig['numberOfUnits']

      return propertiesColumnHelper.accessor((row) => row.numberOfUnits, {
        id: 'numberOfUnits',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('parkingSpaces', () => {
      const { label: header, format, width, minWidth } = modelConfig['parkingSpaces']

      return propertiesColumnHelper.accessor((row) => row.parkingSpaces, {
        id: 'parkingSpaces',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('councilTax', () => {
      const { label: header, format, width, minWidth } = modelConfig['councilTax']

      return propertiesColumnHelper.accessor((row) => row.councilTax, {
        id: 'councilTax',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('disabledPortalIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['disabledPortalIds']

      return propertiesColumnHelper.accessor((row) => row.disabledPortalIds, {
        id: 'disabledPortalIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('internetAdvertising', () => {
      const { label: header, format, width, minWidth } = modelConfig['internetAdvertising']

      return propertiesColumnHelper.accessor((row) => row.internetAdvertising, {
        id: 'internetAdvertising',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('isExternal', () => {
      const { label: header, format, width, minWidth } = modelConfig['isExternal']

      return propertiesColumnHelper.accessor((row) => row.isExternal, {
        id: 'isExternal',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('viewingArrangements', () => {
      const { label: header, format, width, minWidth } = modelConfig['viewingArrangements']

      return propertiesColumnHelper.accessor((row) => row.viewingArrangements, {
        id: 'viewingArrangements',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('videoUrl', () => {
      const { label: header, format, width, minWidth } = modelConfig['videoUrl']

      return propertiesColumnHelper.accessor((row) => row.videoUrl, {
        id: 'videoUrl',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('videoCaption', () => {
      const { label: header, format, width, minWidth } = modelConfig['videoCaption']

      return propertiesColumnHelper.accessor((row) => row.videoCaption, {
        id: 'videoCaption',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('video2Url', () => {
      const { label: header, format, width, minWidth } = modelConfig['video2Url']

      return propertiesColumnHelper.accessor((row) => row.video2Url, {
        id: 'video2Url',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('video2Caption', () => {
      const { label: header, format, width, minWidth } = modelConfig['video2Caption']

      return propertiesColumnHelper.accessor((row) => row.video2Caption, {
        id: 'video2Caption',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('notes', () => {
      const { label: header, format, width, minWidth } = modelConfig['notes']

      return propertiesColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('boardStatus', () => {
      const { label: header, format, width, minWidth } = modelConfig['boardStatus']

      return propertiesColumnHelper.accessor((row) => row.boardStatus, {
        id: 'boardStatus',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('boardNotes', () => {
      const { label: header, format, width, minWidth } = modelConfig['boardNotes']

      return propertiesColumnHelper.accessor((row) => row.boardNotes, {
        id: 'boardNotes',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('featuredImageUrl', () => {
      const { label: header, format, width, minWidth } = modelConfig['featuredImageUrl']

      return propertiesColumnHelper.accessor((row) => row.featuredImageUrl, {
        id: 'featuredImageUrl',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('url', () => {
      const { label: header, format, width, minWidth } = modelConfig['url']

      return propertiesColumnHelper.accessor((row) => row.url, {
        id: 'url',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('urlCaption', () => {
      const { label: header, format, width, minWidth } = modelConfig['urlCaption']

      return propertiesColumnHelper.accessor((row) => row.urlCaption, {
        id: 'urlCaption',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('groundRent', () => {
      const { label: header, format, width, minWidth } = modelConfig['groundRent']

      return propertiesColumnHelper.accessor((row) => row.groundRent, {
        id: 'groundRent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('groundRentComment', () => {
      const { label: header, format, width, minWidth } = modelConfig['groundRentComment']

      return propertiesColumnHelper.accessor((row) => row.groundRentComment, {
        id: 'groundRentComment',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('groundRentReviewDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['groundRentReviewDate']

      return propertiesColumnHelper.accessor((row) => row.groundRentReviewDate, {
        id: 'groundRentReviewDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('groundRentIncrease', () => {
      const { label: header, format, width, minWidth } = modelConfig['groundRentIncrease']

      return propertiesColumnHelper.accessor((row) => row.groundRentIncrease, {
        id: 'groundRentIncrease',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('serviceCharge', () => {
      const { label: header, format, width, minWidth } = modelConfig['serviceCharge']

      return propertiesColumnHelper.accessor((row) => row.serviceCharge, {
        id: 'serviceCharge',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('serviceChargeComment', () => {
      const { label: header, format, width, minWidth } = modelConfig['serviceChargeComment']

      return propertiesColumnHelper.accessor((row) => row.serviceChargeComment, {
        id: 'serviceChargeComment',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('floorLevel', () => {
      const { label: header, format, width, minWidth } = modelConfig['floorLevel']

      return propertiesColumnHelper.accessor((row) => row.floorLevel, {
        id: 'floorLevel',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('internalFloors', () => {
      const { label: header, format, width, minWidth } = modelConfig['internalFloors']

      return propertiesColumnHelper.accessor((row) => row.internalFloors, {
        id: 'internalFloors',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('totalFloors', () => {
      const { label: header, format, width, minWidth } = modelConfig['totalFloors']

      return propertiesColumnHelper.accessor((row) => row.totalFloors, {
        id: 'totalFloors',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('boardUpdated', () => {
      const { label: header, format, width, minWidth } = modelConfig['boardUpdated']

      return propertiesColumnHelper.accessor((row) => row.boardUpdated, {
        id: 'boardUpdated',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('valuation', () => {
      const { label: header, format, width, minWidth } = modelConfig['valuation']

      return propertiesColumnHelper.accessor((row) => row.valuation, {
        id: 'valuation',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('archivedOn', () => {
      const { label: header, format, width, minWidth } = modelConfig['archivedOn']

      return propertiesColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return propertiesColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rural', () => {
      const { label: header, format, width, minWidth } = modelConfig['rural']

      return propertiesColumnHelper.accessor((row) => row.rural, {
        id: 'rural',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('externalArea', () => {
      const { label: header, format, width, minWidth } = modelConfig['externalArea']

      return propertiesColumnHelper.accessor((row) => row.externalArea, {
        id: 'externalArea',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('internalArea', () => {
      const { label: header, format, width, minWidth } = modelConfig['internalArea']

      return propertiesColumnHelper.accessor((row) => row.internalArea, {
        id: 'internalArea',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('epc', () => {
      const { label: header, format, width, minWidth } = modelConfig['epc']

      return propertiesColumnHelper.accessor((row) => row.epc, {
        id: 'epc',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('selling', () => {
      const { label: header, format, width, minWidth } = modelConfig['selling']

      return propertiesColumnHelper.accessor((row) => row.selling, {
        id: 'selling',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('letting', () => {
      const { label: header, format, width, minWidth } = modelConfig['letting']

      return propertiesColumnHelper.accessor((row) => row.letting, {
        id: 'letting',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('commercial', () => {
      const { label: header, format, width, minWidth } = modelConfig['commercial']

      return propertiesColumnHelper.accessor((row) => row.commercial, {
        id: 'commercial',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('regional', () => {
      const { label: header, format, width, minWidth } = modelConfig['regional']

      return propertiesColumnHelper.accessor((row) => row.regional, {
        id: 'regional',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return propertiesColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('style', () => {
      const { label: header, format, width, minWidth } = modelConfig['style']

      return propertiesColumnHelper.accessor((row) => row.style, {
        id: 'style',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('situation', () => {
      const { label: header, format, width, minWidth } = modelConfig['situation']

      return propertiesColumnHelper.accessor((row) => row.situation, {
        id: 'situation',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('parking', () => {
      const { label: header, format, width, minWidth } = modelConfig['parking']

      return propertiesColumnHelper.accessor((row) => row.parking, {
        id: 'parking',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('age', () => {
      const { label: header, format, width, minWidth } = modelConfig['age']

      return propertiesColumnHelper.accessor((row) => row.age, {
        id: 'age',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('locality', () => {
      const { label: header, format, width, minWidth } = modelConfig['locality']

      return propertiesColumnHelper.accessor((row) => row.locality, {
        id: 'locality',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('specialFeatures', () => {
      const { label: header, format, width, minWidth } = modelConfig['specialFeatures']

      return propertiesColumnHelper.accessor((row) => row.specialFeatures, {
        id: 'specialFeatures',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('unmappedAttributes', () => {
      const { label: header, format, width, minWidth } = modelConfig['unmappedAttributes']

      return propertiesColumnHelper.accessor((row) => row.unmappedAttributes, {
        id: 'unmappedAttributes',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('availableServicesIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['availableServicesIds']

      return propertiesColumnHelper.accessor((row) => row.availableServicesIds, {
        id: 'availableServicesIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rooms', () => {
      const { label: header, format, width, minWidth } = modelConfig['rooms']

      return propertiesColumnHelper.accessor((row) => row.rooms, {
        id: 'rooms',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('roomDetailsApproved', () => {
      const { label: header, format, width, minWidth } = modelConfig['roomDetailsApproved']

      return propertiesColumnHelper.accessor((row) => row.roomDetailsApproved, {
        id: 'roomDetailsApproved',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('officeIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['officeIds']

      return propertiesColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('lostInstructionDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['lostInstructionDate']

      return propertiesColumnHelper.accessor((row) => row.lostInstructionDate, {
        id: 'lostInstructionDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('lostInstructionNote', () => {
      const { label: header, format, width, minWidth } = modelConfig['lostInstructionNote']

      return propertiesColumnHelper.accessor((row) => row.lostInstructionNote, {
        id: 'lostInstructionNote',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('developmentSiteType', () => {
      const { label: header, format, width, minWidth } = modelConfig['developmentSiteType']

      return propertiesColumnHelper.accessor((row) => row.developmentSiteType, {
        id: 'developmentSiteType',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return propertiesColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('keywords', () => {
      const { label: header, format, width, minWidth } = modelConfig['keywords']

      return propertiesColumnHelper.accessor((row) => row.keywords, {
        id: 'keywords',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('extrasField', () => {
      const { label: header, format, width, minWidth } = modelConfig['extrasField']

      return propertiesColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return propertiesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return propertiesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesTable = (args: PropertiesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiProperties({
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
export const propertiesIdCertificatesColumnHelper = createColumnHelper<CertificateModel>()

export const getPropertiesIdCertificatesColumn = (property: string, modelConfig: ModelConfig<CertificateModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('category', () => {
      const { label: header, format, width, minWidth } = modelConfig['category']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.category, {
        id: 'category',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('start', () => {
      const { label: header, format, width, minWidth } = modelConfig['start']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.start, {
        id: 'start',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('expiry', () => {
      const { label: header, format, width, minWidth } = modelConfig['expiry']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.expiry, {
        id: 'expiry',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('companyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['companyId']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('statusId', () => {
      const { label: header, format, width, minWidth } = modelConfig['statusId']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.statusId, {
        id: 'statusId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('notes', () => {
      const { label: header, format, width, minWidth } = modelConfig['notes']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('referenceNumber', () => {
      const { label: header, format, width, minWidth } = modelConfig['referenceNumber']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.referenceNumber, {
        id: 'referenceNumber',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('responsibleParty', () => {
      const { label: header, format, width, minWidth } = modelConfig['responsibleParty']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.responsibleParty, {
        id: 'responsibleParty',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesIdCertificatesTable = (args: PropertiesIdCertificatesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdCertificates({
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
export const propertiesIdKeysColumnHelper = createColumnHelper<KeysModel>()

export const getPropertiesIdKeysColumn = (property: string, modelConfig: ModelConfig<KeysModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return propertiesIdKeysColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return propertiesIdKeysColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return propertiesIdKeysColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return propertiesIdKeysColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return propertiesIdKeysColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('number', () => {
      const { label: header, format, width, minWidth } = modelConfig['number']

      return propertiesIdKeysColumnHelper.accessor((row) => row.number, {
        id: 'number',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return propertiesIdKeysColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('officeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['officeId']

      return propertiesIdKeysColumnHelper.accessor((row) => row.officeId, {
        id: 'officeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return propertiesIdKeysColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return propertiesIdKeysColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('keysInSet', () => {
      const { label: header, format, width, minWidth } = modelConfig['keysInSet']

      return propertiesIdKeysColumnHelper.accessor((row) => row.keysInSet, {
        id: 'keysInSet',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return propertiesIdKeysColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesIdKeysTable = (args: PropertiesIdKeysArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdKeys({
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
export const propertiesIdKeysKeyIdMovementsColumnHelper = createColumnHelper<KeyMovementModel>()

export const getPropertiesIdKeysKeyIdMovementsColumn = (
  property: string,
  modelConfig: ModelConfig<KeyMovementModel>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('keyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['keyId']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.keyId, {
        id: 'keyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('checkOutToId', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkOutToId']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkOutToId, {
        id: 'checkOutToId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('checkOutToType', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkOutToType']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkOutToType, {
        id: 'checkOutToType',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('checkOutAt', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkOutAt']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkOutAt, {
        id: 'checkOutAt',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('checkOutNegotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkOutNegotiatorId']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkOutNegotiatorId, {
        id: 'checkOutNegotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('checkInAt', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkInAt']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkInAt, {
        id: 'checkInAt',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('checkInNegotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['checkInNegotiatorId']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkInNegotiatorId, {
        id: 'checkInNegotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesIdKeysKeyIdMovementsTable = (args: PropertiesIdKeysKeyIdMovementsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdKeysKeyIdMovements({
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
export const propertiesIdChecksColumnHelper = createColumnHelper<PropertyCheckModel>()

export const getPropertiesIdChecksColumn = (property: string, modelConfig: ModelConfig<PropertyCheckModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return propertiesIdChecksColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return propertiesIdChecksColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return propertiesIdChecksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return propertiesIdChecksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return propertiesIdChecksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return propertiesIdChecksColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('status', () => {
      const { label: header, format, width, minWidth } = modelConfig['status']

      return propertiesIdChecksColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return propertiesIdChecksColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return propertiesIdChecksColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return propertiesIdChecksColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesIdChecksTable = (args: PropertiesIdChecksArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdChecks({
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
export const propertiesCertificatesColumnHelper = createColumnHelper<CertificateModel>()

export const getPropertiesCertificatesColumn = (property: string, modelConfig: ModelConfig<CertificateModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return propertiesCertificatesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return propertiesCertificatesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return propertiesCertificatesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return propertiesCertificatesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return propertiesCertificatesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('category', () => {
      const { label: header, format, width, minWidth } = modelConfig['category']

      return propertiesCertificatesColumnHelper.accessor((row) => row.category, {
        id: 'category',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('typeId', () => {
      const { label: header, format, width, minWidth } = modelConfig['typeId']

      return propertiesCertificatesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('start', () => {
      const { label: header, format, width, minWidth } = modelConfig['start']

      return propertiesCertificatesColumnHelper.accessor((row) => row.start, {
        id: 'start',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('expiry', () => {
      const { label: header, format, width, minWidth } = modelConfig['expiry']

      return propertiesCertificatesColumnHelper.accessor((row) => row.expiry, {
        id: 'expiry',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('propertyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['propertyId']

      return propertiesCertificatesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('companyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['companyId']

      return propertiesCertificatesColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('statusId', () => {
      const { label: header, format, width, minWidth } = modelConfig['statusId']

      return propertiesCertificatesColumnHelper.accessor((row) => row.statusId, {
        id: 'statusId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('notes', () => {
      const { label: header, format, width, minWidth } = modelConfig['notes']

      return propertiesCertificatesColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('referenceNumber', () => {
      const { label: header, format, width, minWidth } = modelConfig['referenceNumber']

      return propertiesCertificatesColumnHelper.accessor((row) => row.referenceNumber, {
        id: 'referenceNumber',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('responsibleParty', () => {
      const { label: header, format, width, minWidth } = modelConfig['responsibleParty']

      return propertiesCertificatesColumnHelper.accessor((row) => row.responsibleParty, {
        id: 'responsibleParty',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return propertiesCertificatesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesCertificatesTable = (args: PropertiesCertificatesArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesCertificates({
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
export const propertiesIdAppraisalsColumnHelper = createColumnHelper<PropertyAppraisalModel>()

export const getPropertiesIdAppraisalsColumn = (property: string, modelConfig: ModelConfig<PropertyAppraisalModel>) => {
  return match(property)
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('companyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['companyId']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('isExternal', () => {
      const { label: header, format, width, minWidth } = modelConfig['isExternal']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.isExternal, {
        id: 'isExternal',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('date', () => {
      const { label: header, format, width, minWidth } = modelConfig['date']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('price', () => {
      const { label: header, format, width, minWidth } = modelConfig['price']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.price, {
        id: 'price',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fee', () => {
      const { label: header, format, width, minWidth } = modelConfig['fee']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.fee, {
        id: 'fee',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('notes', () => {
      const { label: header, format, width, minWidth } = modelConfig['notes']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .otherwise(() => {
      throw new Error(`Unknown column: ${property}`)
    })
}

export const usePropertiesIdAppraisalsTable = (args: PropertiesIdAppraisalsArgs) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiPropertiesIdAppraisals({
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
