import { Drawer } from '@/components/Drawer'
import {
  ConfigValue,
  FieldController,
  KeyPath,
  ModelConfig,
  OptionalKeys,
  RequiredKeys,
  createConfig,
} from '@/components/ModelRuntimeConfig'
import { contactModelConfig } from '@/config/contactModel'
import { CreateContacts } from '@/forms/contacts'
import { ContactModel, CreateContactModel } from '@/schemas'
import DialogContent from '@mui/joy/DialogContent'
import { useNavigate } from 'react-router-dom'

const contactTableConfig: ModelConfig<ContactModel> = createConfig(contactModelConfig, contactModelConfig)

console.log('contactTableConfig', contactTableConfig)

const formFields: RequiredFormKeys<CreateContactModel>[] = [
  'surname',
  'marketingConsent',
  'officeIds',
  'negotiatorIds',
] as const

export const CreateContact = () => {
  const navigate = useNavigate()

  // TODO
  // type which contains all required and some optional form field keys
  // config picker function that takesconfig from multiple representations and returns a single config

  const formConfig = contactModelConfig as ModelConfig<CreateContactModel>

  return (
    <Drawer title="Create new contact" onClose={() => navigate('..')}>
      <DialogContent sx={{ p: '16px' }}>
        <CreateContacts>
          {(control) => {
            return formFields.map((fieldName) => (
              <FieldController
                key={fieldName}
                fieldName={fieldName}
                control={control}
                fieldConfig={formConfig[fieldName]}
              />
            ))
          }}
        </CreateContacts>
      </DialogContent>
    </Drawer>
  )
}
type ActualFormFields = (typeof formFields)[number]

type MyMappedType = {
  [K in ActualFormFields]: ConfigValue<CreateContactModel, K>
}

type A = KeyPath<CreateContactModel>

type TempForm = {
  name: string
  title?: string
  email: string | undefined
}

type RequiredFormKeys<T> = RequiredKeys<T>
type OptionalFormKeys = OptionalKeys<TempForm>

type C = RequiredMap<TempForm>
type D = Array<keyof C>

export type RequiredMap<T> = {
  [P in keyof T]: T[P] extends Required<T>[P] ? true : false
}
