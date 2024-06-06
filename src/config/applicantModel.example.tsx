import { ContextInput, ModelConfig } from '@/components/ModelRuntimeConfig'
import { ApplicantModel } from 'schemas/index.ts'

export const ApplicantModel = export const applicantModelConfig: ModelConfig<ApplicantModel> = {_links: {
      key: '_links',
      label: '_links',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_embedded: {
      key: '_embedded',
      label: '_embedded',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,id: {
      key: 'id',
      label: 'id',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,created: {
      key: 'created',
      label: 'created',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,modified: {
      key: 'modified',
      label: 'modified',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,marketingMode: {
      key: 'marketingMode',
      label: 'marketingMode',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,currency: {
      key: 'currency',
      label: 'currency',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,active: {
      key: 'active',
      label: 'active',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,notes: {
      key: 'notes',
      label: 'notes',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,sellingStatus: {
      key: 'sellingStatus',
      label: 'sellingStatus',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,sellingPosition: {
      key: 'sellingPosition',
      label: 'sellingPosition',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,statusId: {
      key: 'statusId',
      label: 'statusId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,lastCall: {
      key: 'lastCall',
      label: 'lastCall',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,nextCall: {
      key: 'nextCall',
      label: 'nextCall',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,departmentId: {
      key: 'departmentId',
      label: 'departmentId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,solicitorId: {
      key: 'solicitorId',
      label: 'solicitorId',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,potentialClient: {
      key: 'potentialClient',
      label: 'potentialClient',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,type: {
      key: 'type',
      label: 'type',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,style: {
      key: 'style',
      label: 'style',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,situation: {
      key: 'situation',
      label: 'situation',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,parking: {
      key: 'parking',
      label: 'parking',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,age: {
      key: 'age',
      label: 'age',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,locality: {
      key: 'locality',
      label: 'locality',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,specialFeatures: {
      key: 'specialFeatures',
      label: 'specialFeatures',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,unmappedRequirements: {
      key: 'unmappedRequirements',
      label: 'unmappedRequirements',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,bedroomsMin: {
      key: 'bedroomsMin',
      label: 'bedroomsMin',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,bedroomsMax: {
      key: 'bedroomsMax',
      label: 'bedroomsMax',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,receptionsMin: {
      key: 'receptionsMin',
      label: 'receptionsMin',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,receptionsMax: {
      key: 'receptionsMax',
      label: 'receptionsMax',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,bathroomsMin: {
      key: 'bathroomsMin',
      label: 'bathroomsMin',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,bathroomsMax: {
      key: 'bathroomsMax',
      label: 'bathroomsMax',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,parkingSpacesMin: {
      key: 'parkingSpacesMin',
      label: 'parkingSpacesMin',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,parkingSpacesMax: {
      key: 'parkingSpacesMax',
      label: 'parkingSpacesMax',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,locationType: {
      key: 'locationType',
      label: 'locationType',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,locationOptions: {
      key: 'locationOptions',
      label: 'locationOptions',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,archivedOn: {
      key: 'archivedOn',
      label: 'archivedOn',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,fromArchive: {
      key: 'fromArchive',
      label: 'fromArchive',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,buying: {
      key: 'buying',
      label: 'buying',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,renting: {
      key: 'renting',
      label: 'renting',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,externalArea: {
      key: 'externalArea',
      label: 'externalArea',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,internalArea: {
      key: 'internalArea',
      label: 'internalArea',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,source: {
      key: 'source',
      label: 'source',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,commercial: {
      key: 'commercial',
      label: 'commercial',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,regional: {
      key: 'regional',
      label: 'regional',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,officeIds: {
      key: 'officeIds',
      label: 'officeIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,negotiatorIds: {
      key: 'negotiatorIds',
      label: 'negotiatorIds',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,related: {
      key: 'related',
      label: 'related',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,metadata: {
      key: 'metadata',
      label: 'metadata',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }
,_eTag: {
      key: '_eTag',
      label: '_eTag',
      format: (value) => `${value}`,
      Input: props => <ContextInput {...props} />
    }};