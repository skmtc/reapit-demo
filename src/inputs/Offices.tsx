import { ContextInputProps, KeyPath } from '@/components/ModelRuntimeConfig'
import { useGetApiOffices } from '@/services/Offices.generated'
import { Autocomplete, FormControl, FormHelperText, FormLabel } from '@mui/joy'
import { Controller, ControllerRenderProps, FieldValues, useFormContext } from 'react-hook-form'

const Input = <Model extends FieldValues, Key extends KeyPath<Model>>({
  onChange,
  ...props
}: ControllerRenderProps<Model, Key>) => {
  const officesResponse = useGetApiOffices({})

  const options = officesResponse.data?._embedded?.map(({ name, id }) => ({ label: name, id })) ?? []

  return (
    <Autocomplete
      {...props}
      onChange={(value) => {
        console.log('value change', value)
        onChange(value)
      }}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      multiple
      options={options}
    />
  )
}

export const OfficesInput = <Model extends FieldValues, Key extends KeyPath<Model>>({
  fieldName,
  fieldConfig,
}: ContextInputProps<Model, Key>) => {
  const { control } = useFormContext()

  console.log('fieldConfig', fieldConfig)

  return (
    <Controller
      key={fieldName}
      name={fieldName}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={Boolean(fieldState.error?.message)}>
          <FormLabel>{fieldConfig.label}</FormLabel>
          <Input<Model, Key> {...field} />

          {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
        </FormControl>
      )}
    />
  )
}
