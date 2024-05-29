import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { OpenHouseAttendeeModel } from '@/schemas/index.ts'

export const openHouseAttendeeModelConfig: ModelConfig<OpenHouseAttendeeModel> = {
  _links: {
    key: '_links',
    label: '_links',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  openHouseId: {
    key: 'openHouseId',
    label: 'openHouseId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  notes: {
    key: 'notes',
    label: 'notes',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  interestLevel: {
    key: 'interestLevel',
    label: 'interestLevel',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  attendee: {
    key: 'attendee',
    label: 'attendee',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
}
