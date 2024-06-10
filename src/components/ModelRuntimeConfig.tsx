import { ColumnDef } from '@tanstack/react-table'
import { type FieldValues, type FieldPath, Controller, useFormContext } from 'react-hook-form'
import { ComponentType, ReactNode } from 'react'
import { default as JoyInput } from '@mui/joy/Input'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import FormHelperText from '@mui/joy/FormHelperText'
import Box from '@mui/joy/Box'

export type ColumnsMap<Model> = {
  [Property in keyof Model]: ColumnDef<Model, Model[Property]>
}

type NotUndefined<T> = T extends undefined ? never : T

export type ValueOf<T> = T[keyof T]

export type ColumnsList<Model> = NotUndefined<ValueOf<ColumnsMap<Model>>>[]

type UiConfig<Model extends FieldValues> = {
  [Property in KeyPath<Model>]: boolean
}

export type FixedUiConfig<Model extends FieldValues> = RestoreOptional<UiConfig<Model>, Model>

export const fieldsConfig = <Model extends FieldValues>(formFields: FixedUiConfig<Model>) => {
  return Object.keys(formFields)
    .filter((fieldName): fieldName is keyof FixedUiConfig<Model> => fieldName in formFields)
    .filter((fieldName) => formFields[fieldName])
}

export type KeysOf<T> = (keyof T)[]

export type OptionalKeys<T> = keyof {
  [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P]
}

export type RequiredKeys<T> = keyof {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P]
}

export type RestoreOptional<T, KeySource> = Partial<Pick<T, OptionalKeys<KeySource>>> & Pick<T, RequiredKeys<KeySource>>

export type KeyPath<T extends FieldValues> = Extract<FieldPath<T>, keyof T>

export type ConfigValue<Model extends FieldValues, FormPath extends KeyPath<Model>> = {
  key: FormPath
  label: string
  Input: ComponentType<ContextInputProps<Model, FormPath>>
  format: (value: Model[FormPath]) => ReactNode
  width?: number
  minWidth?: number
}

export type ModelConfig<Model extends FieldValues> = {
  [Property in KeyPath<Model>]: ConfigValue<Model, Property>
}

type FieldParentProps<Model extends FieldValues, Key extends KeyPath<Model>> = {
  fieldName: Key
  fieldConfig: ModelConfig<Model>[Key]
}

export const FieldParent = <Model extends FieldValues, Key extends KeyPath<Model>>({
  fieldName,
  fieldConfig,
}: FieldParentProps<Model, Key>) => {
  const { Input } = fieldConfig
  return <Input fieldName={fieldName} fieldConfig={fieldConfig} />
}

export type ContextInputProps<Model extends FieldValues, Key extends KeyPath<Model>> = {
  fieldName: Key
  fieldConfig: ModelConfig<Model>[Key]
}

export const ContextInput = <Model extends FieldValues, Key extends KeyPath<Model>>({
  fieldName,
  fieldConfig,
}: ContextInputProps<Model, Key>) => {
  const { control } = useFormContext()

  return (
    <Controller
      key={fieldName}
      name={fieldName}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={Boolean(fieldState.error?.message)}>
          <FormLabel>{fieldConfig.label}</FormLabel>
          <JoyInput {...field} />

          {fieldState.error?.message ? <FormHelperText>{fieldState.error?.message}</FormHelperText> : null}
        </FormControl>
      )}
    />
  )
}

export const NotImplemented = () => <Box>Not implemented</Box>
