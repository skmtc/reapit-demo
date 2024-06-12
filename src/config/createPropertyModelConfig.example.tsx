import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { CreatePropertyModel } from '@/schemas/createPropertyModel.generated.tsx'

export const createPropertyModelConfig: ModelConfig<CreatePropertyModel> = {
  lastCall: {
    key: 'lastCall',
    label: 'lastCall',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  nextCall: {
    key: 'nextCall',
    label: 'nextCall',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  marketingMode: {
    key: 'marketingMode',
    label: 'marketingMode',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  departmentId: {
    key: 'departmentId',
    label: 'departmentId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  strapline: {
    key: 'strapline',
    label: 'strapline',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  summary: {
    key: 'summary',
    label: 'summary',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  alternateId: {
    key: 'alternateId',
    label: 'alternateId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  specialFeatures: {
    key: 'specialFeatures',
    label: 'specialFeatures',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  address: {
    key: 'address',
    label: 'address',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  bedrooms: {
    key: 'bedrooms',
    label: 'bedrooms',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  bedroomsMax: {
    key: 'bedroomsMax',
    label: 'bedroomsMax',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  numberOfUnits: {
    key: 'numberOfUnits',
    label: 'numberOfUnits',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  receptions: {
    key: 'receptions',
    label: 'receptions',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  receptionsMax: {
    key: 'receptionsMax',
    label: 'receptionsMax',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  bathrooms: {
    key: 'bathrooms',
    label: 'bathrooms',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  bathroomsMax: {
    key: 'bathroomsMax',
    label: 'bathroomsMax',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  parkingSpaces: {
    key: 'parkingSpaces',
    label: 'parkingSpaces',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  councilTax: {
    key: 'councilTax',
    label: 'councilTax',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  internetAdvertising: {
    key: 'internetAdvertising',
    label: 'internetAdvertising',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  viewingArrangements: {
    key: 'viewingArrangements',
    label: 'viewingArrangements',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  videoUrl: {
    key: 'videoUrl',
    label: 'videoUrl',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  videoCaption: {
    key: 'videoCaption',
    label: 'videoCaption',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  video2Url: {
    key: 'video2Url',
    label: 'video2Url',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  video2Caption: {
    key: 'video2Caption',
    label: 'video2Caption',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  notes: {
    key: 'notes',
    label: 'notes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  longDescription: {
    key: 'longDescription',
    label: 'longDescription',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  floorLevel: {
    key: 'floorLevel',
    label: 'floorLevel',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  internalFloors: {
    key: 'internalFloors',
    label: 'internalFloors',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  totalFloors: {
    key: 'totalFloors',
    label: 'totalFloors',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  boardStatus: {
    key: 'boardStatus',
    label: 'boardStatus',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  boardNotes: {
    key: 'boardNotes',
    label: 'boardNotes',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  boardUpdated: {
    key: 'boardUpdated',
    label: 'boardUpdated',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  valuation: {
    key: 'valuation',
    label: 'valuation',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  epc: {
    key: 'epc',
    label: 'epc',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  externalArea: {
    key: 'externalArea',
    label: 'externalArea',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  internalArea: {
    key: 'internalArea',
    label: 'internalArea',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rural: {
    key: 'rural',
    label: 'rural',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  selling: {
    key: 'selling',
    label: 'selling',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  letting: {
    key: 'letting',
    label: 'letting',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  regional: {
    key: 'regional',
    label: 'regional',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  type: {
    key: 'type',
    label: 'type',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  style: {
    key: 'style',
    label: 'style',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  situation: {
    key: 'situation',
    label: 'situation',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  parking: {
    key: 'parking',
    label: 'parking',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  age: {
    key: 'age',
    label: 'age',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  locality: {
    key: 'locality',
    label: 'locality',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  rooms: {
    key: 'rooms',
    label: 'rooms',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  roomDetailsApproved: {
    key: 'roomDetailsApproved',
    label: 'roomDetailsApproved',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  negotiatorId: {
    key: 'negotiatorId',
    label: 'negotiatorId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  officeIds: {
    key: 'officeIds',
    label: 'officeIds',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  areaId: {
    key: 'areaId',
    label: 'areaId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  url: {
    key: 'url',
    label: 'url',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  urlCaption: {
    key: 'urlCaption',
    label: 'urlCaption',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  groundRent: {
    key: 'groundRent',
    label: 'groundRent',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  groundRentComment: {
    key: 'groundRentComment',
    label: 'groundRentComment',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  groundRentReviewDate: {
    key: 'groundRentReviewDate',
    label: 'groundRentReviewDate',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  groundRentIncrease: {
    key: 'groundRentIncrease',
    label: 'groundRentIncrease',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  serviceCharge: {
    key: 'serviceCharge',
    label: 'serviceCharge',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  serviceChargeComment: {
    key: 'serviceChargeComment',
    label: 'serviceChargeComment',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  metadata: {
    key: 'metadata',
    label: 'metadata',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
