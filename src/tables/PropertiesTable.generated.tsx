import { createColumnHelper, useReactTable, getCoreRowModel, PaginationState } from '@tanstack/react-table'
import { ModelConfig, ColumnsList } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiProperties } from '@/services/Properties.generated.ts'
import { useMemo, useReducer, useState } from 'react'
import { PropertyModel } from '@/schemas/propertyModel.generated.tsx'

export const usePropertiesTableColumnHelper = createColumnHelper<PropertyModel>()
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
  columns: ColumnsList<PropertyModel>
}
export const getusePropertiesTableColumn = (property: string, modelConfig: ModelConfig<PropertyModel>) => {
  return match(property)
    .with('_embedded', () => {
      const { label: header, format, width, minWidth } = modelConfig['_embedded']

      return usePropertiesTableColumnHelper.accessor((row) => row._embedded, {
        id: '_embedded',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('id', () => {
      const { label: header, format, width, minWidth } = modelConfig['id']

      return usePropertiesTableColumnHelper.accessor((row) => row.id, {
        id: 'id',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('created', () => {
      const { label: header, format, width, minWidth } = modelConfig['created']

      return usePropertiesTableColumnHelper.accessor((row) => row.created, {
        id: 'created',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('modified', () => {
      const { label: header, format, width, minWidth } = modelConfig['modified']

      return usePropertiesTableColumnHelper.accessor((row) => row.modified, {
        id: 'modified',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('lastCall', () => {
      const { label: header, format, width, minWidth } = modelConfig['lastCall']

      return usePropertiesTableColumnHelper.accessor((row) => row.lastCall, {
        id: 'lastCall',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('nextCall', () => {
      const { label: header, format, width, minWidth } = modelConfig['nextCall']

      return usePropertiesTableColumnHelper.accessor((row) => row.nextCall, {
        id: 'nextCall',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('marketingMode', () => {
      const { label: header, format, width, minWidth } = modelConfig['marketingMode']

      return usePropertiesTableColumnHelper.accessor((row) => row.marketingMode, {
        id: 'marketingMode',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('currency', () => {
      const { label: header, format, width, minWidth } = modelConfig['currency']

      return usePropertiesTableColumnHelper.accessor((row) => row.currency, {
        id: 'currency',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('alternateId', () => {
      const { label: header, format, width, minWidth } = modelConfig['alternateId']

      return usePropertiesTableColumnHelper.accessor((row) => row.alternateId, {
        id: 'alternateId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('address', () => {
      const { label: header, format, width, minWidth } = modelConfig['address']

      return usePropertiesTableColumnHelper.accessor((row) => row.address, {
        id: 'address',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('areaId', () => {
      const { label: header, format, width, minWidth } = modelConfig['areaId']

      return usePropertiesTableColumnHelper.accessor((row) => row.areaId, {
        id: 'areaId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('strapline', () => {
      const { label: header, format, width, minWidth } = modelConfig['strapline']

      return usePropertiesTableColumnHelper.accessor((row) => row.strapline, {
        id: 'strapline',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('description', () => {
      const { label: header, format, width, minWidth } = modelConfig['description']

      return usePropertiesTableColumnHelper.accessor((row) => row.description, {
        id: 'description',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('longDescription', () => {
      const { label: header, format, width, minWidth } = modelConfig['longDescription']

      return usePropertiesTableColumnHelper.accessor((row) => row.longDescription, {
        id: 'longDescription',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('localAuthorityCompanyId', () => {
      const { label: header, format, width, minWidth } = modelConfig['localAuthorityCompanyId']

      return usePropertiesTableColumnHelper.accessor((row) => row.localAuthorityCompanyId, {
        id: 'localAuthorityCompanyId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('localAuthorityCompanyName', () => {
      const { label: header, format, width, minWidth } = modelConfig['localAuthorityCompanyName']

      return usePropertiesTableColumnHelper.accessor((row) => row.localAuthorityCompanyName, {
        id: 'localAuthorityCompanyName',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('summary', () => {
      const { label: header, format, width, minWidth } = modelConfig['summary']

      return usePropertiesTableColumnHelper.accessor((row) => row.summary, {
        id: 'summary',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('departmentId', () => {
      const { label: header, format, width, minWidth } = modelConfig['departmentId']

      return usePropertiesTableColumnHelper.accessor((row) => row.departmentId, {
        id: 'departmentId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('negotiatorId', () => {
      const { label: header, format, width, minWidth } = modelConfig['negotiatorId']

      return usePropertiesTableColumnHelper.accessor((row) => row.negotiatorId, {
        id: 'negotiatorId',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('bedrooms', () => {
      const { label: header, format, width, minWidth } = modelConfig['bedrooms']

      return usePropertiesTableColumnHelper.accessor((row) => row.bedrooms, {
        id: 'bedrooms',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('bedroomsMax', () => {
      const { label: header, format, width, minWidth } = modelConfig['bedroomsMax']

      return usePropertiesTableColumnHelper.accessor((row) => row.bedroomsMax, {
        id: 'bedroomsMax',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('receptions', () => {
      const { label: header, format, width, minWidth } = modelConfig['receptions']

      return usePropertiesTableColumnHelper.accessor((row) => row.receptions, {
        id: 'receptions',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('receptionsMax', () => {
      const { label: header, format, width, minWidth } = modelConfig['receptionsMax']

      return usePropertiesTableColumnHelper.accessor((row) => row.receptionsMax, {
        id: 'receptionsMax',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('bathrooms', () => {
      const { label: header, format, width, minWidth } = modelConfig['bathrooms']

      return usePropertiesTableColumnHelper.accessor((row) => row.bathrooms, {
        id: 'bathrooms',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('bathroomsMax', () => {
      const { label: header, format, width, minWidth } = modelConfig['bathroomsMax']

      return usePropertiesTableColumnHelper.accessor((row) => row.bathroomsMax, {
        id: 'bathroomsMax',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('numberOfUnits', () => {
      const { label: header, format, width, minWidth } = modelConfig['numberOfUnits']

      return usePropertiesTableColumnHelper.accessor((row) => row.numberOfUnits, {
        id: 'numberOfUnits',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('parkingSpaces', () => {
      const { label: header, format, width, minWidth } = modelConfig['parkingSpaces']

      return usePropertiesTableColumnHelper.accessor((row) => row.parkingSpaces, {
        id: 'parkingSpaces',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('councilTax', () => {
      const { label: header, format, width, minWidth } = modelConfig['councilTax']

      return usePropertiesTableColumnHelper.accessor((row) => row.councilTax, {
        id: 'councilTax',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('disabledPortalIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['disabledPortalIds']

      return usePropertiesTableColumnHelper.accessor((row) => row.disabledPortalIds, {
        id: 'disabledPortalIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('internetAdvertising', () => {
      const { label: header, format, width, minWidth } = modelConfig['internetAdvertising']

      return usePropertiesTableColumnHelper.accessor((row) => row.internetAdvertising, {
        id: 'internetAdvertising',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('isExternal', () => {
      const { label: header, format, width, minWidth } = modelConfig['isExternal']

      return usePropertiesTableColumnHelper.accessor((row) => row.isExternal, {
        id: 'isExternal',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('viewingArrangements', () => {
      const { label: header, format, width, minWidth } = modelConfig['viewingArrangements']

      return usePropertiesTableColumnHelper.accessor((row) => row.viewingArrangements, {
        id: 'viewingArrangements',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('videoUrl', () => {
      const { label: header, format, width, minWidth } = modelConfig['videoUrl']

      return usePropertiesTableColumnHelper.accessor((row) => row.videoUrl, {
        id: 'videoUrl',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('videoCaption', () => {
      const { label: header, format, width, minWidth } = modelConfig['videoCaption']

      return usePropertiesTableColumnHelper.accessor((row) => row.videoCaption, {
        id: 'videoCaption',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('video2Url', () => {
      const { label: header, format, width, minWidth } = modelConfig['video2Url']

      return usePropertiesTableColumnHelper.accessor((row) => row.video2Url, {
        id: 'video2Url',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('video2Caption', () => {
      const { label: header, format, width, minWidth } = modelConfig['video2Caption']

      return usePropertiesTableColumnHelper.accessor((row) => row.video2Caption, {
        id: 'video2Caption',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('notes', () => {
      const { label: header, format, width, minWidth } = modelConfig['notes']

      return usePropertiesTableColumnHelper.accessor((row) => row.notes, {
        id: 'notes',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('boardStatus', () => {
      const { label: header, format, width, minWidth } = modelConfig['boardStatus']

      return usePropertiesTableColumnHelper.accessor((row) => row.boardStatus, {
        id: 'boardStatus',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('boardNotes', () => {
      const { label: header, format, width, minWidth } = modelConfig['boardNotes']

      return usePropertiesTableColumnHelper.accessor((row) => row.boardNotes, {
        id: 'boardNotes',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('featuredImageUrl', () => {
      const { label: header, format, width, minWidth } = modelConfig['featuredImageUrl']

      return usePropertiesTableColumnHelper.accessor((row) => row.featuredImageUrl, {
        id: 'featuredImageUrl',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('url', () => {
      const { label: header, format, width, minWidth } = modelConfig['url']

      return usePropertiesTableColumnHelper.accessor((row) => row.url, {
        id: 'url',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('urlCaption', () => {
      const { label: header, format, width, minWidth } = modelConfig['urlCaption']

      return usePropertiesTableColumnHelper.accessor((row) => row.urlCaption, {
        id: 'urlCaption',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('groundRent', () => {
      const { label: header, format, width, minWidth } = modelConfig['groundRent']

      return usePropertiesTableColumnHelper.accessor((row) => row.groundRent, {
        id: 'groundRent',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('groundRentComment', () => {
      const { label: header, format, width, minWidth } = modelConfig['groundRentComment']

      return usePropertiesTableColumnHelper.accessor((row) => row.groundRentComment, {
        id: 'groundRentComment',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('groundRentReviewDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['groundRentReviewDate']

      return usePropertiesTableColumnHelper.accessor((row) => row.groundRentReviewDate, {
        id: 'groundRentReviewDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('groundRentIncrease', () => {
      const { label: header, format, width, minWidth } = modelConfig['groundRentIncrease']

      return usePropertiesTableColumnHelper.accessor((row) => row.groundRentIncrease, {
        id: 'groundRentIncrease',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('serviceCharge', () => {
      const { label: header, format, width, minWidth } = modelConfig['serviceCharge']

      return usePropertiesTableColumnHelper.accessor((row) => row.serviceCharge, {
        id: 'serviceCharge',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('serviceChargeComment', () => {
      const { label: header, format, width, minWidth } = modelConfig['serviceChargeComment']

      return usePropertiesTableColumnHelper.accessor((row) => row.serviceChargeComment, {
        id: 'serviceChargeComment',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('floorLevel', () => {
      const { label: header, format, width, minWidth } = modelConfig['floorLevel']

      return usePropertiesTableColumnHelper.accessor((row) => row.floorLevel, {
        id: 'floorLevel',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('internalFloors', () => {
      const { label: header, format, width, minWidth } = modelConfig['internalFloors']

      return usePropertiesTableColumnHelper.accessor((row) => row.internalFloors, {
        id: 'internalFloors',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('totalFloors', () => {
      const { label: header, format, width, minWidth } = modelConfig['totalFloors']

      return usePropertiesTableColumnHelper.accessor((row) => row.totalFloors, {
        id: 'totalFloors',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('boardUpdated', () => {
      const { label: header, format, width, minWidth } = modelConfig['boardUpdated']

      return usePropertiesTableColumnHelper.accessor((row) => row.boardUpdated, {
        id: 'boardUpdated',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('valuation', () => {
      const { label: header, format, width, minWidth } = modelConfig['valuation']

      return usePropertiesTableColumnHelper.accessor((row) => row.valuation, {
        id: 'valuation',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('archivedOn', () => {
      const { label: header, format, width, minWidth } = modelConfig['archivedOn']

      return usePropertiesTableColumnHelper.accessor((row) => row.archivedOn, {
        id: 'archivedOn',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('fromArchive', () => {
      const { label: header, format, width, minWidth } = modelConfig['fromArchive']

      return usePropertiesTableColumnHelper.accessor((row) => row.fromArchive, {
        id: 'fromArchive',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rural', () => {
      const { label: header, format, width, minWidth } = modelConfig['rural']

      return usePropertiesTableColumnHelper.accessor((row) => row.rural, {
        id: 'rural',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('externalArea', () => {
      const { label: header, format, width, minWidth } = modelConfig['externalArea']

      return usePropertiesTableColumnHelper.accessor((row) => row.externalArea, {
        id: 'externalArea',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('internalArea', () => {
      const { label: header, format, width, minWidth } = modelConfig['internalArea']

      return usePropertiesTableColumnHelper.accessor((row) => row.internalArea, {
        id: 'internalArea',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('epc', () => {
      const { label: header, format, width, minWidth } = modelConfig['epc']

      return usePropertiesTableColumnHelper.accessor((row) => row.epc, {
        id: 'epc',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('selling', () => {
      const { label: header, format, width, minWidth } = modelConfig['selling']

      return usePropertiesTableColumnHelper.accessor((row) => row.selling, {
        id: 'selling',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('letting', () => {
      const { label: header, format, width, minWidth } = modelConfig['letting']

      return usePropertiesTableColumnHelper.accessor((row) => row.letting, {
        id: 'letting',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('commercial', () => {
      const { label: header, format, width, minWidth } = modelConfig['commercial']

      return usePropertiesTableColumnHelper.accessor((row) => row.commercial, {
        id: 'commercial',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('regional', () => {
      const { label: header, format, width, minWidth } = modelConfig['regional']

      return usePropertiesTableColumnHelper.accessor((row) => row.regional, {
        id: 'regional',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('type', () => {
      const { label: header, format, width, minWidth } = modelConfig['type']

      return usePropertiesTableColumnHelper.accessor((row) => row.type, {
        id: 'type',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('style', () => {
      const { label: header, format, width, minWidth } = modelConfig['style']

      return usePropertiesTableColumnHelper.accessor((row) => row.style, {
        id: 'style',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('situation', () => {
      const { label: header, format, width, minWidth } = modelConfig['situation']

      return usePropertiesTableColumnHelper.accessor((row) => row.situation, {
        id: 'situation',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('parking', () => {
      const { label: header, format, width, minWidth } = modelConfig['parking']

      return usePropertiesTableColumnHelper.accessor((row) => row.parking, {
        id: 'parking',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('age', () => {
      const { label: header, format, width, minWidth } = modelConfig['age']

      return usePropertiesTableColumnHelper.accessor((row) => row.age, {
        id: 'age',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('locality', () => {
      const { label: header, format, width, minWidth } = modelConfig['locality']

      return usePropertiesTableColumnHelper.accessor((row) => row.locality, {
        id: 'locality',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('specialFeatures', () => {
      const { label: header, format, width, minWidth } = modelConfig['specialFeatures']

      return usePropertiesTableColumnHelper.accessor((row) => row.specialFeatures, {
        id: 'specialFeatures',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('unmappedAttributes', () => {
      const { label: header, format, width, minWidth } = modelConfig['unmappedAttributes']

      return usePropertiesTableColumnHelper.accessor((row) => row.unmappedAttributes, {
        id: 'unmappedAttributes',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('availableServicesIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['availableServicesIds']

      return usePropertiesTableColumnHelper.accessor((row) => row.availableServicesIds, {
        id: 'availableServicesIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('rooms', () => {
      const { label: header, format, width, minWidth } = modelConfig['rooms']

      return usePropertiesTableColumnHelper.accessor((row) => row.rooms, {
        id: 'rooms',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('roomDetailsApproved', () => {
      const { label: header, format, width, minWidth } = modelConfig['roomDetailsApproved']

      return usePropertiesTableColumnHelper.accessor((row) => row.roomDetailsApproved, {
        id: 'roomDetailsApproved',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('officeIds', () => {
      const { label: header, format, width, minWidth } = modelConfig['officeIds']

      return usePropertiesTableColumnHelper.accessor((row) => row.officeIds, {
        id: 'officeIds',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('lostInstructionDate', () => {
      const { label: header, format, width, minWidth } = modelConfig['lostInstructionDate']

      return usePropertiesTableColumnHelper.accessor((row) => row.lostInstructionDate, {
        id: 'lostInstructionDate',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('lostInstructionNote', () => {
      const { label: header, format, width, minWidth } = modelConfig['lostInstructionNote']

      return usePropertiesTableColumnHelper.accessor((row) => row.lostInstructionNote, {
        id: 'lostInstructionNote',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('developmentSiteType', () => {
      const { label: header, format, width, minWidth } = modelConfig['developmentSiteType']

      return usePropertiesTableColumnHelper.accessor((row) => row.developmentSiteType, {
        id: 'developmentSiteType',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('metadata', () => {
      const { label: header, format, width, minWidth } = modelConfig['metadata']

      return usePropertiesTableColumnHelper.accessor((row) => row.metadata, {
        id: 'metadata',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('keywords', () => {
      const { label: header, format, width, minWidth } = modelConfig['keywords']

      return usePropertiesTableColumnHelper.accessor((row) => row.keywords, {
        id: 'keywords',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('extrasField', () => {
      const { label: header, format, width, minWidth } = modelConfig['extrasField']

      return usePropertiesTableColumnHelper.accessor((row) => row.extrasField, {
        id: 'extrasField',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_eTag', () => {
      const { label: header, format, width, minWidth } = modelConfig['_eTag']

      return usePropertiesTableColumnHelper.accessor((row) => row._eTag, {
        id: '_eTag',
        header,
        cell: (info) => format(info.getValue()),
        size: width,
        minSize: minWidth,
      })
    })
    .with('_links', () => {
      const { label: header, format, width, minWidth } = modelConfig['_links']

      return usePropertiesTableColumnHelper.accessor((row) => row._links, {
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
export const usePropertiesTable = (args: UsePropertiesTableArgs) => {
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
