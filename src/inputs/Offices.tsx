import { ContextInputProps, KeyPath } from '@/components/ModelRuntimeConfig'
import { useGetApiOffices } from '@/services/Offices.generated.ts'
import { FieldValues, useFormContext } from 'react-hook-form'
import { InputError, InputGroup, MultiSelectInput } from '@reapit/elements'
import { useState } from 'react'

type Option = {
  name: string
  id: string
}

export const OfficesInput = <Model extends FieldValues, Key extends KeyPath<Model>>({
  fieldName,
  fieldConfig,
}: ContextInputProps<Model, Key>) => {
  const { icon, label, placeholder, defaultValue } = fieldConfig
  const [queryText, setQueryText] = useState('')

  const officesResponse = useGetApiOffices({ name: queryText })

  const { register, formState } = useFormContext<Model>()

  const { errors } = formState

  return (
    <>
      <InputGroup
        onChange={(event) => setQueryText(event.target.value)}
        icon={icon}
        placeholder={placeholder}
        label={label}
      />
      <MultiSelectInput
        id={fieldName}
        {...register(fieldName)}
        options={
          officesResponse?.data?._embedded
            ?.filter((option): option is Option => Boolean(option.id && option.name))
            ?.map(({ id, name }) => ({ value: id, name })) ?? []
        }
        defaultValues={defaultValue}
      />
      {errors.officeIds?.message && <InputError message={errors.officeIds.message as string} />}
    </>
  )
}
