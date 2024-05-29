import { ContextInput, ModelConfig2 } from '@/components/ModelRuntimeConfig'
import { TenancyBreakClauseModel } from '@/schemas/index.ts'

export const tenancyBreakClauseModelConfig: ModelConfig2<TenancyBreakClauseModel> = {
  _links: {
    key: '_links',
    label: '_links',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _embedded: {
    key: '_embedded',
    label: '_embedded',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  id: {
    key: 'id',
    label: 'id',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  created: {
    key: 'created',
    label: 'created',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  modified: {
    key: 'modified',
    label: 'modified',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  clauseTypeId: {
    key: 'clauseTypeId',
    label: 'clauseTypeId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  description: {
    key: 'description',
    label: 'description',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  active: {
    key: 'active',
    label: 'active',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  appliesTo: {
    key: 'appliesTo',
    label: 'appliesTo',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  letterText: {
    key: 'letterText',
    label: 'letterText',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  breakFrom: {
    key: 'breakFrom',
    label: 'breakFrom',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  noticeRequired: {
    key: 'noticeRequired',
    label: 'noticeRequired',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  agreements: {
    key: 'agreements',
    label: 'agreements',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  tenancyId: {
    key: 'tenancyId',
    label: 'tenancyId',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
  _eTag: {
    key: '_eTag',
    label: '_eTag',
    format: (value) => `${value}`,
    Input: (props) => <ContextInput {...props} />,
  },
}
