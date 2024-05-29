import { default as Input } from '@mui/joy/Input'
import { NotImplemented, ModelConfig } from '@/components/ModelRuntimeConfig'
import { TenancyBreakClauseModel } from '@/schemas/index.ts'

export const tenancyBreakClauseModelConfig: ModelConfig<TenancyBreakClauseModel> = {
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
  clauseTypeId: {
    key: 'clauseTypeId',
    label: 'clauseTypeId',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  active: {
    key: 'active',
    label: 'active',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  appliesTo: {
    key: 'appliesTo',
    label: 'appliesTo',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  letterText: {
    key: 'letterText',
    label: 'letterText',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  breakFrom: {
    key: 'breakFrom',
    label: 'breakFrom',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  noticeRequired: {
    key: 'noticeRequired',
    label: 'noticeRequired',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  agreements: {
    key: 'agreements',
    label: 'agreements',
    format: (value) => `${value}`,
    Input: (props) => <Input {...props} />,
  },
  tenancyId: {
    key: 'tenancyId',
    label: 'tenancyId',
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
