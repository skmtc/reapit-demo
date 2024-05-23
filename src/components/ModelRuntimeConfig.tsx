import { ColumnDef } from '@tanstack/react-table'
import type {
  FieldValues,
  FieldPath,
  ControllerRenderProps
} from 'react-hook-form'
import { ReactNode } from 'react'
import { match } from 'ts-pattern'

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
  | {
      type: 'display'
      config: DisplayConfig<Model>
    }
  | {
      type: 'form'
      config: FormConfig<Model>
    }

export const createRuntimeConfig = <Model extends FieldValues>(
  configArg: ConfigArg<Model>,
  modelConfig: ModelConfig<Model>
): ConfigItemLookup<Model> => ({
  label: key => {
    return configArg.config?.[key]?.label ?? modelConfig?.[key]?.label
  },
  format: (key, value) => {
    return match(configArg)
      .with(
        {
          type: 'display'
        },
        ({ config }) => {
          return (
            config?.[key]?.format?.(value) ??
            modelConfig?.[key]?.format?.(value)
          )
        }
      )
      .otherwise(() => {
        throw new Error('Unexpected type')
      })
  },
  input: (key, props) => {
    return match(configArg)
      .with(
        {
          type: 'form'
        },
        ({ config }) => {
          return (
            config?.[key]?.input?.(props) ?? modelConfig?.[key]?.input?.(props)
          )
        }
      )
      .otherwise(() => {
        throw new Error('Unexpected type')
      })
  }
})

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
  input: <Key extends KeyPath<Model>>(
    key: Key,
    props: ControllerRenderProps<Model, Key>
  ) => ReactNode
}

type ConfigValue<Model extends FieldValues, FormPath extends KeyPath<Model>> = {
  key: FormPath
  label: string
  input: (props: ControllerRenderProps<Model, FormPath>) => ReactNode
  format: (value: Model[FormPath]) => ReactNode
}

export type RestoreOptional<T, KeySource> = Partial<
  Pick<T, OptionalKeys<KeySource>>
> &
  Pick<T, RequiredKeys<KeySource>>

export type BasicConfig<Model extends FieldValues> = {
  [FormPath in KeyPath<Model>]: Pick<
    ConfigValue<Model, FormPath>,
    'key' | 'label' | 'input'
  >
}

export type FormConfig<Model extends FieldValues> = RestoreOptional<
  BasicConfig<Model>,
  Model
>

type KeyPath<T extends FieldValues> = Extract<FieldPath<T>, keyof T>
