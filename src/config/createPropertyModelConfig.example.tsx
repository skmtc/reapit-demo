import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreatePropertyModel } from '@/schemas/createPropertyModel.generated.tsx'

export const createPropertyModelConfig: ModelConfig<CreatePropertyModel> = {
  lastCall: {
    key: 'lastCall',
    label: 'lastCall',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  nextCall: {
    key: 'nextCall',
    label: 'nextCall',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  marketingMode: {
    key: 'marketingMode',
    label: 'marketingMode',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  departmentId: {
    key: 'departmentId',
    label: 'departmentId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  strapline: {
    key: 'strapline',
    label: 'strapline',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  summary: {
    key: 'summary',
    label: 'summary',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  alternateId: {
    key: 'alternateId',
    label: 'alternateId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  specialFeatures: {
    key: 'specialFeatures',
    label: 'specialFeatures',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  address: {
    key: 'address',
    label: 'address',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  bedrooms: {
    key: 'bedrooms',
    label: 'bedrooms',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  bedroomsMax: {
    key: 'bedroomsMax',
    label: 'bedroomsMax',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  numberOfUnits: {
    key: 'numberOfUnits',
    label: 'numberOfUnits',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  receptions: {
    key: 'receptions',
    label: 'receptions',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  receptionsMax: {
    key: 'receptionsMax',
    label: 'receptionsMax',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  bathrooms: {
    key: 'bathrooms',
    label: 'bathrooms',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  bathroomsMax: {
    key: 'bathroomsMax',
    label: 'bathroomsMax',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  parkingSpaces: {
    key: 'parkingSpaces',
    label: 'parkingSpaces',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  councilTax: {
    key: 'councilTax',
    label: 'councilTax',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  internetAdvertising: {
    key: 'internetAdvertising',
    label: 'internetAdvertising',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  viewingArrangements: {
    key: 'viewingArrangements',
    label: 'viewingArrangements',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  videoUrl: {
    key: 'videoUrl',
    label: 'videoUrl',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  videoCaption: {
    key: 'videoCaption',
    label: 'videoCaption',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  video2Url: {
    key: 'video2Url',
    label: 'video2Url',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  video2Caption: {
    key: 'video2Caption',
    label: 'video2Caption',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  notes: {
    key: 'notes',
    label: 'notes',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  longDescription: {
    key: 'longDescription',
    label: 'longDescription',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  floorLevel: {
    key: 'floorLevel',
    label: 'floorLevel',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  internalFloors: {
    key: 'internalFloors',
    label: 'internalFloors',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  totalFloors: {
    key: 'totalFloors',
    label: 'totalFloors',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  boardStatus: {
    key: 'boardStatus',
    label: 'boardStatus',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  boardNotes: {
    key: 'boardNotes',
    label: 'boardNotes',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  boardUpdated: {
    key: 'boardUpdated',
    label: 'boardUpdated',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  valuation: {
    key: 'valuation',
    label: 'valuation',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  epc: {
    key: 'epc',
    label: 'epc',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  externalArea: {
    key: 'externalArea',
    label: 'externalArea',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  internalArea: {
    key: 'internalArea',
    label: 'internalArea',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rural: {
    key: 'rural',
    label: 'rural',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  selling: {
    key: 'selling',
    label: 'selling',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  letting: {
    key: 'letting',
    label: 'letting',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  regional: {
    key: 'regional',
    label: 'regional',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  style: {
    key: 'style',
    label: 'style',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  situation: {
    key: 'situation',
    label: 'situation',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  parking: {
    key: 'parking',
    label: 'parking',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  age: {
    key: 'age',
    label: 'age',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  locality: {
    key: 'locality',
    label: 'locality',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rooms: {
    key: 'rooms',
    label: 'rooms',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  roomDetailsApproved: {
    key: 'roomDetailsApproved',
    label: 'roomDetailsApproved',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  officeIds: {
    key: 'officeIds',
    label: 'officeIds',
    defaultValue: [],
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  areaId: {
    key: 'areaId',
    label: 'areaId',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  url: {
    key: 'url',
    label: 'url',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  urlCaption: {
    key: 'urlCaption',
    label: 'urlCaption',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  groundRent: {
    key: 'groundRent',
    label: 'groundRent',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  groundRentComment: {
    key: 'groundRentComment',
    label: 'groundRentComment',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  groundRentReviewDate: {
    key: 'groundRentReviewDate',
    label: 'groundRentReviewDate',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  groundRentIncrease: {
    key: 'groundRentIncrease',
    label: 'groundRentIncrease',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  serviceCharge: {
    key: 'serviceCharge',
    label: 'serviceCharge',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  serviceChargeComment: {
    key: 'serviceChargeComment',
    label: 'serviceChargeComment',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    defaultValue: '',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}