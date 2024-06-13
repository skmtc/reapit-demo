import { applicantModelConfig } from '@/config/applicantModelConfig.example.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'
import { match } from 'ts-pattern'
import { useGetApiApplicants } from '@/services/Applicants.generated.ts'
import { useState } from 'react'
import { RowProps } from '@reapit/elements'
import { ApplicantModel } from '@/schemas/applicantModel.generated.tsx'

export const getApplicantsTableColumn = (
  property: string,
  modelConfig: ModelConfig<ApplicantModel>,
  row: ApplicantModel,
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
    .with('active', () => ({
      id: 'active',
      label: modelConfig['active'].label,
      value: modelConfig['active'].format(row['active']),
    }))
    .with('notes', () => ({
      id: 'notes',
      label: modelConfig['notes'].label,
      value: modelConfig['notes'].format(row['notes']),
    }))
    .with('sellingStatus', () => ({
      id: 'sellingStatus',
      label: modelConfig['sellingStatus'].label,
      value: modelConfig['sellingStatus'].format(row['sellingStatus']),
    }))
    .with('sellingPosition', () => ({
      id: 'sellingPosition',
      label: modelConfig['sellingPosition'].label,
      value: modelConfig['sellingPosition'].format(row['sellingPosition']),
    }))
    .with('statusId', () => ({
      id: 'statusId',
      label: modelConfig['statusId'].label,
      value: modelConfig['statusId'].format(row['statusId']),
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
    .with('departmentId', () => ({
      id: 'departmentId',
      label: modelConfig['departmentId'].label,
      value: modelConfig['departmentId'].format(row['departmentId']),
    }))
    .with('solicitorId', () => ({
      id: 'solicitorId',
      label: modelConfig['solicitorId'].label,
      value: modelConfig['solicitorId'].format(row['solicitorId']),
    }))
    .with('potentialClient', () => ({
      id: 'potentialClient',
      label: modelConfig['potentialClient'].label,
      value: modelConfig['potentialClient'].format(row['potentialClient']),
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
    .with('unmappedRequirements', () => ({
      id: 'unmappedRequirements',
      label: modelConfig['unmappedRequirements'].label,
      value: modelConfig['unmappedRequirements'].format(row['unmappedRequirements']),
    }))
    .with('bedroomsMin', () => ({
      id: 'bedroomsMin',
      label: modelConfig['bedroomsMin'].label,
      value: modelConfig['bedroomsMin'].format(row['bedroomsMin']),
    }))
    .with('bedroomsMax', () => ({
      id: 'bedroomsMax',
      label: modelConfig['bedroomsMax'].label,
      value: modelConfig['bedroomsMax'].format(row['bedroomsMax']),
    }))
    .with('receptionsMin', () => ({
      id: 'receptionsMin',
      label: modelConfig['receptionsMin'].label,
      value: modelConfig['receptionsMin'].format(row['receptionsMin']),
    }))
    .with('receptionsMax', () => ({
      id: 'receptionsMax',
      label: modelConfig['receptionsMax'].label,
      value: modelConfig['receptionsMax'].format(row['receptionsMax']),
    }))
    .with('bathroomsMin', () => ({
      id: 'bathroomsMin',
      label: modelConfig['bathroomsMin'].label,
      value: modelConfig['bathroomsMin'].format(row['bathroomsMin']),
    }))
    .with('bathroomsMax', () => ({
      id: 'bathroomsMax',
      label: modelConfig['bathroomsMax'].label,
      value: modelConfig['bathroomsMax'].format(row['bathroomsMax']),
    }))
    .with('parkingSpacesMin', () => ({
      id: 'parkingSpacesMin',
      label: modelConfig['parkingSpacesMin'].label,
      value: modelConfig['parkingSpacesMin'].format(row['parkingSpacesMin']),
    }))
    .with('parkingSpacesMax', () => ({
      id: 'parkingSpacesMax',
      label: modelConfig['parkingSpacesMax'].label,
      value: modelConfig['parkingSpacesMax'].format(row['parkingSpacesMax']),
    }))
    .with('locationType', () => ({
      id: 'locationType',
      label: modelConfig['locationType'].label,
      value: modelConfig['locationType'].format(row['locationType']),
    }))
    .with('locationOptions', () => ({
      id: 'locationOptions',
      label: modelConfig['locationOptions'].label,
      value: modelConfig['locationOptions'].format(row['locationOptions']),
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
    .with('buying', () => ({
      id: 'buying',
      label: modelConfig['buying'].label,
      value: modelConfig['buying'].format(row['buying']),
    }))
    .with('renting', () => ({
      id: 'renting',
      label: modelConfig['renting'].label,
      value: modelConfig['renting'].format(row['renting']),
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
    .with('source', () => ({
      id: 'source',
      label: modelConfig['source'].label,
      value: modelConfig['source'].format(row['source']),
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
export type UseApplicantsTableArgs = {
  sortBy?: string | null | undefined
  embed?:
    | Array<
        | 'appointments'
        | 'areas'
        | 'department'
        | 'documents'
        | 'negotiators'
        | 'offers'
        | 'offices'
        | 'solicitor'
        | 'source'
      >
    | null
    | undefined
  id?: Array<string> | null | undefined
  age?: Array<'period' | 'new' | 'modern' | 'old'> | null | undefined
  contactDetail?: Array<string> | null | undefined
  emailAddresses?: Array<string> | null | undefined
  furnishing?: Array<'furnished' | 'unfurnished' | 'partFurnished'> | null | undefined
  locality?: Array<'rural' | 'village' | 'townCity'> | null | undefined
  negotiatorId?: Array<string> | null | undefined
  officeId?: Array<string> | null | undefined
  parking?:
    | Array<
        'residents' | 'offStreet' | 'secure' | 'underground' | 'garage' | 'doubleGarage' | 'tripleGarage' | 'carport'
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
  departmentId?: string | null | undefined
  marketingMode?: Array<'buying' | 'renting'> | null | undefined
  name?: string | null | undefined
  nameType?: Array<'surname' | 'initials' | 'full' | 'companyName'> | null | undefined
  priceFrom?: number | null | undefined
  priceTo?: number | null | undefined
  rentFrom?: number | null | undefined
  rentTo?: number | null | undefined
  rentFrequency?: Array<'weekly' | 'monthly' | 'annually'> | null | undefined
  bedroomsFrom?: number | null | undefined
  bedroomsTo?: number | null | undefined
  active?: boolean | null | undefined
  fromArchive?: boolean | null | undefined
  createdFrom?: string | null | undefined
  createdTo?: string | null | undefined
  modifiedFrom?: string | null | undefined
  modifiedTo?: string | null | undefined
  hasLastCall?: boolean | null | undefined
  lastCallFrom?: string | null | undefined
  lastCallTo?: string | null | undefined
  nextCallFrom?: string | null | undefined
  nextCallTo?: string | null | undefined
  hasNextCall?: boolean | null | undefined
  metadata?: Array<string> | null | undefined
  locationOptions?: string | null | undefined
  fieldNames: (keyof ApplicantModel)[]
}
export const useApplicantsTable = (args: UseApplicantsTableArgs) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  })

  const dataQuery = useGetApiApplicants({
    ...args,
    pageNumber: pagination.pageIndex + 1,
    pageSize: pagination.pageSize,
  })

  const rows: RowProps[] =
    dataQuery.data?._embedded?.map((row) => ({
      cells: args.fieldNames
        .filter((c): c is keyof ApplicantModel => c in row)
        .map((fieldName) => getApplicantsTableColumn(fieldName, applicantModelConfig, row)),
    })) ?? []

  return { rows, dataQuery }
}
