import { StringInput } from '@/inputs/StringInput.tsx'
import { InputWrap } from '@reapit/elements'
import { Switch } from '@/inputs/Switch.tsx'
import { NumberInput } from '@/inputs/NumberInput.tsx'
import { PropertyModel } from '@/schemas/propertyModel.generated.tsx'
import { ModelConfig } from '@/components/ModelRuntimeConfig'

export const propertyModelConfig: ModelConfig<PropertyModel> = {
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    defaultValue: null,
    placeholder: '_embedded',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  id: {
    key: 'id',
    label: 'id',
    defaultValue: '',
    placeholder: 'id',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  created: {
    key: 'created',
    label: 'created',
    defaultValue: '',
    placeholder: 'created',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  modified: {
    key: 'modified',
    label: 'modified',
    defaultValue: '',
    placeholder: 'modified',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  lastCall: {
    key: 'lastCall',
    label: 'lastCall',
    defaultValue: '',
    placeholder: 'lastCall',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  nextCall: {
    key: 'nextCall',
    label: 'nextCall',
    defaultValue: '',
    placeholder: 'nextCall',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  marketingMode: {
    key: 'marketingMode',
    label: 'marketingMode',
    defaultValue: '',
    placeholder: 'marketingMode',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  currency: {
    key: 'currency',
    label: 'currency',
    defaultValue: '',
    placeholder: 'currency',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  alternateId: {
    key: 'alternateId',
    label: 'alternateId',
    defaultValue: '',
    placeholder: 'alternateId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  address: {
    key: 'address',
    label: 'address',
    defaultValue: null,
    placeholder: 'address',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  areaId: {
    key: 'areaId',
    label: 'areaId',
    defaultValue: '',
    placeholder: 'areaId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  strapline: {
    key: 'strapline',
    label: 'strapline',
    defaultValue: '',
    placeholder: 'strapline',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  description: {
    key: 'description',
    label: 'description',
    defaultValue: '',
    placeholder: 'description',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  longDescription: {
    key: 'longDescription',
    label: 'longDescription',
    defaultValue: '',
    placeholder: 'longDescription',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  localAuthorityCompanyId: {
    key: 'localAuthorityCompanyId',
    label: 'localAuthorityCompanyId',
    defaultValue: '',
    placeholder: 'localAuthorityCompanyId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  localAuthorityCompanyName: {
    key: 'localAuthorityCompanyName',
    label: 'localAuthorityCompanyName',
    defaultValue: '',
    placeholder: 'localAuthorityCompanyName',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  summary: {
    key: 'summary',
    label: 'summary',
    defaultValue: '',
    placeholder: 'summary',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  departmentId: {
    key: 'departmentId',
    label: 'departmentId',
    defaultValue: '',
    placeholder: 'departmentId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    defaultValue: '',
    placeholder: 'negotiatorId',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  bedrooms: {
    key: 'bedrooms',
    label: 'bedrooms',
    defaultValue: null,
    placeholder: 'bedrooms',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  bedroomsMax: {
    key: 'bedroomsMax',
    label: 'bedroomsMax',
    defaultValue: null,
    placeholder: 'bedroomsMax',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  receptions: {
    key: 'receptions',
    label: 'receptions',
    defaultValue: null,
    placeholder: 'receptions',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  receptionsMax: {
    key: 'receptionsMax',
    label: 'receptionsMax',
    defaultValue: null,
    placeholder: 'receptionsMax',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  bathrooms: {
    key: 'bathrooms',
    label: 'bathrooms',
    defaultValue: null,
    placeholder: 'bathrooms',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  bathroomsMax: {
    key: 'bathroomsMax',
    label: 'bathroomsMax',
    defaultValue: null,
    placeholder: 'bathroomsMax',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  numberOfUnits: {
    key: 'numberOfUnits',
    label: 'numberOfUnits',
    defaultValue: null,
    placeholder: 'numberOfUnits',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  parkingSpaces: {
    key: 'parkingSpaces',
    label: 'parkingSpaces',
    defaultValue: null,
    placeholder: 'parkingSpaces',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  councilTax: {
    key: 'councilTax',
    label: 'councilTax',
    defaultValue: '',
    placeholder: 'councilTax',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  disabledPortalIds: {
    key: 'disabledPortalIds',
    label: 'disabledPortalIds',
    defaultValue: [],
    placeholder: 'disabledPortalIds',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  internetAdvertising: {
    key: 'internetAdvertising',
    label: 'internetAdvertising',
    defaultValue: false,
    placeholder: 'internetAdvertising',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  isExternal: {
    key: 'isExternal',
    label: 'isExternal',
    defaultValue: false,
    placeholder: 'isExternal',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  viewingArrangements: {
    key: 'viewingArrangements',
    label: 'viewingArrangements',
    defaultValue: '',
    placeholder: 'viewingArrangements',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  videoUrl: {
    key: 'videoUrl',
    label: 'videoUrl',
    defaultValue: '',
    placeholder: 'videoUrl',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  videoCaption: {
    key: 'videoCaption',
    label: 'videoCaption',
    defaultValue: '',
    placeholder: 'videoCaption',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  video2Url: {
    key: 'video2Url',
    label: 'video2Url',
    defaultValue: '',
    placeholder: 'video2Url',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  video2Caption: {
    key: 'video2Caption',
    label: 'video2Caption',
    defaultValue: '',
    placeholder: 'video2Caption',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  notes: {
    key: 'notes',
    label: 'notes',
    defaultValue: '',
    placeholder: 'notes',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  boardStatus: {
    key: 'boardStatus',
    label: 'boardStatus',
    defaultValue: '',
    placeholder: 'boardStatus',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  boardNotes: {
    key: 'boardNotes',
    label: 'boardNotes',
    defaultValue: '',
    placeholder: 'boardNotes',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  featuredImageUrl: {
    key: 'featuredImageUrl',
    label: 'featuredImageUrl',
    defaultValue: '',
    placeholder: 'featuredImageUrl',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  url: {
    key: 'url',
    label: 'url',
    defaultValue: '',
    placeholder: 'url',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  urlCaption: {
    key: 'urlCaption',
    label: 'urlCaption',
    defaultValue: '',
    placeholder: 'urlCaption',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  groundRent: {
    key: 'groundRent',
    label: 'groundRent',
    defaultValue: null,
    placeholder: 'groundRent',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <NumberInput {...props} />
      </InputWrap>
    ),
  },
  groundRentComment: {
    key: 'groundRentComment',
    label: 'groundRentComment',
    defaultValue: '',
    placeholder: 'groundRentComment',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  groundRentReviewDate: {
    key: 'groundRentReviewDate',
    label: 'groundRentReviewDate',
    defaultValue: '',
    placeholder: 'groundRentReviewDate',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  groundRentIncrease: {
    key: 'groundRentIncrease',
    label: 'groundRentIncrease',
    defaultValue: null,
    placeholder: 'groundRentIncrease',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <NumberInput {...props} />
      </InputWrap>
    ),
  },
  serviceCharge: {
    key: 'serviceCharge',
    label: 'serviceCharge',
    defaultValue: null,
    placeholder: 'serviceCharge',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <NumberInput {...props} />
      </InputWrap>
    ),
  },
  serviceChargeComment: {
    key: 'serviceChargeComment',
    label: 'serviceChargeComment',
    defaultValue: '',
    placeholder: 'serviceChargeComment',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  floorLevel: {
    key: 'floorLevel',
    label: 'floorLevel',
    defaultValue: null,
    placeholder: 'floorLevel',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  internalFloors: {
    key: 'internalFloors',
    label: 'internalFloors',
    defaultValue: null,
    placeholder: 'internalFloors',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  totalFloors: {
    key: 'totalFloors',
    label: 'totalFloors',
    defaultValue: null,
    placeholder: 'totalFloors',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  boardUpdated: {
    key: 'boardUpdated',
    label: 'boardUpdated',
    defaultValue: '',
    placeholder: 'boardUpdated',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  valuation: {
    key: 'valuation',
    label: 'valuation',
    defaultValue: '',
    placeholder: 'valuation',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  archivedOn: {
    key: 'archivedOn',
    label: 'archivedOn',
    defaultValue: '',
    placeholder: 'archivedOn',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  fromArchive: {
    key: 'fromArchive',
    label: 'fromArchive',
    defaultValue: false,
    placeholder: 'fromArchive',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  rural: {
    key: 'rural',
    label: 'rural',
    defaultValue: null,
    placeholder: 'rural',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  externalArea: {
    key: 'externalArea',
    label: 'externalArea',
    defaultValue: null,
    placeholder: 'externalArea',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  internalArea: {
    key: 'internalArea',
    label: 'internalArea',
    defaultValue: null,
    placeholder: 'internalArea',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  epc: {
    key: 'epc',
    label: 'epc',
    defaultValue: null,
    placeholder: 'epc',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  selling: {
    key: 'selling',
    label: 'selling',
    defaultValue: null,
    placeholder: 'selling',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  letting: {
    key: 'letting',
    label: 'letting',
    defaultValue: null,
    placeholder: 'letting',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  commercial: {
    key: 'commercial',
    label: 'commercial',
    defaultValue: null,
    placeholder: 'commercial',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  regional: {
    key: 'regional',
    label: 'regional',
    defaultValue: null,
    placeholder: 'regional',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  type: {
    key: 'type',
    label: 'type',
    defaultValue: [],
    placeholder: 'type',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  style: {
    key: 'style',
    label: 'style',
    defaultValue: [],
    placeholder: 'style',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  situation: {
    key: 'situation',
    label: 'situation',
    defaultValue: [],
    placeholder: 'situation',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  parking: {
    key: 'parking',
    label: 'parking',
    defaultValue: [],
    placeholder: 'parking',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  age: {
    key: 'age',
    label: 'age',
    defaultValue: [],
    placeholder: 'age',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  locality: {
    key: 'locality',
    label: 'locality',
    defaultValue: [],
    placeholder: 'locality',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  specialFeatures: {
    key: 'specialFeatures',
    label: 'specialFeatures',
    defaultValue: [],
    placeholder: 'specialFeatures',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  unmappedAttributes: {
    key: 'unmappedAttributes',
    label: 'unmappedAttributes',
    defaultValue: [],
    placeholder: 'unmappedAttributes',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  availableServicesIds: {
    key: 'availableServicesIds',
    label: 'availableServicesIds',
    defaultValue: [],
    placeholder: 'availableServicesIds',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  rooms: {
    key: 'rooms',
    label: 'rooms',
    defaultValue: [],
    placeholder: 'rooms',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  roomDetailsApproved: {
    key: 'roomDetailsApproved',
    label: 'roomDetailsApproved',
    defaultValue: false,
    placeholder: 'roomDetailsApproved',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <Switch {...props} />
      </InputWrap>
    ),
  },
  officeIds: {
    key: 'officeIds',
    label: 'officeIds',
    defaultValue: [],
    placeholder: 'officeIds',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  lostInstructionDate: {
    key: 'lostInstructionDate',
    label: 'lostInstructionDate',
    defaultValue: '',
    placeholder: 'lostInstructionDate',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  lostInstructionNote: {
    key: 'lostInstructionNote',
    label: 'lostInstructionNote',
    defaultValue: '',
    placeholder: 'lostInstructionNote',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  developmentSiteType: {
    key: 'developmentSiteType',
    label: 'developmentSiteType',
    defaultValue: '',
    placeholder: 'developmentSiteType',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    defaultValue: null,
    placeholder: 'metadata',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  keywords: {
    key: 'keywords',
    label: 'keywords',
    defaultValue: [],
    placeholder: 'keywords',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  extrasField: {
    key: 'extrasField',
    label: 'extrasField',
    defaultValue: null,
    placeholder: 'extrasField',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    defaultValue: '',
    placeholder: '_eTag',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
  _links: {
    key: '_links',
    label: '_links',
    defaultValue: null,
    placeholder: '_links',
    icon: undefined,
    format: (value) => `${value}`,
    Input: (props) => (
      <InputWrap>
        <StringInput {...props} />
      </InputWrap>
    ),
  },
}
