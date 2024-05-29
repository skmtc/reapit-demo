import { ContextInputProps, FieldParent, KeyPath, ModelConfig2, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { officeAddressModelConfig } from '@/config/officeAddressModel'
import { CreateOfficeAddressModel } from '@/schemas'
import { FieldValues } from 'react-hook-form'

const fieldNames = fieldsConfig<CreateOfficeAddressModel>({
  line1: true,
  line2: true,
  line3: true,
})

// These fields should less generic
// Or should the child fields wrapper be fully generic?
export const CreateAddressFields = <Model extends FieldValues, Key extends KeyPath<Model>>({
  fieldName: parentFieldName,
  fieldConfig: _fieldConfig, // _fieldConfig, // should this config be used instead?
}: ContextInputProps<Model, Key>) => {
  const formConfig = officeAddressModelConfig as ModelConfig2<CreateOfficeAddressModel>

  console.log('parentFieldName', parentFieldName)
  console.log('fieldConfig', formConfig)

  return (
    <>
      {fieldNames.map((fieldName) => (
        <FieldParent
          key={fieldName}
          fieldName={`${parentFieldName}.${fieldName}`}
          fieldConfig={formConfig[fieldName]}
        />
      ))}
    </>
  )
}
