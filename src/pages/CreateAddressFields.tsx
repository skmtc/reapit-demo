import { FieldParent, ModelConfig, fieldsConfig } from '@/components/ModelRuntimeConfig'
import { officeAddressModelConfig } from '@/config/officeAddressModel'
import { CreateOfficeAddressModel } from '@/schemas'

const fieldNames = fieldsConfig<CreateOfficeAddressModel>({
  line1: true,
  line2: true,
  line3: true,
})

type CreateAddressFieldsProps = {
  fieldName?: string
}
export const CreateAddressFields = ({ fieldName: parentFieldName }: CreateAddressFieldsProps) => {
  const formConfig = officeAddressModelConfig as ModelConfig<CreateOfficeAddressModel>

  return (
    <>
      {fieldNames.map((fieldName) => {
        const inputFieldName = parentFieldName ? `${parentFieldName}.${fieldName}` : fieldName
        return <FieldParent key={fieldName} fieldName={inputFieldName} fieldConfig={formConfig[fieldName]} />
      })}
    </>
  )
}
