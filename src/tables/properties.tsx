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
import { ModelConfig2, ColumnsList } from '@/components/ModelRuntimeConfig'
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
} from '@/services/properties.ts'

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

export const getPropertiesColumn = (property: string, modelConfig: ModelConfig2<PropertyModel>) => {
  return match(property)
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return propertiesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return propertiesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return propertiesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return propertiesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('lastCall', () => {
      const { label: header, format } = modelConfig['lastCall']

      return propertiesColumnHelper.accessor((row) => row.lastCall, {
        id: 'lastCall',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('nextCall', () => {
      const { label: header, format } = modelConfig['nextCall']

      return propertiesColumnHelper.accessor((row) => row.nextCall, {
        id: 'nextCall',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('marketingMode', () => {
      const { label: header, format } = modelConfig['marketingMode']

      return propertiesColumnHelper.accessor((row) => row.marketingMode, {
        id: 'marketingMode',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('currency', () => {
      const { label: header, format } = modelConfig['currency']

      return propertiesColumnHelper.accessor((row) => row.currency, {
        id: 'currency',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('alternateId', () => {
      const { label: header, format } = modelConfig['alternateId']

      return propertiesColumnHelper.accessor((row) => row.alternateId, {
        id: 'alternateId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('address', () => {
      const { label: header, format } = modelConfig['address']

      return propertiesColumnHelper.accessor((row) => row.address, {
        id: 'address',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('areaId', () => {
      const { label: header, format } = modelConfig['areaId']

      return propertiesColumnHelper.accessor((row) => row.areaId, {
        id: 'areaId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('strapline', () => {
      const { label: header, format } = modelConfig['strapline']

      return propertiesColumnHelper.accessor((row) => row.strapline, {
        id: 'strapline',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('description', () => {
      const { label: header, format } = modelConfig['description']

      return propertiesColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('longDescription', () => {
      const { label: header, format } = modelConfig['longDescription']

      return propertiesColumnHelper.accessor((row) => row.longDescription, {
        id: 'longDescription',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('localAuthorityCompanyId', () => {
      const { label: header, format } = modelConfig['localAuthorityCompanyId']

      return propertiesColumnHelper.accessor((row) => row.localAuthorityCompanyId, {
        id: 'localAuthorityCompanyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('localAuthorityCompanyName', () => {
      const { label: header, format } = modelConfig['localAuthorityCompanyName']

      return propertiesColumnHelper.accessor((row) => row.localAuthorityCompanyName, {
        id: 'localAuthorityCompanyName',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('summary', () => {
      const { label: header, format } = modelConfig['summary']

      return propertiesColumnHelper.accessor((row) => row.summary, {
        id: 'summary',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('departmentId', () => {
      const { label: header, format } = modelConfig['departmentId']

      return propertiesColumnHelper.accessor((row) => row.departmentId, {
        id: 'departmentId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format } = modelConfig['negotiatorId']

      return propertiesColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('bedrooms', () => {
      const { label: header, format } = modelConfig['bedrooms']

      return propertiesColumnHelper.accessor((row) => row.bedrooms, {
        id: 'bedrooms',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('bedroomsMax', () => {
      const { label: header, format } = modelConfig['bedroomsMax']

      return propertiesColumnHelper.accessor((row) => row.bedroomsMax, {
        id: 'bedroomsMax',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('receptions', () => {
      const { label: header, format } = modelConfig['receptions']

      return propertiesColumnHelper.accessor((row) => row.receptions, {
        id: 'receptions',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('receptionsMax', () => {
      const { label: header, format } = modelConfig['receptionsMax']

      return propertiesColumnHelper.accessor((row) => row.receptionsMax, {
        id: 'receptionsMax',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('bathrooms', () => {
      const { label: header, format } = modelConfig['bathrooms']

      return propertiesColumnHelper.accessor((row) => row.bathrooms, {
        id: 'bathrooms',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('bathroomsMax', () => {
      const { label: header, format } = modelConfig['bathroomsMax']

      return propertiesColumnHelper.accessor((row) => row.bathroomsMax, {
        id: 'bathroomsMax',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('numberOfUnits', () => {
      const { label: header, format } = modelConfig['numberOfUnits']

      return propertiesColumnHelper.accessor((row) => row.numberOfUnits, {
        id: 'numberOfUnits',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('parkingSpaces', () => {
      const { label: header, format } = modelConfig['parkingSpaces']

      return propertiesColumnHelper.accessor((row) => row.parkingSpaces, {
        id: 'parkingSpaces',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('councilTax', () => {
      const { label: header, format } = modelConfig['councilTax']

      return propertiesColumnHelper.accessor((row) => row.councilTax, {
        id: 'councilTax',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('disabledPortalIds', () => {
      const { label: header, format } = modelConfig['disabledPortalIds']

      return propertiesColumnHelper.accessor((row) => row.disabledPortalIds, {
        id: 'disabledPortalIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('internetAdvertising', () => {
      const { label: header, format } = modelConfig['internetAdvertising']

      return propertiesColumnHelper.accessor((row) => row.internetAdvertising, {
        id: 'internetAdvertising',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('isExternal', () => {
      const { label: header, format } = modelConfig['isExternal']

      return propertiesColumnHelper.accessor((row) => row.isExternal, {
        id: 'isExternal',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('viewingArrangements', () => {
      const { label: header, format } = modelConfig['viewingArrangements']

      return propertiesColumnHelper.accessor((row) => row.viewingArrangements, {
        id: 'viewingArrangements',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('videoUrl', () => {
      const { label: header, format } = modelConfig['videoUrl']

      return propertiesColumnHelper.accessor((row) => row.videoUrl, {
        id: 'videoUrl',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('videoCaption', () => {
      const { label: header, format } = modelConfig['videoCaption']

      return propertiesColumnHelper.accessor((row) => row.videoCaption, {
        id: 'videoCaption',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('video2Url', () => {
      const { label: header, format } = modelConfig['video2Url']

      return propertiesColumnHelper.accessor((row) => row.video2Url, {
        id: 'video2Url',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('video2Caption', () => {
      const { label: header, format } = modelConfig['video2Caption']

      return propertiesColumnHelper.accessor((row) => row.video2Caption, {
        id: 'video2Caption',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('notes', () => {
      const { label: header, format } = modelConfig['notes']

      return propertiesColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('boardStatus', () => {
      const { label: header, format } = modelConfig['boardStatus']

      return propertiesColumnHelper.accessor((row) => row.boardStatus, {
        id: 'boardStatus',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('boardNotes', () => {
      const { label: header, format } = modelConfig['boardNotes']

      return propertiesColumnHelper.accessor((row) => row.boardNotes, {
        id: 'boardNotes',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('featuredImageUrl', () => {
      const { label: header, format } = modelConfig['featuredImageUrl']

      return propertiesColumnHelper.accessor((row) => row.featuredImageUrl, {
        id: 'featuredImageUrl',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('url', () => {
      const { label: header, format } = modelConfig['url']

      return propertiesColumnHelper.accessor((row) => row.url, {
        id: 'url',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('urlCaption', () => {
      const { label: header, format } = modelConfig['urlCaption']

      return propertiesColumnHelper.accessor((row) => row.urlCaption, {
        id: 'urlCaption',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('groundRent', () => {
      const { label: header, format } = modelConfig['groundRent']

      return propertiesColumnHelper.accessor((row) => row.groundRent, {
        id: 'groundRent',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('groundRentComment', () => {
      const { label: header, format } = modelConfig['groundRentComment']

      return propertiesColumnHelper.accessor((row) => row.groundRentComment, {
        id: 'groundRentComment',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('groundRentReviewDate', () => {
      const { label: header, format } = modelConfig['groundRentReviewDate']

      return propertiesColumnHelper.accessor((row) => row.groundRentReviewDate, {
        id: 'groundRentReviewDate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('groundRentIncrease', () => {
      const { label: header, format } = modelConfig['groundRentIncrease']

      return propertiesColumnHelper.accessor((row) => row.groundRentIncrease, {
        id: 'groundRentIncrease',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('serviceCharge', () => {
      const { label: header, format } = modelConfig['serviceCharge']

      return propertiesColumnHelper.accessor((row) => row.serviceCharge, {
        id: 'serviceCharge',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('serviceChargeComment', () => {
      const { label: header, format } = modelConfig['serviceChargeComment']

      return propertiesColumnHelper.accessor((row) => row.serviceChargeComment, {
        id: 'serviceChargeComment',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('floorLevel', () => {
      const { label: header, format } = modelConfig['floorLevel']

      return propertiesColumnHelper.accessor((row) => row.floorLevel, {
        id: 'floorLevel',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('internalFloors', () => {
      const { label: header, format } = modelConfig['internalFloors']

      return propertiesColumnHelper.accessor((row) => row.internalFloors, {
        id: 'internalFloors',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('totalFloors', () => {
      const { label: header, format } = modelConfig['totalFloors']

      return propertiesColumnHelper.accessor((row) => row.totalFloors, {
        id: 'totalFloors',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('boardUpdated', () => {
      const { label: header, format } = modelConfig['boardUpdated']

      return propertiesColumnHelper.accessor((row) => row.boardUpdated, {
        id: 'boardUpdated',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('valuation', () => {
      const { label: header, format } = modelConfig['valuation']

      return propertiesColumnHelper.accessor((row) => row.valuation, {
        id: 'valuation',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('archivedOn', () => {
      const { label: header, format } = modelConfig['archivedOn']

      return propertiesColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fromArchive', () => {
      const { label: header, format } = modelConfig['fromArchive']

      return propertiesColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('rural', () => {
      const { label: header, format } = modelConfig['rural']

      return propertiesColumnHelper.accessor((row) => row.rural, {
        id: 'rural',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('externalArea', () => {
      const { label: header, format } = modelConfig['externalArea']

      return propertiesColumnHelper.accessor((row) => row.externalArea, {
        id: 'externalArea',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('internalArea', () => {
      const { label: header, format } = modelConfig['internalArea']

      return propertiesColumnHelper.accessor((row) => row.internalArea, {
        id: 'internalArea',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('epc', () => {
      const { label: header, format } = modelConfig['epc']

      return propertiesColumnHelper.accessor((row) => row.epc, {
        id: 'epc',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('selling', () => {
      const { label: header, format } = modelConfig['selling']

      return propertiesColumnHelper.accessor((row) => row.selling, {
        id: 'selling',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('letting', () => {
      const { label: header, format } = modelConfig['letting']

      return propertiesColumnHelper.accessor((row) => row.letting, {
        id: 'letting',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('commercial', () => {
      const { label: header, format } = modelConfig['commercial']

      return propertiesColumnHelper.accessor((row) => row.commercial, {
        id: 'commercial',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('regional', () => {
      const { label: header, format } = modelConfig['regional']

      return propertiesColumnHelper.accessor((row) => row.regional, {
        id: 'regional',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('type', () => {
      const { label: header, format } = modelConfig['type']

      return propertiesColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('style', () => {
      const { label: header, format } = modelConfig['style']

      return propertiesColumnHelper.accessor((row) => row.style, {
        id: 'style',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('situation', () => {
      const { label: header, format } = modelConfig['situation']

      return propertiesColumnHelper.accessor((row) => row.situation, {
        id: 'situation',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('parking', () => {
      const { label: header, format } = modelConfig['parking']

      return propertiesColumnHelper.accessor((row) => row.parking, {
        id: 'parking',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('age', () => {
      const { label: header, format } = modelConfig['age']

      return propertiesColumnHelper.accessor((row) => row.age, {
        id: 'age',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('locality', () => {
      const { label: header, format } = modelConfig['locality']

      return propertiesColumnHelper.accessor((row) => row.locality, {
        id: 'locality',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('specialFeatures', () => {
      const { label: header, format } = modelConfig['specialFeatures']

      return propertiesColumnHelper.accessor((row) => row.specialFeatures, {
        id: 'specialFeatures',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('unmappedAttributes', () => {
      const { label: header, format } = modelConfig['unmappedAttributes']

      return propertiesColumnHelper.accessor((row) => row.unmappedAttributes, {
        id: 'unmappedAttributes',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('availableServicesIds', () => {
      const { label: header, format } = modelConfig['availableServicesIds']

      return propertiesColumnHelper.accessor((row) => row.availableServicesIds, {
        id: 'availableServicesIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('rooms', () => {
      const { label: header, format } = modelConfig['rooms']

      return propertiesColumnHelper.accessor((row) => row.rooms, {
        id: 'rooms',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('roomDetailsApproved', () => {
      const { label: header, format } = modelConfig['roomDetailsApproved']

      return propertiesColumnHelper.accessor((row) => row.roomDetailsApproved, {
        id: 'roomDetailsApproved',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('officeIds', () => {
      const { label: header, format } = modelConfig['officeIds']

      return propertiesColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('lostInstructionDate', () => {
      const { label: header, format } = modelConfig['lostInstructionDate']

      return propertiesColumnHelper.accessor((row) => row.lostInstructionDate, {
        id: 'lostInstructionDate',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('lostInstructionNote', () => {
      const { label: header, format } = modelConfig['lostInstructionNote']

      return propertiesColumnHelper.accessor((row) => row.lostInstructionNote, {
        id: 'lostInstructionNote',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('developmentSiteType', () => {
      const { label: header, format } = modelConfig['developmentSiteType']

      return propertiesColumnHelper.accessor((row) => row.developmentSiteType, {
        id: 'developmentSiteType',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('metadata', () => {
      const { label: header, format } = modelConfig['metadata']

      return propertiesColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('keywords', () => {
      const { label: header, format } = modelConfig['keywords']

      return propertiesColumnHelper.accessor((row) => row.keywords, {
        id: 'keywords',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('extrasField', () => {
      const { label: header, format } = modelConfig['extrasField']

      return propertiesColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return propertiesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return propertiesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
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

export const getPropertiesIdCertificatesColumn = (property: string, modelConfig: ModelConfig2<CertificateModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('category', () => {
      const { label: header, format } = modelConfig['category']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.category, {
        id: 'category',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('typeId', () => {
      const { label: header, format } = modelConfig['typeId']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('start', () => {
      const { label: header, format } = modelConfig['start']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.start, {
        id: 'start',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('expiry', () => {
      const { label: header, format } = modelConfig['expiry']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.expiry, {
        id: 'expiry',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('companyId', () => {
      const { label: header, format } = modelConfig['companyId']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('statusId', () => {
      const { label: header, format } = modelConfig['statusId']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.statusId, {
        id: 'statusId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('notes', () => {
      const { label: header, format } = modelConfig['notes']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('referenceNumber', () => {
      const { label: header, format } = modelConfig['referenceNumber']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.referenceNumber, {
        id: 'referenceNumber',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('responsibleParty', () => {
      const { label: header, format } = modelConfig['responsibleParty']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row.responsibleParty, {
        id: 'responsibleParty',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return propertiesIdCertificatesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
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

export const getPropertiesIdKeysColumn = (property: string, modelConfig: ModelConfig2<KeysModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return propertiesIdKeysColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return propertiesIdKeysColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return propertiesIdKeysColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return propertiesIdKeysColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return propertiesIdKeysColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('number', () => {
      const { label: header, format } = modelConfig['number']

      return propertiesIdKeysColumnHelper.accessor((row) => row.number, {
        id: 'number',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('typeId', () => {
      const { label: header, format } = modelConfig['typeId']

      return propertiesIdKeysColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('officeId', () => {
      const { label: header, format } = modelConfig['officeId']

      return propertiesIdKeysColumnHelper.accessor((row) => row.officeId, {
        id: 'officeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return propertiesIdKeysColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('status', () => {
      const { label: header, format } = modelConfig['status']

      return propertiesIdKeysColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('keysInSet', () => {
      const { label: header, format } = modelConfig['keysInSet']

      return propertiesIdKeysColumnHelper.accessor((row) => row.keysInSet, {
        id: 'keysInSet',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return propertiesIdKeysColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
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
  modelConfig: ModelConfig2<KeyMovementModel>,
) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('keyId', () => {
      const { label: header, format } = modelConfig['keyId']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.keyId, {
        id: 'keyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('checkOutToId', () => {
      const { label: header, format } = modelConfig['checkOutToId']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkOutToId, {
        id: 'checkOutToId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('checkOutToType', () => {
      const { label: header, format } = modelConfig['checkOutToType']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkOutToType, {
        id: 'checkOutToType',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('checkOutAt', () => {
      const { label: header, format } = modelConfig['checkOutAt']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkOutAt, {
        id: 'checkOutAt',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('checkOutNegotiatorId', () => {
      const { label: header, format } = modelConfig['checkOutNegotiatorId']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkOutNegotiatorId, {
        id: 'checkOutNegotiatorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('checkInAt', () => {
      const { label: header, format } = modelConfig['checkInAt']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkInAt, {
        id: 'checkInAt',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('checkInNegotiatorId', () => {
      const { label: header, format } = modelConfig['checkInNegotiatorId']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row.checkInNegotiatorId, {
        id: 'checkInNegotiatorId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return propertiesIdKeysKeyIdMovementsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
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

export const getPropertiesIdChecksColumn = (property: string, modelConfig: ModelConfig2<PropertyCheckModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return propertiesIdChecksColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return propertiesIdChecksColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return propertiesIdChecksColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return propertiesIdChecksColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return propertiesIdChecksColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('description', () => {
      const { label: header, format } = modelConfig['description']

      return propertiesIdChecksColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('status', () => {
      const { label: header, format } = modelConfig['status']

      return propertiesIdChecksColumnHelper.accessor((row) => row.status, {
        id: 'status',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('type', () => {
      const { label: header, format } = modelConfig['type']

      return propertiesIdChecksColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return propertiesIdChecksColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return propertiesIdChecksColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
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

export const getPropertiesCertificatesColumn = (property: string, modelConfig: ModelConfig2<CertificateModel>) => {
  return match(property)
    .with('_links', () => {
      const { label: header, format } = modelConfig['_links']

      return propertiesCertificatesColumnHelper.accessor((row) => row._links, {
        id: '_links',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_embedded', () => {
      const { label: header, format } = modelConfig['_embedded']

      return propertiesCertificatesColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return propertiesCertificatesColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return propertiesCertificatesColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return propertiesCertificatesColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('category', () => {
      const { label: header, format } = modelConfig['category']

      return propertiesCertificatesColumnHelper.accessor((row) => row.category, {
        id: 'category',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('typeId', () => {
      const { label: header, format } = modelConfig['typeId']

      return propertiesCertificatesColumnHelper.accessor((row) => row.typeId, {
        id: 'typeId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('start', () => {
      const { label: header, format } = modelConfig['start']

      return propertiesCertificatesColumnHelper.accessor((row) => row.start, {
        id: 'start',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('expiry', () => {
      const { label: header, format } = modelConfig['expiry']

      return propertiesCertificatesColumnHelper.accessor((row) => row.expiry, {
        id: 'expiry',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('propertyId', () => {
      const { label: header, format } = modelConfig['propertyId']

      return propertiesCertificatesColumnHelper.accessor((row) => row.propertyId, {
        id: 'propertyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('companyId', () => {
      const { label: header, format } = modelConfig['companyId']

      return propertiesCertificatesColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('statusId', () => {
      const { label: header, format } = modelConfig['statusId']

      return propertiesCertificatesColumnHelper.accessor((row) => row.statusId, {
        id: 'statusId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('notes', () => {
      const { label: header, format } = modelConfig['notes']

      return propertiesCertificatesColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('referenceNumber', () => {
      const { label: header, format } = modelConfig['referenceNumber']

      return propertiesCertificatesColumnHelper.accessor((row) => row.referenceNumber, {
        id: 'referenceNumber',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('responsibleParty', () => {
      const { label: header, format } = modelConfig['responsibleParty']

      return propertiesCertificatesColumnHelper.accessor((row) => row.responsibleParty, {
        id: 'responsibleParty',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return propertiesCertificatesColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
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

export const getPropertiesIdAppraisalsColumn = (
  property: string,
  modelConfig: ModelConfig2<PropertyAppraisalModel>,
) => {
  return match(property)
    .with('id', () => {
      const { label: header, format } = modelConfig['id']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('created', () => {
      const { label: header, format } = modelConfig['created']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('modified', () => {
      const { label: header, format } = modelConfig['modified']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('companyId', () => {
      const { label: header, format } = modelConfig['companyId']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.companyId, {
        id: 'companyId',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('isExternal', () => {
      const { label: header, format } = modelConfig['isExternal']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.isExternal, {
        id: 'isExternal',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('date', () => {
      const { label: header, format } = modelConfig['date']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.date, {
        id: 'date',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('price', () => {
      const { label: header, format } = modelConfig['price']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.price, {
        id: 'price',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('fee', () => {
      const { label: header, format } = modelConfig['fee']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.fee, {
        id: 'fee',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('notes', () => {
      const { label: header, format } = modelConfig['notes']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
      })
    })
    .with('_eTag', () => {
      const { label: header, format } = modelConfig['_eTag']

      return propertiesIdAppraisalsColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
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
