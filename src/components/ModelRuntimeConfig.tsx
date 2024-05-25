import { ColumnDef } from '@tanstack/react-table'
import {
  type FieldValues,
  type FieldPath,
  type ControllerRenderProps,
  Controller,
  Control
} from 'react-hook-form'
import { FC, ReactNode } from 'react'
import { match } from 'ts-pattern'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import FormHelperText from '@mui/joy/FormHelperText'
import invariant from 'tiny-invariant'

export type ColumnsMap<Model> = {
  [Property in keyof Model]: ColumnDef<Model, Model[Property]>
}

type NotUndefined<T> = T extends undefined ? never : T

export type ValueOf<T> = T[keyof T]

export type ColumnsList<Model> = NotUndefined<ValueOf<ColumnsMap<Model>>>[]

export type ModelConfig<Model extends FieldValues> = {
  [Property in KeyPath<Model>]: ConfigValue<Model, Property>
}

export type DisplayConfig<Model extends FieldValues> = Partial<{
  [FormPath in KeyPath<Model>]: Pick<
    ConfigValue<Model, FormPath>,
    'key' | 'label' | 'format'
  >
}>

type ConfigArg<Model extends FieldValues> =
  | DisplayConfigArg<Model>
  | FormConfigArgs<Model>

type DisplayConfigArg<Model extends FieldValues> = {
  type: 'display'
  config: DisplayConfig<Model>
}

type FormConfigArgs<Model extends FieldValues> = {
  type: 'form'
  config: Partial<FormConfig<Model>>
}

export const createRuntimeConfig = <Model extends FieldValues>(
  configArg: ConfigArg<Model>,
  modelConfig: ModelConfig<Model>
) => {
  return match(configArg as ConfigArg<Model>)
    .with({ type: 'display' }, ({ config }) => {
      const displayConfig = Object.fromEntries(
        Object.keys(config).map(k => {
          invariant(k in modelConfig, 'Unknown key')

          const key = k as KeyPath<Model>

          return [
            key as KeyPath<Model>,
            {
              key,
              label: config[key]?.label ?? modelConfig[key]?.label,
              format: config[key]?.format ?? modelConfig[key]?.format
            }
          ]
        })
      )

      return {
        type: 'display' as const,
        config: displayConfig as unknown as DisplayConfig<Model>
      }
    })
    .with({ type: 'form' }, ({ config }) => {
      const formConfig = Object.fromEntries(
        Object.keys(config).map(k => {
          invariant(k in modelConfig, 'Unknown key')

          const key = k as KeyPath<Model>

          return [
            key,
            {
              key,
              label: config[key]?.label ?? modelConfig[key].label,
              Input: config[key]?.Input ?? modelConfig[key].Input
            }
          ]
        })
      )

      return {
        type: 'form' as const,
        config: formConfig as unknown as FormConfig<Model>
      }
    })
    .exhaustive()
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
  format: (value: KeyPath<Model>) => ReactNode
}

export type RestoreOptional<T, KeySource> = Partial<
  Pick<T, OptionalKeys<KeySource>>
> &
  Pick<T, RequiredKeys<KeySource>>

export type BasicConfig<Model extends FieldValues> = {
  [FormPath in KeyPath<Model>]: Pick<
    ConfigValue<Model, FormPath>,
    'key' | 'label' | 'Input'
  >
}

export type FormConfig<Model extends FieldValues> = BasicConfig<Model>

export type KeyPath<T extends FieldValues> = Extract<FieldPath<T>, keyof T>

type FieldControllerProps<
  Model extends FieldValues,
  Key extends KeyPath<Model>
> = {
  fieldName: Key
  config: FormConfig<Model>[Key]
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
