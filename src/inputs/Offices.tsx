import { ContextInputProps, KeyPath } from '@/components/ModelRuntimeConfig'
import { useGetApiOffices } from '@/services/Offices.generated'
import { Autocomplete, Chip, ChipDelete, FormControl, FormHelperText, FormLabel } from '@mui/joy'
import { Controller, ControllerRenderProps, FieldValues, RefCallBack, useFormContext } from 'react-hook-form'
import AutocompleteOption from '@mui/joy/AutocompleteOption'

const Input = <Model extends FieldValues, Key extends KeyPath<Model>>({
  onChange,
  inputRef,
  ...props
}: Omit<ControllerRenderProps<Model, Key>, 'ref'> & { inputRef: RefCallBack }) => {
  const officesResponse = useGetApiOffices({})

  const options = officesResponse.data?._embedded?.map(({ name, id }) => ({ label: name, id })) ?? []

  const merged = {
    ...props,
    ref: inputRef,
  }
  return (
    <Autocomplete
      {...merged}
      onChange={(_, value) => onChange(value)}
      renderOption={(props, option) => (
        <AutocompleteOption {...props} key={option.id}>
          {option.label}
        </AutocompleteOption>
      )}
      renderTags={(options, getTagProps) =>
        options.map((option, index) => {
          const { key, ...tagProps } = getTagProps({ index })
          return (
            <Chip
              key={key}
              variant="soft"
              color="neutral"
              endDecorator={<ChipDelete key={key} {...tagProps} />}
              sx={{ minWidth: 0 }}
            >
              {option.label}
            </Chip>
          )
        })
      }
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

  return (
    <Controller
      key={fieldName}
      name={fieldName}
      defaultValue={fieldConfig.defaultValue}
      control={control}
      render={({ field: { ref: inputRef, ...field }, fieldState }) => (
        <FormControl error={Boolean(fieldState.error?.message)}>
          <FormLabel>{fieldConfig.label}</FormLabel>
          <Input<Model, Key> {...field} inputRef={inputRef} />

          {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
        </FormControl>
      )}
    />
  )
}