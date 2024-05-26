import { ColumnDef } from '@tanstack/react-table'
import {
  type FieldValues,
  type FieldPath,
  type ControllerRenderProps,
  Controller,
  Control
} from 'react-hook-form'
import { FC, ReactNode } from 'react'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import FormHelperText from '@mui/joy/FormHelperText'
import invariant from 'tiny-invariant'
import Box from '@mui/joy/Box'

export type ColumnsMap<Model> = {
  [Property in keyof Model]: ColumnDef<Model, Model[Property]>
}

type NotUndefined<T> = T extends undefined ? never : T

export type ValueOf<T> = T[keyof T]

export type ColumnsList<Model> = NotUndefined<ValueOf<ColumnsMap<Model>>>[]

export type ModelConfig<Model extends FieldValues> = {
  [Property in KeyPath<Model>]: ConfigValue<Model, Property>
}

export const createConfig = <Model extends FieldValues>(
  displayConfig: ModelConfig<Model>,
  modelConfig: ModelConfig<Model>
) => {
  return Object.fromEntries(
    Object.keys(displayConfig).map(k => {
      invariant(k in modelConfig, 'Unknown key')

      const key = k as KeyPath<Model>

      return [
        key as KeyPath<Model>,
        {
          key,
          label: displayConfig[key]?.label ?? modelConfig[key]?.label,
          format: displayConfig[key]?.format ?? modelConfig[key]?.format,
          Input: displayConfig[key]?.Input ?? modelConfig[key].Input
        }
      ]
    })
  ) as unknown as ModelConfig<Model>
}

export type KeysOf<T> = (keyof T)[]

type OptionalKeys<T> = keyof {
  [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P]
}

type RequiredKeys<T> = keyof {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P]
}

export type ConfigItemLookup<Model extends FieldValues> = {
  label: <Key extends KeyPath<Model>>(key: Key) => string
  format: <Key extends KeyPath<Model>>(key: Key, value: Model[Key]) => ReactNode
  Input: <Key extends KeyPath<Model>>(
    key: Key,
    props: ControllerRenderProps<Model, Key>
  ) => ReactNode
}

type ConfigValue<Model extends FieldValues, FormPath extends KeyPath<Model>> = {
  key: FormPath
  label: string
  Input: FC<ControllerRenderProps<Model, FormPath>>
  format: (value: Model[FormPath]) => ReactNode
}

export type RestoreOptional<T, KeySource> = Partial<
  Pick<T, OptionalKeys<KeySource>>
> &
  Pick<T, RequiredKeys<KeySource>>

export type KeyPath<T extends FieldValues> = Extract<FieldPath<T>, keyof T>

type FieldControllerProps<
  Model extends FieldValues,
  Key extends KeyPath<Model>
> = {
  fieldName: Key
  config: ModelConfig<Model>[Key]
  control: Control<Model, any>
}

export const FieldController = <
  Model extends FieldValues,
  Key extends KeyPath<Model>
>({
  fieldName,
  config: { label, Input },
  control
}: FieldControllerProps<Model, Key>) => (
  <Controller
    key={fieldName}
    name={fieldName}
    control={control}
    render={({ field, fieldState }) => (
      <FormControl error={Boolean(fieldState.error?.message)}>
        <FormLabel>{label}</FormLabel>
        <Input {...field} />

        {fieldState.error?.message ? (
          <FormHelperText>{fieldState.error?.message}</FormHelperText>
        ) : null}
      </FormControl>
    )}
  />
)

export const NotImplemented = () => <Box>Not implemented</Box>
